# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev              # Start dev server (Astro, localhost:4321)
pnpm build            # Astro build (outputs to dist/)
pnpm preview          # Preview built site
pnpm lint             # ESLint
pnpm storybook        # Start Storybook (localhost:6006)
pnpm build-storybook  # Build Storybook static
pnpm deploy           # Build + deploy to GitHub Pages (gh-pages -d dist --dotfiles)
```

There are no automated tests in this project.

## Architecture

**Stack:** Astro 5 + TypeScript + Tailwind CSS 4 + Storybook 8

**Routing:** Astro file-based routing with static output. Pages in `src/pages/`. i18n via Astro native routing — PT default at `/`, EN at `/en/`, ES at `/es/`.

**i18n:** 3 languages (PT default — no prefix, EN at `/en/`, ES at `/es/`). No external i18n library — handled via Astro's native i18n support. Messages in `messages/pt.json`, `messages/en.json`, `messages/es.json`.

**Styling:** Tailwind CSS 4 utility classes only. No `tailwind.config.js` — tokens defined in `src/styles/globals.css` inside `@theme` block. Tailwind served via `@tailwindcss/vite` plugin (no PostCSS config needed). Typography plugin via `@plugin '@tailwindcss/typography'`.

**Design tokens:**
- Colors: `bg-paper` (#F5F2EE), `text-ink` (#1A1A1A), `bg-surface` (#FFF), `text-muted` (#6B6560), `border-rule` (#E2DDD8), `text-accent`/`bg-accent` (#C94B32), `bg-dark` (#111111), `text-dark-text` (#F0EDE8)
- Fonts: `font-display` (Fraunces serif), `font-sans` (Inter), `font-mono` (JetBrains Mono)

**Content:** Markdown files in `content/articles/` and `content/case-studies/` with gray-matter frontmatter. Locale fallback to `pt.md` if locale file missing. Processed with remark → HTML.

**Analytics:** GTM via `PUBLIC_GTM_ID` and Microsoft Clarity via `PUBLIC_CLARITY_ID`. Scripts in the base layout. No ReactGA or Hotjar.

**Path alias:** `@/*` resolves to `src/*`.

## Key Files & Directories

- `src/pages/index.astro` — Home page (placeholder during migration)
- `src/styles/globals.css` — Tailwind directives + `@theme` design tokens
- `messages/` — `pt.json`, `en.json`, `es.json`
- `content/articles/[slug]/` — Markdown articles (pt.md, en.md, es.md)
- `content/case-studies/[slug]/` — Markdown case studies (pt.md, en.md, es.md)
- `src/lib/` — Content utilities (articles, case studies — to be rebuilt without Next.js deps)
- `src/components/` — Astro components (to be built in migration phases)
- `public/images/portfolio/` — WebP images for case studies
- `.storybook/` — Storybook config
- `astro.config.mjs` — Astro config with Tailwind + sitemap

## Deployment

Deploys to GitHub Pages via `gh-pages -d dist --dotfiles`. The `--dotfiles` flag ensures `.nojekyll` is included. `CNAME` is in `public/` and copied to `dist/` automatically by Astro.

## Agenda page

Route `/agenda` (and `/en/agenda`, `/es/agenda`) has `noindex` robots meta and is not in the nav or sitemap — it can be shared directly for scheduling.
