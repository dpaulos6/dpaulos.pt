import { Badge } from "@/components/ui/badge";

export interface ProjectModuleGroup {
  description: string;
  expanded?: boolean;
  modules: ReadonlyArray<{
    name: string;
    description: string;
    status: "Completed" | "In Development" | "Planned";
  }>;
  title: string;
}

export function ProjectModules({
  groups,
}: {
  groups: readonly ProjectModuleGroup[];
}) {
  return (
    <div className="divide-y divide-border border-border border-y">
      {groups.map((group) => (
        <details className="py-3" key={group.title} open={group.expanded}>
          <summary className="cursor-pointer py-1 font-medium text-sm focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-4">
            {group.title}{" "}
            <span className="font-mono text-muted-foreground text-xs">
              ({group.modules.length})
            </span>
          </summary>
          <p className="mt-2 text-muted-foreground text-xs leading-5">
            {group.description}
          </p>
          <ul className="mt-3 grid gap-3 sm:grid-cols-2">
            {group.modules.map((module) => (
              <li
                className="min-w-0 border border-border/70 p-3"
                key={module.name}
              >
                <div className="flex flex-wrap items-start gap-2">
                  <h4 className="min-w-0 font-mono text-xs leading-5">
                    {module.name}
                  </h4>
                  <Badge
                    className="text-[9px] normal-case tracking-normal"
                    variant={
                      module.status === "Planned" ? "outline" : "secondary"
                    }
                  >
                    {module.status}
                  </Badge>
                </div>
                <p className="mt-2 text-muted-foreground text-xs leading-5">
                  {module.description}
                </p>
              </li>
            ))}
          </ul>
        </details>
      ))}
    </div>
  );
}
