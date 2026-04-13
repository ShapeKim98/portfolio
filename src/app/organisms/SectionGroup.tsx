import { FadeInView } from "./animation";
import { SubSectionTitle } from "../atoms";

export function SectionGroup({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-12">
      <FadeInView>
        <SubSectionTitle size="xl" className="mb-3">
          {title}
        </SubSectionTitle>
      </FadeInView>
      {children}
    </div>
  );
}
