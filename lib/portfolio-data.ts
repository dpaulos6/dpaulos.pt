import { siteConfig } from "@/lib/site";

export const primaryNavigation = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
] as const;

export const experiences = [
  {
    company: "Bomsite — Soluções Para Internet Lda",
    role: "Full-stack Developer",
    period: "Sep 2025 — Jul 2026",
    emphasis: "Professional role",
    summary:
      "Developed, maintained, and delivered web applications, enterprise management platforms, and internal systems, working across frontend interfaces, backend logic, relational databases, and production workflows.",
    highlights: [
      "Developed full-stack business applications using C#/.NET, Entity Framework, SQL Server, and responsive Razor interfaces.",
      "Implemented operational functionality covering human resources, holiday management, internal forums, support ticketing, financial reporting, inventory, logistics, and automated barcode and label printing.",
      "Worked with relational database modelling, application logic, data access, validation, and integration with existing business systems.",
      "Contributed to Cegid PHC integrations and customisation for client-facing platforms, including work for organisations such as Matutano/PepsiCo, Elis Portugal, Wayfer, EasyVet, AMC Cunha, Datacomp, and Eporifrutas.",
      "Participated in application development from requirements and implementation through testing, maintenance, and production delivery.",
    ],
  },
  {
    company: "Bomsite — Soluções Para Internet Lda",
    role: "Professional Full-stack Development Internship",
    period: "Before full-time role",
    emphasis: "Progression into enterprise development",
    summary:
      "Progressed from commercial and institutional websites to enterprise applications, gaining experience in backend development, relational databases, and operational business workflows.",
    highlights: [
      "Developed and maintained C#/.NET application functionality using Entity Framework and SQL Server.",
      "Worked on web interfaces and backend functionality for business-oriented applications.",
      "Gained practical experience with Cegid PHC, internal HR systems, and enterprise workflows.",
      "Established the technical foundation for a subsequent full-time full-stack development role.",
    ],
  },
  {
    company: "BI4ALL",
    role: "Dashboard & Data Interface Internship",
    period: "Earlier internship",
    emphasis: "Data presentation & frontend development",
    summary:
      "Developed dashboard interfaces that transformed collected and structured profile information into accessible, organised views for internal users.",
    highlights: [
      "Developed frontend pages and reusable components for displaying profile information, structured fields, and tables.",
      "Organised collected data into usable dashboard interfaces to improve accessibility and inspection.",
      "Focused on interface implementation and data presentation, working with information gathered by an existing collection system.",
    ],
  },
  {
    company: "First C# Internship",
    role: "Introductory C# Development",
    period: "Foundation",
    emphasis: "Programming fundamentals",
    summary:
      "An approximately two-month introduction to practical software development using C# and the .NET ecosystem.",
    highlights: [
      "Developed console applications and programming exercises covering object-oriented programming, classes, methods, collections, control structures, and debugging.",
      "Built a practical foundation in programming concepts and structured problem-solving.",
    ],
  },
] as const;

export const projects = [
  {
    name: "Sockt",
    kind: "Open-source · Real-time backend",
    featured: true,
    description:
      "A terminal-based real-time chat system built with Go, WebSockets, and PostgreSQL, combining authenticated communication, persistent data, administrative controls, and automated deployment infrastructure.",
    highlights: [
      "Implemented real-time client-server communication using WebSockets, with automatic reconnection and persistent backend storage.",
      "Developed account authentication, server-authorised administrative operations, invitation management, and audit logging.",
      "Designed staged UUID account identity migrations with compatibility and rollback safeguards.",
      "Built automated GitHub Actions workflows for testing, versioned releases, signed updates, and deployment to a Linux VPS.",
      "Configured and operated production infrastructure using Ubuntu, NGINX, SSH, and process management.",
    ],
    tags: [
      "Go",
      "WebSockets",
      "PostgreSQL",
      "Linux",
      "NGINX",
      "GitHub Actions",
      "CI/CD",
    ],
    links: [
      {
        href: "https://github.com/dpaulos6/sockt",
        label: "GitHub",
      },
    ],
  },
  {
    name: "Pockt",
    kind: "Private · Full-stack finance platform",
    featured: true,
    description:
      "A personal finance management platform built with Next.js, Go, and PostgreSQL, designed to organise financial accounts, transactions, historical balances, and financial data in one interface.",
    highlights: [
      "Architected a monorepo separating a Next.js frontend, Go REST API, PostgreSQL persistence, and database migrations.",
      "Implemented session-based authentication using Better Auth and account ownership controls across application and database layers.",
      "Developed account management, transaction tracking, categorisation, historical balance snapshots, and calculated financial movements.",
      "Built configurable CSV transaction imports with validation, previews, explicit overlap handling, and atomic confirmation.",
      "Implemented account transfer linking, ownership-scoped operations, relational constraints, and automated integration tests.",
      "Developed responsive interfaces using React, TypeScript, shadcn/ui, and reusable application components.",
    ],
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Go",
      "PostgreSQL",
      "Better Auth",
      "Docker",
      "Bun",
    ],
  },
  {
    name: "ArcSuite",
    kind: "Private ongoing ecosystem",
    featured: true,
    description:
      "A modular Java ecosystem for a Paper server, architected as interconnected services with explicit integration boundaries, persistent data, access control, and operational tooling rather than isolated game plugins.",
    highlights: [
      "Designed modular Java services with provider abstractions, clear integration contracts, and backwards-compatible configuration behaviour.",
      "Implemented hierarchical access control, persistent storage, database migrations, audit events, and event-driven synchronisation.",
      "Developed reconciliation and repair tooling for handling inconsistent state and operational edge cases.",
      "Integrated with Paper, PlaceholderAPI, MariaDB, and optional third-party providers.",
      "Maintained and operated services within a Linux server environment.",
    ],
    modules: [
      {
        name: "ArcClaims",
        description:
          "A land-management module built around a GriefPrevention-backed metadata layer, supporting dynamic area resizing, ownership transfers, confirmation workflows, and migration verification.",
      },
      {
        name: "ArcIdentity",
        description:
          "A component-based identity layer separating snapshots from rendering, with provider interfaces, PlaceholderAPI namespaces, and safe configuration-folder migrations.",
      },
    ],
    tags: [
      "Java",
      "Paper API",
      "MariaDB",
      "Gradle",
      "Linux",
      "Modular Architecture",
    ],
  },
  {
    name: "Versify",
    kind: "Open-source · Developer tooling",
    featured: true,
    description:
      "A TypeScript command-line tool for automating semantic versioning and repeatable project releases, reducing manual work across Git and package publishing workflows.",
    highlights: [
      "Automates Semantic Versioning, project configuration updates, Git commits, and version tags.",
      "Supports per-project configuration, optional remote pushes, package publishing, and multiple configuration formats.",
      "Integrates with npm and JSR publishing workflows.",
      "Provides a reusable release utility for TypeScript and JavaScript development.",
    ],
    tags: ["TypeScript", "CLI", "Git", "Semantic Versioning", "npm", "JSR"],
    links: [
      {
        href: "https://github.com/dpaulos6/versify",
        label: "GitHub",
      },
      {
        href: "https://www.npmjs.com/package/@dpaulos6/versify",
        label: "npm",
      },
    ],
  },
  {
    name: "Digestify",
    kind: "Open-source · Developer utility",
    description:
      "A developer-focused web application providing tools for hashing, encoding, encryption, key generation, JSON processing, and barcode generation through a unified interface.",
    highlights: [
      "Organised independent developer utilities into focused routes and reusable application components.",
      "Implemented practical browser-based workflows for cryptographic operations, encoding, and structured data manipulation.",
      "Built as a TypeScript and Next.js web application with an emphasis on usability and reusable functionality.",
    ],
    tags: ["TypeScript", "Next.js", "React", "Cryptography", "Developer Tools"],
    links: [
      {
        href: "https://github.com/dpaulos6/digestify",
        label: "GitHub",
      },
      {
        href: "https://digestify.dev",
        label: "Live site",
      },
    ],
  },
  {
    name: "http-status-utils",
    kind: "Open-source · npm library",
    description:
      "A focused TypeScript library providing reusable helpers for validating, categorising, and describing HTTP status codes in application code.",
    highlights: [
      "Provides readable status descriptions and helper functions for success, error, and specialised HTTP responses.",
      "Exposes a small, reusable API designed for integration into TypeScript and JavaScript applications.",
      "Published as an npm package for use across independent projects.",
    ],
    tags: ["TypeScript", "npm", "HTTP", "Library API"],
    links: [
      {
        href: "https://github.com/dpaulos6/http-status-utils",
        label: "GitHub",
      },
      {
        href: "https://www.npmjs.com/package/http-status-utils",
        label: "npm",
      },
    ],
  },
  {
    name: "FastOrder",
    kind: "Earlier project · Full-stack web application",
    description:
      "A digital restaurant menu application developed as the final professional-school project (PAP), representing an early end-to-end web development experience.",
    highlights: [
      "Developed a complete web application using PHP, JavaScript, HTML, and CSS.",
      "Worked across frontend interfaces and server-side application functionality.",
      "Established an early foundation for subsequent full-stack projects and production-oriented development.",
    ],
    tags: ["PHP", "JavaScript", "HTML", "CSS"],
    links: [
      {
        href: "https://github.com/dpaulos6/FastOrder-PAP",
        label: "GitHub",
      },
    ],
  },
] as const;

export const stackGroups = [
  {
    title: "Languages",
    items: [
      "TypeScript",
      "JavaScript",
      "Go",
      "C#",
      "Java",
      "SQL",
      "PHP",
      "Python",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Frontend",
    items: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "shadcn/ui",
      "Razor",
      "Responsive Design",
    ],
  },
  {
    title: "Backend & APIs",
    items: [
      "Go",
      "ASP.NET",
      ".NET",
      "REST APIs",
      "WebSockets",
      "Better Auth",
      "Entity Framework",
      "Paper API",
    ],
  },
  {
    title: "Databases & Persistence",
    items: [
      "PostgreSQL",
      "SQL Server",
      "MySQL",
      "MariaDB",
      "Kysely",
      "Database Migrations",
      "Relational Data Modelling",
    ],
  },
  {
    title: "Infrastructure & DevOps",
    items: [
      "Linux",
      "Docker",
      "Docker Compose",
      "NGINX",
      "Hetzner",
      "GitHub Actions",
      "CI/CD",
      "SSH",
      "Tailscale",
      "S3 / Object Storage",
    ],
  },
  {
    title: "Developer Tooling",
    items: [
      "Git",
      "GitHub",
      "Bun",
      "pnpm",
      "npm",
      "Gradle",
      "Neovim",
      "Just",
      "Biome",
      "Ultracite",
    ],
  },
] as const;

export const engineeringCapabilities = [
  {
    title: "Full-stack Application Development",
    description:
      "Designing and implementing complete web applications across user interfaces, backend services, APIs, and persistent data storage.",
    skills: [
      "Frontend Development",
      "Backend Development",
      "API Design",
      "Application Architecture",
    ],
  },
  {
    title: "Backend & Real-time Systems",
    description:
      "Building server-side applications, authenticated APIs, real-time communication systems, and modular service architectures.",
    skills: ["Go", "C#/.NET", "WebSockets", "REST APIs", "Authorization"],
  },
  {
    title: "Database Engineering",
    description:
      "Designing relational data models, implementing transactional workflows, maintaining schema migrations, and enforcing data integrity.",
    skills: [
      "PostgreSQL",
      "SQL Server",
      "Relational Modelling",
      "Database Migrations",
      "Data Integrity",
    ],
  },
  {
    title: "Infrastructure & Deployment",
    description:
      "Configuring Linux environments, deploying application services, managing reverse proxies, and automating development and release processes.",
    skills: [
      "Linux",
      "Docker",
      "NGINX",
      "GitHub Actions",
      "CI/CD",
      "VPS Hosting",
    ],
  },
  {
    title: "Authentication & Security",
    description:
      "Implementing authentication, account ownership, permission enforcement, and auditability at application and database boundaries.",
    skills: [
      "Authentication",
      "Access Control",
      "Server-side Authorization",
      "Session Management",
      "Audit Logging",
    ],
  },
  {
    title: "Developer Tools & Automation",
    description:
      "Creating reusable CLI utilities, automated release workflows, and development tooling that improve consistency and reduce repetitive tasks.",
    skills: [
      "CLI Development",
      "Git Automation",
      "Semantic Versioning",
      "Release Engineering",
      "Testing",
    ],
  },
] as const;

export const education = [
  {
    qualification: "Licenciatura em Engenharia Informática",
    institution: "Instituto Politécnico de Santarém",
    period: "2026 — Present",
  },
  {
    qualification: "Tecnologias Web e Dispositivos Móveis",
    institution:
      "Curso Técnico Superior Profissional · Instituto Politécnico de Santarém",
    period: "2022 — 2024",
  },
  {
    qualification: "Informática de Gestão",
    institution:
      "Ensino Profissional · Escola Profissional de Salvaterra de Magos",
    period: "2019 — 2022",
  },
] as const;

export const personStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  jobTitle: siteConfig.title,
  email: `mailto:${siteConfig.email}`,
  url: siteConfig.url,
  sameAs: [siteConfig.links.github, siteConfig.links.linkedin],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Salvaterra de Magos",
    addressCountry: "PT",
  },
  knowsAbout: [
    "Full-stack Web Development",
    "Software Engineering",
    "Backend Development",
    "Frontend Development",
    "TypeScript",
    "JavaScript",
    "Go",
    "C#",
    ".NET",
    "ASP.NET",
    "Java",
    "Next.js",
    "React",
    "SQL",
    "PostgreSQL",
    "SQL Server",
    "MariaDB",
    "Relational Database Design",
    "REST APIs",
    "WebSockets",
    "Authentication and Authorization",
    "Linux Server Infrastructure",
    "Docker",
    "NGINX",
    "GitHub Actions",
    "CI/CD",
    "Developer Tooling",
    "Release Automation",
  ],
} as const;
