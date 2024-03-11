<script setup>
import CTitle from "./CTitle.vue";

defineProps({
  step: String,
  title: String,
  description: String,
});
</script>

<template>
  <div class="w-full text-center">
    <p
      class="text-sm sm:text-base md:text-xl xl:text-2xl font-semibold text-primary"
    >
      Step {{ step }}
    </p>
    <CTitle>{{ title }}</CTitle>
    <p
      class="text-secondary mt-2 text-base sm:text-xl md:text-2xl lg:text-3xl max-w-[929px] text-center w-full mx-auto"
    >
      {{ description }}
    </p>
  </div>
</template>
