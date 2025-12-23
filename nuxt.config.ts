// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'app/',
  modules: [
    '@nuxt/content',
  ],
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
      title: 'AMO Montpellier - Club de Modélisme RC',
      meta: [
        { name: 'description', content: 'Association Modéliste Occitane (AMO) - AMO Montpellier - Club de modélisme radiocommandé à Montpellier. Courses de voitures RC 1/8, 1/10, GT8, compétitions FFVRC.' },
        { name: 'keywords', content: 'AMO Montpellier, modélisme RC, modélisme Montpellier, voitures radiocommandées, FFVRC, course RC, 1/8, 1/10, GT8, club modélisme Montpellier' },
        { name: 'author', content: 'AMO Montpellier' },
        { name: 'robots', content: 'index, follow' },

        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://amo-montpellier.fr/' },
        { property: 'og:title', content: 'AMO Montpellier - Club de Modélisme RC' },
        { property: 'og:description', content: 'Association Modéliste Occitane (AMO) - Club de modélisme radiocommandé à Montpellier.' },
        { property: 'og:image', content: 'https://amo-montpellier.fr/images/amo_piste.webp' },
        { property: 'og:locale', content: 'fr_FR' },

        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'AMO Montpellier - Club de Modélisme RC' },
        { name: 'twitter:description', content: 'Association Modéliste Occitane (AMO) - Club de modélisme radiocommandé à Montpellier.' },
        { name: 'twitter:image', content: 'https://amo-montpellier.fr/images/amo_piste.webp' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://amo-montpellier.fr/' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' }
      ]
    }
  },
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
})
