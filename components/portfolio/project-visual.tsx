import { ArrowRight, Check } from "lucide-react";
import type { ReactNode } from "react";

function Preview({ label, children }: { label: string; children: ReactNode }) {
  return (
    <figure className="m-0 mb-2 border border-border/80 bg-background/60 text-xs">
      <figcaption className="border-border/80 border-b px-4 py-2 font-mono text-[10px] text-muted-foreground">
        {label}
      </figcaption>
      <div className="p-4">{children}</div>
    </figure>
  );
}

function SocktVisual() {
  return (
    <Preview label="Sockt / illustrative conversation">
      <div className="space-y-3 font-mono leading-5">
        <p className="flex flex-wrap items-center gap-x-4 gap-y-1 text-muted-foreground">
          <span className="flex items-center gap-2">
            <span aria-hidden="true" className="size-1.5 bg-foreground" />
            alex · connected
          </span>
          <span className="flex items-center gap-2">
            <span aria-hidden="true" className="size-1.5 bg-foreground" />
            sam · connected
          </span>
        </p>
        <div className="space-y-1 border-border/70 border-l pl-3">
          <p>
            <span className="text-muted-foreground">alex › </span>Can you see
            this?
          </p>
          <p>
            <span className="text-muted-foreground">sam › </span>Loud and clear.
          </p>
          <p>
            <span className="text-muted-foreground">alex › </span>Good.
            Let&apos;s build.
          </p>
        </div>
        <p className="text-muted-foreground">
          WebSocket connection · messages persisted
        </p>
      </div>
    </Preview>
  );
}

function PocktVisual() {
  return (
    <Preview label="Pockt / illustrative sample data · EUR">
      <div className="grid gap-4">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-muted-foreground">Account balance</p>
            <p className="mt-1 font-medium text-2xl tracking-tight">
              €1,250.00
            </p>
          </div>
          <div className="text-right font-mono text-[10px] leading-5">
            <p>Income +€1,500</p>
            <p className="text-muted-foreground">Expenses −€250</p>
          </div>
        </div>
        <div aria-hidden="true" className="flex h-2 gap-1">
          <span className="flex-[6] bg-foreground/65" />
          <span className="flex-1 bg-foreground/20" />
        </div>
        <dl className="divide-y divide-border/70 border-border/70 border-t">
          <div className="flex justify-between gap-3 py-2">
            <dt>
              Income <span className="text-muted-foreground">· Salary</span>
            </dt>
            <dd className="font-mono">+€1,500.00</dd>
          </div>
          <div className="flex justify-between gap-3 pt-2">
            <dt>
              Expense <span className="text-muted-foreground">· Groceries</span>
            </dt>
            <dd className="font-mono">−€250.00</dd>
          </div>
        </dl>
      </div>
    </Preview>
  );
}

function ArcSuiteVisual() {
  return (
    <Preview label="ArcSuite / existing modules · In Development">
      <div className="text-center">
        <div className="mx-auto w-fit border border-border bg-muted/40 px-5 py-2">
          <p className="font-medium">ArcSuite</p>
          <p className="mt-1 text-[10px] text-muted-foreground">
            Modular Minecraft server platform
          </p>
        </div>
        <div aria-hidden="true" className="mx-auto h-4 w-px bg-border" />
        <div className="grid grid-cols-2">
          {[
            { name: "ArcClaims", purpose: "Land management" },
            { name: "ArcIdentity", purpose: "Identity providers" },
          ].map((module) => (
            <div
              className="relative border-border border-t px-1.5 pt-4"
              key={module.name}
            >
              <div
                aria-hidden="true"
                className="absolute top-0 left-1/2 h-4 w-px bg-border"
              />
              <div className="border border-border px-2 py-2">
                <p className="font-mono">{module.name}</p>
                <p className="mt-1 text-[10px] text-muted-foreground">
                  {module.purpose}
                </p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-3 text-[10px] text-muted-foreground">
          Explicit integration contracts between modules
        </p>
      </div>
    </Preview>
  );
}

function VersifyVisual() {
  return (
    <Preview label="Versify / illustrative release sequence">
      <div className="flex flex-wrap items-center gap-3 font-mono text-lg">
        <span className="text-muted-foreground">v0.9.2</span>
        <ArrowRight
          aria-hidden="true"
          className="size-4 text-muted-foreground"
        />
        <span>v0.10.0</span>
      </div>
      <ol className="mt-4 grid gap-2 sm:grid-cols-2">
        {[
          "Version updated",
          "Commit created",
          "Tag generated",
          "Release ready",
        ].map((step) => (
          <li
            className="flex items-center gap-2 font-mono text-[11px]"
            key={step}
          >
            <Check
              aria-hidden="true"
              className="size-3 text-muted-foreground"
            />
            {step}
          </li>
        ))}
      </ol>
    </Preview>
  );
}

export function ProjectVisual({ name }: { name: string }) {
  switch (name) {
    case "Sockt":
      return <SocktVisual />;
    case "Pockt":
      return <PocktVisual />;
    case "ArcSuite":
      return <ArcSuiteVisual />;
    case "Versify":
      return <VersifyVisual />;
    default:
      return null;
  }
}
