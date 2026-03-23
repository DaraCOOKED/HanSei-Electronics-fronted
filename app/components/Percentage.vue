<script setup>
const props = defineProps({
  title: String,
  Description: String,
  percentage: {
    type: Number,
    default: 0
  },
  status: {
    type: String,
    default: 'on-track' // 'on-track' | 'at-risk' | 'delayed'
  }
})

const barColor = computed(() => {
  if (props.percentage >= 80) return 'bg-[#00e5a0]'
  if (props.percentage >= 60) return 'bg-[#4d9eff]'
  if (props.percentage >= 40) return 'bg-[#f5a623]'
  return 'bg-[#e05c5c]'
})

const statusStyle = computed(() => {
  switch (props.status) {
    case 'on-track': return 'bg-green-200 text-green-500'
    case 'at-risk':  return 'bg-yellow-200 text-yellow-500'
    case 'delayed':  return 'bg-red-200 text-red-500'
    default:         return 'bg-[#00e5a0] text-[#0d0f14]'
  }
})

const statusLabel = computed(() => {
  switch (props.status) {
    case 'on-track': return 'On Track'
    case 'at-risk':  return 'At Risk'
    case 'delayed':  return 'Delayed'
    default:         return 'On Track'
  }
})
</script>

<template>
  <div class=" border border-[#1f2330] rounded-xl px-6 py-5 flex flex-col mt-3 gap-3">

    <!-- Top row: title + percentage + status -->
    <div class="flex items-start justify-between gap-4">

      <!-- Left: title + description -->
      <div class="flex flex-col gap-1">
        <h3 class="text-black font-bold text-[1rem]">{{ title }}</h3>
        <p class="text-sm">{{ Description }}</p>
      </div>

      <!-- Right: percentage + badge -->
      <div class="flex items-center gap-3 flex-shrink-0">
        <span class="text-black font-extrabold text-2xl">{{ percentage }}%</span> <br>
        <span
          class="px-3 py-1 rounded-md text-[0.75rem] font-bold"
          :class="statusStyle"
        >
          {{ statusLabel }}
        </span>
      </div>
      

    </div>

    <!-- Progress bar -->
    <div class="w-full h-[3px] rounded-full overflow-hidden">
      <div
        class="h-full rounded-full transition-all duration-700 ease-out"
        :class="barColor"
        :style="{ width: percentage + '%' }"
        
      > 
    </div>
      
    </div>

  </div>
</template>