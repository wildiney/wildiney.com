import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'https://wildiney.com',
  output: 'static',
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt', 'en', 'es'],
    routing: { prefixDefaultLocale: false }
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/agenda/')
    })
  ],
  vite: {
    plugins: [tailwindcss()]
  },
  build: {
    format: 'directory'
  }
})
