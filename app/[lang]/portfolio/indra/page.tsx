import Header from "@/app/[lang]/components/Header/Header";
import { getDictionary } from "@/app/i18n/getDictionary";
import { type Lang } from "@/app/i18n";

import { renderLines } from '@/app/libs/renderLines';
import Contact from "@/app/[lang]/components/Contact/Contact";
import HeaderImage from "@/app/[lang]/components/Portfolio/Header/Image/HeaderImage";
import Modal from "@/app/[lang]/components/Modal";

interface PageProps {
  params: Promise<{ lang: Lang }>;
}

export default async function Page ({ params }: PageProps) {
  const resolvedParams = await params;
  const dict = await getDictionary(resolvedParams.lang);

  return (
    <>
      <Header />
      <div className="flex flex-col w-full">
        <div className="flex flex-col w-full">
          <HeaderImage src={`/assets/portfolio/indra/header-indra.webp`} alt={dict.indra.titlePage} />

          <div className="mx-auto w-full max-w-5xl px-8 pb-8 pt-8 lg:pt-12">
            <h1 className='text-4xl text-primary mb-8 leading-snug font-medium'>{dict.indra.titlePage}</h1>

            <h2 className='text-3xl text-primary mb-4'>{dict.indra.titleContext}</h2>
            <p className="leading-relaxed text-gray-700">{dict.indra.contextDescription}</p>

            <h2 className='text-3xl text-primary mt-8 mb-4'>{dict.indra.titleProblemAndOpportunity}</h2>
            <p className="leading-relaxed text-gray-700">{renderLines(dict.indra.contextProblemAndOpportunity)}</p>

            <h2 className='text-3xl text-primary mt-8 mb-4'>{dict.indra.titleChallengesAndConstraints}</h2>
            <p className="leading-relaxed text-gray-700">{renderLines(dict.indra.contextChallengesAndConstraints)}</p>

            <h2 className='text-3xl text-primary mt-8 mb-4'>{dict.indra.titleGoalsAndObjectives}</h2>
            <p className="leading-relaxed text-gray-700">{renderLines(dict.indra.contextGoalsAndObjectives)}</p>

            <h2 className='text-3xl text-primary mt-8 mb-4'>{dict.indra.titleMetodologiesAndProcess}</h2>
            <p className="leading-relaxed text-gray-700">{renderLines(dict.indra.contextMetodologiesAndProcess)}</p>

            <h2 className='text-3xl text-primary mt-8 mb-4'>{dict.indra.titleTechnologiesAndTools}</h2>
            <p className="leading-relaxed text-gray-700">{renderLines(dict.indra.contextTechnologiesAndTools)}</p>

            <h2 className='text-3xl text-primary mt-8 mb-4'>{dict.indra.titleResultsAndImpacts}</h2>
            <p className="leading-relaxed text-gray-700">{renderLines(dict.indra.contextResultsAndImpact)}</p>

            <h2 className='text-3xl text-primary mt-8 mb-4'>{dict.indra.titleGallery}</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Modal thumbnailSrc={'/assets/portfolio/indra/sap-sm.webp'} largeSrc={'/assets/portfolio/indra/sap.webp'} alt="SAP Forum" />
              <Modal thumbnailSrc={'/assets/portfolio/indra/newsleteter-system-sm.webp'} largeSrc={'/assets/portfolio/indra/newsleteter-system.webp'} alt="Newsletter System" />
              <Modal thumbnailSrc={'/assets/portfolio/indra/advertisings-indra.webp'} largeSrc={'/assets/portfolio/indra/advertisings-indra.webp'} alt="Advertising" />
              <Modal thumbnailSrc={'/assets/portfolio/indra/stand-ciab-sm.webp'} largeSrc={'/assets/portfolio/indra/stand-ciab.webp'} alt="CIAB" />
              <Modal thumbnailSrc={'/assets/portfolio/indra/stand-ciab-vtop-sm.webp'} largeSrc={'/assets/portfolio/indra/stand-ciab-vtop.webp'} alt="CIAB" />
              <Modal thumbnailSrc={'/assets/portfolio/indra/trofeus-01-sm.webp'} largeSrc={'/assets/portfolio/indra/trofeus-01.webp'} alt="Trophies" />
              <Modal thumbnailSrc={'/assets/portfolio/indra/promotional-content-sm.webp'} largeSrc={'/assets/portfolio/indra/promotional-content.webp'} alt="Promotional Content" />
              <Modal thumbnailSrc={'/assets/portfolio/indra/material-grafico-sm.webp'} largeSrc={'/assets/portfolio/indra/material-grafico.webp'} alt="Graphic Material" />
              <Modal thumbnailSrc={'/assets/portfolio/indra/pins-sm.webp'} largeSrc={'/assets/portfolio/indra/pins.webp'} alt="Gifts" />
            </div>


          </div>
        </div>
        <Contact topColor="bg-gray-100" />
      </div>
    </>
  )
}
