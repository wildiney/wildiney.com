/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.wildiney.com',
  generateRobotsTxt: true,
  trailingSlash: true,
  outDir: 'out',
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/agenda/', '/en/agenda/', '/es/agenda/'],
      },
    ],
  },
  // Exclude agenda from sitemap
  exclude: ['/agenda', '/en/agenda', '/es/agenda', '/agenda/', '/en/agenda/', '/es/agenda/'],
}
