<template>
  <nav class="fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-md bg-white/80 border-b border-gray-100/50 shadow-sm supports-[backdrop-filter]:bg-white/60">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <NuxtLink to="/#home" class="flex-shrink-0 transition-transform hover:scale-105 duration-300">
          <img src="~/assets/images/amo_logo2.png" alt="AMO Montpellier" class="h-[60px]" />
        </NuxtLink>

        <!-- Mobile Menu Button -->
        <button @click="isOpen = !isOpen" class="md:hidden text-gray-700 hover:text-red-600 focus:outline-none transition-colors p-2">
          <i class="fa fa-bars text-2xl"></i>
        </button>

        <!-- Desktop Menu -->
        <div class="hidden md:flex space-x-1">
          <NuxtLink v-for="item in menuItems" :key="item.text" :to="item.link" 
            class="px-4 py-2 rounded-full text-gray-700 hover:text-red-600 hover:bg-red-50 font-medium text-sm uppercase tracking-wider transition-all duration-200">
            {{ item.text }}
          </NuxtLink>
        </div>
      </div>

      <!-- Mobile Menu -->
      <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-100 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <div v-show="isOpen" class="md:hidden pb-4 bg-white/95 rounded-2xl shadow-xl mt-2 px-4 py-2 border border-gray-100">
          <div class="flex flex-col space-y-1">
            <NuxtLink v-for="item in menuItems" :key="item.text" :to="item.link" 
              @click="isOpen = false"
              class="px-4 py-3 rounded-xl text-gray-700 hover:text-red-600 hover:bg-gray-50 font-semibold uppercase text-sm tracking-wide transition-colors">
              {{ item.text }}
            </NuxtLink>
          </div>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script setup>
const isOpen = ref(false)

const menuItems = [
  { text: 'Home', link: '/#home' },
  { text: 'A propos', link: '/#sites' },
  { text: 'Photos', link: 'https://www.facebook.com/montpellier.amo/photos' },
  { text: 'Calendrier', link: '/#calendrier' },
  { text: 'Mylaps', link: 'https://speedhive.mylaps.com/Practice/2912' },
  { text: 'Documents Club', link: '/documents' },
  { text: 'Nous contacter', link: '/#contacter' },
]
</script>
