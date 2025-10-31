'use client'
import ExperienceItem from '@/app/[lang]/components/About/components/ExperienceItem/ExperienceItem';
import Section from '@/app/[lang]/components/Section/Section';
import Subtitle from '@/app/[lang]/components/Subtitles/Subtitles';

import { useTranslation } from '@/app/i18n/TranslationProvider';

function About () {
  const { dict } = useTranslation();

  return (
    <Section id='about' extraClass="pb-24 bg-gray-200/30">
      <div className='p-6 px-8 sm:px-16 w-full md:w-9/12 lg:w-8/12 xl:w-7/12'>
        <Subtitle>{dict.about.pageTitle}</Subtitle>
        <div className='w-full'>
          <p className='mb-4 text-gray-800 whitespace-pre-line'>{
            dict.about.description
              .split('\n')
              .map((line, idx, arr) => (
                <span key={idx} className={idx < arr.length - 1 ? 'block mb-2' : 'block'}>{line}</span>
              ))}</p>
        </div>
      </div>

      <div className='p-6 px-8 sm:px-16 w-full'>
        <div className='mt-16'>
          <h3 className='text-4xl text-primary font-medium mb-6'>{dict.about.experience.title}</h3>

          <ExperienceItem
            position={dict.about.experience.globalweb.position}
            description={dict.about.experience.globalweb.description}
            period={dict.about.experience.globalweb.date}
          />
          <ExperienceItem
            position={dict.about.experience.indra.position}
            description={dict.about.experience.indra.description}
            period={dict.about.experience.indra.date}
          />
          <ExperienceItem
            position={dict.about.experience.sanrio.position}
            description={dict.about.experience.sanrio.description}
            period={dict.about.experience.sanrio.date}
          />
          <ExperienceItem
            position={dict.about.experience.estacio.position}
            description={dict.about.experience.estacio.description}
            period={dict.about.experience.estacio.date}
          />

        </div>
      </div>
    </Section>
  )
}

export default About