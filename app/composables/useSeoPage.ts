import { SITE_URL, club } from '~/data/club'

interface SeoPageOptions {
  title: string
  description: string
  /** Path of the page, e.g. '/adhesion'. Used for the canonical and og:url. */
  path: string
  image?: { url: string, width: number, height: number, alt: string }
  noindex?: boolean
}

/** Title, description, canonical, Open Graph and Twitter tags for one page. */
export function useSeoPage(opts: SeoPageOptions) {
  const url = SITE_URL + (opts.path === '/' ? '/' : opts.path.replace(/\/+$/, ''))
  const image = opts.image ?? {
    url: club.ogImage.url,
    width: club.ogImage.width,
    height: club.ogImage.height,
    alt: 'Piste de modélisme RC du parc de Grammont à Montpellier',
  }
  const imageUrl = image.url.startsWith('http') ? image.url : SITE_URL + image.url

  useSeoMeta({
    title: opts.title,
    description: opts.description,
    robots: opts.noindex ? 'noindex, follow' : 'index, follow',
    ogType: 'website',
    ogSiteName: club.shortName,
    ogLocale: 'fr_FR',
    ogUrl: url,
    ogTitle: opts.title,
    ogDescription: opts.description,
    ogImage: imageUrl,
    ogImageWidth: image.width,
    ogImageHeight: image.height,
    ogImageAlt: image.alt,
    twitterCard: 'summary_large_image',
    twitterTitle: opts.title,
    twitterDescription: opts.description,
    twitterImage: imageUrl,
  })

  useHead({
    link: opts.noindex ? [] : [{ rel: 'canonical', href: url }],
  })

  return { url }
}
