<template>
  <footer class="w-full">
    <nav
      class="container bg-black py-4 sm:flex-row flex-col sm:py-6 w-full mt-0 sticky top-0 px-4 md:px-6 lg:px-8 mx-auto max-w-large flex items-center justify-between"
    >
      <div class="shrink-0 w-40 md:w-auto flex flex-col gap-0.5">
        <img src="/logo.svg" width="196" height="56" alt="" />

        <p
          class="text-secondary text-[18px] sm:text-xl md:text-2xl lg:text-2xl"
        >
          info@marico.co
        </p>
      </div>

      <ul
        class="flex items-center mt-4 sm:mt-0 duration-200 bg-black flex-col sm:flex-row sm:justify-end justify-center w-full text-xl text-secondary gap-3 md:gap-6"
      >
        <li class="hover:text-primary duration-150">
          <a href="#">About</a>
        </li>

        <li class="hover:text-primary duration-150">
          <a href="#">Pricing</a>
        </li>

        <li class="hover:text-primary duration-150">
          <a href="#">Blog</a>
        </li>
        <li class="hover:text-primary duration-150">
          <a href="#">Sign In</a>
        </li>
      </ul>
    </nav>
  </footer>
</template>
