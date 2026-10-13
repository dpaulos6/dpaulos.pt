# dpaulos.pt

The personal developer portfolio of **Diogo Paulos**, a full-stack software developer based in Portugal. It brings together professional experience, independent software projects, technical skills, education, and contact information.

**Website:** [dpaulos.pt](https://dpaulos.pt)

## Overview

The site is a single-page Next.js App Router application with a neutral visual palette, rectangular panels, fine borders, and Geist typography. Its sections cover:

- A personal introduction and engineering focus.
- Professional experience in full-stack and enterprise application development.
- Featured projects: Sockt, Pockt, ArcSuite, and Versify.
- Additional tools and earlier work: Digestify, http-status-utils, and FastOrder.
- A technical stack grouped by engineering area.
- Education, languages, and contact links.

The interface includes responsive anchor navigation, system-aware light and dark themes, an email-copy action, and reduced-motion support. Private projects are presented without exposing repository links.

## Technology

| Area | Implementation |
| --- | --- |
| Framework | Next.js 16.2.6, App Router |
| UI | React 19.2.4 and TypeScript with strict checking |
| Styling | Tailwind CSS 4 and shared CSS design tokens |
| Components | Local shadcn/ui primitives and Radix UI |
| Icons and fonts | Lucide, Geist Sans, and Geist Mono |
| Themes | next-themes |
| Code quality | Biome 2.4.14 and Ultracite 7.6.5 |
| Package manager | pnpm 12.11.2 |
| Performance monitoring | Vercel Speed Insights |

The homepage uses Server Components, with client components for theme selection and copying the contact email. Content is maintained locally; no database or external content service is required.

## Local development

### Requirements

- Node.js 20.9 or newer, as required by the installed Next.js version.
- pnpm 12.11.2, matching the `packageManager` field in `package.json`.
- Git.

### Setup

```bash
git clone https://github.com/dpaulos6/dpaulos.pt.git
cd dpaulos.pt
pnpm install --frozen-lockfile
pnpm dev
```

Open [localhost:3000](http://localhost:3000). Changes to components and styles are reflected by the development server.

No environment variables or credentials are required for the current implementation. Geist is loaded through `next/font/google`, so a fresh build may require network access to download the fonts.

### Production preview

```bash
pnpm build
pnpm start
```

`pnpm build` compiles the application, runs TypeScript validation, and prerenders the static routes. `pnpm start` serves the production build locally.

## Commands

| Command | Purpose |
| --- | --- |
| `pnpm dev` | Start the development server |
| `pnpm build` | Create and type-check the production build |
| `pnpm start` | Serve the production build |
| `pnpm check` | Run Ultracite code-quality checks |
| `pnpm lint` | Run Biome checks |
| `pnpm fix` | Apply Ultracite formatting and automatic fixes |
| `pnpm format` | Format files with Biome |

There is currently no dedicated automated test suite or `typecheck` script. Type checking runs as part of the production build.

## Project structure

```text
app/
  globals.css          Theme tokens and shared styles
  layout.tsx           Root layout, fonts, metadata, and providers
  page.tsx             Homepage composition and section anchors
  opengraph-image.tsx   Generated social sharing image
  robots.ts            Crawler rules
  sitemap.ts           Sitemap generation
components/
  portfolio/           Portfolio sections, cards, labels, and contact controls
  ui/                  Shared UI primitives
  theme-provider.tsx   Theme provider wrapper
  theme-toggle.tsx     Light/dark theme control
lib/
  portfolio-data.ts    Navigation, projects, experience, stack, and education
  site.ts              Site identity, canonical URL, and contact links
  utils.ts             Shared class-name utility
public/                Static assets
```

## Updating the portfolio

- **Content:** Edit `lib/portfolio-data.ts` for projects, experience, education, stack groups, navigation, and Person structured data. Projects with `featured: true` appear in the featured grid; other projects appear in the compact additional-work grid. Public links are optional.
- **Identity and contact:** Edit `lib/site.ts` for the name, title, description, site URL, location, email, and social links.
- **Page composition:** Edit `app/page.tsx` for introductory copy, section order, and layouts. Keep navigation URLs aligned with the actual section IDs.
- **Visual system:** Edit `app/globals.css` for light/dark tokens and shared presentation. Reuse the components in `components/ui/` and `components/portfolio/` to keep spacing and interaction patterns consistent.
- **SEO and sharing:** Review `app/layout.tsx`, `app/opengraph-image.tsx`, `app/robots.ts`, and `app/sitemap.ts` when changing the site's identity or canonical URL.

Preserve factual content and private-project boundaries when editing. Read [AGENTS.md](./AGENTS.md) before making implementation changes; it documents the repository's coding standards and requires consulting the installed Next.js guides in `node_modules/next/dist/docs/` for relevant framework changes.

## Validation

Before submitting changes, run:

```bash
pnpm check
pnpm build
```

For interface changes, also review light and dark themes at mobile and desktop widths. Check heading wrapping, horizontal overflow, keyboard focus, navigation anchors, external links, and the email-copy action. Clipboard access requires a secure context such as HTTPS or localhost.

## Deployment

The repository uses the standard Next.js production build and includes Vercel Speed Insights in the root layout. For a hosting platform with Next.js support, use `pnpm install --frozen-lockfile` to install dependencies and `pnpm build` to build the application. For a Node.js deployment, serve the build with `pnpm start`.

The project does not configure a static export. Prerendered pages are generated by Next.js as part of its normal build; they should not be treated as an `out/` directory export.

## Contact

- [GitHub](https://github.com/dpaulos6)
- [LinkedIn](https://pt.linkedin.com/in/dpaulos6)
- [Email](mailto:dpaulos6@outlook.com)
