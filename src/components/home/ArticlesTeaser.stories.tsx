import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

const sampleArticles = [
  {
    slug: 'design-system-por-prompt',
    title: 'Design system por prompt',
    description: 'O que acontece quando a IA gera o design system e ninguém faz as perguntas certas antes.',
  },
]

function ArticlesTeaser({ hasArticles = true }: { hasArticles?: boolean }) {
  const articles = hasArticles ? sampleArticles : []
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-dark text-dark-text">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="md:w-1/3">
            <p className="text-xs text-accent uppercase tracking-widest mb-4">Artigos</p>
            <h2 className="font-serif text-3xl font-black text-dark-text mb-4">Perspectivas</h2>
            <p className="text-muted text-sm leading-relaxed mb-6">
              Reflexões sobre produto, design e liderança.
            </p>
            <a
              href="/articles/"
              className="text-accent underline underline-offset-4 text-sm font-semibold"
            >
              Ver todos →
            </a>
          </div>
          <div className="md:w-2/3 flex flex-col gap-4">
            {articles.length > 0 ? (
              articles.map((article) => (
                <a
                  key={article.slug}
                  href={`/articles/${article.slug}/`}
                  className="group border border-dark-border p-5 hover:border-accent transition-colors"
                >
                  <h3 className="text-sm font-semibold text-dark-text group-hover:text-accent transition-colors mb-2">
                    {article.title}
                  </h3>
                  <p className="text-xs text-muted">{article.description}</p>
                </a>
              ))
            ) : (
              <>
                <div className="border border-dark-border p-5">
                  <p className="text-xs text-muted uppercase tracking-wider mb-2">Em breve</p>
                  <p className="text-sm text-dark-text/40">Product Discovery na prática</p>
                </div>
                <div className="border border-dark-border p-5">
                  <p className="text-xs text-muted uppercase tracking-wider mb-2">Em breve</p>
                  <p className="text-sm text-dark-text/40">O papel do design em times de produto</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

const meta: Meta<typeof ArticlesTeaser> = {
  title: 'Home/ArticlesTeaser',
  component: ArticlesTeaser,
  parameters: {
    backgrounds: { default: 'dark', values: [{ name: 'dark', value: '#161B22' }] },
    layout: 'fullscreen',
  },
}
export default meta

type Story = StoryObj<typeof ArticlesTeaser>

export const WithArticles: Story = { args: { hasArticles: true } }
export const Empty: Story = { args: { hasArticles: false } }
