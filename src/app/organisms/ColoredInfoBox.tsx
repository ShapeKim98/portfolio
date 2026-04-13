import { cn } from "../components/ui/utils";

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
