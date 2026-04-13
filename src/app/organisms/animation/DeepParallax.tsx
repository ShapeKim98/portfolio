import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useParallax } from "./useParallax";

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
