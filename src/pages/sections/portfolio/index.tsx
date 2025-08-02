
import Section from "@/components/Section"
import Subtitle from "@/components/Subtitles"
import BolsaFamilia from '@/assets/portfolio/bolsa-familia/bolsa-familia.png'
import EcommerceSanrio from '@/assets/portfolio/ecommerce-sanrio/ecommerce-sanrio.png'
// import { renderLines } from '@/libs/renderLines';
import { useTranslation } from 'react-i18next';

function Portfolio () {
  const { t } = useTranslation()

  return (
    <Section id="portfolio" extraClass="bg-gray-100">
      <div className='p-6 px-8 sm:px-16 w-full'>
        <Subtitle>{t('portfolio.pageTitle')}</Subtitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full">

          <div className="flex flex-col w-full">
            <div className="aspect-video bg-gray-300 rounded-md overflow-hidden">
              <img src={BolsaFamilia} alt="Portfolio image" className="w-full min-h-20" />
            </div>
            <div className="flex flex-col lg:flex-row justify-between py-4 px-2 gap-4 lg:gap-8 items-center">
              <div>
                <p className="text-sm text-gray-500">Globalweb</p>
                <p className="text-lg text-gray-700 font-medium">Aplicativo Bolsa Família</p>
              </div>
              <div>
                <a className="border whitespace-nowrap px-4 py-2 border-primary rounded-full text-sm" href="/#/portfolio/bolsa-familia">Estudo de caso</a>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full">
            <div className="aspect-video bg-gray-300 rounded-md overflow-hidden">
              <img src={EcommerceSanrio} alt="Portfolio image" className="w-full min-h-20" />
            </div>
            <div className="flex flex-col lg:flex-row justify-between py-4 px-2 gap-4 lg:gap-8 items-center">
              <div>
                <p className="text-sm text-gray-500">Sanrio Co.</p>
                <p className="text-lg text-gray-700 font-medium">Ecommerce Sanrio Brasil</p>
              </div>
              <div>
                <a className="border whitespace-nowrap px-4 py-2 border-primary rounded-full text-sm" href="/#/portfolio/sanrio/ecommerce">Estudo de caso</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </Section>
  )
}

export default Portfolio