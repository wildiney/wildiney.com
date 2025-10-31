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
          <HeaderImage src={`/assets/portfolio/bolsa-familia/bolsa-familia.webp`} alt={dict.bolsafamilia.titlePage} />

          <div className="mx-auto w-full max-w-5xl px-8 pb-8 pt-8 lg:pt-12">
            <h1 className='text-4xl text-primary mb-8 leading-snug font-medium'>{dict.bolsafamilia.titlePage}</h1>

            <h2 className='text-3xl text-primary mb-4'>{dict.bolsafamilia.titleContext}</h2>
            <p className="leading-relaxed text-gray-700">{dict.bolsafamilia.contextDescription}</p>

            <h2 className='text-3xl text-primary mt-8 mb-4'>{dict.bolsafamilia.titleChallenge}</h2>
            <p className="leading-relaxed text-gray-700">{renderLines(dict.bolsafamilia.contextChallenge)}</p>

            <h2 className='text-3xl text-primary mt-8 mb-4'>{dict.bolsafamilia.titleTarget}</h2>
            <p className="leading-relaxed text-gray-700">{renderLines(dict.bolsafamilia.contextTarget)}</p>

            <h2 className='text-3xl text-primary mt-8 mb-4'>{dict.bolsafamilia.titleMetodologiesAndProcess}</h2>
            <p className="leading-relaxed text-gray-700">{renderLines(dict.bolsafamilia.contextMetodologiesAndProcess)}</p>

            <h2 className='text-3xl text-primary mt-8 mb-4'>{dict.bolsafamilia.titleSolutionsAndDifferentials}</h2>
            <p className="leading-relaxed text-gray-700">{renderLines(dict.bolsafamilia.contextSolutionsAndDifferentials)}</p>

            <h2 className='text-3xl text-primary mt-8 mb-4'>{dict.bolsafamilia.titleTechnologiesAndTools}</h2>
            <p className="leading-relaxed text-gray-700">{renderLines(dict.bolsafamilia.contextTechnologiesAndTools)}</p>

            <h2 className='text-3xl text-primary mt-8 mb-4'>{dict.bolsafamilia.titleResultsAndImpacts}</h2>
            <p className="leading-relaxed text-gray-700">{renderLines(dict.bolsafamilia.contextResultsAndImpacts)}</p>

            <h2 className='text-3xl text-primary mt-8 mb-4'>{dict.bolsafamilia.titleGallery}</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Modal thumbnailSrc={'/assets/portfolio/bolsa-familia/ds-colors-sm.webp'} largeSrc={'/assets/portfolio/bolsa-familia/ds-colors.webp'} alt="Design System - Colour Pallete" />
              <Modal thumbnailSrc={'/assets/portfolio/bolsa-familia/ds-typography-sm.webp'} largeSrc={'/assets/portfolio/bolsa-familia/ds-typography.webp'} alt="Design System - Typography" />
              <Modal thumbnailSrc={'/assets/portfolio/bolsa-familia/ds-components-sm.webp'} largeSrc={'/assets/portfolio/bolsa-familia/ds-components.webp'} alt="Design System - Components" />
              <Modal thumbnailSrc={'/assets/portfolio/bolsa-familia/ds-user-flows-sm.webp'} largeSrc={'/assets/portfolio/bolsa-familia/ds-user-flows.webp'} alt="Design System - User Flows" />
              <Modal thumbnailSrc={'/assets/portfolio/bolsa-familia/ds-charts-sm.webp'} largeSrc={'/assets/portfolio/bolsa-familia/ds-charts.webp'} alt="Research" />
            </div>


          </div>
        </div>
        <Contact topColor="bg-gray-100" />
      </div>
    </>
  )
}
