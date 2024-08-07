<script setup lang="ts">
defineProps<{
	forId?: string;
}>();
</script>

<template>
	<label :for="forId" class="w-full">
		<slot />
	</label>
</template>
