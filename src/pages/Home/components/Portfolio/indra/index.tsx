import Header from "@/components/Header";
import Modal from "@/components/Modal";
import Image from "@/components/portfolio/Header/Image";
import { renderLines } from '@/libs/renderLines';
import { useTranslation } from 'react-i18next';
import Contact from "@/pages/Home/components/Contact";

import AdvertisingsIndra from "@/assets/portfolio/indra/advertisings-indra.webp";
import ImgIndra from "@/assets/portfolio/indra/header-indra.webp";
import GraphicMaterialSm from "@/assets/portfolio/indra/material-grafico-sm.webp";
import GraphicMaterial from "@/assets/portfolio/indra/material-grafico.webp";
import NewsletterSm from "@/assets/portfolio/indra/newsleteter-system-sm.webp";
import Newsletter from "@/assets/portfolio/indra/newsleteter-system.webp";
import PinsSm from "@/assets/portfolio/indra/pins-sm.webp";
import Pins from "@/assets/portfolio/indra/pins.webp";
import PromotionalContentSm from "@/assets/portfolio/indra/promotional-content-sm.webp";
import PromotionalContent from "@/assets/portfolio/indra/promotional-content.webp";
import SapSm from "@/assets/portfolio/indra/sap-sm.webp";
import Sap from "@/assets/portfolio/indra/sap.webp";
import StandCiabSm from "@/assets/portfolio/indra/stand-ciab-sm.webp";
import StandCiabVtopSm from "@/assets/portfolio/indra/stand-ciab-vtop-sm.webp";
import StandCiabVtop from "@/assets/portfolio/indra/stand-ciab-vtop.webp";
import StandCiab from "@/assets/portfolio/indra/stand-ciab.webp";
import TrophiesSm from "@/assets/portfolio/indra/trofeus-01-sm.webp";
import Trophies from "@/assets/portfolio/indra/trofeus-01.webp";

function Indra () {
  const { t } = useTranslation()
  return (
    <>
      <Header />
      <div className="flex flex-col w-full">
        <div className="flex flex-col w-full">

          <Image img={ImgIndra} />

          <div className="mx-auto w-full max-w-5xl px-8 pb-8 pt-8 lg:pt-12">
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Modal thumbnailSrc={SapSm} largeSrc={Sap} alt="SAP Forum" />
              <Modal thumbnailSrc={NewsletterSm} largeSrc={Newsletter} alt="Newsletter System" />
              <Modal thumbnailSrc={AdvertisingsIndra} largeSrc={AdvertisingsIndra} alt="Advertising" />
              <Modal thumbnailSrc={StandCiabSm} largeSrc={StandCiab} alt="CIAB" />
              <Modal thumbnailSrc={StandCiabVtopSm} largeSrc={StandCiabVtop} alt="CIAB" />
              <Modal thumbnailSrc={TrophiesSm} largeSrc={Trophies} alt="Trophies" />
              <Modal thumbnailSrc={PromotionalContentSm} largeSrc={PromotionalContent} alt="Promotional Content" />
              <Modal thumbnailSrc={GraphicMaterialSm} largeSrc={GraphicMaterial} alt="Graphic Material" />
              <Modal thumbnailSrc={PinsSm} largeSrc={Pins} alt="Gifts" />
            </div>

          </div>
        </div>
        <Contact topColor="bg-gray-100" />
      </div>
    </>
  )
}

export default Indra