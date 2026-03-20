import { getArticles } from '@/lib/articles'
import { routing } from '@/i18n/routing'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { ArticleCard } from '@/components/articles/ArticleCard'

export const dynamic = 'force-static'

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function ArticlesPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const articles = await getArticles(locale)

  return (
    <>
      <Header />
      <main className="min-h-screen bg-paper">
        <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-24 pt-32 pb-24">
          <p className="font-sans text-xs font-medium text-accent uppercase tracking-[0.2em] mb-6">
            Artigos
          </p>
          <h1 className="font-display text-5xl font-semibold text-ink mb-4">
            Perspectivas
          </h1>
          <p className="font-sans text-lg text-muted mb-16 max-w-xl">
            Reflexões sobre produto, design e liderança.
          </p>

          {articles.length === 0 ? (
            <p className="font-sans text-muted">Em breve.</p>
          ) : (
            <div>
              {articles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
              <div className="border-t border-rule" />
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
