import { Link } from '@/i18n/navigation'
import { Tag } from '@/components/ui/Tag'
import type { Article } from '@/lib/articles'

interface ArticleCardProps {
  article: Article
}

export function ArticleCard({ article }: ArticleCardProps) {
  const formattedDate = new Date(article.date).toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <Link
      href={`/articles/${article.slug}`}
      className="group block py-8 border-t border-rule hover:bg-surface transition-colors px-4 -mx-4"
    >
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <time className="font-sans text-xs text-muted" dateTime={article.date}>
            {formattedDate}
          </time>
          {article.tags?.slice(0, 2).map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
        <h2 className="font-display text-2xl font-semibold text-ink group-hover:text-accent transition-colors leading-snug">
          {article.title}
        </h2>
        <p className="font-sans text-base text-muted leading-relaxed max-w-2xl">
          {article.description}
        </p>
        <span className="font-sans text-sm font-medium text-accent group-hover:text-accent-dark transition-colors">
          Ler artigo →
        </span>
      </div>
    </Link>
  )
}
