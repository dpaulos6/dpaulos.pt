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
  date: string;
  bullets: string[];
};

function ExperienceItem({
  className,
  company,
  role,
  date,
  bullets,
  ...props
}: ExperienceItemProps) {
  return (
    <article
      className={cn(
        "grid gap-4 rounded-2xl border border-border/70 bg-card/90 p-5 shadow-sm sm:p-6",
        className
      )}
      {...props}
    >
      <CardHeader className="p-0">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
          <CardTitle className="text-lg tracking-[-0.03em]">
            {company}
          </CardTitle>
          <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.24em]">
            {date}
          </span>
        </div>
        <CardDescription className="text-sm leading-6">{role}</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <ul className="space-y-2 text-muted-foreground text-sm leading-6">
          {bullets.map((bullet) => (
            <li className="flex gap-3" key={bullet}>
              <span className="mt-[0.55rem] size-1.5 shrink-0 rounded-full bg-foreground/30" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </article>
  );
}

export { ExperienceItem };
