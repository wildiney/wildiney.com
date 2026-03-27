import { readFileSync, existsSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import matter from 'gray-matter'

export interface CaseStudyMeta {
  slug: string
  title: string
  company?: string
  role?: string
  year?: string
  tags?: string[]
  thumbnail?: string
}

export interface CaseStudy extends CaseStudyMeta {
  content: string
}

function resolveContentDir(): string {
  const fromCwd = join(process.cwd(), 'content', 'case-studies')
  if (existsSync(fromCwd)) return fromCwd
  try {
    return join(dirname(fileURLToPath(import.meta.url)), '../../content/case-studies')
  } catch {
    return fromCwd
  }
}

const CONTENT_DIR = resolveContentDir()

export function getCaseStudy(slug: string, locale = 'pt'): CaseStudy {
  const localePath = join(CONTENT_DIR, slug, `${locale}.md`)
  const fallbackPath = join(CONTENT_DIR, slug, 'pt.md')
  const filePath = existsSync(localePath) ? localePath : fallbackPath
  const raw = readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)
  return { slug, title: data.title ?? slug, ...data, content }
}
