'use client'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useTranslation } from '@/app/i18n/TranslationProvider'
import { languages, type Lang } from '@/app/i18n'

export function getBaseUrlClient () {
  if (typeof window !== "undefined") {
    return `${window.location.protocol}//${window.location.host}`;
  }
  return "";
}

type NavigationProps = {
  mobile?: boolean
  onNavigate?: () => void
}

function Navigation ({ mobile = false, onNavigate }: NavigationProps) {
  const { dict } = useTranslation() as {
    dict: {
      nav: {
        intro: string
        about: string
        portfolio: string
        contact: string
      }
    }
  }

  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [hash, setHash] = useState<string | null>(null)

  useEffect(() => {
    const updateHash = () => {
      const h = typeof window !== 'undefined' ? window.location.hash : ''
      setHash(h ? h.replace(/^#/, '') : null)
    }

    updateHash()
    window.addEventListener('hashchange', updateHash)
    return () => window.removeEventListener('hashchange', updateHash)
  }, [])

  const segments = pathname ? pathname.split('/').filter(Boolean) : []
  const firstSegment = (segments[0] || undefined) as Lang | undefined
  const currentLang: Lang = (languages.includes(firstSegment as Lang) ? (firstSegment as Lang) : 'pt') as Lang

  const links = [
    { to: `/${currentLang}/#intro`, label: dict.nav.intro, id: 'intro' },
    { to: `/${currentLang}/#about`, label: dict.nav.about, id: 'about' },
    { to: `/${currentLang}/#portfolio`, label: dict.nav.portfolio, id: 'portfolio' },
    { to: `/${currentLang}/#contact`, label: dict.nav.contact, id: 'contact' },
  ];

  const getLinkClass = (id: string) =>
    `text-primary px-4 py-2 whitespace-nowrap transition-colors border rounded-full box-content hover:border hover:border-primary ${pathname.includes(id)
      ? 'bg-primary/5 text-primary border border-primary'
      : 'bg-transparent border-transparent'
    }`

  const buildLangUrl = (lang: Lang) => {
    const newSegments = [...segments]
    if (newSegments.length && languages.includes(newSegments[0] as Lang)) {
      newSegments[0] = lang
    } else {
      newSegments.unshift(lang)
    }

    const path = '/' + newSegments.join('/')
    const query = searchParams?.toString()
    const qs = query ? `?${query}` : ''
    const fragment = hash ? `#${hash}` : ''

    return `${path}${qs}${fragment}`
  }

  // --- MOBILE ---
  if (mobile) {
    return (
      <nav className="flex flex-col items-stretch gap-4 w-full">
        <ul className="flex flex-col gap-2 w-full">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={link.to}
                className={`block text-primary px-4 py-3 text-lg rounded-full text-center transition-colors ${pathname.includes(link.id)
                  ? 'bg-primary/10 font-semibold border border-primary'
                  : 'bg-transparent hover:bg-primary/5 border border-transparent'
                  }`}
                onClick={() => onNavigate && onNavigate()}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex justify-center gap-2 mt-4">
          {languages.map((lng) => (
            <Link
              key={lng}
              href={buildLangUrl(lng)}
              className={`px-3 py-1 rounded-full text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 ${lng === currentLang
                ? 'bg-primary/10 text-primary font-semibold cursor-default border'
                : 'bg-transparent text-primary hover:bg-primary/10'
                }`}
              aria-label={
                lng === 'pt' ? `Mudar para ${lng}` : lng === 'en' ? `Switch to ${lng}` : `Cambiar a ${lng}`
              }
            >
              {lng.toUpperCase()}
            </Link>
          ))}
        </div>
      </nav>
    )
  }

  // --- DESKTOP ---
  return (
    <nav className="hidden items-center lg:flex">
      <ul className="flex w-full md:w-auto gap-4">
        {links.map((link) => (
          <li className="w-full" key={link.id}>
            <a href={link.to} className={getLinkClass(link.id)}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="ml-4 flex justify-center gap-2">
        {languages.map((lng) => (
          <Link
            key={lng}
            href={buildLangUrl(lng)}
            className={`px-3 py-1 rounded-full text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 ${lng === currentLang ? 'bg-primary/10 text-primary font-semibold cursor-default border' : 'bg-transparent text-primary hover:bg-primary/10'
              }`}
          >
            {lng.toUpperCase()}
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default Navigation
