<script setup lang="ts">
import { icons } from '~/utils/icons'

// Decorative by default (aria-hidden). Pass `label` when the icon is the only content of a control.
const props = defineProps<{ name: string, label?: string }>()
const icon = computed(() => icons[props.name])
</script>

<template>
  <svg
    v-if="icon"
    class="app-icon"
    :viewBox="`0 0 ${icon.w} 1792`"
    :style="{ width: `${icon.w / 1792}em` }"
    :role="label ? 'img' : undefined"
    :aria-label="label"
    :aria-hidden="label ? undefined : 'true'"
    focusable="false"
  >
    <path :d="icon.d" transform="matrix(1 0 0 -1 0 1536)" fill="currentColor" />
  </svg>
</template>

<style scoped>
.app-icon {
  display: inline-block;
  height: 1em;
  vertical-align: -0.125em;
  overflow: visible;
}
</style>
