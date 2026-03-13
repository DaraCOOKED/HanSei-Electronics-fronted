<script setup>
const props = defineProps({
  picture: String,
  name: String,
  email: String,
  department: String,
  role: String,
  salary: String,
  status: {
    type: String, 
    default: 'active',
  },
  color: {
    type: String,
    default: '#5c8de0'
  }
})

const emit = defineEmits(['edit', 'delete'])
</script>

<template>
  <tr class="w-full flex justify-between items-center border-b border-t border-[#181b25] mt-3 transition-colors duration-150 hover:bg-[#] rounded-lg">

    <!-- Name -->
    <td class="flex-1 min-w-[200px] px-5 py-3.5">
      <div class="flex items-center gap-3">

        <!-- Picture -->
        <div v-if="picture"
          class="w-[38px] h-[38px] rounded-[10px] overflow-hidden flex-shrink-0">
          <img :src="picture" :alt="name" class="w-full h-full object-cover" />
        </div>
        
        <div
          v-else
          class="w-[38px] h-[38px] rounded-[10px] flex items-center justify-center flex-shrink-0 font-extrabold text-sm text-[#0d0f14]"
          :style="{ background: color }"
        >
          {{ name?.charAt(0) }}
        </div>

        <!-- Name + Email info -->
        <div class="flex flex-col gap-0.5">
          <span class="font-medium text-[#000000] text-[0.9rem]">{{ name }}</span>
          <span class="text-[#4a5168] text-[0.77rem]">{{ email }}</span>
        </div>
      </div>
    </td>

    <!-- Department -->
    <td class="flex-1 px-5 py-3.5">
      <span class="bg-[#] border border-[#838383] rounded-md px-3 py-1 text-[0.77rem] text-[#8a9ab8] whitespace-nowrap">
        {{ department }}
      </span>
    </td>

    <!-- Role -->
    <td class="flex-1 px-5 py-3.5 text-[#8a8878] text-sm">
      {{ role }}
    </td>

    <!-- Salary -->
    <td class="flex-1 px-5 py-3.5 text-[#3B3030] font-semibold text-[0.9rem]">
      ${{ salary }}
    </td>

    <!-- Status -->
    <td class="flex-1 px-5 py-3.5">
      <span
        class="inline-block px-3.5 py-1 rounded-full text-[0.75rem] font-semibold tracking-wide capitalize border"
        :class="{
          
          'bg-[rgba(92,224,138,0.12)] text-[#5ce08a] border-[rgba(92,224,138,0.25)]' : status === 'active',
          'bg-[r(224,92,92,0.12)]  text-[#e05c5c] border-[rgba(224,92,92,0.25)]'  : status === 'inactive',
          'bg-[rgba(224,163,92,0.12)] text-[#e0a35c] border-[rgba(224,163,92,0.25)]' : status === 'onleave',
        }"
      >
        {{ status === 'onleave' ? 'On Leave' : status }}
      </span>
    </td>

    <!-- Actions -->
    <td class="flex-1 px-5 py-3.5 flex justify-end">
      <div class="flex gap-1.5">

        <!-- Edit button -->
        <button
          @click="emit('edit')"
          title="Edit"
          class="w-[30px] h-[30px] rounded-[7px] border border-[#1f2330] bg-transparent
                 text-[#5a6075] text-[0.95rem] flex items-center justify-center
                 cursor-pointer transition-all duration-150
                 hover:bg-[#1a2030] hover:border-[#c8f064] hover:text-[#c8f064]"
        >✎</button>

        <!-- Delete button -->
        <button
          @click="emit('delete')"
          title="Delete"
          class="w-[30px] h-[30px] rounded-[7px] border border-[#1f2330] bg-transparent
                 text-[#5a6075] text-[0.95rem] flex items-center justify-center
                 cursor-pointer transition-all duration-150
                 hover:bg-[#2a1418] hover:border-[#e05c5c] hover:text-[#e05c5c]"
        >✕</button>

      </div>
    </td>

  </tr>
</template>