import { cn } from "@/app/components/ui/utils";

export function KeyValueRow({
  label,
  value,
  className,
}: {
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span className="text-sm font-semibold text-foreground shrink-0">{label}</span>
      <span className="h-px flex-1 bg-border" />
      <span className="text-sm font-medium text-muted-foreground">{value}</span>
    </div>
  );
}
