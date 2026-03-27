# Design: llms.txt generation via Astro Integration

Date: 2026-03-27

## Overview

Generate LLM-friendly text files (`llms.txt`) at build time for all three locales, containing the full content of articles and case studies. Files are placed directly in `dist/` after the Astro build completes.

## Architecture

A single Astro integration registered in `astro.config.mjs`. It hooks into `astro:build:done` and writes three files to the output directory.

**New file:** `src/integrations/llms-txt.ts`

The integration:
1. Iterates over locales: `pt`, `en`, `es`
2. Reads all article slugs from `content/articles/` (via `getAllArticleSlugs()` from `src/lib/articles.ts`)
3. Reads all case study slugs from `content/case-studies/` (via `readdirSync` — `caseStudies.ts` has no list function)
4. For each slug, calls `getArticle(slug, locale)` / `getCaseStudy(slug, locale)` to get full content
5. Assembles the `llms.txt` format (see below)
6. Writes to `dist/llms.txt` (PT), `dist/en/llms.txt` (EN), `dist/es/llms.txt` (ES) — creates subdirs if needed

## File Format

```
# Wildiney

> [tagline by locale]

[site description by locale]

## Articles

### [Article Title]
URL: https://wildiney.com/articles/[slug]/
Date: YYYY-MM-DD
Description: [description]

[full article body]

---

## Case Studies

### [Case Study Title]
URL: https://wildiney.com/case-studies/[slug]/
Company: [company]
Role: [role]
Year: [year]

[full case study body]

---
```

PT articles use `/articles/[slug]/`, EN uses `/en/articles/[slug]/`, ES uses `/es/articles/[slug]/`.

## Locale-specific headers

| Locale | Tagline | Description |
|--------|---------|-------------|
| pt | Designer de produto e pesquisador de UX | Portfolio pessoal com artigos, estudos de caso e agenda de contato. |
| en | Product designer and UX researcher | Personal portfolio with articles, case studies, and contact scheduling. |
| es | Diseñador de producto e investigador de UX | Portafolio personal con artículos, casos de estudio y agenda de contacto. |

## Integration into astro.config.mjs

```js
import { llmsTxt } from './src/integrations/llms-txt'

integrations: [sitemap({ filter: ... }), llmsTxt()]
```

## Output URLs

- `https://wildiney.com/llms.txt`
- `https://wildiney.com/en/llms.txt`
- `https://wildiney.com/es/llms.txt`

## Notes

- Articles without a `date` field or with future dates are excluded (same filter as `getArticles()`)
- `caseStudies.ts` has no list function — the integration reads slugs from the filesystem directly using `readdirSync`, mirroring the pattern in `articles.ts`
- No new npm dependencies required
