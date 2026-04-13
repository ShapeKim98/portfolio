import { cn } from "../components/ui/utils";

export function DotSeparator({ className }: { className?: string }) {
  return (
    <span className={cn("w-1 h-1 rounded-full bg-border shrink-0", className)} />
  );
}
