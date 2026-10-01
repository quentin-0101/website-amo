<script setup>
import { club, fullAddress } from '~/data/club'
import { raceBySlug } from '~/data/races'
import { racePoster } from '~/utils/racePoster'

const route = useRoute()
const race = raceBySlug(String(route.params.slug))

if (!race) {
  throw createError({ statusCode: 404, statusMessage: 'Course introuvable', fatal: true })
}

const poster = racePoster(race)
const isPast = race.endDate < new Date().toISOString().slice(0, 10)
const path = `/courses/${race.slug}`
const title = race.seoTitle
const description = race.summary.length > 160 ? race.summary.slice(0, 157).replace(/\s+\S*$/, '') + '…' : race.summary

useSeoPage({
  title,
  description,
  path,
  image: poster
    ? { url: poster.jpg, width: 923, height: 1115, alt: poster.alt }
    : undefined,
})
useSchemaGraph([
  webPageNode(path, title, description),
  breadcrumbNode([{ name: 'Accueil', path: '/' }, { name: 'Courses', path: '/courses' }, { name: race.shortTitle, path }]),
  eventNode(race),
])
</script>

<template>
  <main>
    <PageHero
      :eyebrow="race.type"
      :title="race.title"
      :crumbs="[{ name: 'Accueil', to: '/' }, { name: 'Courses', to: '/courses' }, { name: race.shortTitle }]"
    >
      <div class="mt-8 flex flex-wrap items-center gap-3">
        <span :class="`inline-flex items-center gap-2 bg-gradient-to-br ${race.color} text-white font-bold rounded-full px-5 py-2.5 shadow-lg`">
          <AppIcon name="calendar" /> {{ race.dateLabel }}
        </span>
        <span class="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2.5">
          <AppIcon name="map-marker" class="text-red-400" /> Parc de Grammont, Montpellier
        </span>
        <span v-if="race.rescheduled && !isPast" class="inline-flex items-center bg-white text-red-700 font-bold rounded-full px-4 py-2">Reportée : initialement prévue le {{ race.rescheduled.previousDateLabel }}</span>
        <span v-if="isPast" class="inline-flex items-center bg-white text-slate-900 font-semibold rounded-full px-4 py-2">Course terminée</span>
      </div>
    </PageHero>

    <div class="bg-slate-100">
      <div class="container mx-auto px-4 py-12 md:py-16">
        <div class="max-w-5xl mx-auto">
          <p class="text-lg text-slate-700 leading-relaxed bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200 border-l-8 border-l-red-600 mb-8">{{ race.summary }}</p>

          <div class="grid gap-8 lg:items-start" :class="poster ? 'lg:grid-cols-5' : 'lg:grid-cols-2'">
            <div class="space-y-8" :class="poster ? 'lg:col-span-3' : 'lg:col-span-2 lg:grid lg:grid-cols-2 lg:gap-8 lg:space-y-0 lg:items-start'">
              <section class="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200 border-t-4 border-t-red-600" aria-labelledby="infos-h">
                <h2 id="infos-h" class="text-2xl font-bold mb-6 text-slate-900">Infos pratiques</h2>
                <dl class="space-y-5 text-slate-700">
                  <div class="flex gap-4">
                    <dt class="w-10 h-10 rounded-full bg-red-100 text-red-700 flex items-center justify-center shrink-0"><AppIcon name="calendar" label="Dates" /></dt>
                    <dd class="pt-1.5">
                      <strong class="text-slate-900">{{ race.dateLabel }}</strong>
                      <span v-if="race.rescheduled" class="block font-semibold text-red-700">Reportée : initialement prévue le {{ race.rescheduled.previousDateLabel }}</span>
                      <span v-if="race.practiceNote" class="block">{{ race.practiceNote }}</span>
                    </dd>
                  </div>
                  <div class="flex gap-4">
                    <dt class="w-10 h-10 rounded-full bg-red-100 text-red-700 flex items-center justify-center shrink-0"><AppIcon name="map-marker" label="Lieu" /></dt>
                    <dd class="pt-1.5">
                      {{ club.address.venue }}<br>{{ fullAddress }}
                      <a :href="club.mapsUrl" target="_blank" rel="noopener noreferrer" class="block text-red-700 font-semibold hover:underline mt-1">Itinéraire Google Maps</a>
                    </dd>
                  </div>
                  <div class="flex gap-4">
                    <dt class="w-10 h-10 rounded-full bg-red-100 text-red-700 flex items-center justify-center shrink-0"><AppIcon name="trophy" label="Catégories" /></dt>
                    <dd class="pt-1.5">
                      <ul class="flex flex-wrap gap-2">
                        <li v-for="category in race.categories" :key="category" class="text-sm font-semibold bg-slate-100 text-slate-800 rounded-full px-3 py-1">{{ category }}</li>
                      </ul>
                    </dd>
                  </div>
                  <div class="flex gap-4">
                    <dt class="w-10 h-10 rounded-full bg-red-100 text-red-700 flex items-center justify-center shrink-0"><AppIcon name="users" label="Organisateur" /></dt>
                    <dd class="pt-1.5">{{ club.name }} ({{ club.acronym }}), club FFVRC n°{{ club.ffvrcNumber }}</dd>
                  </div>
                </dl>
              </section>

              <section class="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200 border-t-4 border-t-amber-500" aria-labelledby="place-h">
                <h2 id="place-h" class="text-xl font-bold mb-4 text-slate-900">Sur place</h2>
                <ul class="space-y-2 text-slate-700">
                  <li v-for="info in race.practicalInfo || []" :key="info" class="flex gap-3"><AppIcon name="check" class="text-amber-600 mt-1 shrink-0" /><span>{{ info }}</span></li>
                  <li class="flex gap-3"><AppIcon name="plug" class="text-amber-600 mt-1 shrink-0" /><span>Stands couverts et éclairés, avec prises 220 V et soufflette permanente.</span></li>
                  <li class="flex gap-3"><AppIcon name="check" class="text-amber-600 mt-1 shrink-0" /><span>Parking sur place et point d'eau.</span></li>
                  <li class="flex gap-3"><AppIcon name="check" class="text-amber-600 mt-1 shrink-0" /><span>Hôtel le plus proche : Campanile Montpellier Le Millénaire, 1080 avenue Henri Becquerel (2,5 km).</span></li>
                </ul>
              </section>
            </div>

            <div v-if="poster || !isPast" class="space-y-8 lg:col-span-2">
              <section v-if="!isPast" class="relative overflow-hidden bg-gradient-to-br from-red-700 to-red-600 text-white rounded-3xl p-6 md:p-8 shadow-lg" aria-labelledby="inscription-h">
                <div class="absolute -top-16 -right-16 w-48 h-48 bg-white/10 rounded-full blur-2xl" />
                <h2 id="inscription-h" class="relative text-2xl font-bold mb-2">Inscription</h2>
                <p class="relative text-red-50 mb-5">Les inscriptions se font en ligne sur le site de la FFVRC, avec votre licence Compétition.</p>
                <a :href="club.links.ffvrcRegistration" target="_blank" rel="noopener noreferrer" class="relative inline-flex items-center gap-2 bg-white text-red-700 hover:bg-red-50 font-bold px-6 py-3 rounded-full shadow-md">
                  S'inscrire sur le site de la FFVRC <AppIcon name="external-link" />
                </a>
              </section>

              <figure v-if="poster" class="bg-white rounded-3xl p-4 shadow-sm border border-slate-200">
                <a :href="poster.jpg" target="_blank">
                  <img
                    :src="poster.webp"
                    :alt="poster.alt"
                    :width="poster.width"
                    :height="poster.height"
                    loading="lazy"
                    decoding="async"
                    class="w-full h-auto rounded-2xl"
                  >
                </a>
                <figcaption class="text-sm text-slate-500 mt-3 text-center">Affiche officielle de la course</figcaption>
              </figure>
            </div>
          </div>

          <p class="mt-10">
            <NuxtLink to="/courses" class="inline-flex items-center gap-2 text-red-700 font-bold hover:underline">
              <AppIcon name="arrow-left" /> Toutes les courses
            </NuxtLink>
          </p>
        </div>
      </div>
    </div>

    <ContactBand title="Une question sur la course ?" text="Catégories, horaires, accueil des pilotes : le club vous répond." />
  </main>
</template>
