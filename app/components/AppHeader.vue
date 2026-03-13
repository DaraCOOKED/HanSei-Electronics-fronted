
<script setup>

const sidebarOpen = useState('sidebarOpen')

function toggleSidebar() {
  sidebarOpen.value = !sidebarOpen.value
}

</script>
<template>
  <header class="bg-white shadow-md h-16 flex items-center justify-between px-6">

    <!-- Left -->
    <div class="flex items-center text-2xl gap-4">
         <button @click="toggleSidebar">
    ☰
  </button>

      <h1 class="text-xl font-semibold text-gray-800">
        Workforce Management
      </h1>
    </div>

    <!-- Center Search -->
    <div class="hidden md:block w-1/3">
      <input
        type="text"
        placeholder="Search employees..."
        class="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-200"
      />
    </div>

    <!-- Right -->
    <div class="flex items-center gap-6">



    </div>
  </header>
</template>
