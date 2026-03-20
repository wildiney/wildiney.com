import { clsx } from 'clsx'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  asChild?: boolean
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        'inline-flex items-center justify-center font-sans font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent',
        {
          'bg-accent text-white hover:bg-accent-dark': variant === 'primary',
          'border border-rule text-ink hover:border-ink': variant === 'secondary',
          'text-accent hover:text-accent-dark underline underline-offset-2': variant === 'ghost',
        },
        {
          'px-3 py-1.5 text-sm': size === 'sm',
          'px-5 py-2.5 text-base': size === 'md',
          'px-7 py-3.5 text-lg': size === 'lg',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
