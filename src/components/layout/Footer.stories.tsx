import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-dark border-t border-dark-border py-8 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col md:flex-row items-center gap-2 text-sm text-muted">
          <span className="font-serif italic text-dark-text">Wildiney Di Masi</span>
          <span className="hidden md:inline text-dark-border">·</span>
          <span>© {year} · Boas perguntas constroem bons produtos</span>
        </div>
        <div className="flex items-center gap-6">
          <a className="text-sm text-muted hover:text-accent transition-colors tracking-widest uppercase">
            LinkedIn
          </a>
          <a className="text-sm text-muted hover:text-accent transition-colors tracking-widest uppercase">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}

const meta: Meta<typeof Footer> = {
  title: 'Layout/Footer',
  component: Footer,
  parameters: {
    backgrounds: { default: 'dark', values: [{ name: 'dark', value: '#161B22' }] },
    layout: 'fullscreen',
  },
}
export default meta

type Story = StoryObj<typeof Footer>

export const Default: Story = {}
