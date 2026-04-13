export function ProblemSolvingBlock({
  problem,
  solution,
  detail,
}: {
  problem: string;
  solution: string;
  detail?: string;
}) {
  return (
    <div className="p-5 rounded-xl border border-border bg-card">
      <div className="flex items-start gap-3 mb-3">
        <span className="shrink-0 mt-0.5 px-2 py-0.5 rounded bg-destructive/10 text-destructive text-xs font-semibold">
          Problem
        </span>
        <p className="text-sm-md font-medium text-foreground leading-loose">{problem}</p>
      </div>
      <div className="flex items-start gap-3">
        <span className="shrink-0 mt-0.5 px-2 py-0.5 rounded bg-green-500/10 text-green-600 dark:text-green-400 text-xs font-semibold">
          Solution
        </span>
        <div>
          <p className="text-sm-md font-medium text-foreground leading-loose">{solution}</p>
          {detail && (
            <p className="text-sm font-normal text-muted-foreground leading-loose mt-1.5">{detail}</p>
          )}
        </div>
      </div>
    </div>
  );
}
