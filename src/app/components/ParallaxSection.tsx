import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
  type MotionValue,
} from "motion/react";

/**
 * Editorial 모션 프리셋 훅 — Design Spec v2
 * - prefers-reduced-motion 시 거리·시간 축소
 * - 스프링/ease 통일
 */
export function useEditorialMotion() {
  const shouldReduce = useReducedMotion() ?? false;
  const easeEditorial: [number, number, number, number] = [0.23, 1, 0.32, 1];
  return {
    shouldReduce,
    fadeInTransition: shouldReduce
      ? { duration: 0.2, ease: "linear" as const }
      : { duration: 0.45, ease: easeEditorial },
    fadeDistance: shouldReduce ? 0 : 24,
    scrollSpring: { stiffness: 140, damping: 28, restDelta: 0.001 } as const,
    parallaxSpring: { stiffness: 80, damping: 22, restDelta: 0.001 } as const,
    easeEditorial,
  };
}

/**
 * 스프링 기반 스무스 패럴렉스 훅
 */
function useParallax(scrollYProgress: MotionValue<number>, distance: number) {
  const shouldReduce = useReducedMotion() ?? false;
  const effective = shouldReduce ? 0 : distance;
  const y = useTransform(scrollYProgress, [0, 1], [-effective, effective]);
  return useSpring(y, { stiffness: 140, damping: 28, restDelta: 0.001 });
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
  const shouldReduce = useReducedMotion() ?? false;
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 95%", "start 15%"],
  });

  const distance = shouldReduce ? 0 : 24 * speed;
  const rawY = useTransform(scrollYProgress, [0, 1], [distance, 0]);
  const y = useSpring(rawY, { stiffness: 140, damping: 28, restDelta: 0.001 });
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  return (
    <motion.div ref={ref} style={{ y, opacity }} className={className}>
      {children}
    </motion.div>
  );
}

/**
 * FadeInView: 스프링 기반 진입 애니메이션 (Editorial 튜닝)
 * - y 거리 24px (축소)
 * - stiffness 140 / damping 28
 * - prefers-reduced-motion 대응
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
  const shouldReduce = useReducedMotion() ?? false;
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 98%", "start 20%"],
  });

  const startPoint = Math.min(delay * 0.15, 0.3);
  const distance = shouldReduce ? 0 : 24 * speed;

  const rawY = useTransform(
    scrollYProgress,
    [startPoint, 0.7 + startPoint * 0.3],
    [distance, 0]
  );
  const rawX = useTransform(
    scrollYProgress,
    [startPoint, 0.7 + startPoint * 0.3],
    direction === "left"
      ? [shouldReduce ? 0 : -distance, 0]
      : direction === "right"
        ? [shouldReduce ? 0 : distance, 0]
        : [0, 0]
  );

  const y = useSpring(rawY, { stiffness: 140, damping: 28, restDelta: 0.001 });
  const x = useSpring(rawX, { stiffness: 140, damping: 28, restDelta: 0.001 });
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
 * DeepParallax: 지속적 패럴렉스 (배경 레이어 — 의도적으로 느린 스프링)
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
  const shouldReduce = useReducedMotion() ?? false;
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const distance = shouldReduce ? 0 : 70 * speed;
  const rawY = useTransform(scrollYProgress, [0, 1], [-distance, distance]);
  // 배경 레이어는 의도적으로 느린 스프링 (Editorial 깊이감)
  const y = useSpring(rawY, { stiffness: 80, damping: 22, restDelta: 0.001 });
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
