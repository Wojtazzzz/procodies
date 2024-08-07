<script setup lang="ts">
import Section from '@/components/ui/Section.vue'
import Container from '@/components/ui/Container.vue'
import Heading from '@/components/ui/Heading.vue'
import HGroup from '@/components/ui/HGroup.vue'
import Paragraph from '@/components/ui/Paragraph.vue'
import PaymentForm from '@/modules/home/hero/paymentForm/PaymentForm.vue'
import StocksGallery from '@/modules/home/hero/StocksGallery.vue'
</script>

<template>
    <Container>
      <Section>
        <div class="flex flex-col lg:flex-row items-center gap-6">
          <div class="lg:basis-2/5">
            <StocksGallery />
          </div>

          <div class="lg:basis-3/5 space-y-6">
            <HGroup>
              <Heading type="h1">
                <span class="text-primary-dark font-bold leading-[55px] text-[48px]">
                  Chance to win a StockX Mystery Box today!
                </span>
              </Heading>

              <Paragraph>
                <span class="text-[22px] leading-6 text-primary-dark">
                  Unleash the Excitement of Mystery Electronics
                </span>
              </Paragraph>
            </HGroup>

            <PaymentForm />
          </div>
        </div>
      </Section>
    </Container>
</template>