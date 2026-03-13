<script setup>
import { ref } from 'vue'
import Appsidebar from '~/components/AppSidebar.vue'
import Employee from '~/components/Employee.vue'

const searchQuery = ref('')
const selectedValue = ref('')

const stats = [
  { val: '12', lab: 'Total Employees', percent: 100 },
  { val: '9',  lab: 'Active', percent: 75 },
  { val: '6',  lab: 'Departments', percent: 50 },
  { val: '3',  lab: 'New This Month', percent: 25 }
]</script>

<template>
    <div class="flex min-h-screen">

  <!-- Sidebar -->
  <Appsidebar />

  <!-- Page Content -->
  <div class="flex-1 p-6">

    <!-- Header -->
    <div class="flex items-center gap-6">
      <h2 class="text-4xl font-bold tracking-tight">
        Employee Management
      </h2>

      <input
        type="search"
        placeholder="Search items..."
        class="border p-2 rounded-md"
      />

      <select class="bg-lime-300 px-4 py-2 rounded-md font-bold">
        <option>All Departments</option>
      </select>

      <button class="bg-lime-300 px-4 py-2 rounded-md font-bold">
        + Add Employee
      </button>
    </div>

    <!-- Cards -->
    <div class="grid grid-cols-4 gap-6 mt-10">
      <Employee number="12" label="Total Employees" :percentage="100"/>
      <Employee number="9" label="Active" :percentage="75"/>
      <Employee number="6" label="Departments" :percentage="50"/>
      <Employee number="3" label="New This Month" :percentage="25"/>
    </div>

  </div>

</div>
   
</template>