export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-dark text-dark-text py-8 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-display text-sm">Wildiney Di Masi</p>
        <p className="font-sans text-xs text-muted">
          © {year} · Feito com curiosidade e cuidado
        </p>
        <div className="flex gap-6">
          <a
            href="https://linkedin.com/in/wildiney"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-xs text-muted hover:text-dark-text transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/wildiney"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-xs text-muted hover:text-dark-text transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
