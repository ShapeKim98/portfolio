import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, type MotionValue } from "motion/react";

/**
 * 스프링 기반 스무스 패럴렉스 훅
 */
function useParallax(scrollYProgress: MotionValue<number>, distance: number) {
  const y = useTransform(scrollYProgress, [0, 1], [-distance, distance]);
  return useSpring(y, { stiffness: 120, damping: 30, restDelta: 0.001 });
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
  speed = 0.2,
  fadeIn = true,
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useParallax(scrollYProgress, 40 * speed);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} id={id} className={`relative overflow-hidden ${className}`}>
      <motion.div style={fadeIn ? { y, opacity } : { y }}>
        {children}
      </motion.div>
    </section>
  );
}

/**
 * ScrollSection: 스크롤 연동 부드러운 진입
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

  const rawY = useTransform(scrollYProgress, [0, 1], [40 * speed, 0]);
  const y = useSpring(rawY, { stiffness: 120, damping: 28, restDelta: 0.001 });
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  return (
    <motion.div ref={ref} style={{ y, opacity }} className={className}>
      {children}
    </motion.div>
  );
}

/**
 * FadeInView: 스프링 기반 진입 애니메이션 (부드러운 강도)
 */
export function FadeInView({
  children,
  className = "",
  delay = 0,
  direction = "up",
  speed = 1,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  speed?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 98%", "start 20%"],
  });

  const startPoint = Math.min(delay * 0.15, 0.3);

  const rawY = useTransform(
    scrollYProgress,
    [startPoint, 0.7 + startPoint * 0.3],
    [50 * speed, 0]
  );
  const rawX = useTransform(
    scrollYProgress,
    [startPoint, 0.7 + startPoint * 0.3],
    direction === "left" ? [-40, 0] : direction === "right" ? [40, 0] : [0, 0]
  );

  const y = useSpring(rawY, { stiffness: 100, damping: 25, restDelta: 0.001 });
  const x = useSpring(rawX, { stiffness: 100, damping: 25, restDelta: 0.001 });
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
    >
      {children}
    </motion.div>
  );
}

/**
 * DeepParallax: 지속적 패럴렉스 (부드러운 강도)
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

  const y = useParallax(scrollYProgress, 70 * speed);
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
