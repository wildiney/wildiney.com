import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

function Header({ activePage = 'home' }: { activePage?: 'home' | 'articles' | 'portfolio' }) {
  const navLinks = [
    { label: 'Sobre mim', href: '/#about' },
    { label: 'Portfólio', href: '/#portfolio' },
    { label: 'Artigos', href: '/articles/' },
  ]

  return (
    <header className="border-b border-dark-border bg-dark/90 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-24 h-16 flex items-center justify-between">
        <a href="/" className="font-serif text-dark-text font-bold text-lg italic hover:text-accent transition-colors">
          Wildiney Di Masi
        </a>

        <nav className="flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-muted hover:text-dark-text transition-colors tracking-wide uppercase"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 text-xs">
            {['PT', 'EN', 'ES'].map((l, i) => (
              <React.Fragment key={l}>
                <a className={`tracking-widest ${i === 0 ? 'text-dark-text font-semibold' : 'text-muted'}`}>
                  {l}
                </a>
                {i < 2 && <span className="text-dark-border">·</span>}
              </React.Fragment>
            ))}
          </div>
          <a
            href="/#contact"
            className="text-xs bg-accent text-ink font-semibold px-4 py-2 uppercase tracking-widest hover:bg-accent-dark transition-colors"
          >
            Contato
          </a>
        </div>
      </div>
    </header>
  )
}

const meta: Meta<typeof Header> = {
  title: 'Layout/Header',
  component: Header,
  parameters: {
    backgrounds: { default: 'dark', values: [{ name: 'dark', value: '#161B22' }] },
    layout: 'fullscreen',
  },
}
export default meta

type Story = StoryObj<typeof Header>

export const Default: Story = {}
export const OnArticlesPage: Story = { args: { activePage: 'articles' } }
