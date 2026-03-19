import { Link } from '@/i18n/navigation'

export default function ArticlesTeaser() {
  return (
    <section id="articles" className="bg-surface py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-sans text-xs font-medium text-accent uppercase tracking-[0.2em] mb-6">
              Artigos
            </p>
            <h2 className="font-display text-4xl font-semibold text-ink mb-6">
              Perspectivas
            </h2>
            <p className="font-sans text-base text-muted leading-relaxed mb-8">
              Reflexões sobre produto, design e liderança. Em breve.
            </p>
            <Link
              href="/articles"
              className="inline-flex items-center gap-2 font-sans text-sm font-medium text-accent hover:text-accent-dark transition-colors"
            >
              Ver todos os artigos
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          {/* Placeholder for article cards */}
          <div className="space-y-4">
            {['Em breve: Product Discovery na prática', 'Em breve: O papel do design em times de produto'].map((title) => (
              <div key={title} className="border border-rule p-6 bg-paper">
                <p className="font-sans text-xs text-muted uppercase tracking-widest mb-3">Em breve</p>
                <p className="font-display text-base font-semibold text-ink">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
