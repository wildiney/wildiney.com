import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const articlesDir = path.join(process.cwd(), 'content', 'articles')

export interface ArticleMeta {
  title: string
  date: string
  description: string
  tags: string[]
  draft?: boolean
}

export interface Article extends ArticleMeta {
  slug: string
  contentHtml?: string
}

export async function getArticles(locale: string): Promise<Article[]> {
  if (!fs.existsSync(articlesDir)) return []

  const slugs = fs.readdirSync(articlesDir).filter((dir) => {
    const fullPath = path.join(articlesDir, dir)
    return fs.statSync(fullPath).isDirectory()
  })

  const articles = slugs
    .map((slug) => {
      const localePath = path.join(articlesDir, slug, `${locale}.md`)
      const fallbackPath = path.join(articlesDir, slug, 'pt.md')
      const filePath = fs.existsSync(localePath) ? localePath : fallbackPath

      if (!fs.existsSync(filePath)) return null

      const { data } = matter(fs.readFileSync(filePath, 'utf8'))
      const meta = data as ArticleMeta

      if (meta.draft) return null

      return { slug, ...meta }
    })
    .filter((a): a is Article => a !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return articles
}

export async function getArticle(slug: string, locale: string): Promise<Article | null> {
  try {
    const localePath = path.join(articlesDir, slug, `${locale}.md`)
    const fallbackPath = path.join(articlesDir, slug, 'pt.md')

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
      ...(data as ArticleMeta),
    }
  } catch {
    return null
  }
}

export function getAllArticleSlugs(): string[] {
  if (!fs.existsSync(articlesDir)) return []
  return fs.readdirSync(articlesDir).filter((dir) => {
    const fullPath = path.join(articlesDir, dir)
    return fs.statSync(fullPath).isDirectory()
  })
}
