import { FadeInView } from "../animation";
import { ContentCard } from "../ContentCard";

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

                {/* 화살표: Participant ← ChatRoom */}
                <div className="flex flex-col items-center px-1 shrink-0">
                  <svg width="64" height="16" viewBox="0 0 64 16">
                    <path d="M60 8H12M16 4L4 8l12 4" fill="none" stroke="#f97316" strokeWidth="1.5" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-3xs text-orange-400 font-medium whitespace-nowrap">participants</span>
                </div>

                {/* ChatRoom (중앙) */}
                <div className="flex flex-col items-center">
                  <div className="px-3 py-2 rounded-xl border-2 border-primary/50 bg-primary/10">
                    <span className="text-xs font-bold text-primary">ChatRoom</span>
                  </div>
                  <span className="text-2xs font-bold text-primary mt-1">1</span>
                </div>

                {/* 화살표: ChatRoom → ChatMessage */}
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
