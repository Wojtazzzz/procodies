<script setup lang="ts">
import PVButton from 'primevue/button';

type ButtonVariant = 'primary';
type ButtonType = 'submit' | 'button';

defineProps<{
	type: ButtonType;
	label: string;
	variant: ButtonVariant;
}>();
</script>

<template>
	<PVButton
		:type="type"
		:label="label"
		class="w-full bg-primary-base text-white font-medium px-4 py-3 rounded-[10px] hover:bg-primary-base/90 active:bg-primary-base/80 transition-colors focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-offset-4"
	/>
</template>
