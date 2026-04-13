import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";

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
