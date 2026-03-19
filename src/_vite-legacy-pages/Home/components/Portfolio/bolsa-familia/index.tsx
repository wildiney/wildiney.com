import Header from "@/components/Header";
import Modal from "@/components/Modal";
import Image from "@/components/portfolio/Header/Image";
import { renderLines } from '@/libs/renderLines';
import Contact from "@/pages/Home/components/Contact";
import { useTranslation } from 'react-i18next';

import ImgBolsaFamilia from '@/assets/portfolio/bolsa-familia/bolsa-familia.webp';
import ImgDSColors from '@/assets/portfolio/bolsa-familia/ds-colors.webp';
import ImgDSColorsSM from '@/assets/portfolio/bolsa-familia/ds-colors-sm.webp';
import ImgDSTypography from '@/assets/portfolio/bolsa-familia/ds-typography.webp';
import ImgDSTypographySM from '@/assets/portfolio/bolsa-familia/ds-typography-sm.webp';
import ImgDSComponents from '@/assets/portfolio/bolsa-familia/ds-components.webp';
import ImgDSComponentsSM from '@/assets/portfolio/bolsa-familia/ds-components-sm.webp';
import ImgDSUserFlows from '@/assets/portfolio/bolsa-familia/ds-user-flows.webp';
import ImgDSUserFlowsSM from '@/assets/portfolio/bolsa-familia/ds-user-flows-sm.webp';
import ImgDSCharts from '@/assets/portfolio/bolsa-familia/ds-charts.webp';
import ImgDSChartsSM from '@/assets/portfolio/bolsa-familia/ds-charts-sm.webp';

function BolsaFamilia () {
  const { t } = useTranslation()

  return (
    <>
      <Header />
      <div className="flex flex-col w-full">
        <div className="flex flex-col w-full">
          <Image img={ImgBolsaFamilia} alt={t('bolsafamilia.titlePage')} />

          <div className="mx-auto w-full max-w-5xl px-8 pb-8 pt-8 lg:pt-12">
            <h1 className='text-4xl text-primary mb-8 leading-snug font-medium'>{t('bolsafamilia.titlePage')}</h1>

            <h2 className='text-3xl text-primary mb-4'>{t('bolsafamilia.titleContext')}</h2>
            <p className="leading-relaxed text-gray-700">{t('bolsafamilia.contextDescription')}</p>

            <h2 className='text-3xl text-primary mt-8 mb-4'>{t('bolsafamilia.titleChallenge')}</h2>
            <p className="leading-relaxed text-gray-700">{renderLines(t('bolsafamilia.contextChallenge'))}</p>

            <h2 className='text-3xl text-primary mt-8 mb-4'>{t('bolsafamilia.titleTarget')}</h2>
            <p className="leading-relaxed text-gray-700">{renderLines(t('bolsafamilia.contextTarget'))}</p>

            <h2 className='text-3xl text-primary mt-8 mb-4'>{t('bolsafamilia.titleMetodologiesAndProcess')}</h2>
            <p className="leading-relaxed text-gray-700">{renderLines(t('bolsafamilia.contextMetodologiesAndProcess'))}</p>

            <h2 className='text-3xl text-primary mt-8 mb-4'>{t('bolsafamilia.titleSolutionsAndDifferentials')}</h2>
            <p className="leading-relaxed text-gray-700">{renderLines(t('bolsafamilia.contextSolutionsAndDifferentials'))}</p>

            <h2 className='text-3xl text-primary mt-8 mb-4'>{t('bolsafamilia.titleTechnologiesAndTools')}</h2>
            <p className="leading-relaxed text-gray-700">{renderLines(t('bolsafamilia.contextTechnologiesAndTools'))}</p>

            <h2 className='text-3xl text-primary mt-8 mb-4'>{t('bolsafamilia.titleResultsAndImpacts')}</h2>
            <p className="leading-relaxed text-gray-700">{renderLines(t('bolsafamilia.contextResultsAndImpacts'))}</p>

            <h2 className='text-3xl text-primary mt-8 mb-4'>{t('bolsafamilia.titleGallery')}</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Modal thumbnailSrc={ImgDSColorsSM} largeSrc={ImgDSColors} alt="Design System - Colour Pallete" />
              <Modal thumbnailSrc={ImgDSTypographySM} largeSrc={ImgDSTypography} alt="Design System - Typography" />
              <Modal thumbnailSrc={ImgDSComponentsSM} largeSrc={ImgDSComponents} alt="Design System - Components" />
              <Modal thumbnailSrc={ImgDSUserFlowsSM} largeSrc={ImgDSUserFlows} alt="Design System - User Flows" />
              <Modal thumbnailSrc={ImgDSChartsSM} largeSrc={ImgDSCharts} alt="Research" />
            </div>


          </div>
        </div>
        <Contact topColor="bg-gray-100" />
      </div>
    </>
  )
}

export default BolsaFamilia