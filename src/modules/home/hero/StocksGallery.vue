<script setup lang="ts">
import Gallery from '@/components/ui/Gallery.vue'
import Stocks1 from '@/assets/images/gallery/stocks-1.png'
import Stocks2 from '@/assets/images/gallery/stocks-2.jpeg'
import Stocks3 from '@/assets/images/gallery/stocks-3.jpeg'
import Stocks4 from '@/assets/images/gallery/stocks-4.png'

const images = [Stocks1, Stocks2, Stocks3, Stocks4].map((src, index) => ({
  index,
  src,
  alt: ''
}));
</script>

<template>
  <Gallery
    :images="images"
    :num-visible="4"
    :pt="{
      thumbnailitems: { class: 'flex mt-5 justify-center gap-3 md:gap-5' },
      thumbnailitem: { class: 'cursor-pointer', style: {flex: 'unset'} }
     }"
  />
</template>