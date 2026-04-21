import { cn } from "./ui/utils";
import { Eyebrow, MetaList, IconButton, Divider } from "./design-system";
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
  return (
    <section
      id={ariaLabelId}
      className="relative w-full"
      data-print-keep
    >
      {/* Image layer */}
      <div className="relative overflow-hidden border-y border-border bg-muted/40">
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] max-h-[640px]">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={imageAlt ?? title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <div className="absolute inset-0 bg-muted" />
          )}
          {/* Readable overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.55) 100%)",
            }}
            data-print-hide
          />
        </div>

        {/* Overlay metadata (bottom) */}
        <div
          className="absolute inset-x-0 bottom-0 text-white pointer-events-none"
          data-print-hide
        >
          <div
            className={cn(
              "mx-auto w-full",
              "max-w-[clamp(320px,100%,1280px)]",
              "px-[clamp(24px,5vw,96px)] py-6 md:py-8"
            )}
          >
            <div className="flex items-end justify-between gap-6 flex-wrap">
              <div className="flex items-baseline gap-4">
                <span className="text-sm font-medium tracking-widest">
                  {number}
                </span>
                <div className="flex flex-col gap-1">
                  <span className="text-[11px] font-medium tracking-widest uppercase opacity-80">
                    {kind === "library" ? "Open Source Library" : "Project"}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-medium tracking-tight leading-tight">
                    {title}
                  </h3>
                </div>
              </div>
              {meta && (
                <div className="text-xs tracking-widest uppercase opacity-80 max-w-xs text-right">
                  {meta}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Print fallback: text header (only visible on print) */}
      <div
        className="hidden print:block"
        style={{ pageBreakInside: "avoid" }}
      >
        <div className="py-4 flex items-baseline gap-4">
          <span className="text-sm font-medium tracking-widest text-muted-foreground">
            {number}
          </span>
          <div>
            <div className="text-xs font-medium tracking-widest uppercase text-muted-foreground">
              {kind === "library" ? "Open Source Library" : "Project"}
            </div>
            <h3 className="text-xl font-medium tracking-tight text-foreground">{title}</h3>
            {subtitle && (
              <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
 * ProjectSidebar — sticky meta column (period/role/team/tech/links)
 * ──────────────────────────────────────────────────────────── */

export function ProjectSidebar({
  subtitle,
  period,
  role,
  team,
  techStack,
  githubUrl,
  appStoreUrl,
}: {
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
      {subtitle && (
        <p className="text-base font-normal text-foreground leading-normal">
          {subtitle}
        </p>
      )}

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
