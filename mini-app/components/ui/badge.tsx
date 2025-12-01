import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "destructive" | "secondary" | "outline";
}

export function Badge({ variant = "default", className, ...props }: BadgeProps) {
  const base =
    "inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium";
  const variants = {
    default: "bg-muted text-muted-foreground",
    destructive: "bg-destructive text-destructive-foreground",
    secondary: "bg-secondary text-secondary-foreground",
    outline: "border border-input text-foreground",
  };
  return (
    <span className={cn(base, variants[variant], className)} {...props} />
  );
}
