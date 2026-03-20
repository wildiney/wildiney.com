import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Ver portfolio',
    variant: 'primary',
    size: 'md',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Saiba mais',
    variant: 'secondary',
    size: 'md',
  },
}

export const Ghost: Story = {
  args: {
    children: 'Leia o artigo',
    variant: 'ghost',
    size: 'md',
  },
}
