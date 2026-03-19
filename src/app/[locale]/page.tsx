import { useTranslations } from 'next-intl'

export default function HomePage() {
  const t = useTranslations('nav')
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Wildiney.com — Next.js Migration</h1>
      <p>Locale working. Nav keys: {t('intro')}, {t('about')}, {t('portfolio')}</p>
    </main>
  )
}
