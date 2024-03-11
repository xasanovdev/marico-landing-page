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
  <header class="sticky top-0 bg-black py-4 sm:py-6 w-full mt-0">
    <nav
      class="container px-4 md:px-6 lg:px-8 mx-auto max-w-large flex items-center justify-between"
    >
      <div class="shrink-0 w-32">
        <img src="/logo.svg" width="196" height="56" alt="" />
      </div>

      <ul
        :class="[isOpenMenu ? 'left-0' : 'left-[-100%]']"
        class="flex items-center duration-200 md:left-0 md:relative md:top-0 md:flex-row md:h-auto md:w-auto absolute top-[72px] flex-col justify-center w-full h-[calc(100vh-72px)] text-xl text-secondary gap-6"
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
        <CButton>Login </CButton>

        <CButton variant="primary" size="md">Sign Up</CButton>

        <CButton
          variant="primary"
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
    </nav>
  </header>
</template>

<style scoped>
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
