<script setup lang="ts">
export type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

defineProps<{
  type: HeadingType;
}>()
</script>

<template>
  <component :is="type">
    <slot />
  </component>
</template>