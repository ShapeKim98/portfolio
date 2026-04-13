import { cn } from "../components/ui/utils";

export function FeatureCard({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("p-5 rounded-xl bg-muted/40 border border-border", className)}>
      <h6 className="text-base font-semibold text-foreground mb-2">{title}</h6>
      <div className="text-sm-md font-normal text-muted-foreground leading-loose">{children}</div>
    </div>
  );
}
