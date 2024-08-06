<script setup lang="ts">
import Container from '@/components/ui/Container.vue';
import Image from '@/components/ui/Image.vue';
import PaymentCards from '@/assets/images/payment-cards.png';
</script>

<template>
  <div class="w-full py-4">
    <Container>
      <div class="flex flex-col items-center gap-y-1">
        <span class="text-xs text-primary-dark">We accept the following credit cards</span>
        <div class="max-w-md max-h-10">
          <Image :src="PaymentCards" alt="accepted credit cards: Visa, MasterCard, Maestro, Discover Network, American Express, Verified by Visa, MasterCard SecureCode" />
        </div>
      </div>
    </Container>
  </div>
</template>