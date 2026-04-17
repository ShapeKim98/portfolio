import { cn } from "@/app/components/ui/utils";

interface ColoredCardItem {
  label: string;
  description: string;
  color: string;
  mono?: boolean;
}

export function ColoredCardGrid({
  items,
  cols = 2,
  gap = 2,
  className,
}: {
  items: ColoredCardItem[];
  cols?: number;
  gap?: number;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid",
        cols === 1 ? "" : cols === 3 ? "sm:grid-cols-3" : "grid-cols-1 sm:grid-cols-2",
        className,
      )}
      style={{ gap: `${gap * 4}px` }}
    >
      {items.map((item, i) => (
        <div
          key={i}
          className="flex items-start gap-3 p-3 rounded-xl bg-card border"
          style={{ borderColor: item.color + "30" }}
        >
          <span
            className={cn(
              "shrink-0 text-xs font-bold px-2 py-0.5 rounded",
              item.mono && "font-mono",
            )}
            style={{ color: item.color, backgroundColor: item.color + "12" }}
          >
            {item.label}
          </span>
          <span className="text-xs font-normal text-muted-foreground leading-relaxed">
            {item.description}
          </span>
        </div>
      ))}
    </div>
  );
}
