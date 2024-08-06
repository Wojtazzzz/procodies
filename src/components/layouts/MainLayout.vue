<script setup lang="ts">
import Container from '@/components/ui/Container.vue'
</script>

<template>
  <div class="font-roboto">
    <Container>
      <main>
        <slot/>
      </main>
    </Container>
  </div>
</template>