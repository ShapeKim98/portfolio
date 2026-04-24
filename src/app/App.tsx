import { motion, useScroll, useSpring } from "motion/react";
import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ProfileSection } from "./components/ProfileSection";
import { ProjectRxCompose } from "./components/ProjectRxCompose";
import { ProjectFiltee } from "./components/ProjectFiltee";
import { ProjectPokit } from "./components/ProjectPokit";
import { ProjectInterest } from "./components/ProjectInterest";
import { ExperienceSection } from "./components/ExperienceSection";
import { FooterSection } from "./components/FooterSection";
import { SPRING_SMOOTH } from "./components/ParallaxSection";

/**
 * Smooth spring-based top progress bar.
 * Editorial: 1px hairline, primary color, fixed to the top.
 */
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, SPRING_SMOOTH);

  return (
    <motion.div
      style={{ scaleX, transformOrigin: "left" }}
      className="fixed top-0 left-0 right-0 h-px bg-primary z-[60]"
      data-print-hide
    />
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen bg-background text-foreground [overflow-x:clip]">
      <ScrollProgress />
      <Navigation />

      {/* Main content — with left padding on desktop for SideIndex */}
      <main
        className="lg:pl-[clamp(200px,16vw,240px)] pt-14 lg:pt-0"
        id="main"
      >
        <HeroSection />
        <AboutSection />
        <ProfileSection />
        <ExperienceSection />

        {/* Projects — each section is self-contained with ProjectCover + ProjectLayout */}
        <div id="projects">
          <ProjectRxCompose />
          <ProjectFiltee />
          <ProjectPokit />
          <ProjectInterest />
        </div>

        <FooterSection />
      </main>
    </div>
  );
}
