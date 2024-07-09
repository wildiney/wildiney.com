import './globals.css'
import GoogleAnalytics from './components/GoogleAnalytics/GoogleAnalytics'
import { GA_TRACKING_ID } from './libs/gtag'

export const metadata = {
  title: 'Wildiney Di Masi',
  description: "Wildiney Di Masi's Linktree",
}

export default function RootLayout ({
  children,
}: {
  children: React.ReactNode
}) {



  return (
    <html lang='pt-br'>
      <head>
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body>{children}</body>
      <GoogleAnalytics />
    </html>
  )
}
