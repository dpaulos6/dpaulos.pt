import { ArrowUpRight, Layers3 } from "lucide-react";
import type { ComponentProps } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ProjectVisual } from "./project-visual";
import { TechBadge } from "./tech-badge";

type ProjectCardProps = ComponentProps<typeof Card> & {
  name: string;
  kind: string;
  description: string;
  tags: readonly string[];
  highlights: readonly string[];
  featured?: boolean;
  compact?: boolean;
  modules?: ReadonlyArray<{
    name: string;
    description: string;
  }>;
  links?: ReadonlyArray<{
    href: string;
    label: string;
  }>;
};

function ProjectCard({
  className,
  name,
  kind,
  description,
  tags,
  highlights,
  featured = false,
  compact = false,
  modules,
  links,
  ...props
}: ProjectCardProps) {
  return (
    <Card
      className={cn(
        "group flex flex-col self-start border-border/70 bg-card transition-colors duration-200 hover:border-foreground/30 hover:bg-muted/30",
        featured &&
          "border-foreground/20 lg:grid lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]",
        compact && "rounded-none",
        className
      )}
      {...props}
    >
      <CardHeader
        className={cn(
          "space-y-3 p-5 sm:p-6",
          featured && "lg:border-border/70 lg:border-r lg:p-8",
          compact && "p-5"
        )}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.12em]">
              {kind}
            </p>
            <CardTitle
              className={cn(
                "tracking-[-0.04em]",
                featured ? "text-2xl sm:text-3xl" : "text-xl"
              )}
            >
              {name}
            </CardTitle>
          </div>
          {featured ? <Layers3 className="mt-0.5 size-4 text-primary" /> : null}
        </div>
        <CardDescription className="text-sm leading-6">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent
        className={cn(
          "flex flex-col space-y-5 px-5 pb-5 sm:px-6 sm:pb-6",
          featured && "lg:p-8",
          compact && "px-5 pb-5"
        )}
      >
        {featured ? <ProjectVisual name={name} /> : null}
        {compact ? null : (
          <ul className="space-y-2 text-muted-foreground text-sm leading-6">
            {highlights.slice(0, featured ? 3 : 2).map((highlight) => (
              <li className="flex gap-3" key={highlight}>
                <span className="mt-2.5 size-1 shrink-0 bg-primary/70" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        )}
        {modules ? (
          <div className="grid gap-2 border-border/70 border-t pt-4">
            {modules.map((module) => (
              <div
                className="border border-border/60 bg-muted/45 p-3"
                key={module.name}
              >
                <p className="font-medium text-sm tracking-[-0.02em]">
                  {module.name}
                </p>
                <p className="mt-1 text-muted-foreground text-xs leading-5">
                  {module.description}
                </p>
              </div>
            ))}
          </div>
        ) : null}
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <TechBadge key={tag}>{tag}</TechBadge>
          ))}
        </div>
        {links && links.length > 0 ? (
          <div className="flex flex-wrap gap-2 pt-1">
            {links.map((link) => (
              <Button asChild key={link.href} size="sm" variant="outline">
                <a href={link.href} rel="noreferrer" target="_blank">
                  <ArrowUpRight className="size-3.5" />
                  {link.label}
                </a>
              </Button>
            ))}
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}

export { ProjectCard };
