import { readFileSync, existsSync, readdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import matter from 'gray-matter'

export interface ArticleMeta {
  slug: string
  title: string
  description?: string
  date?: string
  tags?: string[]
  thumbnail?: string
}

export interface Article extends ArticleMeta {
  content: string
}

function resolveContentDir(): string {
  // process.cwd() is the project root when running astro dev/build
  const fromCwd = join(process.cwd(), 'content', 'articles')
  if (existsSync(fromCwd)) return fromCwd
  // Fallback: resolve relative to this file (ESM context)
  try {
    return join(dirname(fileURLToPath(import.meta.url)), '../../content/articles')
  } catch {
    return fromCwd
  }
}

const CONTENT_DIR = resolveContentDir()

// Builds slug → absolute folder path map by scanning YYYY/MM/slug structure
function buildSlugMap(): Map<string, string> {
  const map = new Map<string, string>()
  if (!existsSync(CONTENT_DIR)) return map
  for (const year of readdirSync(CONTENT_DIR, { withFileTypes: true }).filter(d => d.isDirectory())) {
    const yearPath = join(CONTENT_DIR, year.name)
    for (const month of readdirSync(yearPath, { withFileTypes: true }).filter(d => d.isDirectory())) {
      const monthPath = join(yearPath, month.name)
      for (const slug of readdirSync(monthPath, { withFileTypes: true }).filter(d => d.isDirectory())) {
        map.set(slug.name, join(monthPath, slug.name))
      }
    }
  }
  return map
}

const SLUG_MAP = buildSlugMap()

function getLocalizedFile(slug: string, locale: string): string {
  const slugDir = SLUG_MAP.get(slug)
  if (!slugDir) throw new Error(`No content found for article: ${slug}`)
  const localePath = join(slugDir, `${locale}.md`)
  const fallbackPath = join(slugDir, 'pt.md')
  if (existsSync(localePath)) return localePath
  if (existsSync(fallbackPath)) return fallbackPath
  throw new Error(`No content found for article: ${slug}`)
}

export function getArticle(slug: string, locale = 'pt'): Article {
  const filePath = getLocalizedFile(slug, locale)
  const raw = readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)
  return { slug, title: data.title ?? slug, ...data, content }
}

export function getArticles(locale = 'pt'): ArticleMeta[] {
  if (SLUG_MAP.size === 0) return []
  const today = new Date().toISOString().slice(0, 10)
  return [...SLUG_MAP.keys()]
    .map(slug => {
      const { content: _c, ...meta } = getArticle(slug, locale)
      return meta
    })
    .filter(meta => !meta.date || meta.date <= today)
    .sort((a, b) => {
      if (!a.date && !b.date) return 0
      if (!a.date) return 1
      if (!b.date) return -1
      return b.date.localeCompare(a.date)
    })
}

export function getAllArticleSlugs(): string[] {
  return [...SLUG_MAP.keys()]
}
