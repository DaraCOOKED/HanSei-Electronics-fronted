<script setup>
const sidebarOpen = useState('SidebarOpen')
</script>

<template>
  <div :class="['h-screen p-11 bg-blue-900 text-white transition-all duration-300 overflow-hidden', sidebarOpen ? 'w-80' : 'w-0']">
    <div class="flex justify-center items-center mb-8 ml-24 mr-35 gap-5" >
        <div class="h-16 w-16  rounded-xl overflow-hidden flex items-center justify-center flex-shrink-0">
        <img src="/image.png" class="object-cover h-full w-full" alt="">
        </div>
        <span class="text-xl font-bold whitespace-nowrap "> HanSei Electronics </span>
    </div>

    <ul class=" flex flex-col items-center ml-12 mr-32 space-y-4">
      <li class="hover:text-gray-400 align-center cursor-pointer">
        <NuxtLink to="/dashboard" class="flex items-center   gap-5 ">
          <div class="w-12 h-12 border border-gray-400 rounded-xl flex items-center justify-center flex-shrink-0">
            <icon name="heroicons:document-chart-bar" class="text-2xl" ></icon>
          </div>
          <span>Dashboard</span>
        </NuxtLink>
      </li>

      <li class="hover:text-gray-400 align-center ml-5 cursor-pointer">
        <NuxtLink to="/employee-management" class="flex items-center gap-5 ">
          <div class="w-12 h-12 border border-gray-400 rounded-xl flex items-center justify-center flex-shrink-0">
            <icon name="heroicons:user-group" class="text-2xl"></icon>

          </div class="flex">
          <span>Employees Management</span>
        </NuxtLink>
      </li>


      <li class="hover:text-gray-400 align-center ml-5 cursor-pointer">
        <NuxtLink to="/attendence-management" class="flex items-center   gap-5 ">
          <div class="w-12 h-12 border border-gray-400 rounded-xl flex items-center justify-center flex-shrink-0">
             <icon name="heroicons:user-plus" class="text-2xl"></icon>
          </div>
          <span>Attendence Management</span>
        </NuxtLink>
      </li>

      <li class="hover:text-gray-400 align-center ml-5 cursor-pointer">
        <NuxtLink to="/roster-management" class="flex items-center   gap-5 ">
          <div class="w-12 h-12 border border-gray-400 rounded-xl flex items-center justify-center flex-shrink-0">
             <icon name="heroicons:clipboard-document-check" class="text-2xl"></icon>
          </div>
          <span>Roster Management</span>
        </NuxtLink>
      </li>

      <li class="hover:text-gray-400 align-center ml-5 cursor-pointer">
        <NuxtLink to="/leave-management" class="flex items-center   gap-5 ">
          <div class="w-12 h-12 border border-gray-400 rounded-xl flex items-center justify-center flex-shrink-0">
             <icon name="heroicons:user-minus" class="text-2xl"></icon>
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
             <icon name="heroicons:cog-8-tooth" class="text-2xl"></icon>
          </div>
          <span>Setting</span>
        </NuxtLink>
      </li>


    </ul>
  </div>
</template>