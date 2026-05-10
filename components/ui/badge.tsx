import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

function Badge({
  className,
  variant = "secondary",
  ...props
}: ComponentProps<"span"> & {
  variant?: "default" | "secondary" | "outline";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 font-medium text-[10px] uppercase tracking-[0.28em] transition-colors",
        variant === "default" &&
          "border-transparent bg-primary text-primary-foreground",
        variant === "secondary" &&
          "border-border bg-muted text-muted-foreground",
        variant === "outline" && "border-border bg-transparent text-foreground",
        className
      )}
      data-slot="badge"
      data-variant={variant}
      {...props}
    />
  );
}

export { Badge };
