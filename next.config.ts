import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts')

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  typescript: {
    // Old Vite source files in src/pages/ and src/components/ cause type errors
    // during migration — these will be removed in Phase 3+
    ignoreBuildErrors: true,
  },
}

export default withNextIntl(nextConfig)
