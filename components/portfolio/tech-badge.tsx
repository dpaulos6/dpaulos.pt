import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface TechBadgeProps {
  children: string;
  className?: string;
}

function TechBadge({ children, className }: TechBadgeProps) {
  return (
    <Badge
      className={cn(
        "rounded-md border-border/70 bg-background/60 font-mono text-[10px] text-foreground uppercase tracking-[0.16em]",
        className
      )}
      variant="outline"
    >
      {children}
    </Badge>
  );
}

export { TechBadge };
