<template>
  <h2 :class="variantSizes[size]" class="text-white font-semibold">
    <slot />
  </h2>
</template>

<script setup>
defineProps(["size"]);

const variantSizes = {
  medium: "text-xl md:text-[32px] lg:text-[48px] xl:text-[70px] leading-tight",
  default: "text-3xl md:text-4xl lg:text-5xl xl:text-[75px] leading-tight",
  large:
    "text-[36px] md:text-[40px] lg:text-[56px] xl:text-[80px] leading-tight",
  extralarge:
    "text-[40px] md:text-[48px] lg:text-[64px] xl:text-[80px] min-w-[1440px]:text-[100px] leading-tight",
};
</script>
