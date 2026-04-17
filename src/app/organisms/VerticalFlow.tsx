import { cn } from "../components/ui/utils";

export function VerticalFlow({
  steps,
  maxWidth = "max-w-[260px]",
  showNumber = true,
  align = "left",
}: {
  steps: { label: string; desc?: string; sub?: string; color: string; shape?: "circle" | "diamond" }[];
  maxWidth?: string;
  showNumber?: boolean;
  align?: "left" | "center";
}) {
  return (
    <div className="flex flex-col items-center gap-1.5">
      {steps.map((step, i, arr) => (
        <div key={i} className={cn("w-full", maxWidth)}>
          {step.shape === "diamond" ? (
            <div className="flex flex-col items-center gap-1">
              <div
                className="flex items-center justify-center border text-center"
                style={{
                  borderColor: step.color + "60",
                  backgroundColor: step.color + "10",
                  clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                  width: "160px",
                  height: "44px",
                }}
              >
                <span className="text-xxs font-semibold" style={{ color: step.color }}>{step.label}</span>
              </div>
              {step.desc && (
                <p className="text-2xs text-muted-foreground leading-snug text-center px-2">{step.desc}</p>
              )}
            </div>
          ) : (
            <div
              className={cn("px-3 py-2.5 rounded-lg bg-card border", align === "center" && "text-center")}
              style={{ borderColor: step.color + "50" }}
            >
              <div className={cn("flex items-start gap-2", !showNumber && "justify-center")}>
                {showNumber && (
                  <div
                    className="shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-2xs font-bold text-white mt-0.5"
                    style={{ backgroundColor: step.color }}
                  >
                    {i + 1}
                  </div>
                )}
                <div className={cn(align === "center" && "text-center w-full")}>
                  <p className="text-xs font-semibold leading-snug" style={{ color: step.color }}>
                    {step.label}
                  </p>
                  {step.desc && (
                    <p className="text-2xs text-muted-foreground mt-0.5">
                      {step.desc}
                    </p>
                  )}
                  {step.sub && (
                    <p className="text-2xs text-muted-foreground mt-0.5">{step.sub}</p>
                  )}
                </div>
              </div>
            </div>
          )}
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
