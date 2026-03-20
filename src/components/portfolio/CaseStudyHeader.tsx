import Image from 'next/image'
import { Tag } from '@/components/ui/Tag'
import type { CaseStudyMeta } from '@/lib/caseStudies'

interface CaseStudyHeaderProps extends CaseStudyMeta {
  slug: string
}

export default function CaseStudyHeader({
  title, company, role, year, tags, thumbnail
}: CaseStudyHeaderProps) {
  return (
    <div className="bg-paper pt-32 pb-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <p className="font-sans text-xs font-medium text-accent uppercase tracking-[0.2em] mb-6">
          {company}
        </p>
        <h1 className="font-display text-4xl md:text-6xl font-semibold text-ink mb-6 leading-tight max-w-3xl">
          {title}
        </h1>
        <div className="flex flex-wrap gap-6 text-sm font-sans text-muted mb-8">
          <span>{role}</span>
          <span className="text-rule">·</span>
          <span>{year}</span>
        </div>
        <div className="flex flex-wrap gap-2 mb-12">
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
        <div className="aspect-video w-full overflow-hidden bg-rule">
          <Image
            src={thumbnail}
            alt={title}
            width={1200}
            height={675}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </div>
    </div>
  )
}
