<template>
  <div class="flex items-center justify-center mb-10">
    <template v-for="(step, index) in steps" :key="step.id">
 
      <!-- Step Item -->
      <div class="flex items-center  gap-2.5">
 
        <!-- Circle -->
        <div
          class="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 transition-all duration-300"
          :class="{
            'bg-emerald-700 text-white':                             isActive(index),
            'border-2 border-emerald-600 text-emerald-600 bg-white': isDone(index),
            'border-2 border-gray-300 text-gray-400 bg-white':       isIdle(index)
          }"
        >
          <svg v-if="isDone(index)" class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
          </svg>
          <span v-else>{{ step.id }}</span>
        </div>
 
        <!-- Label -->
        <span
          class="text-xs font-medium leading-tight max-w-[72px]"
          :class="{
            'text-emerald-700 font-semibold': isActive(index),
            'text-emerald-600':               isDone(index),
            'text-gray-400':                  isIdle(index)
          }"
        >{{ step.label }}</span>
 
      </div>
 
      <!-- Connector Line -->
      <div
        v-if="index < steps.length - 1"
        class="w-10 h-px mx-3 flex-shrink-0 transition-all duration-300"
        :class="isDone(index) ? 'bg-emerald-300' : 'bg-gray-200'"
      />
 
    </template>
  </div>
</template>
 
<script setup>
const props = defineProps({
  current: {
    type: Number,
    default: 0
  },
  steps: {
    type: Array,
    default: () => [
      { id: 1, label: 'Fill the form'       },
      { id: 2, label: 'Admin reviews'       },
      { id: 3, label: 'Approved / Rejected' }
    ]
  }
})
 
const isActive = (index) => index === props.current
const isDone   = (index) => index <  props.current
const isIdle   = (index) => index >  props.current
</script>