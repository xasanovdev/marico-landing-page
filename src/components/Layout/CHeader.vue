<script setup>
import { ref } from "vue";
import CButton from "../Base/CButton.vue";

let isOpenMenu = ref(false);

const toggleMenu = () => {
  if (isOpenMenu.value) {
    isOpenMenu.value = false;
  } else {
    isOpenMenu.value = true;
  }
};
</script>

<template>
  <header class="w-full relative">
    <nav
      class="z-10 bg-black py-4 sm:py-6 w-full mx-auto fixed top-0 mt-0 px-4 md:px-6 lg:px-8"
    >
      <div class="max-w-large w-full mx-auto flex items-center justify-between">
        <div class="shrink-0 w-32">
          <img src="/logo.svg" width="196" height="56" alt="Logo image" />
        </div>

        <ul
          :class="[isOpenMenu ? 'left-0' : 'left-[-100%]']"
          class="flex items-center duration-200 bg-black md:left-0 md:relative md:top-0 md:flex-row md:h-auto md:w-auto absolute top-[72px] flex-col justify-center w-full h-[calc(100vh-72px)] text-xl text-secondary gap-6"
        >
          <li class="hover:text-primary duration-150">
            <a href="#">Use Cases</a>
          </li>
          <li class="hover:text-primary duration-150">
            <a href="#">About</a>
          </li>
          <li class="hover:text-primary duration-150">
            <a href="#">Pricing</a>
          </li>

          <li class="hover:text-primary duration-150">
            <a href="#">Blog</a>
          </li>
        </ul>

        <div class="flex items-center gap-2 md:gap-4 lg:gap-6">
          <CButton role="button">Login </CButton>

          <CButton role="button" variant="primary" size="md">Sign Up</CButton>

          <CButton
            role="button"
            variant="primary"
            aria-label="Burger Menu"
            class="md:hidden w-10 h-10 sm:h-12 sm:w-12 flex items-center justify-center"
            @click="toggleMenu"
          >
            <div
              id="toggle-btn"
              :class="{ active: isOpenMenu }"
              class="menu-btn-1 relative"
            >
              <div class="menu-btn md:hidden">
                <span></span>
              </div>
            </div>
          </CButton>
        </div>
      </div>
    </nav>

    <div
      class="w-full container max-w-large mx-auto pt-20 px-4 md:px-6 lg:px-8"
    >
      <div class="w-full">
        <h1
          class="text-white text-[42px] text-center md:text-[48px] lg:text-[56px] xl:text-[72px] min-[1440px]:text-[84px] min-[1540px]:text-[96px] min-[1640px]:text-[112px] font-bold leading-[110%] flex flex-col justify-center items-center my-20 lg:my-24"
        >
          Own your audience.
          <span class="hero-text-gradient">So you don't lose them.</span>
        </h1>
      </div>
      <div class="w-full max-w-[694px] mx-auto">
        <p
          class="text-white text-[20px] text-center leading-tight sm:text-[24px] md:text-[32px] lg:text-[40px]"
        >
          Turn your audience into email and text message subscribers.
        </p>
        <div
          class="flex items-center gap-4 mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-[50px] sm:gap-5 md:gap-[26px]"
        >
          <CButton size="lg" role="button" variant="primary"
            >Get Started Now</CButton
          >
          <CButton size="lg" role="button" variant="outline"
            >View A Demo</CButton
          >
        </div>

        <p
          class="w-full text-center gap-[10px] sm:flex-row flex-col mt-5 flex items-center text-base md:text-xl xl:text-2xl justify-center"
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
      </div>
    </div>
  </header>
</template>

<style scoped>
.hero-text-gradient {
  animation: flow 4s ease-in-out infinite;
  background: linear-gradient(-50deg, #904e95, #b05fb6, #e73c7e, #ee7752);
  background-size: 300%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

@keyframes flow {
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}

/* Menu Button 1 */

.menu-btn {
  float: left;
  margin-right: 10%;
}

.menu-btn {
  margin-right: 0;
}

.menu-btn-1 {
  height: 20px;
  width: 20px;
  cursor: pointer;
}

.menu-btn-1 span,
.menu-btn-1 span::before,
.menu-btn-1 span::after {
  background: white;
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  width: 20px;
  height: 2px;

  -webkit-transition: 0.3s ease-in-out;
  -moz-transition: 0.3s ease-in-out;
  -o-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
}

.menu-btn-1 span::before {
  margin-top: -7px;
}

.menu-btn-1 span::after {
  margin-top: 7px;
}

.menu-btn-1.active span {
  background: transparent;
}

.menu-btn-1.active span::before {
  margin-top: 0;

  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}

.menu-btn-1.active span::after {
  margin-top: 0;

  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
</style>
