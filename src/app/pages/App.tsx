import React, { Suspense } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { Navigation, SectionIndicator } from "../organisms";
import { sections, projects, footer } from "@/content/manifest";

// Smooth spring-based progress bar
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      style={{ scaleX, transformOrigin: "left" }}
      className="fixed top-0 left-0 right-0 h-[2px] bg-primary z-[60]"
    />
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen bg-background text-foreground [overflow-x:clip]">
      <ScrollProgress />
      <Navigation />
      <SectionIndicator />

      <Suspense fallback={null}>
        {sections.map(s => {
          const Comp = s.component;
          return <Comp key={s.id} />;
        })}
      </Suspense>

      {/* Projects */}
      <div id="projects">
        <Suspense fallback={null}>
          {projects.map(p => {
            const Comp = p.component;
            return <Comp key={p.id} />;
          })}
        </Suspense>
      </div>

      <Suspense fallback={null}>
        <footer.component />
      </Suspense>
    </div>
  );
}
