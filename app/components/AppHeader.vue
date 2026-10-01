<template>
  <nav class="fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-md bg-white/80 border-b border-gray-100/50 shadow-sm supports-[backdrop-filter]:bg-white/60" aria-label="Navigation principale">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <NuxtLink to="/" class="flex-shrink-0 transition-transform hover:scale-105 duration-300">
          <img
            src="~/assets/images/logo-amo-ville-de-montpellier.webp"
            alt="AMO Montpellier, Association Modéliste Occitane – accueil"
            width="295"
            height="60"
            class="h-[60px] w-auto"
          >
        </NuxtLink>

        <!-- Mobile Menu Button -->
        <button
          type="button"
          class="lg:hidden text-gray-700 hover:text-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded-lg transition-colors p-3"
          :aria-expanded="isOpen ? 'true' : 'false'"
          aria-controls="menu-mobile"
          :aria-label="isOpen ? 'Fermer le menu' : 'Ouvrir le menu'"
          @click="isOpen = !isOpen"
        >
          <AppIcon :name="isOpen ? 'times' : 'bars'" class="text-2xl" />
        </button>

        <!-- Desktop Menu -->
        <div class="hidden lg:flex space-x-1">
          <template v-for="item in menuItems" :key="item.text">
            <a
              v-if="item.external"
              :href="item.link"
              target="_blank"
              rel="noopener noreferrer"
              class="px-3 xl:px-4 py-2 rounded-full text-gray-700 hover:text-red-600 hover:bg-red-50 font-medium text-sm uppercase tracking-wider transition-all duration-200"
            >
              {{ item.text }}
            </a>
            <NuxtLink
              v-else
              :to="item.link"
              class="px-3 xl:px-4 py-2 rounded-full text-gray-700 hover:text-red-600 hover:bg-red-50 font-medium text-sm uppercase tracking-wider transition-all duration-200"
            >
              {{ item.text }}
            </NuxtLink>
          </template>
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
        <div v-show="isOpen" id="menu-mobile" class="lg:hidden pb-4 bg-white/95 rounded-2xl shadow-xl mt-2 px-4 py-2 border border-gray-100">
          <div class="flex flex-col space-y-1">
            <template v-for="item in menuItems" :key="item.text">
              <a
                v-if="item.external"
                :href="item.link"
                target="_blank"
                rel="noopener noreferrer"
                class="px-4 py-3 rounded-xl text-gray-700 hover:text-red-600 hover:bg-gray-50 font-semibold uppercase text-sm tracking-wide transition-colors"
                @click="isOpen = false"
              >
                {{ item.text }}
              </a>
              <NuxtLink
                v-else
                :to="item.link"
                class="px-4 py-3 rounded-xl text-gray-700 hover:text-red-600 hover:bg-gray-50 font-semibold uppercase text-sm tracking-wide transition-colors"
                @click="isOpen = false"
              >
                {{ item.text }}
              </NuxtLink>
            </template>
          </div>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script setup>
import { club } from '~/data/club'

const isOpen = ref(false)

const menuItems = [
  { text: 'Accueil', link: '/', external: false },
  { text: 'Le club', link: '/#sites', external: false },
  { text: 'Courses', link: '/courses', external: false },
  { text: 'La piste', link: '/piste-grammont', external: false },
  { text: 'Adhésion', link: '/adhesion', external: false },
  { text: 'Mylaps', link: club.links.mylaps, external: true },
  { text: 'Contact', link: '/#contacter', external: false },
]
</script>
