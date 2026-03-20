'use client'

import { useState, useEffect } from 'react'
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import { routing } from '@/i18n/routing'
import { clsx } from 'clsx'
import MobileMenu from './MobileMenu'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const t = useTranslations('nav')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { href: '#about', label: t('about') },
    { href: '#portfolio', label: t('portfolio') },
    { href: '#articles', label: 'Artigos' },
    { href: '#contact', label: t('contact') },
  ]

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-surface/95 backdrop-blur-sm border-b border-rule shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-24 h-16 flex items-center justify-between">
        <Link href="/" className="font-display text-lg font-semibold text-ink hover:text-accent transition-colors">
          Wildiney
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-sans text-muted hover:text-ink transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Language switcher + mobile */}
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <MobileMenu navLinks={navLinks} />
        </div>
      </div>
    </header>
  )
}

function LanguageSwitcher() {
  const fullPathname = usePathname() // e.g. '/en/portfolio/bolsa-familia/' or '/'

  // Strip the locale prefix to get the locale-agnostic path
  let pathname = fullPathname
  for (const locale of routing.locales) {
    if (pathname.startsWith(`/${locale}/`)) {
      pathname = pathname.slice(`/${locale}`.length) || '/'
      break
    } else if (pathname === `/${locale}`) {
      pathname = '/'
      break
    }
  }

  const locales = [
    { code: 'pt', label: 'PT' },
    { code: 'en', label: 'EN' },
    { code: 'es', label: 'ES' },
  ]

  return (
    <div className="hidden md:flex items-center gap-1">
      {locales.map((locale) => (
        <Link
          key={locale.code}
          href={pathname}
          locale={locale.code as 'pt' | 'en' | 'es'}
          className="text-xs font-sans font-medium text-muted hover:text-ink px-1.5 py-0.5 transition-colors"
        >
          {locale.label}
        </Link>
      ))}
    </div>
  )
}
