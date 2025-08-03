import Section from '@/components/Section';
import Subtitle from '@/components/Subtitles';
import { renderLines } from '@/libs/renderLines';
import { useTranslation } from 'react-i18next';

function About () {
  const { t } = useTranslation()
  return (
    <Section id='about' extraClass="pb-24 bg-gray-200/30">
      <div className='p-6 px-8 sm:px-16 w-full md:w-9/12 lg:w-8/12 xl:w-7/12'>
        <Subtitle>{t('about.pageTitle')}</Subtitle>
        <div className='w-full'>
          <p className='mb-4 text-gray-800 whitespace-pre-line'>{
            t('about.description')
              .split('\n')
              .map((line, idx, arr) => (
                <span key={idx} className={idx < arr.length - 1 ? 'block mb-2' : 'block'}>{line}</span>
              ))}</p>
        </div>
      </div>

      <div className='p-6 px-8 sm:px-16 w-full'>
        <div className='mt-16'>
          <h3 className='text-4xl text-primary font-medium mb-6'>{t('about.experience.title')}</h3>

          <div className='flex flex-col md:flex-row gap-12 items-center border-b border-b-gray-400 py-6 justify-between'>
            <div className='w-full md:max-w-7/12'>
              <h4 className='text-2xl text-primary font-medium mb-2'>{t('about.experience.globalweb.position')}</h4>
              <p className='text-gray-700'>{renderLines(t('about.experience.globalweb.description'))}</p>
            </div>
            <div className='font-poppins font-bold text-5xl whitespace-nowrap text-gray-800/80'>{t('about.experience.globalweb.date')}</div>
          </div>

          <div className='flex flex-col md:flex-row gap-12 items-center border-b border-b-gray-400 py-6 justify-between'>
            <div className='w-full md:max-w-7/12'>
              <h4 className='text-2xl text-primary font-medium mb-2'>{t('about.experience.indra.position')}</h4>
              <p className='text-gray-700'>{renderLines(t('about.experience.indra.description'))}</p>
            </div>
            <div className='font-poppins font-bold text-5xl whitespace-nowrap text-gray-800/80'>{t('about.experience.indra.date')}</div>
          </div>

          <div className='flex flex-col md:flex-row gap-12 items-center border-b border-b-gray-400 py-6 justify-between'>
            <div className='w-full md:max-w-7/12'>
              <h4 className='text-2xl text-primary font-medium mb-2'>{t('about.experience.sanrio.position')}</h4>
              <p className='text-gray-700'>{renderLines(t('about.experience.sanrio.description'))}</p>
            </div>
            <div className='font-poppins font-bold text-5xl whitespace-nowrap text-gray-800/80'>{t('about.experience.sanrio.date')}</div>
          </div>

          <div className='flex flex-col md:flex-row gap-12 items-center border-b border-b-gray-400 py-6 justify-between'>
            <div className='w-full md:max-w-7/12'>
              <h4 className='text-2xl text-primary font-medium mb-2'>{t('about.experience.estacio.position')}</h4>
              <p className='text-gray-700'>{renderLines(t('about.experience.estacio.description'))}</p>
            </div>
            <div className='font-poppins font-bold text-5xl whitespace-nowrap text-gray-800/80'>{t('about.experience.estacio.date')}</div>
          </div>

        </div>
      </div>
    </Section>
  )
}

export default About