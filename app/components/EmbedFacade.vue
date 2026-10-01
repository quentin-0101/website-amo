<script setup lang="ts">
// Click-to-load iframe: nothing from YouTube / Facebook / Google Maps is downloaded
// (and no third-party cookie is set) until the visitor asks for it.
const props = withDefaults(defineProps<{
  src: string
  title: string
  label: string
  thumbnail?: string
  aspectClass?: string
  allow?: string
}>(), {
  aspectClass: 'aspect-video',
  allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
})

const loaded = ref(false)
const iframeSrc = computed(() => {
  if (!loaded.value) return ''
  // Start playback right away for video embeds, since the click already expressed intent.
  if (/youtube(-nocookie)?\.com\/embed\//.test(props.src)) return props.src + (props.src.includes('?') ? '&' : '?') + 'autoplay=1'
  return props.src
})
</script>

<template>
  <div class="relative w-full h-full bg-black" :class="aspectClass">
    <iframe
      v-if="loaded"
      :src="iframeSrc"
      :title="title"
      class="absolute inset-0 w-full h-full"
      style="border:0"
      :allow="allow"
      allowfullscreen
    />
    <button
      v-else
      type="button"
      class="group absolute inset-0 w-full h-full flex flex-col items-center justify-center gap-3 text-white focus:outline-none focus-visible:ring-4 focus-visible:ring-red-500"
      :aria-label="label"
      @click="loaded = true"
    >
      <img
        v-if="thumbnail"
        :src="thumbnail"
        alt=""
        width="640"
        height="360"
        loading="lazy"
        decoding="async"
        class="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
      >
      <span class="relative z-10 w-16 h-16 rounded-full bg-red-600 group-hover:bg-red-500 flex items-center justify-center shadow-xl transition-colors">
        <AppIcon name="play" class="text-2xl translate-x-0.5" />
      </span>
      <span class="relative z-10 text-sm font-semibold bg-black/60 rounded-full px-4 py-1.5">{{ label }}</span>
    </button>
  </div>
</template>
