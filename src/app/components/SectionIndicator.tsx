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

/**
 * 우측 고정 세로 섹션 인디케이터.
 * scroll 이벤트에서 각 섹션의 offsetTop을 기준으로 현재 뷰포트 상단 35% 지점에
 * 가장 최근에 진입한 섹션을 계산해 active 상태로 표시한다.
 * "projects" 그룹 래퍼는 project-01~04와 같은 offsetTop을 가지므로, 하위 프로젝트가
 * 활성일 때는 parent가 선택되지 않고 하위 항목이 우선된다(섹션 순서상 후행).
 */
export function SectionIndicator() {
  const [activeId, setActiveId] = useState<string>(SECTIONS[0].id);

  useEffect(() => {
    let lastScrollY = -1;

    const compute = () => {
      const y = window.scrollY;
      if (y === lastScrollY) return;
      lastScrollY = y;

      // 뷰포트 상단 35% 지점을 기준선으로 삼는다.
      const anchor = y + window.innerHeight * 0.35;

      let nextActive = SECTIONS[0].id;
      for (const section of SECTIONS) {
        const el = document.getElementById(section.id);
        if (!el) continue;
        // el.offsetTop은 transform/sticky 영향을 받지 않는 문서 좌표이므로 안정적.
        if (el.offsetTop <= anchor) {
          nextActive = section.id;
        }
      }

      setActiveId((prev) => (prev === nextActive ? prev : nextActive));
    };

    // 최초 1회 계산
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
            {/* Label: active면 상시, 아니면 hover에서만 */}
            <span
              className={`text-right tracking-[-0.01em] whitespace-nowrap transition-all duration-300 ${
                isSub ? "text-[11px] font-[500]" : "text-[12px] font-[600]"
              } ${
                isActive
                  ? "opacity-100 translate-x-0 text-foreground"
                  : "opacity-0 translate-x-2 text-muted-foreground group-hover:opacity-70 group-hover:translate-x-0"
              }`}
            >
              {section.label}
            </span>

            {/* Dot / Bar */}
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
