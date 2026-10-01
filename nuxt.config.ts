// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'app/',
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
      'autoprefixer': {},
    },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'fr'
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      // Defaults only: every page sets its own title, description, canonical and Open Graph tags (useSeoPage).
      title: 'AMO Montpellier - Club de voitures radiocommandées',
      meta: [
        { name: 'description', content: 'Association Modéliste Occitane (AMO Montpellier), club de voitures radiocommandées sur piste au parc de Grammont à Montpellier.' },
        { name: 'theme-color', content: '#0f172a' },
      ],
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: '48x48' },
        { rel: 'icon', type: 'image/png', href: '/favicon-96x96.png', sizes: '96x96' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' },
      ],
    }
  },
  routeRules: {
    '/**': { headers: { 'strict-transport-security': 'max-age=31536000' } },
    '/images/**': { headers: { 'cache-control': 'public, max-age=86400' } },
  },
  hooks: {
    // Images imported from ~/assets would otherwise be announced as <link rel="prefetch"> on every page.
    // Each page already references the images it displays, so drop those hints.
    'build:manifest': (manifest) => {
      for (const chunk of Object.values(manifest)) {
        chunk.assets = chunk.assets?.filter(file => !/\.(?:png|jpe?g|webp|avif|gif|svg)$/i.test(file))
      }
    },
  },
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
})
