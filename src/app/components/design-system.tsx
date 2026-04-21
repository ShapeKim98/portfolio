import type { MotionValue } from "motion/react";
import { motion } from "motion/react";
import { cn } from "./ui/utils";
import { FadeInView } from "./ParallaxSection";

/* ─── Section Inner Container ─── */

export function SectionInner({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("relative z-10 max-w-6xl mx-auto", className)}>
      {children}
    </div>
  );
}

/* ─── Section Heading (ghost number + kicker + heading) ─── */

export function SectionHeading({
  children,
  accent = "foreground",
  className,
  sectionNumber,
  kicker,
}: {
  children: React.ReactNode;
  accent?: "primary" | "foreground";
  className?: string;
  sectionNumber?: string;
  kicker?: string;
}) {
  // accent prop은 기존 호환을 위해 유지 (하위 호환). 신규 시각은 ghost number/kicker 중심.
  void accent;
  return (
    <div className={cn("relative mb-4", className)}>
      {sectionNumber && (
        <span
          aria-hidden="true"
          data-print-hide
          className="absolute -top-10 -left-2 text-[8rem] leading-none font-black tracking-tightest text-foreground/[0.04] select-none pointer-events-none hidden md:block"
        >
          {sectionNumber}
        </span>
      )}
      {kicker && (
        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground mb-2">
          {kicker}
        </p>
      )}
      <div className="relative">{children}</div>
    </div>
  );
}

/* ─── Dot Separator ─── */

export function DotSeparator({ className }: { className?: string }) {
  return (
    <span className={cn("w-1 h-1 rounded-full bg-border shrink-0", className)} />
  );
}

/* ─── Content Card ─── */

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
    sm: "p-4 md:p-6",
    md: "p-6 md:p-8",
    lg: "p-8 md:p-10",
  }[padding];

  return (
    <div
      className={cn(
        "rounded-2xl bg-muted/30 border border-border shadow-editorial transition-shadow duration-200 hover:shadow-editorial-hover",
        paddingClass,
        className
      )}
    >
      {children}
    </div>
  );
}

/* ─── Feature Item ─── */

export function FeatureItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 p-4 rounded-xl bg-muted/40 border border-border">
      <div className="w-1.5 h-1.5 rounded-full bg-foreground/60 shrink-0" />
      <span className="text-base font-medium text-foreground">{children}</span>
    </div>
  );
}

/* ─── Sub Section Title ─── */

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
    md: "text-lg font-medium tracking-snug",
    lg: "text-2xl font-semibold tracking-tight",
    xl: "text-4xl font-bold tracking-tighter",
  }[size];

  return (
    <h4 className={cn(sizeClass, "text-foreground", className)}>
      {children}
    </h4>
  );
}

/* ─── Feature Card ─── */

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
    <div className={cn("p-5 rounded-xl bg-muted/40 border border-border shadow-editorial transition-shadow duration-200 hover:shadow-editorial-hover", className)}>
      <p className="text-base font-semibold text-foreground mb-2">{title}</p>
      <div className="text-sm-md font-normal text-muted-foreground leading-loose">{children}</div>
    </div>
  );
}

/* ─── Vertical Flow ─── */

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
            className="px-3 py-2.5 rounded-lg bg-card border"
            style={{ borderColor: step.color + "50" }}
          >
            <div className="flex items-start gap-2">
              <div
                className="shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-2xs font-bold text-white mt-0.5"
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
              <svg width="10" height="12" viewBox="0 0 10 12" className="text-border" aria-hidden="true">
                <path d="M5 0v8M2 6l3 4 3-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

/* ─── Badge ─── */

export function Badge({
  children,
  variant = "primary",
  size = "sm",
  className,
}: {
  children: React.ReactNode;
  variant?: "primary" | "destructive" | "success";
  size?: "xs" | "sm";
  className?: string;
}) {
  const colorClass = {
    primary: "bg-primary/10 text-primary",
    destructive: "bg-destructive/10 text-destructive",
    success: "bg-green-500/10 text-green-600 dark:text-green-400",
  }[variant];

  const sizeClass = {
    xs: "text-xs px-2 py-0.5",
    sm: "text-sm-md px-4 py-2",
  }[size];

  return (
    <span className={cn("inline-block rounded-full font-semibold", colorClass, sizeClass, className)}>
      {children}
    </span>
  );
}

/* ─── Divider ─── */

export function Divider({ className }: { className?: string }) {
  return <div className={cn("h-px bg-border", className)} />;
}

/* ─── Icon Button / Link ─── */

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
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className" | "children">) {
  const variantClass = {
    primary: "bg-foreground hover:opacity-90 transition-[opacity,transform,background-color] duration-150 active:scale-[0.97]",
    secondary: "border border-border text-foreground hover:bg-muted transition-[background-color,border-color,transform] duration-150 active:scale-[0.97]",
  }[variant];

  const sizeClass = {
    sm: "gap-2 px-4 py-2 rounded-lg text-sm-md min-h-[44px]",
    md: "gap-2 px-5 py-2.5 rounded-full text-base min-h-[44px]",
    lg: "gap-3 px-6 py-3 rounded-xl text-base min-h-[44px]",
  }[size];

  const variantStyle = variant === "primary" ? { color: "var(--background)" } : undefined;

  return (
    <a
      href={href}
      className={cn("inline-flex items-center justify-center font-medium", variantClass, sizeClass, className)}
      style={variantStyle}
      {...rest}
    >
      {icon}
      {children}
    </a>
  );
}

/* ─── Numbered Step ─── */

export function NumberedStep({
  index,
  children,
}: {
  index: number;
  children: React.ReactNode;
}) {
  return (
    <div className="p-5 rounded-xl bg-muted/40 border border-border">
      <div className="flex items-start gap-3">
        <span className="shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-black tabular-nums flex items-center justify-center mt-0.5">
          {index}
        </span>
        <p className="text-sm-md font-normal text-foreground leading-loose">{children}</p>
      </div>
    </div>
  );
}

/* ─── Two Column Layout ─── */

export function TwoColumnLayout({
  left,
  right,
  className,
  ratio = "1:1",
}: {
  left: React.ReactNode;
  right: React.ReactNode;
  className?: string;
  ratio?: "1:1" | "3:2" | "2:3";
}) {
  const ratioClass = {
    "1:1": "md:grid-cols-2",
    "3:2": "md:grid-cols-[3fr_2fr]",
    "2:3": "md:grid-cols-[2fr_3fr]",
  }[ratio];

  return (
    <div className={cn("grid gap-8 items-start", ratioClass, className)}>
      {left}
      {right}
    </div>
  );
}

/* ─── Section Group ─── */

export function SectionGroup({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-12">
      <FadeInView>
        <SubSectionTitle size="xl" className="mb-3">
          {title}
        </SubSectionTitle>
      </FadeInView>
      {children}
    </div>
  );
}

/* ─── Colored Info Box ─── */

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
      className={cn(
        "rounded-2xl flex flex-col items-center justify-center",
        className
      )}
      style={{
        borderWidth: center ? 3 : 2,
        borderStyle: "solid",
        borderColor: color + (center ? "cc" : "60"),
        background: color + (center ? "18" : "10"),
      }}
    >
      <span className="text-sm font-bold" style={{ color }}>
        {label}
      </span>
      {sub && (
        <span className="text-xxs font-normal text-muted-foreground mt-1">{sub}</span>
      )}
      {badgeText && (
        <span
          className="text-2xs font-semibold mt-1.5 px-1.5 py-0.5 rounded"
          style={{ color, backgroundColor: color + "18" }}
        >
          {badgeText}
        </span>
      )}
    </div>
  );
}

/* ─── Parallax Background Layer ─── */

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

/* ─── Section Page Heading ─── */

export function SectionPageHeading({
  children,
  accent,
}: {
  children: React.ReactNode;
  accent?: "primary" | "foreground";
}) {
  return (
    <FadeInView speed={1.2}>
      <div className="mb-16">
        <SectionHeading accent={accent}>
          <h2 className="text-6xl font-black tracking-tighter leading-[0.95] text-foreground text-balance">
            {children}
          </h2>
        </SectionHeading>
      </div>
    </FadeInView>
  );
}
