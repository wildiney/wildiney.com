import { notFound } from 'next/navigation'
import { getArticle, getAllArticleSlugs } from '@/lib/articles'
import { routing } from '@/i18n/routing'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Tag } from '@/components/ui/Tag'
import { Link } from '@/i18n/navigation'

export const dynamic = 'force-static'

export function generateStaticParams() {
  const slugs = getAllArticleSlugs()
  const params = []
  for (const locale of routing.locales) {
    for (const slug of slugs) {
      params.push({ locale, slug })
    }
  }
  return params
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  const article = await getArticle(slug, locale)

  if (!article) notFound()

  const formattedDate = new Date(article.date).toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <>
      <Header />
      <main className="min-h-screen bg-paper">
        {/* Article header */}
        <div className="max-w-3xl mx-auto px-6 md:px-12 pt-32 pb-12">
          <Link
            href="/articles"
            className="font-sans text-sm text-muted hover:text-ink transition-colors mb-8 inline-flex items-center gap-1"
          >
            ← Artigos
          </Link>
          <div className="mt-8">
            <div className="flex flex-wrap gap-2 mb-6">
              {article.tags?.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-ink leading-tight mb-6">
              {article.title}
            </h1>
            <time className="font-sans text-sm text-muted" dateTime={article.date}>
              {formattedDate}
            </time>
          </div>
        </div>

        {/* Article body */}
        <div className="bg-surface py-12 px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            <div
              className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-ink prose-h2:text-2xl prose-h2:font-semibold prose-h2:mt-10 prose-h2:mb-4 prose-p:font-sans prose-p:text-muted prose-p:leading-relaxed prose-strong:text-ink prose-strong:font-semibold prose-li:font-sans prose-li:text-muted prose-a:text-accent prose-a:no-underline hover:prose-a:underline"
              dangerouslySetInnerHTML={{ __html: article.contentHtml || '' }}
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
