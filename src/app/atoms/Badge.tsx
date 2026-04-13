import { cn } from "../components/ui/utils";

export function Badge({
  children,
  variant = "primary",
  size = "sm",
  className,
}: {
  children: React.ReactNode;
  variant?: "primary" | "destructive" | "success";
  size?: "xs" | "sm";
  className?: string;
}) {
  const colorClass = {
    primary: "bg-primary/10 text-primary",
    destructive: "bg-destructive/10 text-destructive",
    success: "bg-green-500/10 text-green-600 dark:text-green-400",
  }[variant];

  const sizeClass = {
    xs: "text-xs px-2 py-0.5",
    sm: "text-sm-md px-4 py-2",
  }[size];

  return (
    <span className={cn("inline-block rounded-full font-semibold", colorClass, sizeClass, className)}>
      {children}
    </span>
  );
}
