import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, type MotionValue } from "motion/react";

/* ─────────────────────────────────────────────────────────────
 * Motion tokens — use these everywhere instead of inline configs
 * ──────────────────────────────────────────────────────────── */
export const SPRING_SNAP = { stiffness: 200, damping: 30, restDelta: 0.001 };
export const SPRING_SMOOTH = { stiffness: 120, damping: 30, restDelta: 0.001 };
export const SPRING_SOFT = { stiffness: 80, damping: 22, restDelta: 0.001 };

/**
 * 스프링 기반 스무스 패럴렉스 훅
 */
function useParallax(scrollYProgress: MotionValue<number>, distance: number) {
  const y = useTransform(scrollYProgress, [0, 1], [-distance, distance]);
  return useSpring(y, SPRING_SMOOTH);
}

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  speed?: number;
  fadeIn?: boolean;
}

export function ParallaxSection({
  children,
  className = "",
  id,
  speed = 0.15,
  fadeIn = true,
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useParallax(scrollYProgress, 24 * speed);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} id={id} className={`relative ${className}`}>
      <motion.div style={fadeIn ? { y, opacity } : { y }}>
        {children}
      </motion.div>
    </section>
  );
}

/**
 * ScrollSection: 스크롤 연동 부드러운 진입 (진입 거리 축소)
 */
export function ScrollSection({
  children,
  className = "",
  speed = 1,
}: {
  children: React.ReactNode;
  className?: string;
  speed?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 95%", "start 15%"],
  });

  const rawY = useTransform(scrollYProgress, [0, 1], [24 * speed, 0]);
  const y = useSpring(rawY, SPRING_SMOOTH);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  return (
    <motion.div ref={ref} style={{ y, opacity }} className={className}>
      {children}
    </motion.div>
  );
}

/**
 * FadeInView: 간결한 진입 fade-up (장식적 패럴럭스 없음)
 */
type FadeInViewProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  speed?: number;
};

export function FadeInView({
  children,
  className = "",
  delay = 0,
  direction = "up",
  speed = 1,
  ...rest
}: FadeInViewProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 98%", "start 20%"],
  });

  const startPoint = Math.min(delay * 0.15, 0.3);

  const rawY = useTransform(
    scrollYProgress,
    [startPoint, 0.7 + startPoint * 0.3],
    [24 * speed, 0]
  );
  const rawX = useTransform(
    scrollYProgress,
    [startPoint, 0.7 + startPoint * 0.3],
    direction === "left" ? [-20, 0] : direction === "right" ? [20, 0] : [0, 0]
  );

  const y = useSpring(rawY, SPRING_SOFT);
  const x = useSpring(rawX, SPRING_SOFT);
  const opacity = useTransform(
    scrollYProgress,
    [startPoint, 0.35 + startPoint * 0.3],
    [0, 1]
  );

  return (
    <motion.div
      ref={ref}
      style={{
        y: direction === "up" || direction === "none" ? y : 0,
        x: direction === "left" || direction === "right" ? x : 0,
        opacity,
      }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/**
 * DeepParallax (kept for compat, reduced intensity)
 */
export function DeepParallax({
  children,
  className = "",
  speed = 1,
  fade = false,
}: {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  fade?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useParallax(scrollYProgress, 30 * speed);
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={ref}
      style={fade ? { y, opacity } : { y }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export { useParallax };
