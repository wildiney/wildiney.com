export default function HeroSection() {
  return (
    <section className="min-h-screen bg-paper flex items-center pt-16">
      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-24 py-24">
        <div className="max-w-3xl">
          {/* Label */}
          <p className="font-sans text-sm font-medium text-accent uppercase tracking-[0.2em] mb-8">
            Product Manager
          </p>

          {/* Headline */}
          <h1 className="font-display text-5xl md:text-7xl font-semibold text-ink leading-[1.05] mb-8">
            Produtos que funcionam.{' '}
            <em className="not-italic text-accent">Times que evoluem.</em>
          </h1>

          {/* Sub */}
          <p className="font-sans text-lg md:text-xl text-muted leading-relaxed mb-12 max-w-xl">
            Transformo visão em entrega. Design como ferramenta, dados como bússola, impacto como medida.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 bg-accent text-white font-sans font-medium px-6 py-3 hover:bg-accent-dark transition-colors"
            >
              Ver trabalhos
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-rule text-ink font-sans font-medium px-6 py-3 hover:border-ink transition-colors"
            >
              Entrar em contato
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 flex items-center gap-3">
          <div className="w-px h-12 bg-rule" />
          <p className="font-sans text-xs text-muted uppercase tracking-widest">Role para explorar</p>
        </div>
      </div>
    </section>
  )
}
