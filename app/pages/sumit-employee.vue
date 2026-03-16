<script setup>
import { computed } from 'vue'
import StepIndicator from '../components/StepIndicator.vue'
const props = defineProps({
  employee:   { type: String, default: 'Bora' },
  department: { type: String, default: 'Engineering' },
  leaveType:  { type: String, default: 'Annual Leave' },
  totalDays:  { type: [String, Number], default: '3' },
  startDate:  { type: String, default: '03/21/2026' },
  endDate:    { type: String, default: '03/22/2026' },
  reason:     { type: String, default: '' }
})

defineEmits(['reset'])

const fields = computed(() => [
  { label: 'Employee',   value: props.employee                          },
  { label: 'Department', value: props.department                        },
  { label: 'Leave Type', value: props.leaveType                        },
  { label: 'Total Days', value: props.totalDays ? `${props.totalDays} day(s)` : '' },
  { label: 'Start Date', value: props.startDate                        },
  { label: 'End Date',   value: props.endDate                          },
  { label: 'Reason',     value: props.reason,       full: true         },
])



</script>

<template>
    
    
  <div class="w-[700px] m-auto mt-20">

    <div>
    <StepIndicator :current="1" />  <!-- ← add this -->
    <!-- rest of card... -->
  </div>
    <!-- Card -->
    <div class="bg-white rounded-2xl border border-gray-200 p-6 mb-4 justify-between">

      <!-- Header -->
      <div class="flex items-start gap-3 mb-5">
        <div class="w-10 h-10 rounded-full border-2 border-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5">
          <svg class="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
          </svg>
        </div>
        <div>
          <p class=" font-syne font-normal text-[22px] tracking-tighter text-gray-500 mb-[-1px]">Request submitted!</p>
          <p class=" font-syne font-normal text-[18px] tracking-tighter text-gray-500">Waiting for admin review — រង់ចាំការពិនិត្យ</p>
        </div>
      </div>

      <!-- Divider -->
      <div class="border-t border-gray-100 mb-5" />

      <!-- Fields Grid -->
      <div class="grid grid-cols-2 gap-x-8 gap-y-4 mb-5 font-syne font-normal text-[1px] tracking-tighter text-gray-500">
        <div v-for="field in fields" :key="field.label"
          :class="field.full ? 'col-span-2' : ''">
          <p class="text-[20px] font-syne font-normal text-[1px] tracking-tighter text-gray-500 uppercase tracking-wider mb-1">
            {{ field.label }}
          </p>
          <p class="text-[18px] font-syne font-normal text-[1px] tracking-tighter text-gray-900">{{ field.value || '—' }}</p>
        </div>
      </div>

      <!-- Next Step Notice -->
      <div class="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 text-[20px] font-syne font-normal text-[1px] tracking-tighter text-gray-700">
        <span class="font-bold">Next step:</span>
        Switch to <span class="font-bold">Admin</span> role (top left) to review and approve or reject this request.
      </div>

    </div>

    <!-- Submit Another Button -->
    <div class="flex justify-center">
        <router-link to="/leave-management">
      <button
        class="px-6 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-xl shadow-sm hover:bg-gray-50 transition-all">
        + Submit another request
      </button>
      </router-link>
    </div>

  </div>


  
</template>

