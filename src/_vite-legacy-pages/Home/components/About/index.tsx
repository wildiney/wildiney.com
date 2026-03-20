import Section from '@/components/Section';
import Subtitle from '@/components/Subtitles';
import { useTranslation } from 'react-i18next';
import ExperienceItem from './components/ExperienceItem';

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

          <ExperienceItem
            position={t('about.experience.globalweb.position')}
            description={t('about.experience.globalweb.description')}
            period={t('about.experience.globalweb.date')}
          />
          <ExperienceItem
            position={t('about.experience.indra.position')}
            description={t('about.experience.indra.description')}
            period={t('about.experience.indra.date')}
          />
          <ExperienceItem
            position={t('about.experience.sanrio.position')}
            description={t('about.experience.sanrio.description')}
            period={t('about.experience.sanrio.date')}
          />
          <ExperienceItem
            position={t('about.experience.estacio.position')}
            description={t('about.experience.estacio.description')}
            period={t('about.experience.estacio.date')}
          />

        </div>
      </div>
    </Section>
  )
}

export default About