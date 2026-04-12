import { FadeInView } from "./ParallaxSection";
import { ContentCard, SubSectionTitle, FeatureCard } from "./design-system";

/* ─── Architecture Layer Diagram ─── */
export function LayerDiagram({
  layers,
  title,
}: {
  layers: { name: string; desc: string; color: string }[];
  title: string;
}) {
  return (
    <FadeInView>
      <ContentCard>
        <h4 className="text-md font-bold text-foreground mb-6 tracking-snug">{title}</h4>
        <div className="space-y-3">
          {layers.map((layer, i) => (
            <div key={layer.name} className="relative">
              {i < layers.length - 1 && (
                <div className="absolute left-6 top-full w-0.5 h-3 bg-border z-0" />
              )}
              <div
                className="relative z-10 flex items-start gap-4 p-4 rounded-xl border border-border bg-card"
                style={{ borderLeftColor: layer.color, borderLeftWidth: 3 }}
              >
                <div className="min-w-[100px]">
                  <span className="text-sm-md font-bold" style={{ color: layer.color }}>
                    {layer.name}
                  </span>
                </div>
                <p className="text-sm-md font-normal text-muted-foreground leading-loose">
                  {layer.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </ContentCard>
    </FadeInView>
  );
}

/* ─── Flow Chart ─── */
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

/* ─── DB Schema Diagram ─── */
export function DBSchema({
  tables,
  relations,
  title,
}: {
  tables: { name: string; fields: { name: string; type: string; key?: boolean }[] }[];
  relations: string[];
  title: string;
}) {
  return (
    <FadeInView>
      <ContentCard>
        <h4 className="text-md font-bold text-foreground mb-6 tracking-snug">{title}</h4>
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {tables.map((table) => (
            <div key={table.name} className="rounded-xl border border-border overflow-hidden bg-card">
              <div className="px-4 py-2.5 bg-primary/10 border-b border-border">
                <span className="text-sm-md font-bold text-primary">{table.name}</span>
              </div>
              <div className="p-3 space-y-1.5">
                {table.fields.map((f) => (
                  <div key={f.name} className="flex items-center gap-2">
                    {f.key && (
                      <span className="text-xxs font-semibold text-primary bg-primary/10 px-1.5 py-0.5 rounded">
                        PK
                      </span>
                    )}
                    <span className="text-sm font-medium text-foreground">{f.name}</span>
                    <span className="text-xs font-normal text-muted-foreground ml-auto">{f.type}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-1.5">
          {relations.map((rel) => (
            <p key={rel} className="text-sm font-normal text-muted-foreground flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              {rel}
            </p>
          ))}
        </div>
      </ContentCard>
    </FadeInView>
  );
}

/* ─── DB Relation Diagram (ERD style) ─── */
export function DBRelationDiagram() {
  return (
    <FadeInView>
      <ContentCard>
        <h4 className="text-md font-bold text-foreground mb-6 tracking-snug">
          테이블 관계도 (ERD)
        </h4>
        <div className="overflow-x-auto">
          <div className="min-w-[480px]">
            {/* Tables row */}
            <div className="flex items-start justify-between gap-4 mb-2">
              {/* Participant */}
              <div className="flex-1 rounded-xl border border-border overflow-hidden bg-card min-w-[130px]">
                <div className="px-3 py-2 bg-orange-500/10 border-b border-border">
                  <span className="text-sm font-bold text-orange-600 dark:text-orange-400">Participant</span>
                </div>
                <div className="p-2.5 space-y-1">
                  {[
                    { name: "id", type: "UUID", pk: true },
                    { name: "name", type: "String" },
                    { name: "profileURL", type: "String" },
                    { name: "chatRoom", type: "→ ChatRoom", fk: true },
                  ].map((f) => (
                    <div key={f.name} className="flex items-center gap-1.5">
                      {f.pk && <span className="text-2xs font-bold text-primary bg-primary/10 px-1 py-0.5 rounded shrink-0">PK</span>}
                      {f.fk && <span className="text-2xs font-bold text-orange-500 bg-orange-500/10 px-1 py-0.5 rounded shrink-0">FK</span>}
                      <span className="text-xs font-medium text-foreground">{f.name}</span>
                      <span className="text-xxs font-normal text-muted-foreground ml-auto">{f.type}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* ChatRoom (center) */}
              <div className="flex-1 rounded-xl border-2 border-primary/40 overflow-hidden bg-card min-w-[150px]">
                <div className="px-3 py-2 bg-primary/10 border-b border-border">
                  <span className="text-sm font-bold text-primary">ChatRoom</span>
                </div>
                <div className="p-2.5 space-y-1">
                  {[
                    { name: "id", type: "UUID", pk: true },
                    { name: "lastMessage", type: "→ ChatMessage", fk: true },
                    { name: "participants", type: "[Participant]" },
                    { name: "messages", type: "[ChatMessage]" },
                  ].map((f) => (
                    <div key={f.name} className="flex items-center gap-1.5">
                      {f.pk && <span className="text-2xs font-bold text-primary bg-primary/10 px-1 py-0.5 rounded shrink-0">PK</span>}
                      {f.fk && <span className="text-2xs font-bold text-primary/70 bg-primary/10 px-1 py-0.5 rounded shrink-0">FK</span>}
                      <span className="text-xs font-medium text-foreground">{f.name}</span>
                      <span className="text-xxs font-normal text-muted-foreground ml-auto">{f.type}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* ChatMessage */}
              <div className="flex-1 rounded-xl border border-border overflow-hidden bg-card min-w-[140px]">
                <div className="px-3 py-2 bg-green-500/10 border-b border-border">
                  <span className="text-sm font-bold text-green-600 dark:text-green-400">ChatMessage</span>
                </div>
                <div className="p-2.5 space-y-1">
                  {[
                    { name: "id", type: "UUID", pk: true },
                    { name: "content", type: "String" },
                    { name: "createdAt", type: "Date" },
                    { name: "isHead", type: "Bool" },
                    { name: "isTail", type: "Bool" },
                    { name: "chatRoom", type: "→ ChatRoom", fk: true },
                  ].map((f) => (
                    <div key={f.name} className="flex items-center gap-1.5">
                      {f.pk && <span className="text-2xs font-bold text-primary bg-primary/10 px-1 py-0.5 rounded shrink-0">PK</span>}
                      {f.fk && <span className="text-2xs font-bold text-green-500 bg-green-500/10 px-1 py-0.5 rounded shrink-0">FK</span>}
                      <span className="text-xs font-medium text-foreground">{f.name}</span>
                      <span className="text-xxs font-normal text-muted-foreground ml-auto">{f.type}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Relationship lines (SVG) */}
            <div className="relative h-16">
              <svg className="w-full h-full" viewBox="0 0 600 64" preserveAspectRatio="none">
                {/* Participant → ChatRoom (1:N) */}
                <line x1="195" y1="4" x2="195" y2="32" stroke="currentColor" strokeWidth="1.5" className="text-orange-400" strokeDasharray="4 3" />
                <line x1="195" y1="32" x2="300" y2="32" stroke="currentColor" strokeWidth="1.5" className="text-orange-400" strokeDasharray="4 3" />
                <line x1="300" y1="32" x2="300" y2="4" stroke="currentColor" strokeWidth="1.5" className="text-orange-400" strokeDasharray="4 3" />
                {/* Label */}
                <text x="248" y="26" textAnchor="middle" fontSize="9" className="fill-orange-500" fontWeight="600">1 : N</text>

                {/* ChatRoom → ChatMessage (1:N) */}
                <line x1="300" y1="4" x2="300" y2="48" stroke="currentColor" strokeWidth="1.5" className="text-green-500" strokeDasharray="4 3" />
                <line x1="300" y1="48" x2="405" y2="48" stroke="currentColor" strokeWidth="1.5" className="text-green-500" strokeDasharray="4 3" />
                <line x1="405" y1="48" x2="405" y2="4" stroke="currentColor" strokeWidth="1.5" className="text-green-500" strokeDasharray="4 3" />
                {/* Label */}
                <text x="352" y="42" textAnchor="middle" fontSize="9" className="fill-green-500" fontWeight="600">1 : N</text>

                {/* ChatRoom → lastMessage (1:1, solid) */}
                <line x1="370" y1="4" x2="370" y2="58" stroke="currentColor" strokeWidth="1" className="text-primary/40" />
                <line x1="370" y1="58" x2="430" y2="58" stroke="currentColor" strokeWidth="1" className="text-primary/40" />
                <line x1="430" y1="58" x2="430" y2="4" stroke="currentColor" strokeWidth="1" className="text-primary/40" />
                <text x="400" y="54" textAnchor="middle" fontSize="8" className="fill-primary/60">lastMessage 1:1</text>
              </svg>
            </div>

            {/* Legend */}
            <div className="flex flex-wrap gap-4 mt-1 pt-3 border-t border-border">
              <div className="flex items-center gap-2">
                <div className="w-6 h-0.5 bg-orange-400" style={{ backgroundImage: "repeating-linear-gradient(90deg, currentColor 0, currentColor 4px, transparent 4px, transparent 7px)" }} />
                <span className="text-xs text-muted-foreground">ChatRoom ↔ Participant (1:N)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-0.5 bg-green-500" />
                <span className="text-xs text-muted-foreground">ChatRoom ↔ ChatMessage (1:N)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-0.5 bg-primary/40" />
                <span className="text-xs text-muted-foreground">lastMessage 참조 (1:1)</span>
              </div>
            </div>
          </div>
        </div>
      </ContentCard>
    </FadeInView>
  );
}

/* ─── Problem Solving Block ─── */
export function ProblemSolvingBlock({
  problem,
  solution,
  detail,
}: {
  problem: string;
  solution: string;
  detail?: string;
}) {
  return (
    <div className="p-5 rounded-xl border border-border bg-card">
      <div className="flex items-start gap-3 mb-3">
        <span className="shrink-0 mt-0.5 px-2 py-0.5 rounded bg-destructive/10 text-destructive text-xs font-semibold">
          Problem
        </span>
        <p className="text-sm-md font-medium text-foreground leading-loose">{problem}</p>
      </div>
      <div className="flex items-start gap-3">
        <span className="shrink-0 mt-0.5 px-2 py-0.5 rounded bg-green-500/10 text-green-600 dark:text-green-400 text-xs font-semibold">
          Solution
        </span>
        <div>
          <p className="text-sm-md font-medium text-foreground leading-loose">{solution}</p>
          {detail && (
            <p className="text-sm font-normal text-muted-foreground leading-loose mt-1.5">{detail}</p>
          )}
        </div>
      </div>
    </div>
  );
}

/* ─── Feature List ─── */
export function FeatureGrid({ features }: { features: { title: string; desc: string }[] }) {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {features.map((f) => (
        <FeatureCard key={f.title} title={f.title}>{f.desc}</FeatureCard>
      ))}
    </div>
  );
}

/* ─── Tech Tags ─── */
export function TechTags({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((t) => (
        <span
          key={t}
          className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium"
        >
          {t}
        </span>
      ))}
    </div>
  );
}

/* ─── Screenshot Placeholder ─── */
export function ScreenshotPlaceholder({ label }: { label: string }) {
  return (
    <div className="w-full aspect-[16/9] rounded-2xl bg-muted/50 border-2 border-dashed border-border flex items-center justify-center">
      <div className="text-center">
        <div className="w-12 h-12 rounded-xl bg-muted mx-auto mb-3 flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-muted-foreground">
            <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="9" cy="9" r="2" stroke="currentColor" strokeWidth="1.5" />
            <path d="M3 16l5-5 4 4 3-3 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
        <p className="text-sm font-normal text-muted-foreground">{label}</p>
      </div>
    </div>
  );
}

/* ─── App Screenshot Placeholder (portrait / mobile ratio) ─── */
export function AppScreenshotPlaceholder({ label }: { label: string }) {
  return (
    <div className="mx-auto max-w-[160px] w-full aspect-[9/19.5] rounded-2xl bg-muted/50 border-2 border-dashed border-border flex items-center justify-center">
      <div className="text-center p-2">
        <div className="w-8 h-8 rounded-xl bg-muted mx-auto mb-2 flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-muted-foreground">
            <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="9" cy="9" r="2" stroke="currentColor" strokeWidth="1.5" />
            <path d="M3 16l5-5 4 4 3-3 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
        <p className="text-xxs font-normal text-muted-foreground leading-normal">{label}</p>
      </div>
    </div>
  );
}

/* ─── Sync Flow Diagram (PSB + 설명 상단 / 흐름 좌 + 스크린샷 우) ─── */
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

        {/* 설명 텍스트 */}
        {description && (
          <p className="text-base font-normal text-muted-foreground leading-loose mb-4">
            {description}
          </p>
        )}

        {/* Problem / Solution */}
        <div className="mb-6">
          <ProblemSolvingBlock
            problem={problem}
            solution={solution}
            detail={detail}
          />
        </div>

        {/* 흐름 다이어그램 (좌) + 앱 스크린샷 (우) */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* 왼쪽: 흐름 다이어그램 */}
          <div className="flex flex-col items-center gap-1.5">
            {steps.map((step, i) => (
              <div key={i} className="w-full max-w-[280px]">
                <div
                  className="p-2.5 rounded-lg bg-card border"
                  style={{ borderColor: step.color + "40" }}
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
                    <div className="w-0.5 h-3 bg-border" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* 오른쪽: 앱 스크린샷 */}
          <div className="flex justify-center">
            {screenshotSrc
              ? <img src={screenshotSrc} alt="실시간 채팅 스크린샷" className="w-full max-w-[240px] rounded-2xl" />
              : <AppScreenshotPlaceholder label="실시간 채팅 스크린샷" />}
          </div>
        </div>
      </ContentCard>
    </FadeInView>
  );
}

/* ─── DB Schema + ERD Combined ─── */
export function DBSchemaWithERD({
  tables,
  relations,
  title,
}: {
  tables: { name: string; fields: { name: string; type: string; key?: boolean }[] }[];
  relations: string[];
  title: string;
}) {
  return (
    <FadeInView>
      <ContentCard>
        <h4 className="text-md font-bold text-foreground mb-6 tracking-snug">{title}</h4>

        {/* 테이블 스키마 */}
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {tables.map((table) => (
            <div key={table.name} className="rounded-xl border border-border overflow-hidden bg-card">
              <div className="px-4 py-2.5 bg-primary/10 border-b border-border">
                <span className="text-sm-md font-bold text-primary">{table.name}</span>
              </div>
              <div className="p-3 space-y-1.5">
                {table.fields.map((f) => (
                  <div key={f.name} className="flex items-center gap-2">
                    {f.key && (
                      <span className="text-xxs font-semibold text-primary bg-primary/10 px-1.5 py-0.5 rounded">
                        PK
                      </span>
                    )}
                    <span className="text-sm font-medium text-foreground">{f.name}</span>
                    <span className="text-xs font-normal text-muted-foreground ml-auto">{f.type}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ERD 관계도 — 수평 화살표 */}
        <div className="mt-2 pt-5 border-t border-border">
          <h4 className="text-sm-md font-bold text-foreground mb-5 tracking-snug">
            테이블 관계도 (ERD)
          </h4>
          <div className="overflow-x-auto">
            <div className="min-w-[380px]">
              {/* 메인 관계 행 */}
              <div className="flex items-center justify-center gap-0 mb-4">
                {/* Participant */}
                <div className="flex flex-col items-center">
                  <div className="px-3 py-2 rounded-xl border bg-orange-500/10 border-orange-500/30">
                    <span className="text-xs font-bold text-orange-600 dark:text-orange-400">Participant</span>
                  </div>
                  <span className="text-2xs font-bold text-orange-400 mt-1">N</span>
                </div>

                {/* 화살표: Participant ← ChatRoom (ChatRoom이 1, Participant가 N) */}
                <div className="flex flex-col items-center px-1 shrink-0">
                  <svg width="64" height="16" viewBox="0 0 64 16">
                    <path d="M60 8H12M16 4L4 8l12 4" fill="none" stroke="#f97316" strokeWidth="1.5" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-3xs text-orange-400 font-medium whitespace-nowrap">participants</span>
                </div>

                {/* ChatRoom (중앙, 1:1:) */}
                <div className="flex flex-col items-center">
                  <div className="px-3 py-2 rounded-xl border-2 border-primary/50 bg-primary/10">
                    <span className="text-xs font-bold text-primary">ChatRoom</span>
                  </div>
                  <span className="text-2xs font-bold text-primary mt-1">1</span>
                </div>

                {/* 화살표: ChatRoom → ChatMessage (ChatRoom이 1, ChatMessage가 N) */}
                <div className="flex flex-col items-center px-1 shrink-0">
                  <svg width="64" height="16" viewBox="0 0 64 16">
                    <path d="M4 8h48M48 4l12 4-12 4" fill="none" stroke="#22c55e" strokeWidth="1.5" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-3xs text-green-500 font-medium whitespace-nowrap">messages</span>
                </div>

                {/* ChatMessage */}
                <div className="flex flex-col items-center">
                  <div className="px-3 py-2 rounded-xl border bg-green-500/10 border-green-500/30">
                    <span className="text-xs font-bold text-green-600 dark:text-green-400">ChatMessage</span>
                  </div>
                  <span className="text-2xs font-bold text-green-500 mt-1">N</span>
                </div>
              </div>

              {/* lastMessage 1:1 참조 */}
              <div className="flex justify-center mb-3">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-card border border-primary/20">
                  <span className="text-xxs font-semibold text-primary">ChatRoom</span>
                  <svg width="44" height="10" viewBox="0 0 44 10">
                    <path d="M0 5h34M30 1l10 4-10 4" fill="none" stroke="#6366f1" strokeWidth="1.3" strokeDasharray="4 2" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-xxs font-medium text-primary/70">lastMessage</span>
                  <span className="text-2xs text-muted-foreground">(1:1)</span>
                </div>
              </div>

              {/* Legend */}
              <div className="flex flex-wrap gap-x-4 gap-y-1.5 pt-3 border-t border-border">
                <div className="flex items-center gap-1.5">
                  <svg width="18" height="8" viewBox="0 0 18 8"><path d="M0 4h10M7 1l7 3-7 3" fill="none" stroke="#f97316" strokeWidth="1.5"/></svg>
                  <span className="text-xxs text-muted-foreground">ChatRoom ↔ Participant (1:N)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <svg width="18" height="8" viewBox="0 0 18 8"><path d="M0 4h10M7 1l7 3-7 3" fill="none" stroke="#22c55e" strokeWidth="1.5"/></svg>
                  <span className="text-xxs text-muted-foreground">ChatRoom ↔ ChatMessage (1:N)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <svg width="18" height="8" viewBox="0 0 18 8"><path d="M0 4h10M7 1l7 3-7 3" fill="none" stroke="#6366f1" strokeWidth="1.3" strokeDasharray="3 2"/></svg>
                  <span className="text-xxs text-muted-foreground">lastMessage 참조 (1:1)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContentCard>
    </FadeInView>
  );
}

/* ─── RxCompose Architecture Diagram ─── */
export function RxComposeArchitectureDiagram() {
  return (
    <FadeInView>
      <ContentCard className="mb-10">
        <h4 className="text-md font-bold text-foreground mb-5 tracking-snug">
          RxCompose 단방향 데이터 흐름 구조도
        </h4>

        <div className="overflow-x-auto">
          {/*
            레이아웃:
            [수평 메인 흐름] View → Action → Reducer → Effect<Action> → .none → State → View 바인딩
                                                              ↓
                                                         .send(Action)  ← 루프백 → Action
                                                              ↓
                                                         Side Effect    ← 루프백 → Action
                                                              ↓
                                                           .cancel()

            루프백 화살표: 왼쪽 마진(x=4~8)을 타고 올라가 Action 좌측면 진입
          */}
          {/*
            레이아웃:
            View → Action → Reducer → Effect → [분기 블럭] → State → View 바인딩
            분기 블럭 (x=338~482): .none / .send / Side Effect / .cancel 4개 섹션
              .none 섹션(상단, y=14~54): 메인 흐름과 동일 높이, 오른쪽으로 State 연결
              .send 섹션(y=54~88):  블럭 LEFT에서 L자 루프백 → Action
              SE    섹션(y=88~164): 블럭 LEFT에서 L자 루프백 → Action
              .cancel 섹션(y=164~194)
          */}
          <svg
            viewBox="0 0 672 206"
            className="w-full"
            style={{ minWidth: "520px" }}
          >
            <defs>
              <marker id="rxah-v" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
                <path d="M0,0.5 L6,3.5 L0,6.5 Z" fill="#7c3aed" />
              </marker>
              <marker id="rxah-a" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
                <path d="M0,0.5 L6,3.5 L0,6.5 Z" fill="#f59e0b" />
              </marker>
              <marker id="rxah-r" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
                <path d="M0,0.5 L6,3.5 L0,6.5 Z" fill="#ef4444" />
              </marker>
              <marker id="rxah-g" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
                <path d="M0,0.5 L6,3.5 L0,6.5 Z" fill="#22c55e" />
              </marker>
              <marker id="rxah-o" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
                <path d="M0,0.5 L6,3.5 L0,6.5 Z" fill="#f97316" />
              </marker>
              <marker id="rxah-b" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
                <path d="M0,0.5 L6,3.5 L0,6.5 Z" fill="#3b82f6" />
              </marker>
            </defs>

            {/* ════ 수평 메인 흐름 (y=14~54) ════ */}

            {/* View: x=8, w=54, right=62, cx=35 */}
            <rect x="8" y="14" width="54" height="40" rx="8"
              fill="rgba(59,130,246,0.08)" stroke="rgba(59,130,246,0.5)" strokeWidth="1.5"/>
            <text x="35" y="30" textAnchor="middle" fontSize="10" fontWeight="700" fill="#3b82f6">View</text>
            <text x="35" y="44" textAnchor="middle" fontSize="6.5" fill="#94a3b8">@Compose</text>

            {/* → send()  62→84 */}
            <line x1="62" y1="34" x2="84" y2="34" stroke="#7c3aed" strokeWidth="1.5" markerEnd="url(#rxah-v)"/>
            <text x="73" y="27" textAnchor="middle" fontSize="6" fill="#7c3aed" fontWeight="600">send()</text>

            {/* Action: x=84, w=60, right=144, cx=114 */}
            <rect x="84" y="14" width="60" height="40" rx="8"
              fill="rgba(124,58,237,0.08)" stroke="rgba(124,58,237,0.5)" strokeWidth="1.5"/>
            <text x="114" y="30" textAnchor="middle" fontSize="10" fontWeight="700" fill="#7c3aed">Action</text>
            <text x="114" y="44" textAnchor="middle" fontSize="6" fill="#94a3b8">PublishRelay</text>

            {/* → bind()  144→166 */}
            <line x1="144" y1="34" x2="166" y2="34" stroke="#f59e0b" strokeWidth="1.5" markerEnd="url(#rxah-a)"/>
            <text x="155" y="27" textAnchor="middle" fontSize="6" fill="#f59e0b" fontWeight="600">bind()</text>

            {/* Reducer: x=166, w=64, right=230, cx=198 */}
            <rect x="166" y="14" width="64" height="40" rx="8"
              fill="rgba(245,158,11,0.08)" stroke="rgba(245,158,11,0.5)" strokeWidth="1.5"/>
            <text x="198" y="30" textAnchor="middle" fontSize="10" fontWeight="700" fill="#f59e0b">Reducer</text>
            <text x="198" y="44" textAnchor="middle" fontSize="6" fill="#94a3b8">reducer(&amp;state,…)</text>

            {/* → returns  230→252 */}
            <line x1="230" y1="34" x2="252" y2="34" stroke="#ef4444" strokeWidth="1.5" markerEnd="url(#rxah-r)"/>
            <text x="241" y="27" textAnchor="middle" fontSize="6" fill="#ef4444" fontWeight="600">returns</text>

            {/* Effect<Action>: x=252, w=68, right=320, cx=286 */}
            <rect x="252" y="14" width="68" height="40" rx="8"
              fill="rgba(239,68,68,0.08)" stroke="rgba(239,68,68,0.5)" strokeWidth="1.5"/>
            <text x="286" y="29" textAnchor="middle" fontSize="9" fontWeight="700" fill="#ef4444">Effect&lt;Action&gt;</text>
            <text x="286" y="43" textAnchor="middle" fontSize="6" fill="#94a3b8">유형에 따라 분기</text>

            {/* Effect → 분기 블럭  320→338 */}
            <line x1="320" y1="34" x2="338" y2="34" stroke="#ef4444" strokeWidth="1.5" markerEnd="url(#rxah-r)"/>

            {/* ════ 분기 블럭: x=338, y=14, w=144, h=180 (→ y=194) ════ */}

            {/* 섹션 배경 */}
            <rect x="338.5" y="14.5" width="143" height="39"   rx="7"    fill="rgba(34,197,94,0.08)"/>
            <rect x="338.5" y="54"   width="143" height="34"             fill="rgba(124,58,237,0.06)"/>
            <rect x="338.5" y="88"   width="143" height="76"             fill="rgba(249,115,22,0.06)"/>
            <rect x="338.5" y="164"  width="143" height="29.5" rx="7"    fill="rgba(239,68,68,0.05)"/>

            {/* 외곽 테두리 */}
            <rect x="338" y="14" width="144" height="180" rx="8"
              fill="none" stroke="rgba(148,163,184,0.6)" strokeWidth="1.5"/>

            {/* 구분선 */}
            <line x1="339" y1="54"  x2="481" y2="54"  stroke="rgba(148,163,184,0.4)" strokeWidth="1"/>
            <line x1="339" y1="88"  x2="481" y2="88"  stroke="rgba(148,163,184,0.4)" strokeWidth="1"/>
            <line x1="339" y1="164" x2="481" y2="164" stroke="rgba(148,163,184,0.4)" strokeWidth="1"/>

            {/* .none 섹션 (cy=34) */}
            <text x="410" y="31" textAnchor="middle" fontSize="9" fontWeight="700" fill="#22c55e">.none</text>
            <text x="410" y="45" textAnchor="middle" fontSize="6.5" fill="#94a3b8">Effect 종료 — State 갱신</text>

            {/* .send 섹션 (cy=71) */}
            <text x="410" y="69" textAnchor="middle" fontSize="9" fontWeight="700" fill="#7c3aed">.send(Action)</text>
            <text x="410" y="81" textAnchor="middle" fontSize="6.5" fill="#94a3b8">새 Action 재귀 디스패치</text>

            {/* Side Effect 섹션 (y=88~164) */}
            <text x="410" y="104" textAnchor="middle" fontSize="9" fontWeight="700" fill="#f97316">Side Effect</text>
            <text x="410" y="116" textAnchor="middle" fontSize="6.5" fill="#94a3b8">단방향 흐름 외부에서 독립 동작</text>
            <rect x="350" y="121" width="120" height="22" rx="4"
              fill="rgba(245,158,11,0.08)" stroke="rgba(245,158,11,0.3)" strokeWidth="1"/>
            <text x="410" y="136" textAnchor="middle" fontSize="7" fontWeight="600" fill="#f59e0b">.run / .timer / .interval</text>
            <text x="410" y="154" textAnchor="middle" fontSize="6" fill="rgba(249,115,22,0.7)" fontStyle="italic">완료 후 Action으로 직렬화</text>

            {/* .cancel 섹션 (cy=179) */}
            <text x="410" y="177" textAnchor="middle" fontSize="9" fontWeight="700" fill="#ef4444">.cancel()</text>
            <text x="410" y="188" textAnchor="middle" fontSize="6.5" fill="#94a3b8">Side Effect 취소</text>

            {/* ════ L자 루프백 → Action ════
                .send 루프백: (338,71) → (109,71) → (109,54) Action 하단 진입
                SE    루프백: (338,126) → (99,126) → (99,54)  Action 하단 진입
            ════ */}

            {/* .send → Action */}
            <path d="M 338,71 L 109,71 L 109,54"
              fill="none" stroke="#7c3aed" strokeWidth="1.3" strokeDasharray="4 2" markerEnd="url(#rxah-v)"/>
            <text x="223" y="65" textAnchor="middle" fontSize="6" fill="#7c3aed" fontWeight="600">재진입</text>

            {/* SideEffect → Action */}
            <path d="M 338,126 L 99,126 L 99,54"
              fill="none" stroke="#f97316" strokeWidth="1.3" strokeDasharray="4 2" markerEnd="url(#rxah-o)"/>
            <text x="218" y="120" textAnchor="middle" fontSize="6" fill="#f97316" fontWeight="600">직렬화 후 재진입</text>

            {/* 블럭(.none) → State  482→500 */}
            <line x1="482" y1="34" x2="500" y2="34" stroke="#22c55e" strokeWidth="1.5" markerEnd="url(#rxah-g)"/>

            {/* State: x=500, w=60, right=560, cx=530 */}
            <rect x="500" y="14" width="60" height="40" rx="8"
              fill="rgba(34,197,94,0.08)" stroke="rgba(34,197,94,0.5)" strokeWidth="1.5"/>
            <text x="530" y="30" textAnchor="middle" fontSize="10" fontWeight="700" fill="#22c55e">State</text>
            <text x="530" y="44" textAnchor="middle" fontSize="6" fill="#94a3b8">@ComposableState</text>

            {/* → Driver  560→578 */}
            <line x1="560" y1="34" x2="578" y2="34" stroke="#3b82f6" strokeWidth="1.5" markerEnd="url(#rxah-b)"/>
            <text x="569" y="27" textAnchor="middle" fontSize="6" fill="#3b82f6" fontWeight="600">Driver</text>

            {/* View 바인딩: x=578, w=86, right=664, cx=621 */}
            <rect x="578" y="14" width="86" height="40" rx="8"
              fill="rgba(59,130,246,0.04)" stroke="rgba(59,130,246,0.3)" strokeWidth="1.5" strokeDasharray="5 3"/>
            <text x="621" y="30" textAnchor="middle" fontSize="9" fontWeight="600" fill="#3b82f6">View 바인딩 ↩</text>
            <text x="621" y="44" textAnchor="middle" fontSize="6" fill="#94a3b8">사이클 완성</text>

            {/* @PresentState 주석 (State 하단에 부속) */}
            <line x1="530" y1="54" x2="530" y2="62"
              stroke="rgba(124,58,237,0.4)" strokeWidth="1" strokeDasharray="2 2"/>
            <rect x="484" y="62" width="92" height="38" rx="4"
              fill="rgba(124,58,237,0.04)" stroke="rgba(124,58,237,0.25)" strokeWidth="1" strokeDasharray="4 2"/>
            <text x="530" y="76" textAnchor="middle" fontSize="7.5" fill="#7c3aed" fontWeight="700">@PresentState</text>
            <text x="530" y="87" textAnchor="middle" fontSize="6" fill="#94a3b8">특정 프로퍼티 변경만 감지</text>
            <text x="530" y="96" textAnchor="middle" fontSize="6" fill="#94a3b8">present()로 화면 전환에 활용</text>

          </svg>
        </div>
      </ContentCard>
    </FadeInView>
  );
}
