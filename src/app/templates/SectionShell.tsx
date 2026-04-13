import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import {
  ParallaxBlobLayer,
  ParallaxAccentLayer,
} from "@/app/organisms/animation/ParallaxLayers";
import { SectionInner } from "@/app/templates/SectionInner";
import type { ParallaxStrategy, AccentElement } from "@/dsl/strategies/parallax";
import { cn } from "@/app/components/ui/utils";

/**
 * Template Method Pattern: SectionShell
 *
 * A generic section wrapper that renders the common parallax boilerplate
 * (background blob layer + optional accent layer) and wraps children
 * in a SectionInner container.
 *
 * Each section configures its parallax behavior via a ParallaxStrategy object
 * instead of duplicating useScroll/useTransform/useSpring logic.
 */
export function SectionShell({
  id,
  className,
  parallax,
  children,
  padding = "py-32 md:py-40 px-6",
}: {
  id?: string;
  className?: string;
  parallax: ParallaxStrategy;
  children: React.ReactNode;
  padding?: string;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: parallax.scrollOffset,
  });

  // Background layer
  const rawBgY = useTransform(
    scrollYProgress,
    [0, 1],
    parallax.bgDistance,
  );
  const bgY = useSpring(rawBgY, {
    stiffness: parallax.bgSpring.stiffness,
    damping: parallax.bgSpring.damping,
    restDelta: 0.001,
  });
  const bgScale = parallax.bgScaleRange
    ? useTransform(scrollYProgress, [0, 1], parallax.bgScaleRange)
    : useTransform(scrollYProgress, [0, 1], [1, 1]);

  // Accent layer (optional)
  const hasAccent = !!parallax.accent;
  const rawAccentY = useTransform(
    scrollYProgress,
    [0, 1],
    hasAccent ? parallax.accent!.distance : [0, 0],
  );
  const accentY = useSpring(rawAccentY, {
    stiffness: hasAccent ? parallax.accent!.spring.stiffness : 100,
    damping: hasAccent ? parallax.accent!.spring.damping : 25,
    restDelta: 0.001,
  });
  const accentRotate = useTransform(
    scrollYProgress,
    [0, 1],
    hasAccent && parallax.accent!.rotateRange
      ? parallax.accent!.rotateRange
      : [0, 0],
  );

  return (
    <section
      ref={sectionRef}
      id={id}
      className={cn("relative overflow-hidden", padding, className)}
    >
      {/* Layer 0: Background decoration */}
      <ParallaxBlobLayer bgY={bgY} bgScale={bgScale}>
        {parallax.blobs.map((blob, i) => (
          <div
            key={i}
            className={cn(
              "rounded-full",
              blob.position,
              blob.size,
              blob.color,
              blob.blur,
            )}
          />
        ))}
      </ParallaxBlobLayer>

      {/* Layer 3: Foreground accent decoration */}
      {hasAccent && parallax.accent!.elements.length > 0 && (
        <ParallaxAccentLayer accentY={accentY}>
          {parallax.accent!.elements.map((el, i) => (
            <AccentElementRenderer
              key={i}
              element={el}
              accentRotate={accentRotate}
            />
          ))}
        </ParallaxAccentLayer>
      )}

      {/* Main content */}
      <SectionInner>{children}</SectionInner>
    </section>
  );
}

/**
 * Renders a single accent decorative element based on its type.
 */
function AccentElementRenderer({
  element,
  accentRotate,
}: {
  element: AccentElement;
  accentRotate: ReturnType<typeof useTransform>;
}) {
  const baseClasses = cn(element.position, element.size, element.color);

  switch (element.type) {
    case "circle":
      return element.rotate ? (
        <motion.div
          style={{ rotate: accentRotate }}
          className={cn("rounded-full", baseClasses)}
        />
      ) : (
        <div className={cn("rounded-full", baseClasses)} />
      );

    case "dot":
      return element.rotate ? (
        <motion.div
          style={{ rotate: accentRotate }}
          className={cn("rounded-full", baseClasses)}
        />
      ) : (
        <div className={cn("rounded-full", baseClasses)} />
      );

    case "line":
      return <div className={baseClasses} />;

    case "plus":
      return (
        <div className={cn(baseClasses, "select-none leading-none")}>+</div>
      );

    default:
      return null;
  }
}
