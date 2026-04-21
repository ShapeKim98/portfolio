import { cn } from "./ui/utils";
import { Eyebrow, MetaList, IconButton, Divider } from "./design-system";
import { ClickableImage } from "./ClickableImage";
import { Github, ExternalLink } from "lucide-react";

/* ─────────────────────────────────────────────────────────────
 * ProjectCover — full-bleed cover image with overlay metadata
 * ──────────────────────────────────────────────────────────── */

export function ProjectCover({
  number,
  title,
  subtitle,
  kind,
  meta,
  imageSrc,
  imageAlt,
  ariaLabelId,
}: {
  number: string;
  title: string;
  subtitle?: string;
  kind: "library" | "project";
  meta?: string;
  imageSrc?: string;
  imageAlt?: string;
  ariaLabelId?: string;
}) {
  /* Text header (always rendered for both library + project kinds).
     Shown standalone for library kind (no image) and also for PDF export. */
  const textHeader = (
    <div
      className={cn(
        "mx-auto w-full",
        "max-w-[clamp(320px,100%,1280px)]",
        "px-[clamp(24px,5vw,96px)]"
      )}
    >
      <div className="py-8 md:py-10 flex flex-wrap items-end justify-between gap-6 border-b border-border">
        <div className="flex items-baseline gap-4">
          <span className="text-sm font-medium tracking-widest text-muted-foreground tabular-nums">
            {number}
          </span>
          <div className="flex flex-col gap-2">
            <span className="text-[11px] font-medium tracking-widest uppercase text-muted-foreground">
              {kind === "library" ? "Open Source Library" : "Project"}
            </span>
            <h3 className="text-2xl md:text-3xl font-medium tracking-tight leading-tight text-foreground">
              {title}
            </h3>
            {subtitle && (
              <p className="text-sm md:text-base text-muted-foreground max-w-prose leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        </div>
        {meta && (
          <div className="text-xs tracking-widest uppercase text-muted-foreground max-w-xs md:text-right tabular-nums">
            {meta}
          </div>
        )}
      </div>
    </div>
  );

  // Library variant — compact text-only header (no image region)
  if (kind === "library" || !imageSrc) {
    return (
      <section
        id={ariaLabelId}
        className="relative w-full"
        data-print-keep
      >
        {textHeader}
      </section>
    );
  }

  // Project variant — full-bleed image cover preserving original aspect ratio
  return (
    <section
      id={ariaLabelId}
      className="relative w-full"
      data-print-keep
    >
      {textHeader}

      {/* Full-bleed image (natural aspect ratio) — clickable for detail view */}
      <div className="relative overflow-hidden border-b border-border bg-muted/30" data-print-keep>
        <div
          className={cn(
            "mx-auto w-full",
            "max-w-[clamp(320px,100%,1280px)]",
            "px-[clamp(24px,5vw,96px)] py-8 md:py-10"
          )}
        >
          <ClickableImage
            src={imageSrc}
            alt={imageAlt ?? title}
            className="block w-full h-auto max-h-[80vh] object-contain mx-auto rounded-[10px]"
          />
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
 * ProjectSidebar — sticky meta column (period/role/team/tech/links)
 * ──────────────────────────────────────────────────────────── */

export function ProjectSidebar({
  period,
  role,
  team,
  techStack,
  githubUrl,
  appStoreUrl,
}: {
  /** @deprecated — subtitle is shown in ProjectCover text header */
  subtitle?: string;
  period: string;
  role: string;
  team: string;
  techStack: string[];
  githubUrl?: string;
  appStoreUrl?: string;
}) {
  return (
    <div className="flex flex-col gap-6">
      <MetaList
        items={[
          { label: "Period", value: period },
          { label: "Role", value: role },
          { label: "Team", value: team },
        ]}
      />

      <div className="flex flex-col gap-2">
        <Eyebrow>Tech Stack</Eyebrow>
        <ul className="flex flex-wrap gap-1.5">
          {techStack.map((tech) => (
            <li
              key={tech}
              className="inline-flex items-center px-2 py-1 rounded-[10px] border border-border text-xs font-normal text-foreground"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>

      {(githubUrl || appStoreUrl) && (
        <>
          <Divider />
          <div className="flex flex-col gap-2">
            <Eyebrow>Links</Eyebrow>
            <div className="flex flex-wrap gap-2">
              {githubUrl && (
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
              )}
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
          </div>
        </>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
 * ProjectLayout — desktop: sticky sidebar (4) + body (8)
 * ──────────────────────────────────────────────────────────── */

export function ProjectLayout({
  sidebar,
  children,
}: {
  sidebar: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-[clamp(16px,2vw,40px)] gap-y-10">
      <aside className="lg:col-span-4 lg:sticky lg:top-[96px] lg:self-start">
        {sidebar}
      </aside>
      <div className="lg:col-span-8 flex flex-col gap-12">{children}</div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
 * ProjectSubsection — eyebrow + body stack (inside ProjectLayout body)
 * ──────────────────────────────────────────────────────────── */

export function ProjectSubsection({
  eyebrow,
  children,
  className,
}: {
  eyebrow: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("flex flex-col gap-5", className)}>
      <Eyebrow>{eyebrow}</Eyebrow>
      {children}
    </section>
  );
}
