import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { Github, Mail, ChevronDown } from "lucide-react";
import { Badge } from "../atoms";
import { IconButton } from "../molecules";
import { ParallaxBlobLayer, ParallaxAccentLayer } from "./animation";

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const spring = { stiffness: 100, damping: 25, restDelta: 0.001 };

  // Reduced parallax
  const rawTitleY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const titleY = useSpring(rawTitleY, spring);
  const rawSubtitleY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const subtitleY = useSpring(rawSubtitleY, spring);
  const rawBgY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const bgY = useSpring(rawBgY, { stiffness: 80, damping: 22 });
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.6], [1, 0.92]);
  const blurProgress = useTransform(scrollYProgress, [0.2, 0.55], [0, 10]);
  const blurFilter = useTransform(blurProgress, (v) => `blur(${v}px)`);

  // Foreground accent layer
  const rawAccentY = useTransform(scrollYProgress, [0, 1], [0, -220]);
  const accentY = useSpring(rawAccentY, { stiffness: 70, damping: 18 });
  const accentRotate = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Layer 0: Background decoration - slowest */}
      <ParallaxBlobLayer bgY={bgY} bgScale={bgScale}>
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] rounded-full bg-accent/30 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/3 blur-3xl" />
      </ParallaxBlobLayer>

      {/* Layer 3: Foreground accent - fastest */}
      <ParallaxAccentLayer accentY={accentY}>
        <motion.div
          style={{ rotate: accentRotate }}
          className="absolute top-[15%] left-[10%] w-4 h-4 rounded-full border-2 border-primary/15"
        />
        <div className="absolute top-[30%] right-[8%] w-24 h-px bg-primary/10" />
        <motion.div
          style={{ rotate: accentRotate }}
          className="absolute bottom-[30%] left-[15%] w-2 h-2 rounded-full bg-primary/20"
        />
        <div className="absolute bottom-[20%] right-[12%] text-2xl text-primary/10 select-none">+</div>
      </ParallaxAccentLayer>

      {/* Main content */}
      <motion.div
        style={{
          opacity,
          scale,
          filter: blurFilter,
        }}
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
      >
        <motion.div style={{ y: titleY }} className="mb-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <Badge size="sm" className="tracking-wide">iOS Developer</Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-8xl md:text-9xl font-extrabold tracking-tightest leading-none text-foreground mb-6"
          >
            김도형
          </motion.h1>
        </motion.div>

        <motion.div style={{ y: subtitleY }}>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-3xl font-normal text-muted-foreground leading-loose tracking-snug max-w-2xl mx-auto mb-12"
          >
            더 나은 방향을 향해 한 걸음씩 나아가는
            <br />
            iOS 개발자입니다.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex items-center justify-center gap-4"
          >
            <IconButton href="https://github.com/ShapeKim98" variant="primary" size="md" icon={<Github size={16} />} target="_blank" rel="noopener noreferrer">GitHub</IconButton>
            <IconButton href="mailto:shapekim98@gmail.com" variant="secondary" size="md" icon={<Mail size={16} />}>Contact</IconButton>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="text-xs font-normal tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
