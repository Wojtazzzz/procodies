<script setup lang="ts">
import MainLayout from '@/components/layouts/MainLayout.vue'
import Section from '@/components/ui/Section.vue'
import Heading from '@/components/ui/Heading.vue'
import Paragraph from '@/components/ui/Paragraph.vue'
import HGroup from '@/components/ui/HGroup.vue'
import Stocks1Image from '@/assets/images/stocks-1.png';
</script>

<template>
  <MainLayout>
    <Section>
      <div class="space-y-10">
        <div class="text-center">
          <HGroup>
            <Heading type="h2">
              <span class="font-bold text-5xl text-primary-dark leading-[55px]">
                Top Tech Mystery Box
                <br/>
                at Unbeatable Prices
              </span>
            </Heading>
            <Paragraph>
              <span class="text-primary-base text-xl leading-6">
                Fast shipping | Easy returns | Special discounts for students
              </span>
            </Paragraph>
          </HGroup>
        </div>
        <div class="flex flex-col lg:flex-row justify-center items-center gap-8">
          <div class="basis-1/2 items-center">
            <img :src="Stocks1Image" alt="" />
          </div>
          <div class="basis-1/2 flex flex-col items-center gap-y-8">
            <Heading type="h3">
              <span class="text-[42px] font-bold leading-[55px]">Curious about the <span class="text-primary-base">StockX</span> Mystery Box?</span>
            </Heading>

            <div class="space-y-2.5">
              <Paragraph>
                <span class="leading-6">
                  Experience the thrill of unboxing cutting-edge gadgets with Stockx Mystery Boxes. Each box is a treasure trove of high-quality electronics, handpicked to elevate your tech game.
                </span>
              </Paragraph>

              <Paragraph>
                <span class="leading-6">
                  Expect the unexpected! Our boxes are packed with the latest gadgets, from smartphones to gaming consoles, ensuring you get the best tech surprises every time.
                </span>
              </Paragraph>
            </div>
          </div>
        </div>
      </div>
    </Section>
  </MainLayout>
</template>