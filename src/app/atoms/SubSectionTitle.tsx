import { cn } from "../components/ui/utils";

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
