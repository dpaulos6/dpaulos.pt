import {
  ArrowDownRight,
  Boxes,
  Code2,
  GitFork,
  Link2,
  MapPin,
  Server,
} from "lucide-react";
import { Container } from "@/components/portfolio/container";
import { CopyEmail } from "@/components/portfolio/copy-email";
import { ExperienceItem } from "@/components/portfolio/experience-item";
import { ProjectCard } from "@/components/portfolio/project-card";
import { Section } from "@/components/portfolio/section";
import { TechBadge } from "@/components/portfolio/tech-badge";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  education,
  experiences,
  personStructuredData,
  primaryNavigation,
  projects,
  stackGroups,
} from "@/lib/portfolio-data";
import { siteConfig } from "@/lib/site";

const currentYear = new Date().getFullYear();

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <Container className="sticky top-0 z-20 pt-3 sm:pt-5">
        <header className="surface-noise flex min-h-13 items-center justify-between border border-border/80 px-3 sm:px-4">
          <a className="group flex items-center gap-2.5" href="#top">
            <span className="grid size-7 place-items-center bg-primary font-mono font-semibold text-[10px] text-primary-foreground">
              DP
            </span>
            <span className="font-medium text-sm tracking-[-0.03em]">
              Diogo Paulos
            </span>
          </a>
          <div className="flex items-center gap-1">
            <nav
              aria-label="Primary"
              className="hidden items-center gap-1 md:flex"
            >
              {primaryNavigation.map((item) => (
                <Button asChild key={item.href} size="sm" variant="ghost">
                  <a href={item.href}>{item.label}</a>
                </Button>
              ))}
            </nav>
            <details className="relative md:hidden">
              <summary className="inline-flex h-8 cursor-pointer list-none items-center rounded-sm border border-border bg-background px-2.5 font-medium text-sm marker:content-none hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring">
                Menu
              </summary>
              <nav
                aria-label="Mobile primary"
                className="surface-noise absolute top-10 right-0 grid w-40 gap-1 border border-border p-2"
              >
                {primaryNavigation.map((item) => (
                  <a
                    className="px-3 py-2 text-sm hover:bg-muted focus-visible:bg-muted focus-visible:outline-none"
                    href={item.href}
                    key={item.href}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </details>
            <ThemeToggle />
          </div>
        </header>
      </Container>

      <Container
        className="pt-16 pb-20 sm:pt-24 sm:pb-28 lg:pt-32 lg:pb-36"
        id="top"
      >
        <section className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_21rem] lg:items-end lg:gap-16">
          <div>
            <p className="section-label">Full-stack developer · Portugal</p>
            <h1 className="mt-5 max-w-4xl font-semibold text-5xl tracking-[-0.075em] sm:text-6xl lg:text-7xl">
              Building software
              <span className="block text-muted-foreground">
                from interface to infrastructure.
              </span>
            </h1>
            <p className="mt-7 max-w-2xl text-base text-muted-foreground leading-7 sm:text-lg sm:leading-8">
              I&apos;m Diogo, a Portuguese full-stack developer shaping
              dependable applications, useful tooling, and backend systems
              across .NET, TypeScript, Go, and Java.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              <Button asChild size="lg">
                <a href="#projects">
                  View projects
                  <ArrowDownRight className="size-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a
                  href={siteConfig.links.github}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <GitFork className="size-4" />
                  GitHub
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a
                  href={siteConfig.links.linkedin}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Link2 className="size-4" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>

          <aside className="surface-noise border border-border/80 p-5 text-sm leading-6">
            <div className="flex items-center justify-between border-border/70 border-b pb-4">
              <p className="section-label">Working across</p>
              <span className="size-2 bg-primary" />
            </div>
            <div className="mt-5 grid gap-4">
              <div className="flex gap-3">
                <Code2 className="mt-0.5 size-4 shrink-0 text-primary" />
                <p>
                  <span className="block font-medium text-foreground">
                    Product interfaces
                  </span>
                  <span className="text-muted-foreground">
                    Web applications and developer tools.
                  </span>
                </p>
              </div>
              <div className="flex gap-3">
                <Server className="mt-0.5 size-4 shrink-0 text-primary" />
                <p>
                  <span className="block font-medium text-foreground">
                    Reliable systems
                  </span>
                  <span className="text-muted-foreground">
                    Services, data, deployment, and operations.
                  </span>
                </p>
              </div>
            </div>
            <div className="mt-5 flex items-start gap-2 border-border/70 border-t pt-4 text-muted-foreground">
              <MapPin className="mt-1 size-3.5 shrink-0" />
              {siteConfig.location}
            </div>
          </aside>
        </section>
      </Container>

      <Section
        description="Professional .NET delivery and independent systems work meet in one practice: treating interface, data, integration, and deployment as one coherent product responsibility."
        eyebrow="Profile"
        id="about"
        title="Useful software, built with the whole system in view."
      >
        <div className="surface-noise grid border border-border/80 md:grid-cols-3">
          {[
            [
              "Web applications",
              "Full-stack interfaces and product-oriented applications.",
            ],
            [
              "Enterprise software",
              "Business platforms, ERP integrations, and relational data.",
            ],
            [
              "Systems & tooling",
              "CLIs, Java services, infrastructure, and developer utilities.",
            ],
          ].map(([title, description]) => (
            <article
              className="border-border/80 border-b p-5 last:border-b-0 sm:p-6 md:border-r md:border-b-0 md:last:border-r-0"
              key={title}
            >
              <h3 className="font-medium tracking-[-0.025em]">{title}</h3>
              <p className="mt-2 text-muted-foreground text-sm leading-6">
                {description}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        description="Each role expanded the scope: programming foundations, data-focused interfaces, enterprise platforms, and full-time end-to-end delivery."
        eyebrow="Experience"
        id="experience"
        title="Professional progression"
      >
        <div className="relative grid gap-3 before:absolute before:inset-y-5 before:left-1.5 before:w-px before:bg-border sm:gap-4">
          {experiences.map((experience) => (
            <ExperienceItem
              {...experience}
              className="ml-5 sm:ml-7"
              key={experience.role}
            />
          ))}
        </div>
      </Section>

      <Section
        description="Four representative projects, from real-time communication to financial systems, service architecture, and release automation."
        eyebrow="Selected projects"
        id="projects"
        title="Selected systems and tools"
      >
        <div className="grid gap-4">
          {projects
            .filter((project) => "featured" in project && project.featured)
            .map((project) => (
              <ProjectCard {...project} key={project.name} />
            ))}
        </div>
        <div className="mt-8 flex items-end justify-between gap-6">
          <div>
            <p className="section-label">Additional work</p>
            <h3 className="mt-2 font-semibold text-xl tracking-[-0.035em]">
              Small tools, focused utilities.
            </h3>
          </div>
          <Boxes className="size-5 shrink-0 text-muted-foreground" />
        </div>
        <div className="mt-4 grid gap-3 lg:grid-cols-3">
          {projects
            .filter((project) => !("featured" in project && project.featured))
            .map((project) => (
              <ProjectCard {...project} compact key={project.name} />
            ))}
        </div>
      </Section>

      <Section
        description="A working set organised by the problems it helps solve—not a claim of equally weighted expertise."
        eyebrow="Technical stack"
        id="stack"
        title="Tools across the system"
      >
        <div className="surface-noise grid border border-border/80 md:grid-cols-2 xl:grid-cols-3">
          {stackGroups.map((group) => (
            <article
              className="border-border/80 border-b p-5 last:border-b-0 sm:p-7 md:p-6 md:odd:border-r xl:border-r xl:[&:nth-child(3n)]:border-r-0"
              key={group.title}
            >
              <h3 className="font-medium tracking-[-0.025em]">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <TechBadge key={item}>{item}</TechBadge>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        description="Formal study alongside practical work in application development, data interfaces, and full-stack delivery."
        eyebrow="Education"
        id="education"
        title="Education and languages"
      >
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_14rem]">
          <ol className="surface-noise divide-y divide-border/80 border border-border/80">
            {education.map((item, index) => (
              <li
                className="grid gap-2 px-5 py-5 sm:grid-cols-[minmax(0,1fr)_9rem] sm:items-baseline sm:gap-6 sm:px-6 sm:py-6"
                key={item.qualification}
              >
                <div>
                  <h3
                    className={
                      index === 2
                        ? "font-medium text-muted-foreground text-sm"
                        : "font-medium tracking-[-0.02em]"
                    }
                  >
                    {item.qualification}
                  </h3>
                  <p className="mt-1 text-muted-foreground text-sm leading-6">
                    {item.institution}
                  </p>
                </div>
                <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.12em] sm:text-right">
                  {item.period}
                </p>
              </li>
            ))}
          </ol>
          <div className="surface-noise border border-border/80 p-5">
            <p className="section-label">Languages</p>
            <dl className="mt-4 space-y-3 text-sm">
              <div className="flex items-baseline justify-between gap-4">
                <dt>Portuguese</dt>
                <dd className="text-muted-foreground">Native</dd>
              </div>
              <div className="flex items-baseline justify-between gap-4">
                <dt>English</dt>
                <dd className="text-muted-foreground">Advanced</dd>
              </div>
            </dl>
          </div>
        </div>
      </Section>

      <Section
        className="pb-16 sm:pb-20"
        description="For full-stack work, developer tooling, platform development, or systems that need both solid engineering and a precise interface."
        eyebrow="Contact"
        id="contact"
        title="Start a conversation"
      >
        <div className="surface-noise flex flex-col gap-6 border border-border/80 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <p className="max-w-md text-muted-foreground text-sm leading-6">
            Available for thoughtful conversations around products, platforms,
            and the systems that hold them together.
          </p>
          <CopyEmail email={siteConfig.email} />
        </div>
      </Section>

      <Container className="pb-8 sm:pb-10">
        <Separator />
        <footer className="flex flex-col gap-5 py-6 text-muted-foreground text-sm sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-medium text-foreground">Diogo Paulos</p>
            <p className="mt-1">Full-stack Developer · Portugal</p>
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <a
              className="hover:text-foreground"
              href={siteConfig.links.github}
              rel="noopener noreferrer"
              target="_blank"
            >
              GitHub
            </a>
            <a
              className="hover:text-foreground"
              href={siteConfig.links.linkedin}
              rel="noopener noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
            <a
              className="hover:text-foreground"
              href={`mailto:${siteConfig.email}`}
            >
              Email
            </a>
            <span>© {currentYear}</span>
          </div>
        </footer>
      </Container>

      <script type="application/ld+json">
        {JSON.stringify(personStructuredData)}
      </script>
    </main>
  );
}
