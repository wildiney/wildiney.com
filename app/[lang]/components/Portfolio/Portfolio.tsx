
'use client'
import { useTranslation } from '@/app/i18n/TranslationProvider';

import Section from "../Section/Section"
import Subtitle from "../Subtitles/Subtitles"
import ItemPortfolio from './components/ItemPortfolio/ItemPortfolio'

function Portfolio () {
  const { dict, lang } = useTranslation();

  return (
    <Section id="portfolio" extraClass="bg-gray-100">
      <div className='p-6 px-8 sm:px-16 w-full'>
        <Subtitle>{dict.portfolio.pageTitle}</Subtitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full">

          <ItemPortfolio
            imageThumb="/assets/portfolio/bolsa-familia/bolsa-familia-sm.webp"
            company='Globalweb'
            project={dict.bolsafamilia.titlePage}
            link={`/${lang}/portfolio/globalweb/bolsa-familia`}
            linkname={dict.portfolio.caseStudy}
          />
          <ItemPortfolio
            imageThumb={'/assets/portfolio/ecommerce-sanrio/ecommerce-sanrio-sm.webp'}
            company='Sanrio Co.'
            project={dict.sanrioEcommerce.titlePage}
            link={`/${lang}/portfolio/sanrio/ecommerce`}
            linkname={dict.portfolio.caseStudy}
          />
          <ItemPortfolio
            imageThumb={'/assets/portfolio/indra/header-indra-sm.webp'}
            company='Indra / Minsait'
            project={dict.indra.titlePage}
            link={`/${lang}/portfolio/indra`}
            linkname={dict.portfolio.caseStudy}
          />

        </div>
      </div>
    </Section>
  )
}

export default Portfolio