import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X, Download, Github, Mail } from "lucide-react";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "background", label: "Background" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

/* Shared theme + active section hooks ─────────────────────────── */

function useTheme() {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (
      saved === "dark" ||
      (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);
  const toggle = () => {
    setIsDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  };
  return { isDark, toggle };
}

function useActiveSection() {
  const [activeId, setActiveId] = useState<string>(NAV_ITEMS[0].id);

  useEffect(() => {
    let lastY = -1;
    const compute = () => {
      const y = window.scrollY;
      if (y === lastY) return;
      lastY = y;
      const anchor = y + window.innerHeight * 0.35;
      let next = NAV_ITEMS[0].id;
      for (const s of NAV_ITEMS) {
        const el = document.getElementById(s.id);
        if (!el) continue;
        if (el.offsetTop <= anchor) next = s.id;
      }
      setActiveId((prev) => (prev === next ? prev : next));
    };
    compute();
    const onScroll = () => compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return activeId;
}

function goTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

/* Navigation ──────────────────────────────────────────────────── */

export function Navigation() {
  const { isDark, toggle } = useTheme();
  const active = useActiveSection();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Desktop: Side Index (≥1024px) */}
      <SideIndex
        active={active}
        isDark={isDark}
        onToggleTheme={toggle}
      />

      {/* Mobile & Tablet: Top Bar (<1024px) */}
      <TopBar
        isDark={isDark}
        onToggleTheme={toggle}
        mobileOpen={mobileOpen}
        onToggleMobile={() => setMobileOpen((o) => !o)}
        onNavigate={(id) => {
          setMobileOpen(false);
          goTo(id);
        }}
      />
    </>
  );
}

/* ─────────────────────────────────────────────────────────────
 * SideIndex (desktop)
 * ──────────────────────────────────────────────────────────── */

function SideIndex({
  active,
  isDark,
  onToggleTheme,
}: {
  active: string;
  isDark: boolean;
  onToggleTheme: () => void;
}) {
  return (
    <aside
      aria-label="Section navigator"
      className="fixed left-0 top-0 z-40 hidden lg:flex flex-col justify-between border-r border-border bg-background/95 backdrop-blur-sm"
      style={{
        width: "clamp(200px, 16vw, 240px)",
        height: "100vh",
        padding: "40px 28px",
      }}
      data-print-hide
    >
      {/* Top: name + role */}
      <div className="flex flex-col gap-1">
        <button
          onClick={() => goTo("hero")}
          className="text-left text-base font-medium text-foreground hover:opacity-70 transition-opacity"
        >
          김도형
        </button>
        <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground">
          iOS Developer
        </span>
      </div>

      {/* Middle: numbered index */}
      <nav className="flex flex-col gap-3">
        {NAV_ITEMS.map((item, i) => {
          const isActive = active === item.id;
          return (
            <button
              key={item.id}
              onClick={() => goTo(item.id)}
              className={`group flex items-baseline gap-3 text-left transition-colors ${
                isActive
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              aria-current={isActive ? "true" : undefined}
            >
              <span className="text-xs font-medium tracking-widest tabular-nums w-6">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-sm font-normal">{item.label}</span>
              {isActive && (
                <span
                  className="ml-auto block w-5 h-px bg-primary"
                  aria-hidden="true"
                />
              )}
            </button>
          );
        })}
      </nav>

      {/* Bottom: actions */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/ShapeKim98"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2 rounded-[10px] text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github size={16} />
          </a>
          <a
            href="mailto:shapekim98@gmail.com"
            aria-label="Email"
            className="p-2 rounded-[10px] text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail size={16} />
          </a>
          <a
            href={`${import.meta.env.BASE_URL}portfolio.pdf`}
            download="김도형_iOS_포트폴리오.pdf"
            aria-label="Download portfolio PDF"
            className="p-2 rounded-[10px] text-muted-foreground hover:text-foreground transition-colors"
          >
            <Download size={16} />
          </a>
          <button
            onClick={onToggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-[10px] text-muted-foreground hover:text-foreground transition-colors ml-auto"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
        <span className="text-[10px] tracking-widest uppercase text-muted-foreground">
          © 2025
        </span>
      </div>
    </aside>
  );
}

/* ─────────────────────────────────────────────────────────────
 * TopBar (mobile + tablet)
 * ──────────────────────────────────────────────────────────── */

function TopBar({
  isDark,
  onToggleTheme,
  mobileOpen,
  onToggleMobile,
  onNavigate,
}: {
  isDark: boolean;
  onToggleTheme: () => void;
  mobileOpen: boolean;
  onToggleMobile: () => void;
  onNavigate: (id: string) => void;
}) {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 lg:hidden bg-background/90 backdrop-blur-sm border-b border-border"
      data-print-hide
    >
      <div className="px-6 h-14 flex items-center justify-between">
        <button
          onClick={() => onNavigate("hero")}
          className="text-sm font-medium text-foreground"
        >
          김도형
        </button>

        <div className="flex items-center gap-1">
          <a
            href={`${import.meta.env.BASE_URL}portfolio.pdf`}
            download="김도형_iOS_포트폴리오.pdf"
            aria-label="Download portfolio PDF"
            className="p-2 rounded-[10px] text-muted-foreground hover:text-foreground transition-colors"
          >
            <Download size={16} />
          </a>
          <button
            onClick={onToggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-[10px] text-muted-foreground hover:text-foreground transition-colors"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={onToggleMobile}
            aria-label="Menu"
            className="p-2 rounded-[10px] text-muted-foreground hover:text-foreground transition-colors"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-background">
          <ul className="px-6 py-4 flex flex-col gap-1">
            {NAV_ITEMS.map((item, i) => (
              <li key={item.id}>
                <button
                  onClick={() => onNavigate(item.id)}
                  className="w-full text-left flex items-baseline gap-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span className="text-xs tracking-widest tabular-nums w-6">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
