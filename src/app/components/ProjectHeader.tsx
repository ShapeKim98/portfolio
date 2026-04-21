// NOTE: Legacy ProjectHeader — superseded by <ProjectCover> + <ProjectSidebar>.
// Kept as a thin wrapper for any stray usage; current project components
// (ProjectRxCompose, ProjectFiltee, ProjectPokit, ProjectInterest) migrated
// to the new layout and no longer call this component.

import { FadeInView } from "./ParallaxSection";
import { Figure, IconButton, Eyebrow, Divider } from "./design-system";
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
    <div className="mb-12" data-print-keep>
      <FadeInView>
        <div className="flex items-baseline gap-4 mb-3">
          <span className="text-sm font-medium tracking-widest text-muted-foreground tabular-nums">
            {index}
          </span>
          <div className="flex flex-col gap-1">
            <Eyebrow>
              {type === "library" ? "Open Source Library" : "Project"}
            </Eyebrow>
            <h3 className="text-2xl font-medium tracking-tight text-foreground leading-tight">
              {title}
            </h3>
          </div>
        </div>

        <p className="text-lg font-normal text-foreground mb-2 max-w-2xl">{subtitle}</p>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs tracking-widest uppercase text-muted-foreground mb-5">
          <span className="tabular-nums">{period}</span>
          <span aria-hidden>·</span>
          <span>{team}</span>
          <span aria-hidden>·</span>
          <span>{role}</span>
        </div>

        <p className="text-base font-normal text-muted-foreground leading-relaxed max-w-3xl mb-5">
          {description}
        </p>

        <div className="flex flex-wrap items-center gap-2 mb-5">
          <IconButton
            href={githubUrl}
            variant="secondary"
            size="sm"
            icon={<Github size={14} />}
            target="_blank"
            rel="noopener noreferrer"
          >
            Repository
          </IconButton>
          {appStoreUrl && (
            <IconButton
              href={appStoreUrl}
              variant="secondary"
              size="sm"
              icon={<ExternalLink size={14} />}
              target="_blank"
              rel="noopener noreferrer"
            >
              App Store
            </IconButton>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <Eyebrow>Tech Stack</Eyebrow>
          <ul className="flex flex-wrap gap-1.5">
            {techStack.map((tech) => (
              <li
                key={tech}
                className="inline-flex items-center px-2 py-1 rounded-[10px] border border-border text-xs text-foreground bg-card"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </FadeInView>

      {!hideScreenshot && screenshotSrc && (
        <FadeInView delay={0.1}>
          <div className="mt-8">
            <Divider className="mb-8" />
            <Figure src={screenshotSrc} alt={screenshotLabel} caption={screenshotLabel} />
          </div>
        </FadeInView>
      )}
    </div>
  );
}
