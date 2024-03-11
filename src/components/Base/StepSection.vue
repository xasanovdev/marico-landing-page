<template>
  <div
    class="flex items-center flex-col md:flex-row mt-16 sm:mt-20 md:mt-28 lg:mt-36 xl:mt-40"
  >
    <div class="mx-auto max-w-[767px] w-full px-4 md:px-6 lg:pl-8">
      <div class="w-full">
        <p class="text-white text-base sm:text-xl md:text-2xl lg:text-3xl">
          Your Homepage
        </p>

        <CTitle class="md:text-left mt-6 sm:mt-12 md:mt-16 lg:mt-20">
          <span v-html="title"></span>
        </CTitle>

        <ul
          class="flex flex-col gap-[10px] mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-14"
        >
          <li
            v-for="(item, index) in list"
            :key="index"
            class="flex items-center gap-[13px]"
          >
            <span
              class="w-[33px] h-[33px] shrink-0 text-[18px] text-white font-medium flex items-center rounded-full justify-center bg-[#2D2D2D]"
              >{{ index + 1 }}</span
            >

            <span class="md:text-[23px] text-base text-white">{{
              item?.title
            }}</span>
          </li>
        </ul>

        <div
          class="flex items-center gap-4 mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-[50px] sm:gap-5 md:gap-[26px]"
        >
          <CButton size="lg" variant="primary">Get Started Now</CButton>

          <CButton size="lg" variant="outline">View A Demo</CButton>
        </div>
      </div>
    </div>

    <div class="w-auto mt-4 md:mt-0">
      <img
        class="right-0 relative w-auto h-auto"
        :src="`${imageLink}.png`"
        :srcset="`${imageLink}.png 1x, ${imageLink}@2x.png 2x`"
        alt=""
      />
    </div>
  </div>
</template>

<script setup>
import CTitle from "./CTitle.vue";
import CButton from "./CButton.vue";

defineProps(["text", "title", "list", "imageLink"]);
</script>
