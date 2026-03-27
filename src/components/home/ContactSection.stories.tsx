import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

function ContactSection() {
  return (
    <section className="bg-dark border-t border-dark-border py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs text-accent uppercase tracking-widest mb-4">Contato</p>
        <h2 className="font-serif text-4xl md:text-5xl font-black text-dark-text mb-6">Vamos conversar.</h2>
        <p className="text-muted text-lg leading-relaxed max-w-lg mb-10">
          Aberto a projetos, colaborações e boas conversas sobre produto.
        </p>
        <a
          href="#"
          className="inline-flex items-center justify-center font-semibold tracking-wide transition-colors bg-accent text-ink hover:bg-accent-dark px-8 py-4 text-base"
        >
          Entre em contato →
        </a>
      </div>
    </section>
  )
}

const meta: Meta<typeof ContactSection> = {
  title: 'Home/ContactSection',
  component: ContactSection,
  parameters: {
    backgrounds: { default: 'dark', values: [{ name: 'dark', value: '#161B22' }] },
    layout: 'fullscreen',
  },
}
export default meta

type Story = StoryObj<typeof ContactSection>

export const Default: Story = {}
