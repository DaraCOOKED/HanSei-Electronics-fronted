<template>
  <header class="bg-gray-900 text-white flex justify-between items-center">
    <div class="flex items-between align-center justify-center">
      <h1 class="text-3xl font-bold p-4">Logo</h1>
      <nav class="ml-10 flex justify-around  align-center items-center ">

        <ul class="flex space-x-4 text-white p-4 align-center justify-center">
          <nuxt-link to="/" class="hover:text-gray-400">Home</nuxt-link>
          <nuxt-link to="/about" class="hover:text-gray-400">About</nuxt-link>
          <nuxt-link to="/contact" class="hover:text-gray-400">Contact</nuxt-link>
          <nuxt-link to="/blog>" class="hover:text-grey-400"> Blog </nuxt-link>
        </ul>
      </nav>
      <div class="ml-auto p-4">
        <button class="border-2 hover:bg-gray-600 text-white rounded-xl py-2 px-4">
          <div class="text-sm" value="submit">
            <nuxt-link to="/sign">Sign Up</nuxt-link>
          </div>
        </button>
      </div>
    </div>
  </header>

</template>
