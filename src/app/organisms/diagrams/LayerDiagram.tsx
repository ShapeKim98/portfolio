import { FadeInView } from "../animation";
import { ContentCard } from "../ContentCard";

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
