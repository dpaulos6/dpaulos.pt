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
        "inline-flex items-center rounded-none border px-2 py-1 font-medium text-[10px] uppercase tracking-[0.14em] transition-colors",
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
