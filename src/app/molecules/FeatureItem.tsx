export function FeatureItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 p-4 rounded-xl bg-muted/40 border border-border">
      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
      <span className="text-base font-medium text-foreground">{children}</span>
    </div>
  );
}
