<script setup lang="ts">
import Image from '@/components/ui/Image.vue';
import Galleria, { type GalleriaPassThroughOptions } from 'primevue/galleria';
import type { PassThrough } from '@primevue/core';

defineProps<{
	images: GalleryImage[];
	numVisible: number;
	pt?: PassThrough<GalleriaPassThroughOptions>;
}>();

type GalleryImage = {
	index: number;
	src: string;
	alt: string;
};
</script>

<template>
	<Galleria :showThumbnailNavigators="false" :value="images" :numVisible="numVisible" :pt="pt">
		<template #item="slotProps">
			<div
				class="w-[300px] h-[300px] md:w-[420px] md:h-[420px] lg:w-[450px] lg:h-[450px] overflow-hidden"
			>
				<Image :src="slotProps.item.src" :alt="slotProps.item.alt" />
			</div>
		</template>
		<template #thumbnail="slotProps">
			<div class="w-16 h-16 md:w-24 md:h-24 rounded-xl border-2 border-primary-base">
				<Image
					:src="slotProps.item.src"
					:alt="slotProps.item.alt"
					class="rounded-xl p-1 block"
				/>
			</div>
		</template>
	</Galleria>
</template>
