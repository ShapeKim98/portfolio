import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";

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
