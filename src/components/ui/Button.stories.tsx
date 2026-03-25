import type { Meta, StoryObj } from '@storybook/react'

// Since our actual Button is .astro, this story documents the design
// using a React equivalent for Storybook purposes
function Button({ variant = 'primary', size = 'md', children }: {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}) {
  const base = 'inline-flex items-center justify-center font-semibold tracking-wide transition-colors'
  const variants = {
    primary: 'bg-[#C94B32] text-white hover:bg-[#A33A24]',
    secondary: 'border border-[#21282F] text-[#E6EDF3] hover:border-[#656D76]',
    ghost: 'text-[#C94B32] underline underline-offset-4',
  }
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-7 py-3.5 text-lg',
  }
  return (
    <button className={`${base} ${variants[variant]} ${sizes[size]}`}>
      {children}
    </button>
  )
}

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#161B22' }],
    },
  },
}
export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = { args: { variant: 'primary', children: 'Ver trabalhos' } }
export const Secondary: Story = { args: { variant: 'secondary', children: 'Entrar em contato' } }
export const Ghost: Story = { args: { variant: 'ghost', children: 'Ver todos →' } }
