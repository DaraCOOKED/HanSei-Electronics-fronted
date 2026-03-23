
<script setup>
import { computed } from 'vue'
import Appsidebar from '~/components/AppSidebar.vue'
const props = defineProps({
  requests: {
    type: Array,
    default: () => [
      {
        id: 1, name: 'Thea Sithul', initials: 'TS',
        avatarBg: '#d1fae5', avatarColor: '#065f46',
        type: 'Annual', typeBg: '#dbeafe', typeColor: '#1d4ed8',
        dateRange: 'Mar 17–19', days: 3, reason: 'Family trip'
      },
      {
        id: 2, name: 'Chork Bora', initials: 'CB',
        avatarBg: '#fef3c7', avatarColor: '#92400e',
        type: 'Sick', typeBg: '#f3f4f6', typeColor: '#4b5563',
        dateRange: 'Mar 14', days: 1, reason: 'Fever'
      },
      {
        id: 3, name: 'Sokchea Dalin', initials: 'SD',
        avatarBg: '#ede9fe', avatarColor: '#5b21b6',
        type: 'Personal', typeBg: '#ede9fe', typeColor: '#6d28d9',
        dateRange: 'Mar 20–21', days: 2, reason: 'Personal matter'
      },
      {
        id: 4, name: ' Somnang Dara.', initials: 'SN',
        avatarBg: '#dbeafe', avatarColor: '#1e40af',
        type: 'Annual', typeBg: '#dbeafe', typeColor: '#1d4ed8',
        dateRange: 'Mar 24–28', days: 5, reason: 'Vacation'
      },
      {
        id: 5, name: 'Bora Chork.', initials: 'BC',
        avatarBg: '#fee2e2', avatarColor: '#991b1b',
        type: 'Maternity', typeBg: '#fef9c3', typeColor: '#a16207',
        dateRange: 'Apr 1–Jun 30', days: 65, reason: 'Maternity leave'
      },
    ]
  }
})

defineEmits(['approve', 'reject'])

const columns = ['Employee', 'Type', 'Dates', 'Days', 'Reason', 'Decision']

const pending = computed(() =>
  props.requests.filter(r => r.status !== 'approved' && r.status !== 'rejected')
)

const pendingCount = computed(() => pending.value.length)
</script>

<template>

  <div class="flex min-h-screen">
    <Appsidebar />

        <div class=" m-auto mt-10">
        
        
          <!-- Header -->
          <div class="flex items-start justify-between mb-6">
            <div>
              <h1 class="text-2xl font-extrabold tracking-tight text-gray-900">Review Requests</h1>
              <p class="text-sm text-gray-400 mt-1">ពិនិត្យ និងសម្រេច — Approve or reject leave</p>
            </div>
            <span
              v-if="pendingCount > 0"
              class="text-sm font-bold text-amber-500"
            >{{ pendingCount }} pending</span>
          </div>
          <div class="ml-200">
            <router-link to="/leave-management">
            <button class="bg-blue-500  text-gray-900 font-bold px-5 py-2 rounded-[5px]  mr-5">
              Employee
            </button>
            </router-link>
            <router-link to="/admin-leave-management">
            <button class="bg-blue-500  text-gray-900 font-bold px-5 py-2 rounded-[5px] ">
             + Admin
            </button>
            </router-link>
          </div>
          <!-- Table -->
          <div class="bg-white rounded-2xl border border-gray-200 mt-5">
            <table class="w-full">
            
              <!-- Head -->
              <thead>
                <tr class="border-b border-gray-100">
                  <th v-for="col in columns" :key="col"
                    class="text-left text-xs font-semibold text-gray-400 uppercase tracking-wider px-5 py-4">
                    {{ col }}
                  </th>
                </tr>
              </thead>
          
              <!-- Body -->
              <tbody>
                <tr
                  v-for="req in pending"
                  :key="req.id"
                  class="border-b border-gray-100 last:border-none hover:bg-gray-50 transition-colors"
                >

                  <!-- Employee -->
                  <td class="px-5 py-4">
                    <div class="flex items-center gap-3">
                      <div
                        class="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                        :style="{ background: req.avatarBg, color: req.avatarColor }"
                      >{{ req.initials }}</div>
                      <span class="text-sm font-medium text-gray-800">{{ req.name }}</span>
                    </div>
                  </td>
              
                  <!-- Type -->
                  <td class="px-5 py-4">
                    <span
                      class="px-3 py-1 rounded-full text-xs font-semibold"
                      :style="{ background: req.typeBg, color: req.typeColor }"
                    >{{ req.type }}</span>
                  </td>
              
                  <!-- Dates -->
                  <td class="px-5 py-4 text-sm text-gray-700">{{ req.dateRange }}</td>
              
                  <!-- Days -->
                  <td class="px-5 py-4 text-sm text-gray-700">{{ req.days }}</td>
              
                  <!-- Reason -->
                  <td class="px-5 py-4 text-sm text-gray-700">{{ req.reason }}</td>
              
                  <!-- Decision -->
                  <td class="px-5 py-4">
                    <div class="flex items-center gap-2">
                      <button
                        @click="$emit('approve', req.id)"
                        class="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold rounded-lg border border-emerald-300 text-emerald-600 bg-white hover:bg-emerald-50 transition-all"
                      >
                        <span>✓</span> Approve
                      </button>
                      <button
                        @click="$emit('reject', req.id)"
                        class="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold rounded-lg border border-red-300 text-red-500 bg-white hover:bg-red-50 transition-all"
                      >
                        <span>✕</span> Reject
                      </button>
                    </div>
                  </td>
              
                </tr>
              </tbody>
            </table>
          </div>
      
          <!-- Empty State -->
          <div
            v-if="pending.length === 0"
            class="bg-white rounded-2xl border border-gray-200 p-12 text-center text-gray-400 text-sm mt-1"
          >
            No pending requests — all done! ✅
          </div>
      
        </div>
  </div>
</template>
