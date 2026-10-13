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
    <section className={cn("py-12 sm:py-16 lg:py-20", className)} {...props}>
      <Container>
        {(eyebrow || title || description) && (
          <div className="mb-8 max-w-3xl space-y-3 sm:mb-10">
            {eyebrow ? (
              <p className="font-mono text-muted-foreground text-xs uppercase tracking-[0.14em]">
                {eyebrow}
              </p>
            ) : null}
            {title ? (
              <h2 className="max-w-2xl font-semibold text-3xl tracking-[-0.05em] sm:text-4xl">
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
