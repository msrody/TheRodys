<script setup lang="ts">
import type { PropType } from 'vue'

defineProps({
  images: {
    type: Array as PropType<string[]>,
    default: () => []
  },
  alttxt: {
    type: Array as PropType<string[]>,
    default: () => []
  }
})
</script>

<template>
  <section class="gallery">
    <div class="layout"
      v-for="(image, index) in images"> <div style="text-align: center"> 
    <NuxtImg
        :key="index"
        :src="image"
        :width="16"
        :height="9"
        :alt=alttxt[index] />
        {{ alttxt[index] }}
    </div></div>
  </section>
</template>

<style scoped lang="ts">
css({
  '.gallery': {
    '.layout': {
      display: 'grid',
      gap: '{space.4}',
      my: '{space.16}',
      '--cols': 1,
      gridTemplateColumns: 'repeat(var(--cols), minmax(0, 1fr))',
      '@md': {
        '--cols': (props) => props.images.length < 2 ? props.images.length : 2
      },
      img: {
        objectFit: 'contain',
        width: '100%',
        aspectRatio: '16 / 16',
        borderRadius: '{radii.md}'
      }
    }
  }
})
</style>