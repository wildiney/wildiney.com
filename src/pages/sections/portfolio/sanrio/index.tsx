import ImgEcommerceSanrio from "@/assets/portfolio/ecommerce-sanrio/ecommerce-sanrio.webp";
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

          <Image img={ImgEcommerceSanrio} />

          <div className="mx-auto w-full max-w-5xl px-8 pb-8 pt-16">
            <h1 className='text-4xl text-primary mb-8 leading-snug font-medium'>{t('sanrioEcommerce.titlePage')}</h1>
            <h2 className='text-3xl text-primary mb-4'>{t('sanrioEcommerce.titleContext')}</h2>
            <p className="leading-relaxed text-gray-700">{t('sanrioEcommerce.contextDescription')}</p>

            <h2 className='text-3xl text-primary mt-8 mb-4'>{t('sanrioEcommerce.titleChallenge')}</h2>
            <p className="leading-relaxed text-gray-700">{renderLines(t('sanrioEcommerce.contextChallenge'))}</p>

            <h2 className='text-3xl text-primary mt-8 mb-4'>{t('sanrioEcommerce.titleTarget')}</h2>
            <p className="leading-relaxed text-gray-700">{renderLines(t('sanrioEcommerce.contextTarget'))}</p>

            <h2 className='text-3xl text-primary mt-8 mb-4'>{t('sanrioEcommerce.titleMetodologiesAndProcess')}</h2>
            <p className="leading-relaxed text-gray-700">{renderLines(t('sanrioEcommerce.contextMetodologiesAndProcess'))}</p>

            <h2 className='text-3xl text-primary mt-8 mb-4'>{t('sanrioEcommerce.titleSolutionsAndDifferentials')}</h2>
            <p className="leading-relaxed text-gray-700">{renderLines(t('sanrioEcommerce.contextSolutionsAndDifferentials'))}</p>

            <h2 className='text-3xl text-primary mt-8 mb-4'>{t('sanrioEcommerce.titleTechnologiesAndTools')}</h2>
            <p className="leading-relaxed text-gray-700">{renderLines(t('sanrioEcommerce.contextTechnologiesAndTools'))}</p>

            <h2 className='text-3xl text-primary mt-8 mb-4'>{t('sanrioEcommerce.titleResultsAndImpacts')}</h2>
            <p className="leading-relaxed text-gray-700">{renderLines(t('sanrioEcommerce.contextResultsAndImpacts'))}</p>


          </div>
        </div>
        <Contact topColor="bg-gray-100" />
      </div>
    </>
  )
}

export default BolsaFamilia