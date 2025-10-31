import type { Metadata } from 'next'
import { Poppins, Josefin_Sans } from 'next/font/google'
import './globals.css'


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

const josefin = Josefin_Sans({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500'],
  variable: '--font-josefin',
})

export const metadata: Metadata = {
  title: 'Wildiney Di Masi - Product Designer | UI/UX Specialist',
  description:
    'Wildiney Fernando Di Masi - Product Designer especializado em UI/UX. Veja meu portfólio, conecte-se no LinkedIn e entre em contato.',
  keywords: [
    'Wildiney Di Masi',
    'Product Designer',
    'UX',
    'UI',
    'Designer de Interação',
    'Portfólio de Design',
    'UX Designer Brasil',
  ],
  authors: [{ name: 'Wildiney Fernando Di Masi' }],
  creator: 'Wildiney Fernando Di Masi',
  metadataBase: new URL('https://www.wildiney.com'),
  alternates: {
    canonical: 'https://www.wildiney.com',
  },
  openGraph: {
    title: 'Wildiney Di Masi - Product Designer | UI/UX Specialist',
    description:
      'Confira meu portfólio de design digital com foco em experiência do usuário, interfaces intuitivas e soluções criativas.',
    url: 'https://www.wildiney.com',
    type: 'website',
    images: [
      {
        url: '/assets/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Wildiney Di Masi - Product Designer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wildiney Di Masi - Product Designer | UI/UX Specialist',
    description:
      'Designer especializado em interfaces e experiência do usuário. Veja meu trabalho.',
    images: ['/assets/og-image.jpg'],
    creator: '@wildiney',
  },
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${poppins.variable} ${josefin.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
