<script setup>
import amoPiste from '~/assets/images/amo_piste.webp'
</script>

<template>
  <section id="home" class="relative h-screen flex items-center justify-center overflow-hidden">
    <!-- Background with Overlay -->
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40 z-10"></div>
      <div 
        class="w-full h-full bg-cover bg-center bg-no-repeat transform scale-105 animate-slow-zoom"
        :style="{ backgroundImage: `url(${amoPiste})` }"
      ></div>
    </div>
    
    <!-- Content -->
    <div class="container relative z-20 px-4 text-center">
      <div class="animate-fade-in-up">
        <h1 class="text-6xl md:text-8xl lg:text-[7rem] font-bold leading-none mb-6 tracking-tighter">
          <span class="text-blue-500 drop-shadow-lg">A</span>
          <span class="text-white drop-shadow-lg">M</span>
          <span class="text-red-600 drop-shadow-lg">O</span>
          <span class="block text-3xl md:text-5xl font-light text-gray-200 mt-2 tracking-widest uppercase">Montpellier</span>
        </h1>
        
        <p class="text-xl md:text-2xl text-gray-300 font-light mb-10 max-w-3xl mx-auto leading-relaxed">
          Le club de référence pour l'auto-modélisme piste <br class="hidden md:block"/>
          <span class="font-normal text-yellow-400">1/4 • 1/5 • 1/8 • GT8 • 1/10</span>
        </p>

        <a href="https://www.facebook.com/montpellier.amo/" target="_blank" 
          class="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-300 bg-red-600 rounded-full overflow-hidden hover:bg-red-500 hover:scale-105 shadow-lg hover:shadow-xl">
          <span class="relative z-10 flex items-center gap-2">
            Rejoignez-nous sur Facebook
            <i class="fa fa-facebook-official text-xl"></i>
          </span>
        </a>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
      <i class="fa fa-chevron-down text-white/50 text-2xl"></i>
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

.animate-fade-in-up {
  animation: fadeInUp 1s ease-out forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 40px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
</style>
