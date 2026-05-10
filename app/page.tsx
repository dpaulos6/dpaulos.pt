import { ArrowUpRight, Mail } from "lucide-react";
import { Container } from "@/components/portfolio/container";
import { ExperienceItem } from "@/components/portfolio/experience-item";
import { ProjectCard } from "@/components/portfolio/project-card";
import { Section } from "@/components/portfolio/section";
import { TechBadge } from "@/components/portfolio/tech-badge";
import { TerminalCard } from "@/components/portfolio/terminal-card";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const projects = [
  {
    name: "luma",
    description:
      "A personal finance and cash-planning app for seeing money ahead, with recurring income, expenses, targets, and a calm 12-month projection.",
    tags: ["Next.js", "cashflow", "personal finance"],
  },
  {
    name: "digestify",
    description:
      "A focused content utility for reducing noise into something readable, structured, and easier to act on.",
    tags: ["content", "clarity", "tooling"],
  },
  {
    name: "wouldyoubot",
    description:
      "A compact product experiment built around one simple interaction, minimal surface area, and fast feedback.",
    tags: ["interaction", "experiment", "product thinking"],
  },
  {
    name: "portfolio",
    description:
      "The public home for my work, built as a clean developer-product page instead of a traditional résumé site.",
    tags: ["portfolio", "minimal UI", "Next.js"],
  },
];

const experience = [
  {
    company: "Bomsite",
    role: "Full-stack developer",
    date: "Sep 2025 - Current",
    bullets: [
      "Building and maintaining business web applications with C#, ASP.NET, Razor, Entity Framework, and SQL Server.",
      "Working on PHC-connected workflows, integrations, exports, dashboards, and operational tools for real clients.",
      "Balancing enterprise requirements with cleaner interfaces, safer data flows, and more maintainable code.",
    ],
  },
  {
    company: "Independent projects",
    role: "Product-minded development",
    date: "Ongoing",
    bullets: [
      "Designing small tools like Luma with a focus on practical usefulness, calm visuals, and direct interaction.",
      "Exploring Next.js, TypeScript, Tailwind, shadcn/ui, authentication, database modeling, and deployment workflows.",
      "Using side projects to sharpen product thinking, interface quality, and full-stack execution.",
    ],
  },
  {
    company: "Instituto Politécnico de Santarém",
    role: "Software development student",
    date: "2022 - 2024",
    bullets: [
      "Built programming, database, and web development fundamentals while shipping small practical projects.",
      "Combined academic work with real implementations, from interfaces to backend logic and data handling.",
      "Developed the habit of turning abstract requirements into structured, usable software.",
    ],
  },
];

const stack = [
  {
    title: "Frontend",
    subtitle: "Interface, rendering, and product feel.",
    items: ["Next.js", "TypeScript", "React", "Tailwind CSS", "shadcn/ui"],
  },
  {
    title: "Backend",
    subtitle: "Application logic and business workflows.",
    items: [
      "C#",
      "ASP.NET",
      "Razor",
      "Entity Framework",
      "Node.js",
      "Route Handlers",
      "Better Auth",
      "Zod",
    ],
  },
  {
    title: "Data",
    subtitle: "Persistence, queries, and operational data.",
    items: [
      "SQL Server",
      "PostgreSQL",
      "Drizzle",
      "Schemas",
      "Forms",
      "Exports",
    ],
  },
  {
    title: "Tools",
    subtitle: "Design, quality, and delivery workflow.",
    items: [
      "Git",
      "Vercel",
      "Biome",
      "Google Fonts",
      "next-themes",
      "Lucide Icons",
      "PHC integrations",
    ],
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(17,17,17,0.04),transparent_36%),linear-gradient(180deg,rgba(17,17,17,0.02),transparent_24%)] dark:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_36%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent_24%)]" />

      <Container className="py-4 sm:py-6">
        <header className="flex flex-col gap-4 border-border border-b pb-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center justify-between gap-4">
            <a
              className="font-medium text-sm tracking-[-0.02em] transition-colors hover:text-muted-foreground"
              href="#top"
            >
              Diogo Paulos
            </a>
            <div className="sm:hidden">
              <ThemeToggle />
            </div>
          </div>

          <nav
            aria-label="Primary"
            className="flex flex-wrap items-center gap-1"
          >
            <Button asChild size="sm" variant="ghost">
              <a href="#work">Work</a>
            </Button>
            <Button asChild size="sm" variant="ghost">
              <a href="#projects">Projects</a>
            </Button>
            <Button asChild size="sm" variant="ghost">
              <a href="#stack">Stack</a>
            </Button>
            <Button asChild size="sm" variant="ghost">
              <a href="#contact">Contact</a>
            </Button>
            <div className="hidden sm:block">
              <ThemeToggle />
            </div>
          </nav>
        </header>
      </Container>

      <Container className="pt-8 sm:pt-12 lg:pt-16" id="top">
        <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div className="space-y-7">
            <div className="space-y-3">
              <p className="font-mono text-muted-foreground text-xs uppercase tracking-[0.28em]">
                Full-stack developer from Portugal
              </p>
              <h1 className="max-w-3xl font-semibold text-4xl tracking-[-0.065em] sm:text-5xl lg:text-6xl">
                I build quiet web products and practical business tools.
              </h1>
              <p className="max-w-2xl text-base text-muted-foreground leading-7 sm:text-lg">
                I&apos;m a full-stack developer at Bomsite and a software
                development student based in Portugal. I work across Next.js,
                C#, ASP.NET, SQL Server, and product interfaces, building
                internal platforms, integrations, dashboards, and small personal
                tools like Luma.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <Button asChild size="sm" variant="outline">
                <a href="#projects">View projects</a>
              </Button>
              <Button asChild size="sm" variant="outline">
                <a href="mailto:dpaulos6@outlook.com">
                  <Mail className="size-3.5" />
                  Contact me
                </a>
              </Button>
              <Button asChild size="sm" variant="ghost">
                <a
                  href="https://github.com/dpaulos6"
                  rel="noreferrer"
                  target="_blank"
                >
                  GitHub
                </a>
              </Button>
            </div>

            <Card className="border-border/70 bg-card/90">
              <CardHeader className="space-y-2">
                <CardDescription>Current direction</CardDescription>
                <CardTitle className="text-lg tracking-[-0.03em]">
                  Minimal interfaces, useful systems, and reliable execution.
                </CardTitle>
              </CardHeader>
              <CardContent className="grid gap-3 text-muted-foreground text-sm leading-6 sm:grid-cols-3">
                <div className="rounded-xl border border-border/70 bg-background/50 p-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.24em]">
                    Work
                  </p>
                  <p className="mt-2">
                    Business apps, PHC workflows, dashboards, and integrations.
                  </p>
                </div>
                <div className="rounded-xl border border-border/70 bg-background/50 p-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.24em]">
                    Product
                  </p>
                  <p className="mt-2">
                    Luma and small tools built around clear, practical use.
                  </p>
                </div>
                <div className="rounded-xl border border-border/70 bg-background/50 p-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.24em]">
                    Taste
                  </p>
                  <p className="mt-2">
                    Calm visuals, precise copy, strong hierarchy, no noise.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:sticky lg:top-6">
            <TerminalCard
              lines={[
                { label: "whoami", value: "Diogo Paulos" },
                {
                  label: "stack",
                  value:
                    "Next.js · TypeScript · C# · ASP.NET · SQL Server · Tailwind · shadcn/ui",
                },
                {
                  label: "focus",
                  value:
                    "Clean interfaces, business tooling, integrations, and cashflow products.",
                },
                { label: "current", value: "Bomsite · Portugal" },
                { label: "building", value: "Luma — see your money ahead." },
              ]}
              title="session"
            />
          </div>
        </section>
      </Container>

      <Section
        description="A small set of projects and experiments shaped around utility, restraint, and clear product thinking."
        eyebrow="Selected work"
        id="projects"
        title="Projects that feel like products"
      >
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              description={project.description}
              key={project.name}
              name={project.name}
              tags={project.tags}
            />
          ))}
        </div>
      </Section>

      <Section
        description="A short view of where the work comes from: real business software, independent product building, and formal study."
        eyebrow="Experience"
        id="work"
        title="Work and studies"
      >
        <div className="grid gap-4">
          {experience.map((item) => (
            <ExperienceItem
              bullets={item.bullets}
              company={item.company}
              date={item.date}
              key={item.company}
              role={item.role}
            />
          ))}
        </div>
      </Section>

      <Section
        description="The stack I use to move from interface to logic, data, integrations, and deployment."
        eyebrow="Stack"
        id="stack"
        title="What I build with"
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {stack.map((group) => (
            <Card className="border-border/70 bg-card/90" key={group.title}>
              <CardHeader className="space-y-2 p-5">
                <CardDescription>{group.subtitle}</CardDescription>
                <CardTitle className="text-base tracking-[-0.03em]">
                  {group.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2 p-5 pt-0">
                {group.items.map((item) => (
                  <TechBadge key={item}>{item}</TechBadge>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        description="For full-stack work, product experiments, or anything that should be minimal, fast, and precise."
        eyebrow="Contact"
        id="contact"
        title="Let&apos;s keep it direct"
      >
        <div className="flex flex-wrap gap-2">
          <Button asChild variant="outline">
            <a href="mailto:dpaulos6@outlook.com">
              <Mail className="size-3.5" />
              Email
            </a>
          </Button>
          <Button asChild variant="outline">
            <a
              href="https://github.com/dpaulos6"
              rel="noreferrer"
              target="_blank"
            >
              <ArrowUpRight className="size-3.5" />
              GitHub
            </a>
          </Button>
          <Button asChild variant="outline">
            <a
              href="https://pt.linkedin.com/in/dpaulos6"
              rel="noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
          </Button>
          <Button asChild variant="outline">
            <a
              href="https://www.instagram.com/dpaulos6"
              rel="noreferrer"
              target="_blank"
            >
              Instagram
            </a>
          </Button>
        </div>
      </Section>

      <Container className="pb-8">
        <Separator className="mb-4" />
        <footer className="flex flex-col gap-2 text-muted-foreground text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>Minimal portfolio for Diogo Paulos.</p>
          <p>
            Built with Next.js, shadcn/ui, Tailwind, and theme-aware styles.
          </p>
        </footer>
      </Container>
    </main>
  );
}
