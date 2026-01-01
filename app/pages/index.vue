<template>
  <div class="font-sans antialiased text-gray-800">
    <AppHeader />
    
    <main>
      <HeroSection />
      <AboutSection />
      <LocationSection />
      <CalendarSection />
      <ContactSection />
    </main>
    
    <AppFooter />
  </div>
</template>

<script setup>
// Components are auto-imported by Nuxt

useSeoMeta({
  title: 'AMO Montpellier - Club de Modélisme RC | Accueil',
  description: 'Découvrez l\'Association Modéliste Occitane, AMO Montpellier, club de modélisme radiocommandé à Montpellier. Courses, compétitions FFVRC, GT8, 1/8, 1/10.',
  ogTitle: 'AMO Montpellier - Club de Modélisme RC',
  ogDescription: 'Découvrez l\'Association Modéliste Occitane, AMO Montpellier, club de modélisme radiocommandé à Montpellier.',
  ogImage: 'https://amo-montpellier.fr/images/amo_piste.webp',
  ogUrl: 'https://amo-montpellier.fr/',
  twitterTitle: 'AMO Montpellier - Club de Modélisme RC',
  twitterDescription: 'Découvrez l\'Association Modéliste Occitane, AMO Montpellier, club de modélisme radiocommandé à Montpellier.',
  twitterImage: 'https://amo-montpellier.fr/images/amo_piste.webp',
  twitterCard: 'summary_large_image'
})

useHead({
  htmlAttrs: {
    lang: 'fr'
  },
  link: [
    {
      rel: 'canonical',
      href: 'https://amo-montpellier.fr/'
    }
  ]
})
</script>
