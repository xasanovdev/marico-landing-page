<script setup>
import CTitle from "./components/Base/CTitle.vue";
import CHeader from "./components/Layout/CHeader.vue";

const creatorsData = [
  {
    id: 1,
    title: "Reduced Anxiety",
    iconLink: "/creators/icon-1.svg",
    subtitle: "Never worry about losing your audience.",
  },
  {
    id: 2,
    title: "Lower Workload",
    iconLink: "/creators/icon-2.svg",
    subtitle: "Just share one link. We'll handle the rest.",
  },
  {
    id: 3,
    title: "More Time",
    iconLink: "/creators/icon-3.svg",
    subtitle: "Spend less time on marketing tools",
  },
];
</script>

<template>
  <div class="min-h-screen relative flex-col w-full">
    <CHeader />

    <main class="w-full container max-w-large mx-auto px-4 md:px-6 lg:px-8">
      <div class="mt-16 sm:mt-20 md:mt-28 lg:mt-36 xl:mt-44">
        <CTitle>Why Creators Love Marico</CTitle>

        <div
          class="flex items-center mt-12 md:mt-16 lg:mt-20 xl:mt-24 flex-wrap flex-col sm:flex-row justify-between gap-4"
        >
          <div
            v-for="item in creatorsData"
            :key="item?.id"
            class="flex flex-col cursor-pointer gap-[10px] flex-1 text-center border-2 border-transparent w-full py-8 md:p-0 lg:p-8 rounded-2xl duration-200 hover:bg-zinc-600 sm:hover:bg-transparent lg:hover:bg-zinc-600 bg-opacity-10 hover:border-secondary sm:hover:border-transparent lg:hover:border-secondary"
          >
            <div
              class="flex items-center flex-col xl:flex-row justify-center gap-[10px]"
            >
              <img
                class="w-10 h-10 md:w-auto md:h-auto"
                width="20"
                height="20"
                :src="item?.iconLink"
                alt=""
              />

              <h3
                class="text-xl md:text-2xl lg:text-3xl font-semibold text-white"
              >
                {{ item?.title }}
              </h3>
            </div>
            <p class="text-base sm:text-xl md:text-[22px] text-secondary">
              {{ item?.subtitle }}
            </p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped></style>
