import { FadeInView } from "../animation";
import { ContentCard } from "../ContentCard";

interface FlowStep {
  label: string;
  desc?: string;
  color?: string;
  step?: string;
}

export function FlowChart({
  steps,
  title,
  direction = "vertical",
}: {
  steps: FlowStep[];
  title: string;
  direction?: "vertical" | "horizontal";
}) {
  if (direction === "horizontal") {
    return (
      <div className="mt-6 overflow-x-auto">
        <div className="flex items-start min-w-[560px]">
          {steps.map((item, i, arr) => (
            <div key={i} className="flex items-start flex-1">
              <div className="flex flex-col items-center w-full">
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center text-xxs font-bold text-white mb-2 shrink-0"
                  style={{ backgroundColor: item.color ?? "#6366f1" }}
                >
                  {item.step ?? i + 1}
                </div>
                <div
                  className="w-full px-2 py-2.5 rounded-lg bg-card border text-center"
                  style={{ borderColor: (item.color ?? "#6366f1") + "50" }}
                >
                  <p className="text-xxs font-semibold leading-snug" style={{ color: item.color ?? "#6366f1" }}>
                    {item.label}
                  </p>
                  {item.desc && (
                    <p className="text-2xs text-muted-foreground leading-normal mt-1">{item.desc}</p>
                  )}
                </div>
              </div>
              {i < arr.length - 1 && (
                <div className="flex items-start pt-[26px] px-1.5 shrink-0">
                  <svg width="14" height="10" viewBox="0 0 14 10">
                    <path d="M0 5h10M7 1l4 4-4 4" fill="none" stroke="#94a3b8" strokeWidth="1.5" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <FadeInView>
      <ContentCard>
        <h4 className="text-md font-bold text-foreground mb-6 tracking-snug">{title}</h4>
        <div className="flex flex-col items-center gap-2">
          {steps.map((step, i) => (
            <div key={i} className="w-full max-w-md">
              <div className="p-4 rounded-xl bg-card border border-border text-center">
                <span className="text-sm-md font-semibold text-foreground">{step.label}</span>
                {step.desc && (
                  <p className="text-sm font-normal text-muted-foreground mt-1">{step.desc}</p>
                )}
              </div>
              {i < steps.length - 1 && (
                <div className="flex justify-center py-1">
                  <svg width="12" height="16" viewBox="0 0 12 16" className="text-primary">
                    <path d="M6 0v12M2 9l4 5 4-5" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </ContentCard>
    </FadeInView>
  );
}
