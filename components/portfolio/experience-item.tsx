import type { ComponentProps } from "react";

import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

type ExperienceItemProps = ComponentProps<"article"> & {
  company: string;
  role: string;
  period: string;
  emphasis: string;
  summary: string;
  highlights: readonly string[];
};

function ExperienceItem({
  className,
  company,
  role,
  period,
  emphasis,
  summary,
  highlights,
  ...props
}: ExperienceItemProps) {
  return (
    <article
      className={cn(
        "relative grid gap-4 border border-border/70 bg-card p-5 transition-colors hover:border-foreground/30 hover:bg-muted/30 sm:grid-cols-[minmax(11rem,0.45fr)_minmax(0,1fr)] sm:gap-8 sm:p-6",
        className
      )}
      {...props}
    >
      <CardHeader className="space-y-3 p-0">
        <div className="space-y-2">
          <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.12em]">
            {emphasis}
          </p>
          <CardTitle className="text-lg tracking-[-0.03em]">
            {company}
          </CardTitle>
        </div>
        <CardDescription className="text-sm leading-6">{role}</CardDescription>
        <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.12em]">
          {period}
        </span>
      </CardHeader>
      <CardContent className="space-y-4 p-0">
        <p className="text-foreground text-sm leading-6">{summary}</p>
        <ul className="space-y-2 text-muted-foreground text-sm leading-6">
          {highlights.map((highlight) => (
            <li className="flex gap-3" key={highlight}>
              <span className="mt-[0.55rem] size-1.5 shrink-0 bg-primary/60" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </article>
  );
}

export { ExperienceItem };
