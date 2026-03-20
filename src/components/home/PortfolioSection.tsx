import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { Tag } from '@/components/ui/Tag'

const projects = [
  {
    slug: 'bolsa-familia',
    href: '/portfolio/globalweb/bolsa-familia',
    title: 'App Programa Bolsa Família',
    company: 'Globalweb Corp.',
    description: 'Redesign completo de um app governamental com 14 milhões de usuários. Discovery, design system e entrega orientada por WCAG AA.',
    image: '/images/portfolio/bolsa-familia/bolsa-familia-sm.webp',
    tags: ['Product Design', 'Design System', 'Acessibilidade'],
  },
  {
    slug: 'sanrio-ecommerce',
    href: '/portfolio/sanrio/ecommerce',
    title: 'E-commerce Sanrio Brasil',
    company: 'Sanrio Co.',
    description: 'Criação do primeiro e-commerce oficial da Sanrio no Brasil, do estudo de viabilidade ao lançamento — 4.500 visitantes únicos no primeiro dia.',
    image: '/images/portfolio/ecommerce-sanrio/ecommerce-sanrio-sm.webp',
    tags: ['Product Strategy', 'E-commerce', 'Service Design'],
  },
  {
    slug: 'indra',
    href: '/portfolio/indra',
    title: 'Branding & Soluções Internas — Indra',
    company: 'Indra / Minsait',
    description: 'Gestão da identidade de marca no Brasil por 9 anos e desenvolvimento de ferramentas digitais internas adotadas por toda a empresa.',
    image: '/images/portfolio/indra/header-indra-sm.webp',
    tags: ['Brand Management', 'Product Ops', 'Comunicação'],
  },
]

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="bg-paper py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-end justify-between mb-14">
          <div>
            <p className="font-sans text-xs font-medium text-accent uppercase tracking-[0.2em] mb-4">
              Portfolio
            </p>
            <h2 className="font-display text-4xl font-semibold text-ink">
              Trabalhos selecionados
            </h2>
          </div>
        </div>

        <div className="space-y-2">
          {projects.map((project, index) => (
            <Link
              key={project.slug}
              href={project.href}
              className="group flex flex-col md:flex-row gap-6 md:gap-10 items-start md:items-center py-8 border-t border-rule hover:bg-surface transition-colors px-4 -mx-4"
            >
              {/* Number */}
              <span className="font-display text-6xl font-light text-rule group-hover:text-accent transition-colors leading-none flex-shrink-0 hidden md:block">
                {String(index + 1).padStart(2, '0')}
              </span>

              {/* Thumbnail */}
              <div className="w-full md:w-28 aspect-video md:aspect-square overflow-hidden bg-rule flex-shrink-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={112}
                  height={112}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <p className="font-sans text-xs text-muted mb-1">{project.company}</p>
                <h3 className="font-display text-xl font-semibold text-ink mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="font-sans text-sm text-muted leading-relaxed mb-3 max-w-lg">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </div>

              {/* Arrow */}
              <div className="text-rule group-hover:text-accent transition-colors flex-shrink-0 hidden md:block">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </Link>
          ))}
          <div className="border-t border-rule" />
        </div>
      </div>
    </section>
  )
}
