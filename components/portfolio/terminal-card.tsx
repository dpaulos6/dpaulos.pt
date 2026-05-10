import type { ComponentProps } from "react";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface TerminalLine {
  label: string;
  value: string;
}

type TerminalCardProps = ComponentProps<typeof Card> & {
  title?: string;
  lines: TerminalLine[];
};

function TerminalCard({
  className,
  title = "Terminal",
  lines,
  ...props
}: TerminalCardProps) {
  return (
    <Card
      className={cn(
        "overflow-hidden border-border/70 bg-card/90 shadow-sm backdrop-blur",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-2 border-border/70 border-b px-4 py-3">
        <div className="flex gap-1.5">
          <span className="size-2 rounded-full bg-muted-foreground/20" />
          <span className="size-2 rounded-full bg-muted-foreground/20" />
          <span className="size-2 rounded-full bg-muted-foreground/20" />
        </div>
        <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.24em]">
          {title}
        </span>
      </div>

      <div className="space-y-4 p-4 sm:p-5">
        {lines.map((line) => (
          <div className="space-y-1" key={line.label}>
            <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.24em]">
              $ {line.label}
            </div>
            <div className="rounded-xl border border-border/60 bg-muted/30 px-3 py-2 font-mono text-foreground text-sm leading-6">
              {line.value}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

export { TerminalCard };
