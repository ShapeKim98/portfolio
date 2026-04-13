import { useTransform, useSpring, type MotionValue } from "motion/react";

/**
 * 스프링 기반 스무스 패럴렉스 훅
 */
export function useParallax(scrollYProgress: MotionValue<number>, distance: number) {
  const y = useTransform(scrollYProgress, [0, 1], [-distance, distance]);
  return useSpring(y, { stiffness: 120, damping: 30, restDelta: 0.001 });
}
