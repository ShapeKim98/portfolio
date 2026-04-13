import { FadeInView } from "../animation";
import { ContentCard } from "../ContentCard";

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
