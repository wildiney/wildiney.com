import { clsx } from 'clsx'

interface SectionProps {
  children: React.ReactNode
  className?: string
  dark?: boolean
  id?: string
}

export function Section({ children, className, dark, id }: SectionProps) {
  return (
    <section
      id={id}
      className={clsx(
        'w-full px-6 py-20 md:px-12 lg:px-24',
        dark ? 'bg-dark text-dark-text' : 'bg-surface',
        className
      )}
    >
      <div className="max-w-5xl mx-auto">
        {children}
      </div>
    </section>
  )
}
