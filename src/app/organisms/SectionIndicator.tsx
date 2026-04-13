import { useEffect, useState } from "react";

type SectionKind = "main" | "sub";

interface SectionItem {
  id: string;
  label: string;
  kind: SectionKind;
}

const SECTIONS: SectionItem[] = [
  { id: "about", label: "About", kind: "main" },
  { id: "profile", label: "Profile", kind: "main" },
  { id: "experience", label: "Experience", kind: "main" },
  { id: "projects", label: "Projects", kind: "main" },
  { id: "project-01", label: "01  RxCompose", kind: "sub" },
  { id: "project-02", label: "02  Filtee", kind: "sub" },
  { id: "project-03", label: "03  Pokit", kind: "sub" },
  { id: "project-04", label: "04  인터레스트", kind: "sub" },
  { id: "contact", label: "Contact", kind: "main" },
];

export function SectionIndicator() {
  const [activeId, setActiveId] = useState<string>(SECTIONS[0].id);

  useEffect(() => {
    let lastScrollY = -1;

    const compute = () => {
      const y = window.scrollY;
      if (y === lastScrollY) return;
      lastScrollY = y;

      const anchor = y + window.innerHeight * 0.35;

      let nextActive = SECTIONS[0].id;
      for (const section of SECTIONS) {
        const el = document.getElementById(section.id);
        if (!el) continue;
        if (el.offsetTop <= anchor) {
          nextActive = section.id;
        }
      }

      setActiveId((prev) => (prev === nextActive ? prev : nextActive));
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

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <aside
      aria-label="Section navigator"
      className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-3 pointer-events-none"
    >
      {SECTIONS.map((section) => {
        const isActive = section.id === activeId;
        const isSub = section.kind === "sub";

        return (
          <button
            key={section.id}
            type="button"
            onClick={() => handleClick(section.id)}
            className={`group pointer-events-auto flex items-center justify-end gap-3 ${
              isSub ? "pl-4" : ""
            }`}
            aria-label={`Go to ${section.label}`}
            aria-current={isActive ? "true" : undefined}
          >
            <span
              className={`text-right tracking-snug whitespace-nowrap transition-all duration-300 ${
                isSub ? "text-xs font-medium" : "text-sm font-semibold"
              } ${
                isActive
                  ? "opacity-100 translate-x-0 text-foreground"
                  : "opacity-0 translate-x-2 text-muted-foreground group-hover:opacity-70 group-hover:translate-x-0"
              }`}
            >
              {section.label}
            </span>

            <span
              className={`block rounded-full transition-all duration-300 ${
                isActive
                  ? `bg-primary ${isSub ? "w-5 h-[2px]" : "w-6 h-[2px]"}`
                  : `bg-muted-foreground/40 group-hover:bg-muted-foreground/70 ${
                      isSub ? "w-1 h-1" : "w-1.5 h-1.5"
                    }`
              }`}
            />
          </button>
        );
      })}
    </aside>
  );
}
