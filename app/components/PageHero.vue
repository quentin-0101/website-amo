<script setup lang="ts">
// Dark page header shared by the inner pages: track photo, H1, breadcrumb.
// Same visual language as the homepage hero and calendar section.
withDefaults(defineProps<{
  title: string
  eyebrow?: string
  lead?: string
  crumbs?: { name: string, to?: string }[]
  imageAlt?: string
}>(), {
  imageAlt: '',
})
</script>

<template>
  <header class="relative overflow-hidden bg-slate-900 text-white pt-20">
    <img
      src="~/assets/images/piste-rc-grammont-montpellier-1280.webp"
      srcset="~/assets/images/piste-rc-grammont-montpellier-768.webp 768w, ~/assets/images/piste-rc-grammont-montpellier-1280.webp 1280w, ~/assets/images/piste-rc-grammont-montpellier-1920.webp 1920w"
      sizes="100vw"
      width="1920"
      height="1078"
      :alt="imageAlt"
      fetchpriority="high"
      decoding="async"
      class="absolute inset-0 w-full h-full object-cover opacity-50"
    >
    <div class="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/75 to-blue-900/60" />
    <div class="absolute -top-24 -right-24 w-96 h-96 bg-red-500/25 rounded-full blur-[100px] pointer-events-none" />
    <div class="absolute -bottom-32 -left-24 w-96 h-96 bg-amber-500/15 rounded-full blur-[100px] pointer-events-none" />

    <div class="relative container mx-auto px-4 py-12 md:py-20">
      <div class="max-w-5xl mx-auto">
        <nav v-if="crumbs?.length" aria-label="Fil d'Ariane" class="text-sm text-gray-300 mb-6">
          <template v-for="(crumb, i) in crumbs" :key="crumb.name">
            <span v-if="i > 0" aria-hidden="true" class="mx-1.5 text-gray-500">›</span>
            <NuxtLink v-if="crumb.to" :to="crumb.to" class="hover:text-white underline-offset-4 hover:underline">{{ crumb.name }}</NuxtLink>
            <span v-else class="text-white" aria-current="page">{{ crumb.name }}</span>
          </template>
        </nav>
        <p v-if="eyebrow" class="text-sm font-bold uppercase tracking-widest text-amber-400 mb-3">{{ eyebrow }}</p>
        <h1 class="text-3xl md:text-5xl font-bold tracking-tight leading-tight">{{ title }}</h1>
        <div class="w-20 h-1 bg-gradient-to-r from-red-500 to-amber-400 rounded-full mt-5" />
        <p v-if="lead" class="mt-6 text-lg text-gray-200 max-w-3xl leading-relaxed">{{ lead }}</p>
        <slot />
      </div>
    </div>
  </header>
</template>
