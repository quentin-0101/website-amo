<script setup>
const props = defineProps({ error: Object })
const is404 = computed(() => props.error?.statusCode === 404)

useHead({
  title: is404.value ? 'Page introuvable | AMO Montpellier' : 'Erreur | AMO Montpellier',
  htmlAttrs: { lang: 'fr' },
  meta: [{ name: 'robots', content: 'noindex, follow' }],
})

const links = [
  { to: '/', label: 'Accueil', icon: 'arrow-left' },
  { to: '/courses', label: 'Calendrier des courses', icon: 'flag-checkered' },
  { to: '/adhesion', label: 'Adhésion et tarifs', icon: 'users' },
  { to: '/piste-grammont', label: 'La piste', icon: 'map-marker' },
]
</script>

<template>
  <NuxtLayout>
    <main>
      <PageHero
        :eyebrow="`Erreur ${error?.statusCode || 500}`"
        :title="is404 ? 'Cette page n\'existe pas ou a été déplacée' : 'Une erreur est survenue'"
        lead="Voici les pages les plus consultées du site de l'AMO Montpellier :"
      >
        <ul class="mt-8 flex flex-wrap gap-3">
          <li v-for="(link, i) in links" :key="link.to">
            <NuxtLink
              :to="link.to"
              class="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-full transition-colors"
              :class="i === 0 ? 'bg-red-600 hover:bg-red-500 text-white shadow-lg' : 'border-2 border-white/80 text-white hover:bg-white/10'"
            >
              <AppIcon :name="link.icon" /> {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
      </PageHero>
    </main>
  </NuxtLayout>
</template>
