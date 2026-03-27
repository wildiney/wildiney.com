import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

const projects = [
  { num: '01', category: 'Gov Tech', title: 'Programa Bolsa Família', href: '/portfolio/globalweb/bolsa-familia/' },
  { num: '02', category: 'E-commerce', title: 'Sanrio Brasil', href: '/portfolio/sanrio/ecommerce/' },
  { num: '03', category: 'Branding & Produto', title: 'Indra / Minsait', href: '/portfolio/indra/' },
]

const copy = {
  pt: {
    label: 'Product Manager · Designer',
    headline: ['PM com DNA', 'de designer.'],
    sub: 'Transformo visão em entrega. Design como ferramenta, dados como bússola, impacto como medida.',
    cta1: 'Ver trabalhos',
    cta2: 'Entrar em contato',
    scroll: 'Role para explorar',
  },
  en: {
    label: 'Product Manager · Designer',
    headline: ["PM with a", "designer's DNA."],
    sub: 'I turn vision into delivery. Design as a tool, data as compass, impact as measure.',
    cta1: 'See work',
    cta2: 'Get in touch',
    scroll: 'Scroll to explore',
  },
}

function HeroSection({ locale = 'pt' }: { locale?: 'pt' | 'en' }) {
  const c = copy[locale]
  return (
    <section className="min-h-screen flex items-center bg-dark px-6 md:px-12 lg:px-24 pt-16">
      <div className="max-w-5xl mx-auto w-full py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs text-accent uppercase tracking-widest mb-6">{c.label}</p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-black text-dark-text leading-tight mb-6">
              {c.headline[0]}
              <br />
              {c.headline[1]}
            </h1>
            <p className="text-muted text-lg leading-relaxed mb-10 max-w-sm">{c.sub}</p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/#portfolio"
                className="inline-flex items-center justify-center font-semibold tracking-wide transition-colors bg-accent text-ink hover:bg-accent-dark px-5 py-2.5 text-base"
              >
                {c.cta1}
              </a>
              <a
                href="/#contact"
                className="inline-flex items-center justify-center font-semibold tracking-wide transition-colors border border-dark-border text-dark-text hover:border-muted px-5 py-2.5 text-base"
              >
                {c.cta2}
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {projects.map((p) => (
              <a
                key={p.num}
                href={p.href}
                className="group flex items-center justify-between border border-dark-border bg-dark-surface px-5 py-4 hover:border-accent transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="text-xs text-accent font-mono tracking-widest">{p.num}</span>
                  <div>
                    <p className="text-xs text-muted uppercase tracking-wider mb-1">{p.category}</p>
                    <p className="text-sm font-semibold text-dark-text group-hover:text-accent transition-colors">
                      {p.title}
                    </p>
                  </div>
                </div>
                <span className="text-muted group-hover:text-accent transition-colors text-lg">↗</span>
              </a>
            ))}
          </div>
        </div>

        <div className="hidden md:flex flex-col items-center gap-2 mt-16 text-muted">
          <div className="w-px h-8 bg-accent"></div>
          <p className="text-xs uppercase tracking-widest">{c.scroll}</p>
        </div>
      </div>
    </section>
  )
}

const meta: Meta<typeof HeroSection> = {
  title: 'Home/HeroSection',
  component: HeroSection,
  parameters: {
    backgrounds: { default: 'dark', values: [{ name: 'dark', value: '#161B22' }] },
    layout: 'fullscreen',
  },
}
export default meta

type Story = StoryObj<typeof HeroSection>

export const Portuguese: Story = { args: { locale: 'pt' } }
export const English: Story = { args: { locale: 'en' } }
