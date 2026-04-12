import { FadeInView } from "./ParallaxSection";
import { TechTags, ScreenshotPlaceholder } from "./Diagrams";
import { ClickableImage } from "./ClickableImage";
import { Github, ExternalLink } from "lucide-react";

interface ProjectHeaderProps {
  index: string;
  type: "library" | "project";
  title: string;
  subtitle: string;
  period: string;
  team: string;
  role: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  appStoreUrl?: string;
  screenshotLabel: string;
  screenshotSrc?: string;
  hideScreenshot?: boolean;
}

export function ProjectHeader({
  index,
  type,
  title,
  subtitle,
  period,
  team,
  role,
  description,
  techStack,
  githubUrl,
  appStoreUrl,
  screenshotLabel,
  screenshotSrc,
  hideScreenshot,
}: ProjectHeaderProps) {
  return (
    <div className="mb-16">
      <FadeInView speed={1.3}>
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[48px] md:text-[64px] font-[900] text-primary/10 leading-none">
            {index}
          </span>
          <div>
            <span className="text-[11px] font-[500] text-primary tracking-[0.08em] uppercase">
              {type === "library" ? "Open Source Library" : "Project"}
            </span>
            <h3 className="text-[28px] md:text-[36px] font-[800] tracking-[-0.03em] text-foreground leading-[1.2]">
              {title}
            </h3>
          </div>
        </div>
      </FadeInView>

      <FadeInView delay={0.1} speed={1.4}>
        <p className="text-[17px] font-[500] text-foreground mb-2">{subtitle}</p>
        <div className="flex flex-wrap items-center gap-4 text-[13px] font-[400] text-muted-foreground mb-6">
          <span>{period}</span>
          <span className="w-1 h-1 rounded-full bg-border" />
          <span>{team}</span>
          <span className="w-1 h-1 rounded-full bg-border" />
          <span>담당: {role}</span>
        </div>

        <p className="text-[15px] font-[400] text-muted-foreground leading-[1.9] max-w-3xl mb-6">
          {description}
        </p>

        <div className="flex flex-wrap items-center gap-3 mb-8">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-foreground text-background text-[13px] font-[500] hover:opacity-90 transition-opacity"
          >
            <Github size={14} />
            Repository
          </a>
          {appStoreUrl && (
            <a
              href={appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-foreground text-[13px] font-[500] hover:bg-muted transition-colors"
            >
              <ExternalLink size={14} />
              App Store
            </a>
          )}
        </div>

        <TechTags tags={techStack} />
      </FadeInView>

      {!hideScreenshot && (
        <FadeInView delay={0.2} speed={1.5}>
          <div className="mt-10">
            {screenshotSrc
              ? <ClickableImage src={screenshotSrc} alt={screenshotLabel} className="w-full rounded-2xl object-contain" />
              : <ScreenshotPlaceholder label={screenshotLabel} />
            }
          </div>
        </FadeInView>
      )}
    </div>
  );
}
