import { clsx } from 'clsx'

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg'
}

export function IconButton({ label, children, size = 'md', className, ...props }: IconButtonProps) {
  return (
    <button
      aria-label={label}
      className={clsx(
        'inline-flex items-center justify-center rounded-full transition-colors',
        'text-muted hover:text-ink hover:bg-rule',
        {
          'w-8 h-8': size === 'sm',
          'w-10 h-10': size === 'md',
          'w-12 h-12': size === 'lg',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
