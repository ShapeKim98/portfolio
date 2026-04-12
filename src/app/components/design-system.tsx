import { cn } from "./ui/utils";

/* ─── Section Container ─── */

interface SectionContainerProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  innerClassName?: string;
}

export function SectionContainer({
  children,
  id,
  className,
  innerClassName,
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={cn("relative py-32 md:py-40 px-6 overflow-hidden", className)}
    >
      {children}
    </section>
  );
}

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

/* ─── Section Heading ─── */

interface SectionHeadingProps {
  children: React.ReactNode;
  accent?: "primary" | "foreground";
  className?: string;
}

export function SectionHeading({
  children,
  accent = "foreground",
  className,
}: SectionHeadingProps) {
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

interface ContentCardProps {
  children: React.ReactNode;
  className?: string;
  padding?: "sm" | "md" | "lg";
}

export function ContentCard({
  children,
  className,
  padding = "md",
}: ContentCardProps) {
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
