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
      className={cn("grid", className)}
      style={{
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gap: `${gap * 4}px`,
      }}
    >
      {items.map((item, i) => (
        <div
          key={i}
          className="p-3 rounded-xl border bg-card"
          style={{
            borderColor: item.color + "30",
            backgroundColor: item.color + "12",
          }}
        >
          <span
            className={cn("text-xs font-bold block mb-1", item.mono && "font-mono")}
            style={{ color: item.color }}
          >
            {item.label}
          </span>
          <span className="text-xs text-muted-foreground">
            {item.description}
          </span>
        </div>
      ))}
    </div>
  );
}
