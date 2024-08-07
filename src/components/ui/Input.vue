<script setup lang="ts">
type InputType = 'text' | 'email';

defineProps<{
  type: InputType
  placeholder?: string
  autocomplete: string
}>()
</script>

<template>
  <input
    :type="type"
    :placeholder="placeholder"
    :autocomplete="autocomplete"
    class="w-full border border-[#ADADAD] rounded-[10px] py-2.5 px-4 placeholder-[#808080] focus:outline-primary-dark focus-visible:outline-2"  />
</template>
