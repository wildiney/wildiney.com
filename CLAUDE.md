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

**Stack:** Astro 6 + TypeScript + Tailwind CSS 4 + Storybook 10

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

## TODO — decision pending (Storybook vs astro 7.x CVEs)

**Astro is pinned to 6.4.8 (not latest 7.x) because of a Storybook incompatibility. This is now a trade-off decision, not a "check if resolved" task.**

- Root cause: Astro 7 hard-requires `vite@^8`. Vite 8's production builds use the `rolldown` bundler internally. `@storybook/builder-vite` breaks on it — every `.stories.tsx` file fails to parse/transform with `[plugin storybook:inject-export-order-plugin] Error: Parse error`.
- **Last tested 2026-07-28:** storybook 10.5.5 + vite@8.1.5 (rolldown@1.1.5). peerDeps now advertise `^8.0.0` but the runtime transform still fails. **peerDep ranges are NOT a valid signal for this check** — test must include `pnpm build-storybook`.
- Current workaround: `pnpm-workspace.yaml` has `packageExtensions` narrowing the `vite` peer range on `@storybook/react-vite`, `@storybook/builder-vite`, and `@joshwooding/vite-plugin-react-docgen-typescript` to `^5||^6||^7` (excludes `^8`), forcing `vite@7.x`.
- **Open CVEs on astro 6.4.8:** 6 XSS vulnerabilities (transition:* directives, View Transition animation properties, spread attribute names), only patched in astro ≥7.1.0. Exploit paths require attacker-controlled content or crafted URLs — low practical exposure on this static GitHub Pages site.
- **Decision options:**
  1. Stay on 6.4.8, accept CVEs, recheck Storybook compatibility periodically.
  2. Upgrade to astro 7.x and drop/park Storybook (no automated tests anyway).
  3. Report repro to `@storybook/builder-vite` and wait for upstream fix.
- **If Storybook ever gets fixed:**
  1. Remove the `packageExtensions` block from `pnpm-workspace.yaml`.
  2. Bump `astro` to latest, `@astrojs/sitemap` to latest compatible version, `storybook`/`@storybook/*` packages to latest.
  3. `rm -rf node_modules pnpm-lock.yaml && pnpm install` (fresh resolve).
  4. Verify: `pnpm build` AND `pnpm build-storybook` — peerDep ranges are insufficient, test the actual build.
