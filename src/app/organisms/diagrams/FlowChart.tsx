import { FadeInView } from "../animation";
import { ContentCard } from "../ContentCard";

export function FlowChart({
  steps,
  title,
}: {
  steps: { label: string; desc?: string }[];
  title: string;
}) {
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
