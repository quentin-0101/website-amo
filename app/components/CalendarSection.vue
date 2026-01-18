<script setup>
const races = [
  {
    title: 'MRTP',
    date: 'Dimanche 25 Janvier 2026',
    month: 'JAN',
    day: '25',
    year: '2026',
    type: 'Challenge',
    categories: '1/10 & GT8',
    official: false,
    description: 'Challenge',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'GPRC',
    date: '27-28-29 Février 2026',
    month: 'FÉV',
    day: '27-29',
    year: '2026',
    type: 'Compétition Internationale',
    categories: '1/5 et GT8',
    official: false,
    description: 'Pilotes européens',
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Championnat de France',
    date: '27-28-29 Mars 2026',
    month: 'MARS',
    day: '27-29',
    year: '2026',
    type: 'Championnat de France',
    categories: '1/5',
    official: true,
    description: 'Officiel FFVRC',
    color: 'from-red-600 to-red-500'
  },
/*
  {
    title: 'Course de Ligue',
    date: '31 Mai 2026',
    month: 'MAI',
    day: '31',
    year: '2026',
    type: 'Course Régionale',
    categories: '1/10 - 1/8',
    official: true,
    description: 'Officiel FFVRC',
    color: 'from-orange-500 to-amber-500'
  }
*/
]
</script>

<template>
  <section id="calendrier" class="py-12 bg-slate-900 text-white relative overflow-hidden">
    <!-- Abstract Shapes -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-red-500/20 rounded-full blur-[100px] transform translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
    <div class="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] transform -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

    <div class="container mx-auto px-4 text-center relative z-10">
      <div class="max-w-6xl mx-auto">
        <div class="heading mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-white">Calendrier - Courses Officielles 2025-2026</h2>
          <div class="w-20 h-1 bg-gradient-to-r from-amo-gold to-amo-gold-glow mx-auto rounded-full"></div>
          <p class="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">Les grands rendez-vous de la saison sur notre piste.</p>
        </div>
        
        <!-- Race Cards -->
        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="(race, index) in races" :key="index" 
               class="group relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:transform hover:scale-105 shadow-xl">
            <!-- Date Badge -->
            <div class="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <div :class="`bg-gradient-to-br ${race.color} text-white px-6 py-3 rounded-2xl shadow-2xl`">
                <div class="text-xs font-bold uppercase tracking-wider">{{ race.month }}</div>
                <div class="text-3xl font-bold leading-none">{{ race.day }}</div>
                <div class="text-xs font-semibold">{{ race.year }}</div>
              </div>
            </div>

             <!-- Content -->
            <div class="mt-12">
              <h3 class="text-2xl font-bold mb-3 text-gray-900">{{ race.title }}</h3>
              <p class="text-gray-600 text-sm uppercase tracking-widest mb-2 font-semibold">{{ race.type }}</p>
              
              <!-- Official Badge -->
              <div v-if="race.official" class="mb-4">
                <span class="inline-block bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full border border-green-300">
                  <i class="fa fa-check-circle"></i> {{ race.description }}
                </span>
              </div>
              <div v-else class="mb-4">
                <span class="inline-block bg-purple-100 text-purple-800 text-xs font-bold px-3 py-1 rounded-full border border-purple-300">
                  <i class="fa fa-globe"></i> {{ race.description }}
                </span>
              </div>
              
              <!-- Details -->
              <div class="space-y-3 text-left">
                <div class="flex items-center gap-3 text-gray-700">
                  <i class="fa fa-calendar w-5 text-orange-600"></i>
                  <span class="text-sm font-medium">{{ race.date }}</span>
                </div>
                <div class="flex items-center gap-3 text-gray-700">
                  <i class="fa fa-map-marker w-5 text-orange-600"></i>
                  <span class="text-sm font-medium">Parc de Grammont, Montpellier</span>
                </div>
                <div class="flex items-center gap-3 text-gray-700">
                  <i class="fa fa-trophy w-5 text-orange-600"></i>
                  <span class="text-sm font-medium">{{ race.categories }}</span>
                </div>
              </div>
            </div>

            <!-- Glow Effect -->
            <div :class="`absolute inset-0 bg-gradient-to-br ${race.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300`"></div>
          </div>
        </div>

        <!-- Training Info -->
        <div class="mt-16 bg-white/90 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 shadow-xl">
          <div class="flex flex-col md:flex-row items-center justify-between gap-6">
            <div class="text-left">
              <h3 class="text-xl font-bold mb-2 flex items-center gap-3 text-gray-900">
                <i class="fa fa-calendar-check-o text-orange-600 text-2xl"></i>
                Entraînements
              </h3>
              <p class="text-gray-600 font-medium">Tous les jours sur notre piste</p>
            </div>
            <a href="mailto:amo.montpellier@gmail.com" 
               class="inline-flex items-center gap-2 bg-gradient-to-r from-amo-primary to-red-600 text-white font-bold px-8 py-4 rounded-full hover:from-red-600 hover:to-amo-primary transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              <i class="fa fa-envelope"></i>
              Nous contacter
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* No additional styles needed, using Tailwind */
</style>
