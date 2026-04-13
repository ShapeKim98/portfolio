import { FadeInView } from "../animation";
import { ContentCard } from "../ContentCard";

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
