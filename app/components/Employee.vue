<script setup>
const props = defineProps({
  number: [String, Number],
  text: String,
  percentage: {
    type: Number,
    default: 100
  }
})
</script>

<template>
  <div class="relative overflow-hidden bg-[#3f8f26] rounded-xl p-6 min-w-[350px] flex flex-col">
    
    <!-- Content -->
    <div>
      <h2 class="font-extrabold text-4xl text-white m-0 leading-none">
        {{ number }}
      </h2>
      <p class="text-black uppercase tracking-widest text-xs mt-2">
        {{ text }}
      </p>
    </div>

    <!-- Progress Bar -->
    <div class="absolute bottom-0 left-0 w-full h-1 bg-black/5">
      <div
        class="h-full bg-gradient-to-r from-[#bcfd49] to-[#42b883] transition-all duration-500 ease-in-out"
        :style="{ width: percentage + '%' }"
      ></div>
    </div>

  </div>
</template>