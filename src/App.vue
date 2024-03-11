<script setup>
import CTitle from "./components/Base/CTitle.vue";
import CButton from "./components/Base/CButton.vue";
import CHeader from "./components/Layout/CHeader.vue";
import SectionHeader from "./components/Base/SectionHeader.vue";
import StepSection from "./components/Base/StepSection.vue";
import CFooter from "./components/Base/CFooter.vue";

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

const stepFirstDataList = [
  {
    id: 1,
    title: "Bring all of your content together into one homepage.",
  },
  {
    id: 2,
    title: "Your page automatically updates whenever you create.",
  },
];
const stepSecondDataList = [
  {
    id: 1,
    title: "Embed content or create something new to share.",
  },
  {
    id: 2,
    title: "Share content over email, text message or your homepage.",
  },
];

const stepFirstData = {
  title: `Your Content. <br class="hidden md:block"/> All in. <span class="text-primary">One Spot</span>`,
  text: "Your Homepage",
  list: stepFirstDataList,
  imageLink: "/Screen",
};

const stepSecondData = {
  title: `Reach Your <br class="hidden md:block"/> Audience <span class="text-primary">Directly</span>`,
  text: "Create & Share",
  list: stepSecondDataList,
  imageLink: "/Screen2",
};
</script>

<template>
  <div class="min-h-screen relative flex-col w-full">
    <CHeader />

    <main class="w-full mt-16 sm:mt-20 md:mt-28 lg:mt-36 xl:mt-40">
      <!-- ========= Reasons Section Start ========= -->

      <section class="container max-w-large mx-auto px-4 md:px-6 lg:px-8">
        <div class="w-full">
          <CTitle size="default" class="text-center"
            >Why Creators Love Marico</CTitle
          >

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
      </section>
      <!-- ========= Reasons Section End ========= -->

      <!-- ========= Step 1 Start ========= -->
      <section class="w-full">
        <div
          class="container max-w-large mt-16 sm:mt-20 md:mt-28 lg:mt-36 xl:mt-40 mx-auto px-4 md:px-6 lg:px-8"
        >
          <div
            class="w-full flex flex-col items-center justify-center gap-4 xl:gap-[34px]"
          >
            <SectionHeader
              step="1"
              title="Connect Your Content"
              description="Bring all of your content together and get a Homepage that automatically updates whenever you create anywhere online."
            />
            <CButton size="lg" variant="outline"
              >View Avaliable Sources</CButton
            >
          </div>
        </div>

        <StepSection
          class="mt-16 sm:mt-20 md:mt-28 lg:mt-36 xl:mt-40"
          :title="stepFirstData?.title"
          :text="stepFirstData?.text"
          :list="stepFirstData?.list"
          :imageLink="stepFirstData?.imageLink"
        />
      </section>
      <!-- ========= Step 1 End ========= -->

      <!-- ========= Step 2 Start ========= -->
      <section class="w-full">
        <div
          class="container max-w-large mt-16 sm:mt-20 md:mt-28 lg:mt-36 xl:mt-40 mx-auto px-4 md:px-6 lg:px-8"
        >
          <SectionHeader
            step="2"
            title="Share Your Homepage"
            description="Share your Wavium homepage link with your followers, and we'll handle the rest."
          />

          <div
            class="w-full flex flex-col lg:flex-row items-start mt-16 sm:mt-20 md:mt-28 lg:mt-36 xl:mt-40"
          >
            <div
              class="flex-1 w-full pl-6 md:pl-8 lg:pl-10 xl:pl-12 pt-6 md:pt-8 lg:pt-10 xl:pt-12 rounded-tl-[50px]"
            >
              <p
                class="text-[#0FC65C] text-base sm:text-xl md:text-2xl lg:text-3xl"
              >
                One Link
              </p>

              <CTitle size="large">
                <span class="text-[#919191]">ALL You Create.</span> <br />One
                Link
              </CTitle>

              <div class="relative mt-4 right-0 bottom-0">
                <img
                  src="/phone.webp"
                  width="788"
                  height="338"
                  alt="Iphone Screen Image"
                />
              </div>
            </div>

            <div
              class="flex-1 w-full h-full p-6 md:p-8 lg:p-10 xl:p-12 rounded-br-[50px]"
            >
              <p
                class="text-[#0FC65C] text-base sm:text-xl md:text-2xl lg:text-3xl"
              >
                Collect Subscribers
              </p>

              <CTitle size="large">
                <span class="text-[#919191]"
                  >Emails. <br />
                  Phone #s.</span
                >
                <br />All Yours.
              </CTitle>
            </div>
          </div>

          <div class="w-full flex items-center mt-[50px]">
            <CButton class="mx-auto" size="lg" variant="primary"
              >Get Started</CButton
            >
          </div>
        </div>
      </section>
      <!-- ========= Step 2 End ========= -->

      <!-- ========= Step 3 Start ========= -->

      <section class="w-full">
        <div
          class="container max-w-large mt-16 sm:mt-20 md:mt-28 lg:mt-36 xl:mt-40 mx-auto px-4 md:px-6 lg:px-8"
        >
          <div
            class="w-full flex flex-col items-center justify-center gap-4 xl:gap-[34px]"
          >
            <SectionHeader
              step="3"
              title="Connect Your Content"
              description="Bring all of your content together and get a Homepage that automatically updates whenever you create anywhere online."
            />
            <CButton size="lg" variant="outline"
              >View Avaliable Sources</CButton
            >
          </div>
        </div>

        <StepSection
          class="mt-16 sm:mt-20 md:mt-28 lg:mt-36 xl:mt-40"
          :title="stepSecondData?.title"
          :text="stepSecondData?.text"
          :list="stepSecondData?.list"
          :imageLink="stepSecondData?.imageLink"
        />
      </section>
      <!-- ========= Step 3 End ========= -->

      <!-- ========= Experts Agree Section Start ========= -->
      <section class="w-full mt-16 sm:mt-20 md:mt-28 lg:mt-36 xl:mt-40">
        <CTitle class="text-center" size="default">Experts Agree</CTitle>
        <div
          class="w-full flex items-center md:flex-row mt-[50px] flex-col relative"
        >
          <img
            class="md:w-1/2 w-full h-full object-cover"
            src="/twitter1.webp"
            width="913"
            height="441"
            alt="Twitter screenshots about morico project"
          />
          <img
            class="md:w-1/2 w-full h-full"
            src="/twitter2.webp"
            width="913"
            height="441"
            alt="Twitter screenshots about morico project"
          />
        </div>
      </section>
      <!-- ========= Experts Agree Section End ========= -->

      <!-- ========= Control Of Their Audience Start ========= -->
      <section
        class="w-full flex items-center justify-center mt-16 sm:mt-20 md:mt-28 lg:mt-36 xl:mt-40"
      >
        <CTitle class="text-center px-4 absolute max-w-[1236px]" size="medium"
          >We've helped over 1,000 creators are claim control of their
          audience.</CTitle
        >

        <img
          class="right-0 w-full h-auto"
          src="/users.webp"
          srcset="/users.webp 1x, /users@2x.webp 2x"
          alt="background users emoji image"
        />
      </section>

      <!-- ========= Control Of Their Audience End ========= -->

      <!-- ========= Get Started Now Section Start ========= -->
      <section
        class="w-full flex flex-col items-center container max-w-large mx-auto px-4 md:px-6 lg:px-8 mt-10"
      >
        <div class="w-20 h-20 md:w-auto md:h-auto">
          <img width="164" height="151" src="/Logo.png" alt="Logo image" />
        </div>
        <CTitle class="text-center max-w-[1236px] mt-8" size="extralarge"
          >Get Started Now</CTitle
        >

        <p
          class="text-xl mt-6 text-center sm:text-2xl md:text-3xl text-white lg:text-[43px]"
        >
          Setup is easy and takes under 5 minutes.
        </p>

        <CButton class="mt-6" size="lg" variant="primary"
          >Get Started Now</CButton
        >

        <p
          class="w-full text-center gap-[10px] sm:flex-row flex-col mt-6 flex items-center text-base md:text-xl xl:text-2xl justify-center"
        >
          <span class="flex items-center gap-[10px]">
            <span
              class="relative w-7 h-7 z-0 flex items-center justify-center bg-[#0FC65C] bg-opacity-50 rounded-full animate-pulse"
            >
              <span
                class="w-4 h-4 inline-block rounded-full bg-[#0FC65C]"
              ></span>
            </span>

            <span class="text-white font-bold">1000+</span>
          </span>
          <span class="text-secondary">creators have already started</span>
        </p>
      </section>
      <!-- ========= Get Started Now Section End ========= -->

      <!-- ========= Footer Sart ========= -->

      <CFooter class="mt-16 sm:mt-20 md:mt-28 lg:mt-36 xl:mt-40" />

      <!-- ========= Footer End ========= -->
    </main>
  </div>
</template>

<style scoped>
.users {
  background-image: url("/users.webp");
  background-size: cover;
  background-repeat: no-repeat;
}

@media (-webkit-min-device-pixel-ratio: 2),
  (min-resolution: 192dpi),
  (min-resolution: 2dppx) {
  .users {
    background-image: url("/users@2x.webp");
  }
}
</style>
