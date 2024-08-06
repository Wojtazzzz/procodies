<template>
  <div class="flex flex-col lg:flex-row justify-center items-center gap-10">
    <div class="basis-1/2 flex flex-col items-center gap-y-8">
      <slot name="left" />
    </div>
    <div class="basis-1/2 flex flex-col items-center gap-y-8">
      <slot name="right" />
    </div>
  </div>
</template>