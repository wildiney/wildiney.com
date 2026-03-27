# llms.txt Generation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Generate LLM-friendly `llms.txt` files for all three locales at build time via an Astro integration.

**Architecture:** A single Astro integration (`src/integrations/llms-txt.ts`) hooks into `astro:build:done`, reads all article and case study content using existing lib functions, and writes `dist/llms.txt`, `dist/en/llms.txt`, `dist/es/llms.txt`.

**Tech Stack:** Astro 5, TypeScript, Node.js `fs` module, gray-matter (already in use via `src/lib/`)

---

## File Map

| Action | Path | Purpose |
|--------|------|---------|
| Create | `src/integrations/llms-txt.ts` | Integration that generates the three llms.txt files |
| Modify | `astro.config.mjs` | Register the integration |

---

### Task 1: Create the integration file

**Files:**
- Create: `src/integrations/llms-txt.ts`

- [ ] **Step 1: Create `src/integrations/llms-txt.ts` with the following content**

```typescript
import { writeFileSync, mkdirSync, readdirSync, existsSync } from 'fs'
import { join } from 'path'
import { fileURLToPath } from 'url'
import type { AstroIntegration } from 'astro'
import { getAllArticleSlugs, getArticle } from '../lib/articles.js'
import { getCaseStudy } from '../lib/caseStudies.js'

const SITE = 'https://wildiney.com'

const HEADERS: Record<string, { tagline: string; description: string }> = {
  pt: {
    tagline: 'Designer de produto e pesquisador de UX',
    description: 'Portfolio pessoal com artigos, estudos de caso e agenda de contato.',
  },
  en: {
    tagline: 'Product designer and UX researcher',
    description: 'Personal portfolio with articles, case studies, and contact scheduling.',
  },
  es: {
    tagline: 'Diseñador de producto e investigador de UX',
    description: 'Portafolio personal con artículos, casos de estudio y agenda de contacto.',
  },
}

const ARTICLE_LABELS: Record<string, string> = {
  pt: 'Artigos',
  en: 'Articles',
  es: 'Artículos',
}

const CASE_STUDY_LABELS: Record<string, string> = {
  pt: 'Estudos de Caso',
  en: 'Case Studies',
  es: 'Casos de Estudio',
}

function articleUrl(slug: string, locale: string): string {
  const prefix = locale === 'pt' ? '' : `/${locale}`
  return `${SITE}${prefix}/articles/${slug}/`
}

function caseStudyUrl(slug: string, locale: string): string {
  const prefix = locale === 'pt' ? '' : `/${locale}`
  return `${SITE}${prefix}/case-studies/${slug}/`
}

function getCaseStudySlugs(): string[] {
  const dir = join(process.cwd(), 'content', 'case-studies')
  if (!existsSync(dir)) return []
  return readdirSync(dir, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name)
}

function buildLlmsTxt(locale: string): string {
  const { tagline, description } = HEADERS[locale]
  const today = new Date().toISOString().slice(0, 10)
  const lines: string[] = []

  lines.push(`# Wildiney`, ``, `> ${tagline}`, ``, description, ``)

  // Articles
  const articleSlugs = getAllArticleSlugs()
  const articles = articleSlugs
    .map(slug => getArticle(slug, locale))
    .filter(a => a.date && a.date <= today)
    .sort((a, b) => b.date!.localeCompare(a.date!))

  if (articles.length > 0) {
    lines.push(`## ${ARTICLE_LABELS[locale]}`, ``)
    for (const article of articles) {
      lines.push(`### ${article.title}`)
      lines.push(`URL: ${articleUrl(article.slug, locale)}`)
      if (article.date) lines.push(`Date: ${article.date}`)
      if (article.description) lines.push(`Description: ${article.description}`)
      lines.push(``, article.content.trim(), ``, `---`, ``)
    }
  }

  // Case studies
  const caseStudySlugs = getCaseStudySlugs()
  if (caseStudySlugs.length > 0) {
    lines.push(`## ${CASE_STUDY_LABELS[locale]}`, ``)
    for (const slug of caseStudySlugs) {
      const cs = getCaseStudy(slug, locale)
      lines.push(`### ${cs.title}`)
      lines.push(`URL: ${caseStudyUrl(slug, locale)}`)
      if (cs.company) lines.push(`Company: ${cs.company}`)
      if (cs.role) lines.push(`Role: ${cs.role}`)
      if (cs.year) lines.push(`Year: ${cs.year}`)
      lines.push(``, cs.content.trim(), ``, `---`, ``)
    }
  }

  return lines.join('\n')
}

export function llmsTxt(): AstroIntegration {
  return {
    name: 'llms-txt',
    hooks: {
      'astro:build:done': ({ dir }) => {
        const distDir = fileURLToPath(dir)
        for (const locale of ['pt', 'en', 'es']) {
          const content = buildLlmsTxt(locale)
          if (locale === 'pt') {
            writeFileSync(join(distDir, 'llms.txt'), content, 'utf-8')
          } else {
            const localeDir = join(distDir, locale)
            mkdirSync(localeDir, { recursive: true })
            writeFileSync(join(localeDir, 'llms.txt'), content, 'utf-8')
          }
        }
        console.log('[llms-txt] Generated llms.txt for pt, en, es')
      },
    },
  }
}
```

- [ ] **Step 2: Commit**

```bash
git add src/integrations/llms-txt.ts
git commit -m "feat: add llms-txt Astro integration"
```

---

### Task 2: Register integration and verify

**Files:**
- Modify: `astro.config.mjs`

- [ ] **Step 1: Add the import and register the integration in `astro.config.mjs`**

Current `astro.config.mjs`:
```js
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'https://wildiney.com',
  output: 'static',
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt', 'en', 'es'],
    routing: { prefixDefaultLocale: false }
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/agenda/')
    })
  ],
  vite: {
    plugins: [tailwindcss()]
  },
  build: {
    format: 'directory'
  }
})
```

Updated `astro.config.mjs`:
```js
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import sitemap from '@astrojs/sitemap'
import { llmsTxt } from './src/integrations/llms-txt'

export default defineConfig({
  site: 'https://wildiney.com',
  output: 'static',
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt', 'en', 'es'],
    routing: { prefixDefaultLocale: false }
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/agenda/')
    }),
    llmsTxt()
  ],
  vite: {
    plugins: [tailwindcss()]
  },
  build: {
    format: 'directory'
  }
})
```

- [ ] **Step 2: Run the build**

```bash
pnpm build
```

Expected: build completes successfully and the last lines include:
```
[llms-txt] Generated llms.txt for pt, en, es
```

- [ ] **Step 3: Verify the output files exist and have content**

```bash
ls dist/llms.txt dist/en/llms.txt dist/es/llms.txt
head -10 dist/llms.txt
head -10 dist/en/llms.txt
```

Expected output for `dist/llms.txt`:
```
# Wildiney

> Designer de produto e pesquisador de UX

Portfolio pessoal com artigos, estudos de caso e agenda de contato.

## Artigos

### [most recent article title]
URL: https://wildiney.com/articles/[slug]/
```

Expected output for `dist/en/llms.txt`:
```
# Wildiney

> Product designer and UX researcher

Personal portfolio with articles, case studies, and contact scheduling.

## Articles
```

- [ ] **Step 4: Commit**

```bash
git add astro.config.mjs
git commit -m "feat: register llms-txt integration in Astro config"
```
