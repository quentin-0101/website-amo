<script setup>
import { club } from '~/data/club'
import { races, upcomingRaces } from '~/data/races'

const title = 'Courses RC 2026 à Montpellier : calendrier AMO (FFVRC)'
const description = "Calendrier 2026 des courses FFVRC de voitures radiocommandées sur la piste de l'AMO, parc de Grammont à Montpellier : dates, catégories, inscriptions."

useSeoPage({ title, description, path: '/courses' })

const upcoming = computed(() => upcomingRaces())
const past = computed(() => races.filter(r => !upcoming.value.includes(r)).sort((a, b) => b.startDate.localeCompare(a.startDate)))

useSchemaGraph([
  webPageNode('/courses', title, description),
  breadcrumbNode([{ name: 'Accueil', path: '/' }, { name: 'Courses', path: '/courses' }]),
  ...upcoming.value.map(eventNode),
])
</script>

<template>
  <main>
    <PageHero
      eyebrow="Saison 2026"
      title="Calendrier des courses 2026 sur la piste de Grammont"
      lead="L'Association Modéliste Occitane organise sur sa piste du parc de Grammont, à Montpellier, des courses officielles de la FFVRC et des manches de challenges inter-clubs. Les inscriptions des pilotes licenciés se font sur le site de la fédération."
      :crumbs="[{ name: 'Accueil', to: '/' }, { name: 'Courses' }]"
    />

    <div class="bg-slate-900 relative overflow-hidden">
      <div class="absolute top-1/3 right-0 w-96 h-96 bg-red-500/15 rounded-full blur-[100px] pointer-events-none" />
      <div class="relative container mx-auto px-4 pt-16 pb-14">
        <div class="max-w-5xl mx-auto">
          <h2 class="text-2xl md:text-3xl font-bold mb-12 text-white">Prochaines courses</h2>
          <div v-if="upcoming.length" class="grid gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            <article
              v-for="race in upcoming"
              :key="race.slug"
              class="group relative bg-white rounded-3xl p-6 pt-10 shadow-xl hover:-translate-y-1 transition-transform"
            >
              <div :class="`absolute -top-6 left-6 bg-gradient-to-br ${race.color} text-white px-4 py-2 rounded-2xl shadow-lg text-center`">
                <span class="block text-xs font-bold uppercase tracking-wider">{{ raceBadge(race).month }} {{ raceBadge(race).year }}</span>
                <span class="block text-2xl font-bold leading-none">{{ raceBadge(race).day }}</span>
              </div>
              <p class="text-xs font-bold uppercase tracking-widest text-red-700 mb-2">{{ race.type }}</p>
              <h3 class="text-xl font-bold mb-3 text-slate-900">
                <NuxtLink :to="`/courses/${race.slug}`" class="group-hover:text-red-700 after:absolute after:inset-0 after:content-['']">{{ race.title }}</NuxtLink>
              </h3>
              <p class="text-slate-700 text-sm">{{ race.dateLabel }}</p>
              <p v-if="race.rescheduled" class="text-red-700 text-sm font-semibold">Reportée : initialement prévue le {{ race.rescheduled.previousDateLabel }}</p>
              <p v-if="race.practiceNote" class="text-slate-600 text-sm">{{ race.practiceNote }}</p>
              <ul class="flex flex-wrap gap-2 mt-4">
                <li v-for="category in race.categories" :key="category" class="text-xs font-semibold bg-slate-100 text-slate-700 rounded-full px-3 py-1">{{ category }}</li>
              </ul>
              <p class="mt-5 text-sm font-bold text-red-700">Infos et inscription <AppIcon name="arrow-right" /></p>
            </article>
          </div>
          <p v-else class="text-gray-300">Le calendrier de la prochaine saison sera publié ici dès qu'il sera validé par la FFVRC.</p>
        </div>
      </div>
    </div>

    <div class="bg-slate-100">
      <div class="container mx-auto px-4 py-12 md:py-16">
        <div class="max-w-5xl mx-auto space-y-8">
          <section class="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200 border-l-8 border-l-red-600" aria-labelledby="inscription-h">
            <h2 id="inscription-h" class="text-2xl font-bold mb-3 text-slate-900 flex items-center gap-3">
              <span class="w-10 h-10 rounded-full bg-red-100 text-red-700 flex items-center justify-center"><AppIcon name="flag-checkered" /></span>
              S'inscrire à une course
            </h2>
            <p class="text-slate-700 mb-5">
              Les courses officielles sont ouvertes aux pilotes titulaires d'une licence FFVRC Compétition. L'inscription se fait en ligne sur le site de la fédération.
            </p>
            <div class="flex flex-wrap gap-3">
              <a :href="club.links.ffvrcRegistration" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-full shadow-md">
                S'inscrire sur le site de la FFVRC <AppIcon name="external-link" />
              </a>
              <a :href="club.links.ffvrcCalendar" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 border-2 border-slate-900 text-slate-900 font-bold px-6 py-3 rounded-full hover:bg-slate-900 hover:text-white">
                Calendrier national FFVRC <AppIcon name="external-link" />
              </a>
            </div>
          </section>

          <div class="grid gap-8" :class="past.length ? 'md:grid-cols-2' : ''">
            <section class="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200 border-t-4 border-t-amber-500" aria-labelledby="lieu-h">
              <h2 id="lieu-h" class="text-xl font-bold mb-3 text-slate-900 flex items-center gap-3">
                <span class="w-10 h-10 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center"><AppIcon name="map-marker" /></span>
                Lieu des courses
              </h2>
              <p class="text-slate-700">
                Toutes les courses ont lieu sur la <NuxtLink to="/piste-grammont" class="font-semibold text-red-700 hover:underline">piste du parc de Grammont</NuxtLink>,
                {{ club.address.street }}, {{ club.address.postalCode }} {{ club.address.city }}.
              </p>
            </section>

            <section v-if="past.length" class="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200 border-t-4 border-t-slate-400" aria-labelledby="passees-h">
              <h2 id="passees-h" class="text-xl font-bold mb-3 text-slate-900">Courses passées</h2>
              <ul class="space-y-2">
                <li v-for="race in past" :key="race.slug">
                  <NuxtLink :to="`/courses/${race.slug}`" class="text-red-700 hover:underline font-semibold">{{ race.title }}</NuxtLink>
                  <span class="text-slate-500"> · {{ race.dateLabel }}</span>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>

    <ContactBand text="Une question sur une course, les catégories ou l'accueil des pilotes ?" />
  </main>
</template>
