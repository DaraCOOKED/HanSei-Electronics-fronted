<script setup>
const sidebarOpen = useState('sidebarOpen')
</script>

<template>
  <div :class="['h-screen p-10  bg-blue-900 text-white transition-all duration-300 overflow-hidden',sidebarOpen ? 'w-64' : 'w-0']"
  >
    <h1 class="text-4xl font-bold mt-6">Dashboard</h1>

    <ul class="space-y-4 ">
      <li class="hover:text-gray-500 cursor-pointer">
        <NuxtLink to="/dashboard">Dashboard</NuxtLink>
      </li>

      <li class="hover:text-gray-500 cursor-pointer">
        <NuxtLink to="/employee-management">Employee Management</NuxtLink>
      </li>

      <li class="hover:text-gray-500 cursor-pointer">
        <NuxtLink to="/attendence-management">Attendence Management</NuxtLink>
      </li>

      <li class="hover:text-gray-500 cursor-pointer">
        <NuxtLink to="/roster-management">Roster Management</NuxtLink>
      </li>

      <li class="hover:text-gray-500 cursor-pointer">
        <NuxtLink to="/leave-management">Leave Management</NuxtLink>
      </li>

      <li class="hover:text-gray-500 cursor-pointer">
        <NuxtLink to="/setting">Setting</NuxtLink>
      </li>
    </ul>
  </div>
</template>