
import BolsaFamiliaSm from '@/assets/portfolio/bolsa-familia/bolsa-familia-sm.png'
import BolsaFamilia from '@/assets/portfolio/bolsa-familia/bolsa-familia.png'
import EcommerceSanrioSm from '@/assets/portfolio/ecommerce-sanrio/ecommerce-sanrio-sm.png'
import EcommerceSanrio from '@/assets/portfolio/ecommerce-sanrio/ecommerce-sanrio.png'
import ImgIndraSm from '@/assets/portfolio/indra/header-indra-sm.png'
import ImgIndra from '@/assets/portfolio/indra/header-indra.png'
import Section from "@/components/Section"
import Subtitle from "@/components/Subtitles"
import { useTranslation } from 'react-i18next'
import ItemPortfolio from './components/ItemPortfolio'

function Portfolio () {
  const { t } = useTranslation()

  return (
    <Section id="portfolio" extraClass="bg-gray-100">
      <div className='p-6 px-8 sm:px-16 w-full'>
        <Subtitle>{t('portfolio.pageTitle')}</Subtitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full">

          <ItemPortfolio
            imageThumb={BolsaFamiliaSm}
            largeThumb={BolsaFamilia}
            company='Globalweb'
            project={t('bolsafamilia.titlePage')}
            link='/#/portfolio/bolsa-familia'
            linkname={t('portfolio.caseStudy')}
          />
          <ItemPortfolio
            imageThumb={EcommerceSanrioSm}
            largeThumb={EcommerceSanrio}
            company='Sanrio Co.'
            project={t('sanrioEcommerce.titlePage')}
            link='/#/portfolio/sanrio/ecommerce'
            linkname={t('portfolio.caseStudy')}
          />
          <ItemPortfolio
            imageThumb={ImgIndraSm}
            largeThumb={ImgIndra}
            company='Indra / Minsait'
            project={t('indra.titlePage')}
            link='/#/portfolio/indra'
            linkname={t('portfolio.caseStudy')}
          />

        </div>
      </div>
    </Section>
  )
}

export default Portfolio