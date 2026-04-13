import { cn } from "../components/ui/utils";

export function TwoColumnLayout({
  left,
  right,
  className,
}: {
  left: React.ReactNode;
  right: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("grid md:grid-cols-2 gap-8 items-start", className)}>
      {left}
      {right}
    </div>
  );
}
