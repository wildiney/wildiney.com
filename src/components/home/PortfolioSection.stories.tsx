import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

const projects = [
  {
    num: '01',
    title: 'App Programa Bolsa Família',
    company: 'Globalweb Corp.',
    description: 'Redesign completo de um app governamental com 14 milhões de usuários. Discovery, design system e entrega orientada por WCAG AA.',
    tags: ['Product Design', 'Design System', 'Acessibilidade'],
    href: '/portfolio/globalweb/bolsa-familia/',
  },
  {
    num: '02',
    title: 'E-commerce Sanrio Brasil',
    company: 'Sanrio Co.',
    description: 'Criação do primeiro e-commerce oficial da Sanrio no Brasil, do estudo de viabilidade ao lançamento — 4.500 visitantes únicos no primeiro dia.',
    tags: ['Product Strategy', 'E-commerce', 'Service Design'],
    href: '/portfolio/sanrio/ecommerce/',
  },
  {
    num: '03',
    title: 'Branding & Soluções Internas',
    company: 'Indra / Minsait',
    description: 'Gestão da identidade de marca no Brasil por 9 anos e desenvolvimento de ferramentas digitais internas adotadas por toda a empresa.',
    tags: ['Brand Management', 'Product Ops', 'Comunicação'],
    href: '/portfolio/indra/',
  },
]

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-xs uppercase tracking-widest border border-dark-border text-muted px-2 py-0.5">
      {children}
    </span>
  )
}

function PortfolioSection() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-dark text-dark-text">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs text-accent uppercase tracking-widest mb-4">Portfólio</p>
        <h2 className="font-serif text-3xl md:text-4xl font-black text-dark-text mb-12">
          Trabalhos selecionados.
        </h2>
        <div>
          {projects.map((project) => (
            <a
              key={project.num}
              href={project.href}
              className="group flex flex-col md:flex-row gap-6 border-t border-dark-border py-8 hover:border-accent transition-colors"
            >
              <span className="text-sm font-mono text-accent w-8 flex-shrink-0">{project.num}</span>
              <div className="flex-1">
                <p className="text-xs text-muted uppercase tracking-wider mb-2">{project.company}</p>
                <h3 className="text-lg font-semibold text-dark-text group-hover:text-accent transition-colors mb-3">
                  {project.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
                </div>
              </div>
              <span className="hidden md:flex items-center text-muted group-hover:text-accent transition-colors text-xl">→</span>
            </a>
          ))}
          <div className="border-t border-dark-border"></div>
        </div>
      </div>
    </section>
  )
}

const meta: Meta<typeof PortfolioSection> = {
  title: 'Home/PortfolioSection',
  component: PortfolioSection,
  parameters: {
    backgrounds: { default: 'dark', values: [{ name: 'dark', value: '#161B22' }] },
    layout: 'fullscreen',
  },
}
export default meta

type Story = StoryObj<typeof PortfolioSection>

export const Default: Story = {}
