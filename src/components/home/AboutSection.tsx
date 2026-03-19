import { Tag } from '@/components/ui/Tag'

const tags = [
  'Product Strategy', 'Discovery', 'Roadmapping', 'OKRs',
  'Design Systems', 'UX Research', 'Agile', 'Stakeholder Management',
]

export default function AboutSection() {
  return (
    <section id="about" className="bg-surface py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Left: label + bio */}
          <div>
            <p className="font-sans text-xs font-medium text-accent uppercase tracking-[0.2em] mb-6">
              Sobre mim
            </p>
            <h2 className="font-display text-4xl font-semibold text-ink mb-8 leading-tight">
              PM com DNA de designer.
            </h2>
            <div className="space-y-5 text-muted font-sans text-base leading-relaxed">
              <p>
                Com mais de 15 anos navegando entre design e produto, desenvolvi uma perspectiva rara: entendo profundamente o usuário, o negócio e a execução técnica.
              </p>
              <p>
                Já liderei o redesign de um app com 14 milhões de usuários, construí do zero o primeiro e-commerce da Sanrio no Brasil, e gerenciei a identidade de marca de uma empresa global por quase uma década.
              </p>
              <p>
                Hoje aplico essa bagagem para ajudar times a construir produtos com clareza de propósito, velocity real e qualidade que dura.
              </p>
            </div>
          </div>

          {/* Right: experience highlights + skills */}
          <div className="space-y-10">
            <div>
              <h3 className="font-sans text-xs font-medium text-muted uppercase tracking-[0.15em] mb-5">
                Experiência
              </h3>
              <div className="space-y-6">
                {[
                  { company: 'Globalweb Corp.', role: 'Product Designer Senior → PM Lead', period: '2022–2025' },
                  { company: 'Indra / Minsait', role: 'Designer Senior', period: '2013–2022' },
                  { company: 'Sanrio Co.', role: 'Product Designer', period: '2009–2013' },
                  { company: 'Grupo Estácio / UniRadial', role: 'UI/UX Designer', period: '2007–2009' },
                ].map((exp) => (
                  <div key={exp.company} className="flex gap-4">
                    <div className="w-px bg-rule flex-shrink-0" />
                    <div>
                      <p className="font-sans text-sm font-medium text-ink">{exp.company}</p>
                      <p className="font-sans text-sm text-muted">{exp.role}</p>
                      <p className="font-sans text-xs text-muted mt-0.5">{exp.period}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-sans text-xs font-medium text-muted uppercase tracking-[0.15em] mb-4">
                Competências
              </h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
