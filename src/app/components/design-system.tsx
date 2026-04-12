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
    <div className={cn("relative z-10 max-w-5xl mx-auto", className)}>
      {children}
    </div>
  );
}

/* ─── Section Heading (accent bar + heading) ─── */

export function SectionHeading({
  children,
  accent = "foreground",
  className,
}: {
  children: React.ReactNode;
  accent?: "primary" | "foreground";
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-3 mb-4", className)}>
      <div
        className={cn(
          "w-8 h-1 rounded-full",
          accent === "primary" ? "bg-primary" : "bg-foreground"
        )}
      />
      {children}
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
        "rounded-2xl bg-muted/30 border border-border",
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
      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
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
    md: "text-lg font-bold tracking-snug",
    lg: "text-2xl font-bold tracking-tight",
    xl: "text-4xl font-bold tracking-tight",
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
    <div className={cn("p-5 rounded-xl bg-muted/40 border border-border", className)}>
      <h6 className="text-base font-semibold text-foreground mb-2">{title}</h6>
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
          <h2 className="text-6xl font-bold tracking-tighter leading-snug text-foreground">
            {children}
          </h2>
        </SectionHeading>
      </div>
    </FadeInView>
  );
}
