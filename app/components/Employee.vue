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
  <div class="relative overflow-hidden bg-[#a9def9] rounded-xl p-6 min-w-[280px] flex hover:bg-gray-100 transition-transform duration-400 ease-in-out hover:-translate-y-1">
    
    <!-- Content -->
    <div>
      <h2 class="font-extrabold text-4xl text-black m-0 leading-none">
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