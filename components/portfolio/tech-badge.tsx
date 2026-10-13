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
        "rounded-none border-border/70 bg-background px-2 py-1 font-mono text-[10px] text-foreground normal-case tracking-[0.04em]",
        className
      )}
      variant="outline"
    >
      {children}
    </Badge>
  );
}

export { TechBadge };
