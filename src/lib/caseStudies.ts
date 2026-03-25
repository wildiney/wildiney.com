import { readFileSync, existsSync } from 'fs'
import { join } from 'path'
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

const CONTENT_DIR = join(process.cwd(), 'content', 'case-studies')

export function getCaseStudy(slug: string, locale = 'pt'): CaseStudy {
  const localePath = join(CONTENT_DIR, slug, `${locale}.md`)
  const fallbackPath = join(CONTENT_DIR, slug, 'pt.md')
  const filePath = existsSync(localePath) ? localePath : fallbackPath
  const raw = readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)
  return { slug, title: data.title ?? slug, ...data, content }
}
