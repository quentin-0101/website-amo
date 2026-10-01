import { races } from '../../app/data/races'

// Generated from the same race data as the pages, so a new race appears here automatically.
const SITE_URL = 'https://amo-montpellier.fr'
const STATIC_PATHS = ['/', '/courses', '/adhesion', '/piste-grammont', '/images/adhesion_officielle_2026_amo.pdf']

export default defineEventHandler((event) => {
  const paths = [...STATIC_PATHS, ...races.map(r => `/courses/${r.slug}`)]
  const body = '<?xml version="1.0" encoding="UTF-8"?>\n'
    + '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
    + paths.map(p => `  <url><loc>${SITE_URL}${p}</loc></url>`).join('\n')
    + '\n</urlset>\n'

  setResponseHeader(event, 'content-type', 'application/xml; charset=utf-8')
  setResponseHeader(event, 'cache-control', 'public, max-age=3600')
  return body
})
