// URL normalisation, done in one 301 hop:
// - www.amo-montpellier.fr -> amo-montpellier.fr
// - trailing slash removed (/adhesion/ -> /adhesion)
// - legacy URLs from the previous site (documents.html, 2024 membership PDF) -> /adhesion
const CANONICAL_HOST = 'amo-montpellier.fr'

const LEGACY: Record<string, string> = {
  '/documents': '/adhesion',
  '/documents.html': '/adhesion',
  '/index.html': '/',
}

export default defineEventHandler((event) => {
  const host = (getRequestHeader(event, 'x-forwarded-host') || getRequestHeader(event, 'host') || '').split(',')[0].trim().toLowerCase()
  const [rawPath, query] = event.path.split('?')
  // Leave Nuxt internals (/_nuxt/, /__nuxt_devtools__/, …) untouched.
  if (rawPath.startsWith('/_')) return
  let path = rawPath.length > 1 ? rawPath.replace(/\/+$/, '') : rawPath

  let decoded = path
  try {
    decoded = decodeURIComponent(path)
  }
  catch {}

  if (LEGACY[path]) path = LEGACY[path]
  else if (/^\/images\/adh.*2024.*\.pdf$/i.test(decoded)) path = '/adhesion'

  const wrongHost = host === `www.${CANONICAL_HOST}`
  if (!wrongHost && path === rawPath) return

  const target = (wrongHost ? `https://${CANONICAL_HOST}` : '') + path + (query ? `?${query}` : '')
  return sendRedirect(event, target, 301)
})
