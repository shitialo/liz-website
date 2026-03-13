/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://https://lizwakesho.co.ke',
  generateRobotsTxt: true, // Generates robots.txt automatically
  sitemapSize: 5000,
  changefreq: 'daily',
  priority: 0.7,
  // Customize priority for specific pages
  transform: async (config, path) => {
    // Set higher priority for homepage
    if (path === '/') {
      return {
        loc: path,
        changefreq: 'daily',
        priority: 1.0,
        lastmod: new Date().toISOString(),
      }
    }
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
    }
  },
}