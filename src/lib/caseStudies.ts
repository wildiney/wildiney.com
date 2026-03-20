import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const caseStudiesDir = path.join(process.cwd(), 'content', 'case-studies')

export interface CaseStudyMeta {
  title: string
  company: string
  role: string
  year: string
  tags: string[]
  thumbnail: string
}

export interface CaseStudy extends CaseStudyMeta {
  slug: string
  contentHtml: string
}

export async function getCaseStudy(slug: string, locale: string): Promise<CaseStudy | null> {
  try {
    const localePath = path.join(caseStudiesDir, slug, `${locale}.md`)
    const fallbackPath = path.join(caseStudiesDir, slug, 'pt.md')

    let filePath = localePath
    if (!fs.existsSync(localePath)) {
      if (!fs.existsSync(fallbackPath)) return null
      filePath = fallbackPath
    }

    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContents)

    const processedContent = await remark()
      .use(html)
      .process(content)

    return {
      slug,
      contentHtml: processedContent.toString(),
      ...(data as CaseStudyMeta),
    }
  } catch {
    return null
  }
}

export function getAllCaseStudySlugs(): string[] {
  if (!fs.existsSync(caseStudiesDir)) return []
  return fs.readdirSync(caseStudiesDir).filter((dir) => {
    const fullPath = path.join(caseStudiesDir, dir)
    return fs.statSync(fullPath).isDirectory()
  })
}
