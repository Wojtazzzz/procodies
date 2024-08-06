<script setup lang="ts">
import MainLayout from '@/components/layouts/MainLayout.vue'
import About from '@/modules/home/about/About.vue'
import Faq from '@/modules/home/faq/Faq.vue'
import Payments from '@/modules/home/payments/Payments.vue'
</script>

<template>
  <MainLayout>
    <div class="space-y-16">
      <About />
      <Faq />
    </div>

    <div class="mt-2">
      <Payments />
    </div>
  </MainLayout>
</template>