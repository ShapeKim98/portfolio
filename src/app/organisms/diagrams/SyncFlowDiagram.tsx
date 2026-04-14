import { FadeInView } from "../animation";
import { ContentCard } from "../ContentCard";
import { SubSectionTitle } from "../../atoms";
import { ClickableImage } from "../../molecules";
import { ProblemSolvingBlock } from "./ProblemSolvingBlock";
import { AppScreenshotPlaceholder } from "./AppScreenshotPlaceholder";

export function SyncFlowDiagram({
  title,
  description,
  steps,
  problem,
  solution,
  detail,
  screenshotSrc,
}: {
  title: string;
  description?: string;
  steps: { label: string; color: string; desc: string }[];
  problem: string;
  solution: string;
  detail?: string;
  screenshotSrc?: string;
}) {
  return (
    <FadeInView>
      <ContentCard>
        <SubSectionTitle size="md" className="mb-4">
          {title}
        </SubSectionTitle>

        {description && (
          <p className="text-base font-normal text-muted-foreground leading-loose mb-4">
            {description}
          </p>
        )}

        <div className="mb-6">
          <ProblemSolvingBlock
            problem={problem}
            solution={solution}
            detail={detail}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="flex flex-col items-center gap-1.5">
            {steps.map((step, i) => (
              <div key={i} className="w-full max-w-[240px]">
                <div
                  className="px-3 py-2.5 rounded-lg bg-card border"
                  style={{ borderColor: step.color + "50" }}
                >
                  <div className="flex items-start gap-2">
                    <div
                      className="shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-2xs font-bold text-white mt-0.5"
                      style={{ backgroundColor: step.color }}
                    >
                      {i + 1}
                    </div>
                    <div>
                      <p className="text-xs font-semibold leading-snug" style={{ color: step.color }}>{step.label}</p>
                      <p className="text-xxs font-normal text-muted-foreground leading-normal mt-0.5">{step.desc}</p>
                    </div>
                  </div>
                </div>
                {i < steps.length - 1 && (
                  <div className="flex justify-center py-0.5">
                    <svg width="8" height="16" viewBox="0 0 8 16" fill="none" className="text-border">
                      <line x1="4" y1="0" x2="4" y2="12" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M1 10 L4 14 L7 10" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            {screenshotSrc
              ? <ClickableImage src={screenshotSrc} alt="실시간 채팅 스크린샷" className="w-full max-w-[240px] rounded-2xl" />
              : <AppScreenshotPlaceholder label="실시간 채팅 스크린샷" />}
          </div>
        </div>
      </ContentCard>
    </FadeInView>
  );
}
