import Header from "@/components/Header";
import { renderLines } from '@/libs/renderLines';
import { useTranslation } from 'react-i18next';
import Contact from "../../contact";
import Image from "@/components/portfolio/Header/Image";
import ImgIndra from "@/assets/portfolio/indra/header-indra.png";

function BolsaFamilia () {
  const { t } = useTranslation()
  return (
    <>
      <Header />
      <div className="flex flex-col w-full">
        <div className="flex flex-col w-full">

          <Image img={ImgIndra} />

          <div className="mx-auto w-full max-w-5xl px-8 pb-8 pt-16">
            <h1 className='text-4xl text-primary mb-8 leading-snug font-medium'>{t('indra.titlePage')}</h1>

            <h2 className='text-3xl text-primary mt-8 mb-4'>{t('indra.titleContext')}</h2>
            <p className="leading-relaxed text-gray-700">{renderLines(t('indra.contextDescription'))}</p>

            <h2 className='text-3xl text-primary mt-8 mb-4'>{t('indra.titleProblemAndOpportunity')}</h2>
            <p className="leading-relaxed text-gray-700">{renderLines(t('indra.contextProblemAndOpportunity'))}</p>

            <h2 className='text-3xl text-primary mt-8 mb-4'>{t('indra.titleChallengesAndConstraints')}</h2>
            <p className="leading-relaxed text-gray-700">{renderLines(t('indra.contextChallengesAndConstraints'))}</p>

            <h2 className='text-3xl text-primary mt-8 mb-4'>{t('indra.titleGoalsAndObjectives')}</h2>
            <p className="leading-relaxed text-gray-700">{renderLines(t('indra.contextGoalsAndObjectives'))}</p>

            <h2 className='text-3xl text-primary mt-8 mb-4'>{t('indra.titleMetodologiesAndProcess')}</h2>
            <p className="leading-relaxed text-gray-700">{renderLines(t('indra.contextMetodologiesAndProcess'))}</p>

            <h2 className='text-3xl text-primary mt-8 mb-4'>{t('indra.titleTechnologiesAndTools')}</h2>
            <p className="leading-relaxed text-gray-700">{renderLines(t('indra.contextTechnologiesAndTools'))}</p>

            <h2 className='text-3xl text-primary mt-8 mb-4'>{t('indra.titleResultsAndImpacts')}</h2>
            <p className="leading-relaxed text-gray-700">{renderLines(t('indra.contextResultsAndImpact'))}</p>

            <h2 className='text-3xl text-primary mt-8 mb-4'>{t('indra.titleGallery')}</h2>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <img src={ImgIndra} />
              </div>
              <div>
                <img src={ImgIndra} />
              </div>
              <div>
                <img src={ImgIndra} />
              </div>
              <div>
                <img src={ImgIndra} />
              </div>
            </div>

          </div>
        </div>
        <Contact topColor="bg-gray-100" />
      </div>
    </>
  )
}

export default BolsaFamilia