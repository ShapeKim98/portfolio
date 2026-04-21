import React from "react";
import type { MotionValue } from "motion/react";
import { motion } from "motion/react";
import { cn } from "./ui/utils";
import { FadeInView } from "./ParallaxSection";

/* ─────────────────────────────────────────────────────────────
 * Editorial Grid (12-col asymmetric)
 * ──────────────────────────────────────────────────────────── */

export function EditorialGrid({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-8 lg:grid-cols-12",
        "gap-x-[clamp(16px,2vw,32px)] gap-y-6",
        className
      )}
    >
      {children}
    </div>
  );
}

/** Type A — left label column (3) + right body column (9) */
export function GridLabel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "col-span-1 md:col-span-2 lg:col-span-3 md:sticky md:top-[120px] md:self-start",
        className
      )}
    >
      {children}
    </div>
  );
}

export function GridBody({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("col-span-1 md:col-span-6 lg:col-span-9", className)}>
      {children}
    </div>
  );
}

/** Section container — replaces old SectionInner (max-w-5xl centered) */
export function SectionInner({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative z-10 mx-auto w-full",
        "max-w-[clamp(320px,100%,1280px)]",
        "px-[clamp(24px,5vw,96px)]",
        className
      )}
    >
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
 * Eyebrow label (xs uppercase tracking-widest)
 * ──────────────────────────────────────────────────────────── */

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-block text-xs font-medium tracking-widest uppercase text-muted-foreground",
        className
      )}
    >
      {children}
    </span>
  );
}

/* ─────────────────────────────────────────────────────────────
 * Section Heading — eyebrow + title (no accent bar)
 * ──────────────────────────────────────────────────────────── */

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-3", className)}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="text-2xl font-medium tracking-tight text-foreground">
        {title}
      </h2>
      {description && (
        <p className="text-base font-normal text-muted-foreground leading-normal max-w-prose">
          {description}
        </p>
      )}
    </div>
  );
}

/* Page heading — same as SectionHeading but scaled */
export function SectionPageHeading({
  children,
  eyebrow,
}: {
  children: React.ReactNode;
  eyebrow?: string;
}) {
  return (
    <FadeInView>
      <div className="mb-12 flex flex-col gap-3">
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h2 className="text-2xl font-medium tracking-tight text-foreground">
          {children}
        </h2>
      </div>
    </FadeInView>
  );
}

/* ─────────────────────────────────────────────────────────────
 * Dot / Divider
 * ──────────────────────────────────────────────────────────── */

export function DotSeparator({ className }: { className?: string }) {
  return (
    <span className={cn("w-[3px] h-[3px] rounded-full bg-muted-foreground/50 shrink-0", className)} />
  );
}

export function Divider({ className }: { className?: string }) {
  return <div className={cn("h-px bg-border", className)} />;
}

/* ─────────────────────────────────────────────────────────────
 * Figure — unified image frame (hairline + 10px radius)
 * ──────────────────────────────────────────────────────────── */

export function Figure({
  src,
  alt,
  caption,
  className,
  imageClassName,
  children,
}: {
  src?: string;
  alt?: string;
  caption?: string;
  className?: string;
  imageClassName?: string;
  children?: React.ReactNode;
}) {
  return (
    <figure className={cn("flex flex-col gap-2", className)}>
      <div className="overflow-hidden rounded-[10px] border border-border bg-muted/30">
        {src ? (
          <img
            src={src}
            alt={alt ?? ""}
            className={cn("block w-full h-auto object-contain", imageClassName)}
          />
        ) : (
          children
        )}
      </div>
      {caption && (
        <figcaption className="text-xs tracking-widest uppercase text-muted-foreground">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

/* ─────────────────────────────────────────────────────────────
 * MetaList — key-value pairs (Hero, project sidebars)
 * ──────────────────────────────────────────────────────────── */

export function MetaList({
  items,
  className,
  layout = "stacked",
}: {
  items: { label: string; value: React.ReactNode }[];
  className?: string;
  layout?: "stacked" | "grid";
}) {
  if (layout === "grid") {
    return (
      <dl className={cn("grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4", className)}>
        {items.map((item) => (
          <div key={item.label} className="flex flex-col gap-1">
            <dt className="text-xs font-medium tracking-widest uppercase text-muted-foreground">
              {item.label}
            </dt>
            <dd className="text-base font-normal text-foreground">{item.value}</dd>
          </div>
        ))}
      </dl>
    );
  }
  return (
    <dl className={cn("flex flex-col divide-y divide-border border-y border-border", className)}>
      {items.map((item) => (
        <div key={item.label} className="flex items-baseline justify-between gap-4 py-3">
          <dt className="text-xs font-medium tracking-widest uppercase text-muted-foreground shrink-0">
            {item.label}
          </dt>
          <dd className="text-sm font-normal text-foreground text-right min-w-0">
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

/* ─────────────────────────────────────────────────────────────
 * DefList — definition list (좌: 제목 / 우: 설명, vertical hairline)
 * ──────────────────────────────────────────────────────────── */

export function DefList({
  items,
  className,
}: {
  items: { term: React.ReactNode; desc: React.ReactNode }[];
  className?: string;
}) {
  return (
    <dl className={cn("flex flex-col border-t border-border", className)}>
      {items.map((item, i) => (
        <div
          key={i}
          className="grid grid-cols-1 md:grid-cols-[minmax(140px,30%)_1fr] gap-x-6 gap-y-1 py-5 border-b border-border"
        >
          <dt className="text-sm font-medium text-foreground md:pr-4">
            {item.term}
          </dt>
          <dd className="text-sm font-normal text-muted-foreground leading-normal">
            {item.desc}
          </dd>
        </div>
      ))}
    </dl>
  );
}

/* ─────────────────────────────────────────────────────────────
 * NumberedFeatureList — 장문 feature list (01~NN)
 * ──────────────────────────────────────────────────────────── */

export function NumberedFeatureList({
  items,
  className,
}: {
  items: { title: string; desc: React.ReactNode }[];
  className?: string;
}) {
  return (
    <ol className={cn("flex flex-col border-t border-border", className)}>
      {items.map((item, i) => (
        <li
          key={i}
          className="border-b border-border py-8 grid grid-cols-1 md:grid-cols-[80px_1fr] gap-x-6 gap-y-3"
        >
          <span className="text-sm font-medium tracking-widest text-muted-foreground">
            {String(i + 1).padStart(2, "0")}
          </span>
          <div className="flex flex-col gap-3">
            <h4 className="text-lg font-medium text-foreground leading-snug">
              {item.title}
            </h4>
            <div className="text-base font-normal text-muted-foreground leading-normal">
              {item.desc}
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}

/* ─────────────────────────────────────────────────────────────
 * ContentCard / FeatureCard / FeatureItem — unified
 * ──────────────────────────────────────────────────────────── */

export function ContentCard({
  children,
  className,
  padding = "md",
}: {
  children: React.ReactNode;
  className?: string;
  padding?: "sm" | "md" | "lg";
}) {
  const paddingClass = {
    sm: "p-4 md:p-5",
    md: "p-6",
    lg: "p-6 md:p-8",
  }[padding];
  return (
    <div className={cn("rounded-[10px] bg-card border border-border", paddingClass, className)}>
      {children}
    </div>
  );
}

export function FeatureCard({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("py-5 border-b border-border last:border-b-0", className)}>
      <h6 className="text-base font-medium text-foreground mb-2">{title}</h6>
      <div className="text-sm font-normal text-muted-foreground leading-normal">{children}</div>
    </div>
  );
}

export function FeatureItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 py-3 border-b border-border last:border-b-0">
      <div className="w-[3px] h-[3px] rounded-full bg-primary shrink-0" />
      <span className="text-base font-medium text-foreground">{children}</span>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
 * SubSectionTitle — scaled down
 * ──────────────────────────────────────────────────────────── */

export function SubSectionTitle({
  children,
  size = "md",
  className,
}: {
  children: React.ReactNode;
  size?: "md" | "lg" | "xl";
  className?: string;
}) {
  const sizeClass = {
    md: "text-base font-medium tracking-snug",
    lg: "text-lg font-medium tracking-tight",
    xl: "text-xl font-medium tracking-tight",
  }[size];
  return <h4 className={cn(sizeClass, "text-foreground", className)}>{children}</h4>;
}

/* ─────────────────────────────────────────────────────────────
 * VerticalFlow / NumberedStep / ColoredInfoBox — simplified monochrome
 * (kept for backward compat; color prop respected for domain diagrams)
 * ──────────────────────────────────────────────────────────── */

export function VerticalFlow({
  steps,
  maxWidth = "max-w-[260px]",
}: {
  steps: { label: string; desc?: string; sub?: string; color: string }[];
  maxWidth?: string;
}) {
  return (
    <div className="flex flex-col items-center gap-1.5">
      {steps.map((step, i, arr) => (
        <div key={i} className={cn("w-full", maxWidth)}>
          <div
            className="px-3 py-2.5 rounded-[10px] bg-card border"
            style={{ borderColor: step.color + "50" }}
          >
            <div className="flex items-start gap-2">
              <div
                className="shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-2xs font-semibold text-white mt-0.5"
                style={{ backgroundColor: step.color }}
              >
                {i + 1}
              </div>
              <div>
                <p className="text-xs font-semibold leading-snug" style={{ color: step.color }}>
                  {step.label}
                </p>
                {step.desc && (
                  <p className="text-xxs font-normal text-muted-foreground leading-normal mt-0.5">
                    {step.desc}
                  </p>
                )}
                {step.sub && (
                  <p className="text-2xs text-muted-foreground mt-0.5">{step.sub}</p>
                )}
              </div>
            </div>
          </div>
          {i < arr.length - 1 && (
            <div className="flex justify-center py-0.5">
              <svg width="10" height="12" viewBox="0 0 10 12" className="text-border">
                <path d="M5 0v8M2 6l3 4 3-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export function NumberedStep({
  index,
  children,
}: {
  index: number;
  children: React.ReactNode;
}) {
  return (
    <div className="py-4 border-b border-border last:border-b-0 flex items-start gap-3">
      <span className="shrink-0 text-xs font-medium tracking-widest text-muted-foreground mt-1 w-8 tabular-nums">
        {String(index).padStart(2, "0")}
      </span>
      <p className="text-sm font-normal text-foreground leading-normal">{children}</p>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
 * Badge — xs uppercase tracking-widest
 * ──────────────────────────────────────────────────────────── */

export function Badge({
  children,
  variant = "primary",
  size = "sm",
  className,
}: {
  children: React.ReactNode;
  variant?: "primary" | "destructive" | "success" | "muted";
  size?: "xs" | "sm";
  className?: string;
}) {
  const colorClass = {
    primary: "bg-card border border-primary/30 text-primary",
    destructive: "bg-card border border-destructive/30 text-destructive",
    success: "bg-card border border-green-500/30 text-green-600 dark:text-green-400",
    muted: "bg-card border border-border text-muted-foreground",
  }[variant];
  const sizeClass = {
    xs: "text-[10px] px-1.5 py-0.5",
    sm: "text-xs px-2 py-1",
  }[size];
  return (
    <span
      className={cn(
        "inline-block rounded-[10px] font-medium tracking-widest uppercase",
        colorClass,
        sizeClass,
        className
      )}
    >
      {children}
    </span>
  );
}

/* ─────────────────────────────────────────────────────────────
 * IconButton — single radius 10px
 * ──────────────────────────────────────────────────────────── */

export function IconButton({
  href,
  variant = "primary",
  size = "md",
  icon,
  children,
  className,
  ...rest
}: {
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className" | "children">) {
  const variantClass = {
    primary:
      "bg-foreground text-background hover:opacity-85 transition-opacity border border-foreground",
    secondary:
      "bg-transparent border border-border text-foreground hover:bg-muted/60 transition-colors",
    ghost:
      "bg-transparent border-0 text-muted-foreground hover:text-foreground transition-colors",
  }[variant];

  const sizeClass = {
    sm: "gap-2 px-3 py-1.5 rounded-[10px] text-sm",
    md: "gap-2 px-4 py-2 rounded-[10px] text-sm",
    lg: "gap-2 px-5 py-2.5 rounded-[10px] text-base",
  }[size];

  return (
    <a
      href={href}
      className={cn("inline-flex items-center font-medium", variantClass, sizeClass, className)}
      {...rest}
    >
      {icon}
      {children}
    </a>
  );
}

/* ─────────────────────────────────────────────────────────────
 * TwoColumnLayout — kept for backward compat
 * ──────────────────────────────────────────────────────────── */

export function TwoColumnLayout({
  left,
  right,
  className,
}: {
  left: React.ReactNode;
  right: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("grid md:grid-cols-2 gap-8 items-start", className)}>
      {left}
      {right}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
 * SectionGroup — scaled sub title
 * ──────────────────────────────────────────────────────────── */

export function SectionGroup({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const items = React.Children.toArray(children).filter(Boolean);
  return (
    <div className="space-y-10" data-print-section-break>
      <FadeInView>
        <SubSectionTitle size="xl">{title}</SubSectionTitle>
      </FadeInView>
      {items.map((child, i) => (
        <React.Fragment key={i}>
          {i > 0 && <Divider />}
          {child}
        </React.Fragment>
      ))}
    </div>
  );
}

/** Wrap 2+ ProblemSolvingBlock siblings with hairline dividers in between. */
export function ProblemSolvingList({ children }: { children: React.ReactNode }) {
  const items = React.Children.toArray(children).filter(Boolean);
  return (
    <div className="space-y-6">
      {items.map((child, i) => (
        <React.Fragment key={i}>
          {i > 0 && <Divider />}
          {child}
        </React.Fragment>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
 * ColoredInfoBox — preserved for complex Diagrams usage
 * ──────────────────────────────────────────────────────────── */

export function ColoredInfoBox({
  label,
  sub,
  color,
  center,
  badge: badgeText,
  className,
}: {
  label: string;
  sub?: string;
  color: string;
  center?: boolean;
  badge?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn("rounded-[10px] flex flex-col items-center justify-center", className)}
      style={{
        borderWidth: center ? 2 : 1,
        borderStyle: "solid",
        borderColor: color + (center ? "aa" : "55"),
        background: color + (center ? "14" : "0a"),
      }}
    >
      <span className="text-sm font-semibold" style={{ color }}>
        {label}
      </span>
      {sub && <span className="text-xxs font-normal text-muted-foreground mt-1">{sub}</span>}
      {badgeText && (
        <span
          className="text-2xs font-medium mt-1.5 px-1.5 py-0.5 rounded"
          style={{ color, backgroundColor: color + "14" }}
        >
          {badgeText}
        </span>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
 * Parallax Layers — kept for compat, no longer called in sections
 * ──────────────────────────────────────────────────────────── */

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
