import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

const experience = [
  { position: 'PM Lead → Product Designer Senior · Globalweb Corp.', date: '2019–2025' },
  { position: 'Designer Gráfico Sênior · Indra / Minsait', date: '2009–2018' },
  { position: 'Designer · Sanrio Brasil', date: '2013–2016' },
  { position: 'Estácio de Sá — Design Gráfico', date: '2006–2009' },
]

const skills = [
  'Product Strategy', 'Discovery', 'Roadmapping', 'OKRs',
  'Design Systems', 'UX Research', 'Agile', 'Stakeholder Management',
]

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-xs uppercase tracking-widest border border-dark-border text-muted px-2 py-0.5">
      {children}
    </span>
  )
}

function AboutSection() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-dark text-dark-text">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <p className="text-xs text-accent uppercase tracking-widest mb-4">Sobre mim</p>
            <h2 className="font-serif text-3xl md:text-4xl font-black text-dark-text mb-6">
              PM com DNA de designer.
            </h2>
            <div className="text-muted leading-relaxed space-y-4">
              <p>
                15 anos na interseção entre design e produto. Comecei como designer gráfico, passei por branding
                e service design, e hoje atuo como PM — sem perder a perspectiva de quem já construiu cada peça
                do processo.
              </p>
              <p>
                Essa trajetória me deu algo raro: a capacidade de falar a língua do negócio, do time técnico e
                do usuário ao mesmo tempo.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xs text-muted uppercase tracking-widest mb-6">Experiência</h3>
            <div className="space-y-5 mb-10">
              {experience.map((exp) => (
                <div key={exp.position} className="flex gap-4 border-l-2 border-dark-border pl-4">
                  <div className="flex-1">
                    <p className="text-sm text-dark-text">{exp.position}</p>
                    <p className="text-xs text-muted mt-1">{exp.date}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => <Tag key={skill}>{skill}</Tag>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const meta: Meta<typeof AboutSection> = {
  title: 'Home/AboutSection',
  component: AboutSection,
  parameters: {
    backgrounds: { default: 'dark', values: [{ name: 'dark', value: '#161B22' }] },
    layout: 'fullscreen',
  },
}
export default meta

type Story = StoryObj<typeof AboutSection>

export const Default: Story = {}
