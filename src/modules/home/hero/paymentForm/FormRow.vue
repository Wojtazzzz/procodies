<script setup lang="ts">
type FormRowVariant = 'full' | '1/2';
defineProps<{
	variant: FormRowVariant;
}>();
</script>

<template>
	<div>
		<template v-if="variant === '1/2'">
			<div class="w-full flex flex-col sm:flex-row gap-4">
				<div class="sm:basis-1/2">
					<slot name="first" />
				</div>
				<div class="sm:basis-1/2">
					<slot name="second" />
				</div>
			</div>
		</template>

		<template v-else>
			<div class="w-full">
				<slot />
			</div>
		</template>
	</div>
</template>
