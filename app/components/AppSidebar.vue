<script setup>
const sidebarOpen = useState('SidebarOpen')
</script>

<template>

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css">


  <div
    :class="['h-screen p-11 bg-blue-900 text-white transition-all duration-300 overflow-hidden', sidebarOpen ? 'w-80' : 'w-0']">
    <div class="flex center align-center justify-center items-center mb-10 ml-12 mr-35 gap-5">
      <div class="w-15 h-15 border border-gray-400 rounded-xl flex items-center justify-center flex-shrink-0">
        <img src="/image.png" class="h-25" alt="">
      </div>
      <span>Dashboard</span>
    </div>

    <ul class=" flex flex-col items-center ml-12 mr-37 space-y-4">
      <li class="hover:text-gray-400 align-center cursor-pointer">
        <NuxtLink to="/dashboard" class="flex items-center   gap-5 ">
          <div class="w-12 h-12 border border-gray-400 rounded-xl flex items-center justify-center flex-shrink-0">
            <i class="fa-solid fa-chart-column text-lg "></i>
          </div>
          <span>Dashboard</span>
        </NuxtLink>
      </li>

      <li class="hover:text-gray-400 align-center ml-5 cursor-pointer">
        <NuxtLink to="/employee-management" class="flex items-center gap-5 ">
          <div class="w-12 h-12 border border-gray-400 rounded-xl flex items-center justify-center flex-shrink-0">
            <i class="fa-solid fa-users text-lg"></i>
          </div class="flex">
          <span>Employees Management</span>
        </NuxtLink>
      </li>


      <li class="hover:text-gray-400 align-center ml-5 cursor-pointer">
        <NuxtLink to="/attendence-management" class="flex items-center   gap-5 ">
          <div class="w-12 h-12 border border-gray-400 rounded-xl flex items-center justify-center flex-shrink-0">
            <i class="fa-solid fa-user-clock text-lg"></i>
          </div>
          <span>Attendence Management</span>
        </NuxtLink>
      </li>

      <li class="hover:text-gray-400 align-center ml-5 cursor-pointer">
        <NuxtLink to="/roster-management" class="flex items-center   gap-5 ">
          <div class="w-12 h-12 border border-gray-400 rounded-xl flex items-center justify-center flex-shrink-0">
            <i class="fa-solid fa-user-pen text-lg "></i>
          </div>
          <span>Roster Management</span>
        </NuxtLink>
      </li>

      <li class="hover:text-gray-400 align-center ml-5 cursor-pointer">
        <NuxtLink to="/leave-management" class="flex items-center   gap-5 ">
          <div class="w-12 h-12 border border-gray-400 rounded-xl flex items-center justify-center flex-shrink-0">
            <i class="fa-solid fa-user-xmark text-lg"></i>
          </div>
          <span>Leave Management</span>
        </NuxtLink>
      </li>

      <li class="hover:text-gray-400 align-center mr-5 cursor-pointer">
        <NuxtLink to="/salary" class="flex items-center   gap-5 ">
          <div class="w-12 h-12 border border-gray-400 rounded-xl flex items-center justify-center flex-shrink-0">
             <icon name="heroicons:cog-8-tooth" class="text-2xl"></icon>
          </div>
          <span>Salary</span>
        </NuxtLink>
      </li>


      <li class="hover:text-gray-400 align-center mr-5 cursor-pointer">
        <NuxtLink to="/setting" class="flex items-center   gap-5 ">
          <div class="w-12 h-12 border border-gray-400 rounded-xl flex items-center justify-center flex-shrink-0">
            <i class="fa-solid fa-gear text-lg"></i>
          </div>
          <span>Setting</span>
        </NuxtLink>
      </li>


    </ul>
  </div>
</template>