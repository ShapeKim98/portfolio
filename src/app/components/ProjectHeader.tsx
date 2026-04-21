import { FadeInView } from "./ParallaxSection";
import { TechTags, ScreenshotPlaceholder } from "./Diagrams";
import { DotSeparator, IconButton } from "./design-system";
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
    <div className="mb-16" data-print-keep>
      <FadeInView speed={1.3}>
        <div className="flex items-center gap-3 mb-4">
          <span className="text-8xl md:text-[64px] font-black text-primary/10 leading-none tabular-nums" aria-hidden="true">
            {index}
          </span>
          <div>
            <span className="text-xs font-medium text-primary tracking-wide uppercase">
              {type === "library" ? "Open Source Library" : "Project"}
            </span>
            <h3 className="text-5xl md:text-7xl font-black tracking-tightest text-foreground leading-[0.9] text-balance">
              {title}
            </h3>
          </div>
        </div>
      </FadeInView>

      <FadeInView delay={0.1} speed={1.4}>
        <p className="text-xl font-medium text-foreground mb-2 text-balance">{subtitle}</p>
        <div className="flex flex-wrap items-center gap-4 text-sm-md font-normal text-muted-foreground mb-6">
          <span className="tabular-nums">{period}</span>
          <DotSeparator />
          <span>{team}</span>
          <DotSeparator />
          <span>담당: {role}</span>
        </div>

        <p className="text-md font-normal text-muted-foreground leading-loose max-w-2xl mb-6 text-pretty">
          {description}
        </p>

        <div className="flex flex-wrap items-center gap-3 mb-8">
          <IconButton href={githubUrl} variant="primary" size="sm" icon={<Github size={14} aria-hidden="true" />} target="_blank" rel="noopener noreferrer" aria-label={`${title} GitHub 저장소 (새 탭)`}>Repository</IconButton>
          {appStoreUrl && (
            <IconButton href={appStoreUrl} variant="secondary" size="sm" icon={<ExternalLink size={14} aria-hidden="true" />} target="_blank" rel="noopener noreferrer" aria-label={`${title} App Store (새 탭)`}>App Store</IconButton>
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
