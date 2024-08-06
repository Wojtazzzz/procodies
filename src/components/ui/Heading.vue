<script setup lang="ts">
defineProps<{
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}>()
</script>

<template>
  <component :is="type">
    <slot />
  </component>
</template>