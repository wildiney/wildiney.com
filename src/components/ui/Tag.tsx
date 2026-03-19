import { clsx } from 'clsx'

interface TagProps {
  children: React.ReactNode
  className?: string
}

export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={clsx(
        'inline-block text-xs font-sans font-medium uppercase tracking-widest text-muted border border-rule px-2 py-0.5',
        className
      )}
    >
      {children}
    </span>
  )
}
