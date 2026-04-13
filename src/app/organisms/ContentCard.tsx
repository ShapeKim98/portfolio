import { cn } from "../components/ui/utils";

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
