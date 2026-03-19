export default function ContactSection() {
  return (
    <section id="contact" className="bg-dark py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <div className="max-w-2xl">
          <p className="font-sans text-xs font-medium text-accent uppercase tracking-[0.2em] mb-6">
            Contato
          </p>
          <h2 className="font-display text-5xl font-semibold text-dark-text mb-6 leading-tight">
            Vamos conversar
          </h2>
          <p className="font-sans text-lg text-muted leading-relaxed mb-10">
            Aberto a projetos, colaborações e boas conversas sobre produto.
          </p>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdwXg_0iUhz4eJa1JGELnLuQz5Xb8FMqGAbfgopOLAX8Kk5Vg/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-accent text-white font-sans font-medium px-8 py-4 hover:bg-accent-dark transition-colors text-lg"
          >
            Entre em contato
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

          <div className="mt-12 pt-12 border-t border-muted/20 flex gap-8">
            <a
              href="https://linkedin.com/in/wildiney"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm text-muted hover:text-dark-text transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/wildiney"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm text-muted hover:text-dark-text transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
