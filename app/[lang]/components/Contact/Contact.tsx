'use client'
// import { renderLines } from '@/libs/renderLines';
import {
  IoLogoBehance,
  IoMail,
  IoLogoWhatsapp,
  IoLogoLinkedin,
  IoLogoYoutube,
  IoLogoGithub,
} from 'react-icons/io5'
import { useTranslation } from '@/app/i18n/TranslationProvider';
import Link from 'next/link';

function Contact ({ id = "", topColor }: { id?: string, topColor?: string | null }) {
  const { dict } = useTranslation();
  return (
    <section
      id={id}
      className={`flex flex-col w-full relative min-h-screen bg-[#2F2F2F]  pb-6`}
    >
      <div className={`h-17 ${topColor ? topColor : 'bg-[#2F2F2F]'}`}></div>
      <div className='p-6 px-8 sm:px-16 w-full overflow-hidden relative'>
        <div className='flex flex-row mt-9 justify-between mb-12'>
          <div className='flex flex-col md:flex-row gap-6 md:items-end'>
            <h2 className='text-5xl text-left md:text-6xl  text-white/90 mb-0'>
              {dict.contact.pageTitle}{' '}
            </h2>
            <span className='text-white/90 text-left text-2xl font-medium'>(Let&apos;s connect)</span>
          </div>

          {/* <div className='absolute rotate-45 -right-25 top-10 bg-white px-32 py-4 rounded font-bold text-primary text-lg cursor-pointer border border-white/80'>
            <Link href='https://forms.gle/61maagDkPUV1WWNR9' target='_blank'>
              Hire me!
            </Link>
          </div> */}
        </div>

        <div className='w-full text-white'>
          <ul className='flex flex-col gap-8'>
            <li className=''>
              <Link
                href='https://wa.me/5511981591082'
                target='_blank'
                className='flex items-center gap-2'
              >
                <span>
                  <IoLogoWhatsapp />
                </span>
                <span>+55 11 98159-1082</span>
              </Link>
            </li>
            <li className=''>
              <Link
                href='mailto:wildiney+business@gmail.com'
                target='_blank'
                className='flex items-center gap-2'
              >
                <span>
                  <IoMail />
                </span>
                <span>wildiney@gmail.com</span>
              </Link>
            </li>
            <li className=''>
              <Link
                href='https://linkedin.com/in/wildiney'
                target='_blank'
                className='flex items-center gap-2'
              >
                <span>
                  <IoLogoLinkedin />
                </span>
                <span>linkedin.com/in/wildiney</span>
              </Link>
            </li>
            <li className=''>
              <Link
                href='https://www.behance.net/wildiney'
                target='_blank'
                className='flex items-center gap-2'
              >
                <span>
                  <IoLogoBehance />
                </span>
                <span>behance.net/wildiney</span>
              </Link>
            </li>
            <li className=''>
              <Link
                href='https://github.com/wildiney'
                target='_blank'
                className='flex items-center gap-2'
              >
                <span>
                  <IoLogoGithub />
                </span>
                <span>github.com/wildiney</span>
              </Link>
            </li>
            <li className=''>
              <Link
                href='https://www.youtube.com/watch?v=5aU_i7rOnlA&list=PLEFS0XFJyys1QVGZ7WL23hCtWcLj4NV2y'
                target='_blank'
                className='flex items-center gap-2'
              >
                <span>
                  <IoLogoYoutube />
                </span>
                <span>youtube.com/@WildineyDiMasi</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section >
  )
}

export default Contact
