export function NumberedStep({
  index,
  children,
}: {
  index: number;
  children: React.ReactNode;
}) {
  return (
    <div className="p-5 rounded-xl bg-muted/40 border border-border">
      <div className="flex items-start gap-3">
        <span className="shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-semibold flex items-center justify-center mt-0.5">
          {index}
        </span>
        <p className="text-sm-md font-normal text-foreground leading-loose">{children}</p>
      </div>
    </div>
  );
}
