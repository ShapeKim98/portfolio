import { useState, useEffect, useRef } from "react";
import { Moon, Sun, Menu, X, Download } from "lucide-react";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Profile", href: "#profile" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Esc로 모바일 메뉴 닫기 + 토글 버튼으로 포커스 복귀
  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  };

  // 공통 아이콘 버튼 클래스 (44px 터치 타겟, editorial transition)
  const iconBtnClass =
    "min-w-[44px] min-h-[44px] inline-flex items-center justify-center rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-[background-color,color,transform] duration-150 active:scale-[0.97]";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="w-0" aria-hidden="true" />

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-base font-normal text-muted-foreground hover:text-foreground transition-colors tracking-snug"
            >
              {item.label}
            </a>
          ))}
          <a
            href={`${import.meta.env.BASE_URL}portfolio.pdf`}
            download="김도형_iOS_포트폴리오.pdf"
            aria-label="포트폴리오 PDF 다운로드"
            className={iconBtnClass}
          >
            <Download size={18} aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? "라이트 모드로 전환" : "다크 모드로 전환"}
            className={iconBtnClass}
          >
            {isDark ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href={`${import.meta.env.BASE_URL}portfolio.pdf`}
            download="김도형_iOS_포트폴리오.pdf"
            aria-label="포트폴리오 PDF 다운로드"
            className={iconBtnClass}
          >
            <Download size={18} aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? "라이트 모드로 전환" : "다크 모드로 전환"}
            className={iconBtnClass}
          >
            {isDark ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
          </button>
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu-panel"
            className={iconBtnClass}
          >
            {mobileOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          id="mobile-menu-panel"
          className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border"
        >
          <div className="px-6 py-4 flex flex-col gap-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-md font-normal text-muted-foreground hover:text-foreground py-2 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
