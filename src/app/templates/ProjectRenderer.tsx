import { useRef, useMemo } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { ScrollSection } from "../organisms/animation";
import { ProjectHeader } from "../organisms/ProjectHeader";
import type { RootNode } from "@/dsl/ast/nodes";
import { DSLRenderer } from "@/app/pages/DSLRenderer";
import { createDefaultRegistry } from "@/dsl/registry";


/**
 * ProjectDivider: 150vh 긴 컨테이너 안에서 내부 요소를 sticky로 화면에 고정해,
 * 스크롤 진행도에 따라 번호 → 타이틀 → 수평선 확장이 단계적으로 펼쳐지는
 * 시차 스크롤링(패럴렉스) 인트로. 선이 완전히 펼쳐진 뒤 자연스럽게 본문으로 이어진다.
 */
function ProjectDivider({
  number,
  title,
  id,
}: {
  number: string;
  title: string;
  id: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const numberOpacity = useTransform(scrollYProgress, [0.05, 0.25], [0, 1]);
  const numberY = useTransform(scrollYProgress, [0.05, 0.25], [20, 0]);
  const titleOpacity = useTransform(scrollYProgress, [0.12, 0.32], [0, 1]);
  const titleY = useTransform(scrollYProgress, [0.12, 0.32], [20, 0]);

  const rawScaleX = useTransform(scrollYProgress, [0.3, 0.75], [0, 1]);
  const scaleX = useSpring(rawScaleX, { stiffness: 120, damping: 30 });

  return (
    <div id={id} ref={containerRef} className="relative h-[150vh]">
      <div className="sticky top-0 h-screen flex items-center">
        <div className="max-w-5xl mx-auto w-full px-6">
          <div className="flex items-end gap-4 mb-6">
            <motion.span
              style={{ opacity: numberOpacity, y: numberY }}
              className="text-[64px] md:text-[120px] font-black text-primary/10 leading-none"
            >
              {number}
            </motion.span>
            <motion.h3
              style={{ opacity: titleOpacity, y: titleY }}
              className="text-[28px] md:text-[40px] font-extrabold tracking-tighter text-foreground pb-3"
            >
              {title}
            </motion.h3>
          </div>
          <motion.div
            style={{ scaleX, transformOrigin: "left" }}
            className="h-[2px] bg-gradient-to-r from-primary via-primary/60 to-primary/0"
          />
        </div>
      </div>
    </div>
  );
}

function ProjectSectionWrapper({
  children,
  bg = false,
}: {
  children: React.ReactNode;
  bg?: boolean;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const rawBgY = useTransform(scrollYProgress, [0, 1], [15, -15]);
  const bgY = useSpring(rawBgY, { stiffness: 120, damping: 30 });

  return (
    <section
      ref={sectionRef}
      className={`relative py-16 md:py-24 px-6 overflow-hidden ${bg ? "bg-muted/20" : ""}`}
    >
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-[15%] -right-[80px] w-[300px] h-[300px] rounded-full bg-primary/3 blur-3xl" />
        <div className="absolute bottom-[20%] -left-[60px] w-[250px] h-[250px] rounded-full bg-primary/2 blur-3xl" />
      </motion.div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <ScrollSection>
          {children}
        </ScrollSection>
      </div>
    </section>
  );
}

interface ProjectFrontmatter {
  title: string;
  subtitle: string;
  index: string;
  type: "library" | "project";
  period: string;
  team: string;
  role: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  appStoreUrl?: string;
  screenshotLabel: string;
  screenshotSrc?: string;
  hideScreenshot?: boolean;
  bg?: boolean;
}

export type { ProjectFrontmatter };

export function DSLProjectPage({ frontmatter, ast }: { frontmatter: ProjectFrontmatter & { screenshot?: string }; ast: RootNode }) {
  const registry = useMemo(() => createDefaultRegistry(), []);
  const resolved = useMemo(() => ({
    ...frontmatter,
    screenshotSrc: frontmatter.screenshot ?? frontmatter.screenshotSrc,
  }), [frontmatter]);
  return (
    <ProjectRenderer frontmatter={resolved}>
      <DSLRenderer node={ast} registry={registry} />
    </ProjectRenderer>
  );
}

export function ProjectRenderer({
  frontmatter,
  children,
}: {
  frontmatter: ProjectFrontmatter;
  children: React.ReactNode;
}) {
  const number = frontmatter.index.padStart(2, "0");
  const divId = `project-${number}`;

  return (
    <>
      <ProjectDivider id={divId} number={number} title={frontmatter.title} />
      <ProjectSectionWrapper bg={frontmatter.bg}>
        <ProjectHeader
          index={number}
          type={frontmatter.type}
          title={frontmatter.title}
          subtitle={frontmatter.subtitle}
          period={frontmatter.period}
          team={frontmatter.team}
          role={frontmatter.role}
          description={frontmatter.description}
          techStack={frontmatter.techStack}
          githubUrl={frontmatter.githubUrl}
          appStoreUrl={frontmatter.appStoreUrl}
          screenshotLabel={frontmatter.screenshotLabel}
          screenshotSrc={frontmatter.screenshotSrc}
          hideScreenshot={frontmatter.hideScreenshot}
        />
        {children}
      </ProjectSectionWrapper>
    </>
  );
}
