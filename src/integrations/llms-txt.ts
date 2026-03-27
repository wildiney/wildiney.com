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
