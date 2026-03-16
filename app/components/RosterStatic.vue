<script setup>
const props = defineProps({
  tittle: String,
  number: String
});
</script>

<template>
    <div class="block rounded-md bg-blue-400 p-6 mt-10 hover:bg-gray-100 transition-transform duration-400 ease-in-out hover:-translate-y-1">
        <h2 class="text-2xl font-light font-gray-300 text-aligh-start" >
            {{ tittle }}
        </h2>

        <p class="text-center  text-6xl font-semibold">{{ number }}</p>
    </div>
</template>