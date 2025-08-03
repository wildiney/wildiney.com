import ImgBolsaFamilia from '@/assets/portfolio/bolsa-familia/bolsa-familia.webp';
import Header from "@/components/Header";
import Image from "@/components/portfolio/Header/Image";
import { renderLines } from '@/libs/renderLines';
import { useTranslation } from 'react-i18next';
import Contact from "../../contact";

function BolsaFamilia () {
  const { t } = useTranslation()

  return (
    <>
      <Header />
      <div className="flex flex-col w-full">
        <div className="flex flex-col w-full">
          <Image img={ImgBolsaFamilia} />

          <div className="mx-auto w-full max-w-5xl px-8 pb-8 pt-16">
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


          </div>
        </div>
        <Contact topColor="bg-gray-100" />
      </div>
    </>
  )
}

export default BolsaFamilia