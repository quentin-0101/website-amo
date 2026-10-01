<script setup lang="ts">
import { club } from '~/data/club'

withDefaults(defineProps<{ title?: string, text?: string }>(), {
  title: 'Une question ?',
  text: 'Le bureau du club vous répond par téléphone ou par email.',
})
</script>

<template>
  <section class="relative overflow-hidden bg-gradient-to-r from-red-700 to-red-600 text-white">
    <div class="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
    <div class="relative container mx-auto px-4 py-12">
      <div class="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 class="text-2xl md:text-3xl font-bold">{{ title }}</h2>
          <p class="text-red-50 mt-2">{{ text }}</p>
        </div>
        <div class="flex flex-wrap gap-3">
          <a :href="`tel:${club.phoneE164}`" class="inline-flex items-center gap-2 bg-white text-red-700 font-bold px-6 py-3 rounded-full hover:bg-red-50 transition-colors shadow-lg">
            <AppIcon name="phone" /> {{ club.phone }}
          </a>
          <a :href="`mailto:${club.email}`" class="inline-flex items-center gap-2 border-2 border-white/80 text-white font-bold px-6 py-3 rounded-full hover:bg-white/10 transition-colors">
            <AppIcon name="envelope" /> Écrire au club
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
