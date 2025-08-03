// import { renderLines } from '@/libs/renderLines';
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import {
  IoLogoBehance,
  IoMail,
  IoLogoWhatsapp,
  IoLogoLinkedin,
  IoLogoYoutube,
  IoLogoGithub,
} from 'react-icons/io5'
import ReactGA from 'react-ga4'

function Contact ({ id = "", topColor }: { id?: string, topColor?: string | null }) {
  const { t } = useTranslation()
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
              {t('contact.pageTitle')}{' '}
            </h2>
            <span className='text-white/90 text-left text-2xl font-medium'>(Let's connect)</span>
          </div>

          <div className='absolute rotate-45 -right-25 top-10 bg-white px-32 py-4 rounded font-bold text-primary text-lg cursor-pointer border border-white/80'>
            <Link to='mailto:wildiney@gmail.com' target='_blank'>
              Hire me!
            </Link>
          </div>
        </div>

        <div className='w-full text-white'>
          <ul className='flex flex-col gap-8'>
            <li className=''>
              <Link
                to='https://wa.me/5511981591082'
                target='_blank'
                onClick={() =>
                  ReactGA.event({
                    category: 'Contact',
                    action: 'Click WhatsApp',
                    label: '+55 11 98159-1082',
                  })
                }
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
                to='mailto:wildiney@gmail.com'
                target='_blank'
                onClick={() =>
                  ReactGA.event({
                    category: 'Contact',
                    action: 'Click Email',
                    label: 'wildiney@gmail.com'
                  })
                }
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
                to='https://linkedin.com/in/wildiney'
                target='_blank'
                onClick={() =>
                  ReactGA.event({
                    category: 'Contact',
                    action: 'Click LinkedIn',
                    label: 'linkedin.com/in/wildiney'
                  })
                }
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
                to='https://www.behance.net/wildiney'
                target='_blank'
                onClick={() =>
                  ReactGA.event({
                    category: 'Contact',
                    action: 'Click Behance',
                    label: 'https://www.behance.net/wildiney'
                  })
                }
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
                to='https://github.com/wildiney'
                target='_blank'
                onClick={() =>
                  ReactGA.event({
                    category: 'Contact',
                    action: 'Click GitHub',
                    label: 'github.com/wildiney'
                  })
                }
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
                to='https://www.youtube.com/watch?v=5aU_i7rOnlA&list=PLEFS0XFJyys1QVGZ7WL23hCtWcLj4NV2y'
                target='_blank'
                onClick={() =>
                  ReactGA.event({
                    category: 'Contact',
                    action: 'Click YouTube',
                    label: 'youtube.com/@WildineyDiMasi/playlists'
                  })
                }
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
    </section>
  )
}

export default Contact
