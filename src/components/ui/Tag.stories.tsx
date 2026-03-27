import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

function Tag({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={[
        'inline-block text-xs uppercase tracking-widest border border-dark-border text-muted px-2 py-0.5',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </span>
  )
}

const meta: Meta<typeof Tag> = {
  title: 'UI/Tag',
  component: Tag,
  parameters: {
    backgrounds: { default: 'dark', values: [{ name: 'dark', value: '#161B22' }] },
  },
}
export default meta

type Story = StoryObj<typeof Tag>

export const Default: Story = { args: { children: 'Design System' } }
export const GovTech: Story = { args: { children: 'Gov Tech' } }
export const UXResearch: Story = { args: { children: 'UX Research' } }

export const Group: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      {['Product Strategy', 'Discovery', 'Roadmapping', 'OKRs', 'Design Systems', 'UX Research', 'Agile'].map(
        (tag) => (
          <Tag key={tag}>{tag}</Tag>
        ),
      )}
    </div>
  ),
}
