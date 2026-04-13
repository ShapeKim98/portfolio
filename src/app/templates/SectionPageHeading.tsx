import { FadeInView } from "../organisms/animation";
import { SectionHeading } from "./SectionHeading";

export function SectionPageHeading({
  children,
  accent,
}: {
  children: React.ReactNode;
  accent?: "primary" | "foreground";
}) {
  return (
    <FadeInView speed={1.2}>
      <div className="mb-16">
        <SectionHeading accent={accent}>
          <h2 className="text-6xl font-bold tracking-tighter leading-snug text-foreground">
            {children}
          </h2>
        </SectionHeading>
      </div>
    </FadeInView>
  );
}
