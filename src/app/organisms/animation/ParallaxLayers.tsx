import type { MotionValue } from "motion/react";
import { motion } from "motion/react";

export function ParallaxBlobLayer({
  bgY,
  bgScale,
  children,
}: {
  bgY: MotionValue<number>;
  bgScale: MotionValue<number>;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      style={{ y: bgY, scale: bgScale }}
      className="absolute inset-0 pointer-events-none"
    >
      {children}
    </motion.div>
  );
}

export function ParallaxAccentLayer({
  accentY,
  children,
}: {
  accentY: MotionValue<number>;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      style={{ y: accentY }}
      className="absolute inset-0 pointer-events-none z-20"
    >
      {children}
    </motion.div>
  );
}
