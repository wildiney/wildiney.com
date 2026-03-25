import { readFileSync, existsSync, readdirSync } from 'fs'
import { join } from 'path'
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

const CONTENT_DIR = join(process.cwd(), 'content', 'articles')

function getLocalizedFile(slug: string, locale: string): string {
  const localePath = join(CONTENT_DIR, slug, `${locale}.md`)
  const fallbackPath = join(CONTENT_DIR, slug, 'pt.md')
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
  if (!existsSync(CONTENT_DIR)) return []
  const slugs = readdirSync(CONTENT_DIR, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name)
  return slugs.map(slug => {
    const { content: _c, ...meta } = getArticle(slug, locale)
    return meta
  })
}

export function getAllArticleSlugs(): string[] {
  if (!existsSync(CONTENT_DIR)) return []
  return readdirSync(CONTENT_DIR, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name)
}
