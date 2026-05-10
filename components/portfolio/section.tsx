import type { ComponentProps, ReactNode } from "react";

import { cn } from "@/lib/utils";

import { Container } from "./container";

type SectionProps = ComponentProps<"section"> & {
  eyebrow?: string;
  title?: string;
  description?: ReactNode;
};

function Section({
  className,
  eyebrow,
  title,
  description,
  children,
  ...props
}: SectionProps) {
  return (
    <section className={cn("py-8 sm:py-10 lg:py-12", className)} {...props}>
      <Container>
        {(eyebrow || title || description) && (
          <div className="mb-6 max-w-2xl space-y-3">
            {eyebrow ? (
              <p className="font-mono text-muted-foreground text-xs uppercase tracking-[0.24em]">
                {eyebrow}
              </p>
            ) : null}
            {title ? (
              <h2 className="font-semibold text-2xl tracking-[-0.04em] sm:text-3xl">
                {title}
              </h2>
            ) : null}
            {description ? (
              <div className="max-w-xl text-muted-foreground text-sm leading-6 sm:text-base">
                {description}
              </div>
            ) : null}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}

export { Section };
