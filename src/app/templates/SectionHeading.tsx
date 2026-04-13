import { cn } from "../components/ui/utils";

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
