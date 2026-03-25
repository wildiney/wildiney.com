import pt from '../../messages/pt.json'
import en from '../../messages/en.json'
import es from '../../messages/es.json'

const messages = { pt, en, es } as const

export type Locale = 'pt' | 'en' | 'es'
export type Messages = typeof pt

export function getTranslations(locale: string): Messages {
  return messages[locale as Locale] ?? messages.pt
}

export function getLocaleFromUrl(url: URL): Locale {
  const [, first] = url.pathname.split('/')
  if (first === 'en' || first === 'es') return first
  return 'pt'
}

export const locales: Locale[] = ['pt', 'en', 'es']
export const defaultLocale: Locale = 'pt'

export function getLocalePath(locale: Locale, path: string = ''): string {
  if (locale === 'pt') return `/${path}`.replace(/\/+/g, '/') || '/'
  return `/${locale}/${path}`.replace(/\/+/g, '/') || `/${locale}/`
}
