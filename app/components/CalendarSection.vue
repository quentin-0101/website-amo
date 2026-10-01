<script setup>
import { club } from '~/data/club'
import { upcomingRaces } from '~/data/races'

const list = computed(() => upcomingRaces())
</script>

<template>
  <section id="calendrier" class="py-12 bg-slate-900 text-white relative overflow-hidden scroll-mt-20">
    <!-- Abstract Shapes -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-red-500/20 rounded-full blur-[100px] transform translate-x-1/3 -translate-y-1/3 pointer-events-none" />
    <div class="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] transform -translate-x-1/3 translate-y-1/3 pointer-events-none" />

    <div class="container mx-auto px-4 text-center relative z-10">
      <div class="max-w-6xl mx-auto">
        <div class="heading mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-white">Calendrier des courses 2026</h2>
          <div class="w-20 h-1 bg-gradient-to-r from-amber-500 to-amber-400 mx-auto rounded-full" />
          <p class="mt-6 text-gray-300 max-w-2xl mx-auto text-lg">Les grands rendez-vous de la saison sur la piste de Grammont : courses FFVRC et challenges.</p>
        </div>

        <!-- Race Cards -->
        <div v-if="list.length" class="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          <article
            v-for="race in list"
            :key="race.slug"
            class="group relative bg-white/95 rounded-3xl p-8 border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:scale-[1.03] shadow-xl text-gray-900"
          >
            <!-- Date Badge -->
            <div class="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <div :class="`bg-gradient-to-br ${race.color} text-white px-6 py-3 rounded-2xl shadow-2xl`">
                <div class="text-xs font-bold uppercase tracking-wider">{{ raceBadge(race).month }}</div>
                <div class="text-3xl font-bold leading-none">{{ raceBadge(race).day }}</div>
                <div class="text-xs font-semibold">{{ raceBadge(race).year }}</div>
              </div>
            </div>

            <div class="mt-12">
              <h3 class="text-2xl font-bold mb-3 text-gray-900">
                <NuxtLink :to="`/courses/${race.slug}`" class="hover:text-red-600 after:absolute after:inset-0 after:content-['']">{{ race.shortTitle }}</NuxtLink>
              </h3>
              <p class="text-gray-600 text-sm uppercase tracking-widest mb-3 font-semibold">{{ race.type }}</p>

              <div class="space-y-3 text-left">
                <p class="flex items-start gap-3 text-gray-700">
                  <span class="w-5 shrink-0 text-orange-600"><AppIcon name="calendar" /></span>
                  <span class="text-sm font-medium">{{ race.dateLabel }}<span v-if="race.rescheduled" class="block font-semibold text-red-700">Reportée : initialement prévue le {{ race.rescheduled.previousDateLabel }}</span><span v-if="race.practiceNote" class="block text-gray-600">{{ race.practiceNote }}</span></span>
                </p>
                <p class="flex items-start gap-3 text-gray-700">
                  <span class="w-5 shrink-0 text-orange-600"><AppIcon name="map-marker" /></span>
                  <span class="text-sm font-medium">Parc de Grammont, allée Alexis Vastine, Montpellier</span>
                </p>
                <div class="flex items-start gap-3 text-gray-700">
                  <span class="w-5 shrink-0 text-orange-600 mt-0.5"><AppIcon name="trophy" /></span>
                  <ul class="text-sm font-medium space-y-1">
                    <li v-for="category in race.categories" :key="category">{{ category }}</li>
                  </ul>
                </div>
              </div>

              <p class="mt-6 text-sm font-bold text-red-700">Infos et inscription <AppIcon name="arrow-right" /></p>
            </div>
          </article>
        </div>
        <p v-else class="text-gray-300 text-lg">
          Le calendrier de la prochaine saison sera publié ici. En attendant, consultez le
          <a :href="club.links.ffvrcCalendar" target="_blank" rel="noopener noreferrer" class="underline">calendrier de la FFVRC</a>.
        </p>

        <p class="mt-10">
          <NuxtLink to="/courses" class="inline-flex items-center gap-2 text-white font-semibold underline underline-offset-4 hover:text-amber-400">
            Calendrier complet et inscriptions <AppIcon name="arrow-right" />
          </NuxtLink>
        </p>

        <!-- Training Info -->
        <div class="mt-12 bg-white/95 rounded-3xl p-8 border border-gray-200 shadow-xl">
          <div class="flex flex-col md:flex-row items-center justify-between gap-6">
            <div class="text-left">
              <h3 class="text-xl font-bold mb-2 flex items-center gap-3 text-gray-900">
                <AppIcon name="calendar-check-o" class="text-orange-600 text-2xl" />
                Entraînements
              </h3>
              <p class="text-gray-600 font-medium">Tous les jours sur notre piste, pour les membres du club.</p>
            </div>
            <a
              :href="`mailto:${club.email}`"
              class="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold px-8 py-4 rounded-full hover:from-red-600 hover:to-red-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <AppIcon name="envelope" />
              Nous contacter
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
