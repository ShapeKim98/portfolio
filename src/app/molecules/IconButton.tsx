import { cn } from "../components/ui/utils";

export function IconButton({
  href,
  variant = "primary",
  size = "md",
  icon,
  children,
  className,
  ...rest
}: {
  href?: string;
  variant?: "primary" | "secondary" | "link";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className" | "children">) {
  const variantClass = {
    primary: "bg-foreground hover:opacity-90 transition-opacity",
    secondary: "border border-border text-foreground hover:bg-muted transition-colors",
    link: "text-primary hover:underline transition-colors",
  }[variant];

  const sizeClass = {
    sm: "gap-2 px-4 py-2 rounded-lg text-sm-md",
    md: "gap-2 px-5 py-2.5 rounded-full text-base",
    lg: "gap-3 px-6 py-3 rounded-xl text-base",
  }[size];

  const variantStyle = variant === "primary" ? { color: "var(--background)" } : variant === "link" ? undefined : undefined;

  return (
    <a
      href={href}
      className={cn("inline-flex items-center font-medium", variantClass, sizeClass, className)}
      style={variantStyle}
      {...rest}
    >
      {icon}
      {children}
    </a>
  );
}
