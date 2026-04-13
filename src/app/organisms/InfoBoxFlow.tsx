import React from "react";
import { cn } from "@/app/components/ui/utils";
import { ColoredInfoBox } from "./ColoredInfoBox";

interface InfoBoxItem {
  label: string;
  sub?: string;
  color: string;
  center?: boolean;
  badge?: React.ReactNode;
}

export function InfoBoxFlow({
  items,
  arrowBreak,
  className,
}: {
  items: InfoBoxItem[];
  arrowBreak?: number; // index where arrows change direction
  className?: string;
}) {
  return (
    <div className={cn("flex flex-wrap items-center justify-center gap-2", className)}>
      {items.map((item, i) => (
        <React.Fragment key={i}>
          <ColoredInfoBox
            label={item.label}
            sub={item.sub}
            color={item.color}
            center={item.center}
            badge={item.badge}
            className="px-4 py-3 min-w-[100px]"
          />
          {i < items.length - 1 && (
            <svg width="20" height="16" viewBox="0 0 20 16" className="text-border shrink-0">
              <path
                d={arrowBreak !== undefined && i >= arrowBreak ? "M16 8H4M7 5L4 8l3 3" : "M4 8h12M13 5l3 3-3 3"}
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
