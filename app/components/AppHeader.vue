
<template>
  <header class="bg-white shadow-md h-16 flex items-center justify-between px-6">

    <!-- Left -->
    <div class="flex items-center gap-4">
      <button class="text-gray-600 hover:text-black">
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



      <!-- Profile -->
      <div class="flex items-center gap-2 cursor-pointer">
        <img
          src="https://i.pravatar.cc/40"
          class="w-9 h-9 rounded-full"
        />
        <span class="hidden md:block text-gray-700">
          Admin
        </span>
      </div>

    </div>
  </header>
</template>
```
