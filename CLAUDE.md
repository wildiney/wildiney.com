# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev              # Start dev server (Next.js, localhost:3000)
pnpm build            # Next.js build + next-sitemap postbuild (outputs to out/)
pnpm lint             # ESLint
pnpm storybook        # Start Storybook (localhost:6006)
pnpm build-storybook  # Build Storybook static
pnpm deploy           # Build + deploy to GitHub Pages (gh-pages -d out --dotfiles)
```

There are no automated tests in this project.

## Architecture

**Stack:** Next.js 15 + TypeScript + Tailwind CSS 4 + next-intl v4 + Storybook 8

**Routing:** Next.js App Router with static export (`output: 'export'`, `trailingSlash: true`). Routes defined via `src/app/[locale]/` directory structure. All pages need `export const dynamic = 'force-static'` and `generateStaticParams()`.

**i18n:** 3 languages (PT default — no prefix, EN at `/en/`, ES at `/es/`) via `next-intl` with `localePrefix: 'as-needed'`. Routing defined in `src/i18n/routing.ts`. Messages in `messages/pt.json`, `messages/en.json`, `messages/es.json`. Use `Link` from `@/i18n/navigation` (not `next/link`) for internal navigation.

**Styling:** Tailwind CSS 4 utility classes only. No `tailwind.config.js` — tokens defined in `src/styles/globals.css` inside `@theme` block. PostCSS via `postcss.config.mjs`. Typography plugin via `@plugin '@tailwindcss/typography'`.

**Design tokens:**
- Colors: `bg-paper` (#F5F2EE), `text-ink` (#1A1A1A), `bg-surface` (#FFF), `text-muted` (#6B6560), `border-rule` (#E2DDD8), `text-accent`/`bg-accent` (#C94B32), `bg-dark` (#111111), `text-dark-text` (#F0EDE8)
- Fonts: `font-display` (Fraunces serif), `font-sans` (Inter), `font-mono` (JetBrains Mono)

**Content:** Markdown files in `content/articles/` and `content/case-studies/` with gray-matter frontmatter. Locale fallback to `pt.md` if locale file missing. Processed with remark → HTML.

**Analytics:** GTM via `NEXT_PUBLIC_GTM_ID` and Microsoft Clarity via `NEXT_PUBLIC_CLARITY_ID`. Scripts in `src/app/layout.tsx` (root layout). No ReactGA or Hotjar.

**Path alias:** `@/*` resolves to `src/*`.

## Key Files & Directories

- `src/app/[locale]/page.tsx` — Home page (Hero, About, Portfolio, Articles teaser, Contact)
- `src/app/[locale]/layout.tsx` — Locale layout (Fraunces/Inter fonts, NextIntlClientProvider)
- `src/app/layout.tsx` — Root layout (GTM + Clarity scripts, returns fragment)
- `src/styles/globals.css` — Tailwind directives + `@theme` design tokens
- `src/i18n/routing.ts` — next-intl locale config
- `src/i18n/navigation.ts` — typed Link/useRouter exports
- `middleware.ts` — next-intl locale detection
- `messages/` — `pt.json`, `en.json`, `es.json`
- `content/articles/[slug]/` — Markdown articles (pt.md, en.md, es.md)
- `content/case-studies/[slug]/` — Markdown case studies (pt.md, en.md, es.md)
- `src/components/ui/` — Design system: Button, Tag, Section, SectionImage, IconButton
- `src/components/layout/` — Header, MobileMenu, Footer
- `src/components/home/` — HeroSection, AboutSection, PortfolioSection, ArticlesTeaser, ContactSection
- `src/components/portfolio/` — CaseStudyHeader, CaseStudyBody
- `src/components/articles/` — ArticleCard
- `src/lib/articles.ts` — getArticles(), getArticle(), getAllArticleSlugs()
- `src/lib/caseStudies.ts` — getCaseStudy(), getAllCaseStudySlugs()
- `public/images/portfolio/` — WebP images for case studies
- `src/_vite-legacy-pages/` — Old Vite components (excluded from build, kept for reference)
- `.storybook/` — Storybook config (uses @storybook/nextjs)
- `next-sitemap.config.cjs` — Sitemap config (agenda excluded, robots.txt)
- `next.config.ts` — Next.js config with next-intl plugin

## Deployment

Deploys to GitHub Pages via `gh-pages -d out --dotfiles`. The `--dotfiles` flag ensures `.nojekyll` is included (required for `_next/` directory). `CNAME` is in `public/` and copied to `out/` automatically by Next.js. `next-sitemap` runs as a postbuild step generating `out/sitemap.xml` and `out/robots.txt`.

## Agenda page

Route `/agenda` (and `/en/agenda`, `/es/agenda`) has `noindex` robots meta and is not in the nav or sitemap — it can be shared directly for scheduling.
