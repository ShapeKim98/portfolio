import { cn } from "../components/ui/utils";

export function SectionInner({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("relative z-10 max-w-5xl mx-auto", className)}>
      {children}
    </div>
  );
}
