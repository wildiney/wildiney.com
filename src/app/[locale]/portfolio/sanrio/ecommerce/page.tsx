import { notFound } from 'next/navigation'
import { getCaseStudy } from '@/lib/caseStudies'
import { routing } from '@/i18n/routing'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CaseStudyHeader from '@/components/portfolio/CaseStudyHeader'
import CaseStudyBody from '@/components/portfolio/CaseStudyBody'

export const dynamic = 'force-static'

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function SanrioEcommercePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const caseStudy = await getCaseStudy('sanrio-ecommerce', locale)

  if (!caseStudy) notFound()

  return (
    <>
      <Header />
      <main>
        <CaseStudyHeader {...caseStudy} />
        <CaseStudyBody contentHtml={caseStudy.contentHtml} />
      </main>
      <Footer />
    </>
  )
}
