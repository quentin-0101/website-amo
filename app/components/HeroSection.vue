<script setup>
import { club } from '~/data/club'
import { upcomingRaces } from '~/data/races'

const nextRace = computed(() => upcomingRaces()[0])
</script>

<template>
  <section id="home" class="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
    <!-- Background photo: a real <img> so it can be discovered early (LCP) and indexed -->
    <div class="absolute inset-0 z-0">
      <img
        src="~/assets/images/piste-rc-grammont-montpellier-1280.webp"
        srcset="~/assets/images/piste-rc-grammont-montpellier-768.webp 768w, ~/assets/images/piste-rc-grammont-montpellier-1280.webp 1280w, ~/assets/images/piste-rc-grammont-montpellier-1920.webp 1920w"
        sizes="100vw"
        width="1920"
        height="1078"
        alt="La piste de modélisme RC du parc de Grammont à Montpellier, avec ses vibreurs rouges"
        fetchpriority="high"
        decoding="async"
        class="w-full h-full object-cover animate-slow-zoom"
      >
      <div class="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60 z-10" />
    </div>

    <!-- Content -->
    <div class="container relative z-20 px-4 text-center">
      <div class="animate-rise">
        <h1 class="font-bold leading-none mb-6 tracking-tighter">
          <span class="block text-6xl md:text-8xl lg:text-[7rem]"><span class="text-blue-500 drop-shadow-lg">A</span><span class="text-white drop-shadow-lg">M</span><span class="text-red-600 drop-shadow-lg">O</span>{{ ' ' }}<span class="block text-3xl md:text-5xl font-light text-gray-200 mt-2 tracking-widest uppercase">Montpellier</span></span>{{ ' ' }}<span class="block text-xl md:text-3xl font-semibold text-white mt-5 tracking-normal leading-snug">Club de voitures radiocommandées sur piste</span>
        </h1>

        <p class="text-lg md:text-xl text-gray-200 font-light mb-3 max-w-3xl mx-auto leading-relaxed">
          {{ club.name }} · piste municipale du parc de Grammont · club FFVRC n°{{ club.ffvrcNumber }} depuis {{ club.foundingYear }}
        </p>
        <p class="text-base md:text-lg font-normal text-yellow-400 mb-8">
          Échelles {{ club.scales.join(' • ') }} · loisir et compétition, jeunes et adultes
        </p>

        <div class="flex flex-wrap items-center justify-center gap-3 md:gap-4">
          <NuxtLink
            to="/adhesion"
            class="inline-flex items-center gap-2 px-7 py-3.5 text-lg font-bold text-white bg-red-600 rounded-full hover:bg-red-500 hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Adhérer au club <AppIcon name="arrow-right" />
          </NuxtLink>
          <NuxtLink
            to="/courses"
            class="inline-flex items-center gap-2 px-7 py-3.5 text-lg font-bold text-slate-900 bg-white rounded-full hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg"
          >
            <AppIcon name="flag-checkered" /> Prochaines courses
          </NuxtLink>
          <NuxtLink
            to="/piste-grammont"
            class="inline-flex items-center gap-2 px-7 py-3.5 text-lg font-bold text-white border-2 border-white/80 rounded-full hover:bg-white/10 transition-all duration-300"
          >
            <AppIcon name="map-marker" /> Venir à la piste
          </NuxtLink>
        </div>

        <!-- Next race: inline banner instead of a full-screen popup -->
        <NuxtLink
          v-if="nextRace"
          :to="`/courses/${nextRace.slug}`"
          class="mt-8 inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-1 bg-black/55 backdrop-blur-sm text-white rounded-2xl px-5 py-3 text-sm md:text-base hover:bg-black/70 transition-colors"
        >
          <span class="font-bold uppercase tracking-wider text-yellow-400">Prochaine course</span>
          <span>{{ nextRace.shortTitle }} · {{ nextRace.dateLabel }}<template v-if="nextRace.rescheduled"> (reportée)</template></span>
          <span class="underline underline-offset-4">Infos et inscription</span>
        </NuxtLink>

        <p class="mt-6">
          <a :href="club.links.facebook" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-gray-200 hover:text-white text-sm">
            <AppIcon name="facebook-official" class="text-lg" /> Suivre l'AMO sur Facebook
          </a>
        </p>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce z-20 hidden md:block">
      <AppIcon name="chevron-down" class="text-white/50 text-2xl" />
    </div>
  </section>
</template>

<style scoped>
.animate-slow-zoom {
  animation: zoomBg 20s infinite alternate linear;
}

@keyframes zoomBg {
  from { transform: scale(1.0); }
  to { transform: scale(1.1); }
}

/* Transform-only entrance: the text is visible from the first frame (no opacity:0 start delaying LCP). */
.animate-rise {
  animation: rise 0.8s ease-out both;
}

@keyframes rise {
  from { transform: translate3d(0, 24px, 0); }
  to { transform: translate3d(0, 0, 0); }
}

@media (prefers-reduced-motion: reduce) {
  .animate-slow-zoom, .animate-rise { animation: none; }
}
</style>
