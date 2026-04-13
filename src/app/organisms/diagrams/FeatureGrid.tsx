import { FeatureCard } from "../FeatureCard";

export function FeatureGrid({ features }: { features: { title: string; desc: string }[] }) {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {features.map((f) => (
        <FeatureCard key={f.title} title={f.title}>{f.desc}</FeatureCard>
      ))}
    </div>
  );
}
