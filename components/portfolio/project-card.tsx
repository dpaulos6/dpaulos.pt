import { ArrowUpRight } from "lucide-react";
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

import { TechBadge } from "./tech-badge";

type ProjectCardProps = ComponentProps<typeof Card> & {
  name: string;
  description: string;
  tags: string[];
  links?: Array<{
    href: string;
    label: string;
  }>;
};

function ProjectCard({
  className,
  name,
  description,
  tags,
  links,
  ...props
}: ProjectCardProps) {
  return (
    <Card
      className={cn(
        "group border-border/70 bg-card/90 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md",
        className
      )}
      {...props}
    >
      <CardHeader className="space-y-3 p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <CardTitle className="text-lg tracking-[-0.03em]">{name}</CardTitle>
          <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.24em]">
            Project
          </span>
        </div>
        <CardDescription className="text-sm leading-6">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 px-5 pb-5 sm:px-6 sm:pb-6">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <TechBadge key={tag}>{tag}</TechBadge>
          ))}
        </div>
        {links && links.length > 0 ? (
          <div className="flex flex-wrap gap-2">
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
