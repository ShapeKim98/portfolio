import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useParallax } from "./useParallax";

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
