<template>
  <button
    :class="[
      'font-semibold tracking-wide rounded-lg whitespace-nowrap duration-200',
      styles[variant],
      sizes[size],
    ]"
    :role="role"
  >
    <slot></slot>
  </button>
</template>

<script setup>
const props = defineProps({
  variant: {
    type: String,
    default: "default",
  },
  size: {
    type: String,
    default: "default",
  },
  role: String,
});

const styles = {
  primary: "bg-primary text-white hover:bg-blue-700 active:bg-blue-600",
  outline:
    "text-secondary border border-secondary hover:text-white hover:border-white",
  default: "text-secondary hover:text-white",
};

const sizes = {
  default: "text-base md:text-xl",
  md: "text-base md:text-xl sm:py-3 sm:px-5 py-2 px-4",
  lg: "text-base md:text-xl max-w-[313px] w-full text-center py-3 lg:py-5 xl:py-6",
};
</script>

<style></style>
