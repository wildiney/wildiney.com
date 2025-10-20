import { createWriteStream } from 'fs'
import { SitemapStream, streamToPromise } from 'sitemap'

async function generateSitemap () {
  const sitemap = new SitemapStream({ hostname: 'https://www.wildiney.com/' })
  const routes = [
    '/',
    '/intro',
    '/about',
    '/contact',
    '/portfolio',
    '/portfolio/globalweb/bolsa-familia',
    '/portfolio/sanrio/ecommerce',
    '/portfolio/indra'
  ]

  routes.forEach((url) => sitemap.write({ url, changefreq: 'monthly', priority: 0.8 }))
  sitemap.end()

  const xml = await streamToPromise(sitemap)
  createWriteStream('./public/sitemap.xml').write(xml)
  console.log('✅ sitema.xml generated successfully')
}

generateSitemap()