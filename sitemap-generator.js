const { configureSitemap } = require('@sergeymyssak/nextjs-sitemap')

const Sitemap = configureSitemap({
  domains: [{ domain: 'localhost', locales: ['en', 'zh-hans', 'zh-hant'] }],
  exclude: ['/api/*'],
  excludeIndex: true,
  trailingSlash: true,
  targetDirectory: __dirname + '/public',
  pagesDirectory: __dirname + '/pages',
})

Sitemap.generateSitemap()
