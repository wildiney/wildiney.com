interface CaseStudyBodyProps {
  contentHtml: string
}

export default function CaseStudyBody({ contentHtml }: CaseStudyBodyProps) {
  return (
    <div className="bg-surface py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-3xl mx-auto">
        <div
          className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-ink prose-h2:text-3xl prose-h2:font-semibold prose-h2:mt-12 prose-h2:mb-4 prose-p:font-sans prose-p:text-muted prose-p:leading-relaxed prose-strong:text-ink prose-li:font-sans prose-li:text-muted"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </div>
    </div>
  )
}
