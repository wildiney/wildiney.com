import './globals.css'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import * as gtag from './libs/gtag'

export const metadata = {
  title: 'Wildiney Di Masi',
  description: "Wildiney Di Masi's Linktree",
}

export default function RootLayout ({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  useEffect(() => {
    gtag.pageview(pathname)
  }, [pathname])

  return (
    <html lang='pt-br'>
      <head>
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gtag.GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
