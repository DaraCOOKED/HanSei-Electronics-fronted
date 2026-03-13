<script setup>



import Appsidebar from '~/components/Appsidebar.vue';
import Employee from '~/components/Employee.vue';

const stats = [
  { val: '12', lab: 'Total Employees', percent: 100 },
  { val: '9',  lab: 'Active',          percent: 75  },
  { val: '6',  lab: 'Departments',     percent: 50  },
  { val: '3',  lab: 'New This Month',  percent: 25  }
]
</script>


<template>
    <div class="flex min-h-screen">

  <!-- Sidebar -->
  <Appsidebar />


        <Appsidebar />
        <div class="mt-6 p-6 w-full ">
            <div class="w-full flex">
                <div class="w-[500px] ">
                    <h2 class="text-3xl font-syne font-bold text-5xl tracking-tighter">
                        Employee Management
                    </h2>
                </div>
                <div class="ml-30">
                <input v-model="searchQuery" type="search" placeholder="Search items..." class="border p-2 rounded-[5px] " /> <ul> <li v-for="item in filteredItems" :key="item">{{ item }}</li> </ul>
                </div>
                <div class="ml-7">
                    <select id="" v-model="selectedValue" class="bg-lime-300 rounded-[5px] text-gray-900 font-bold px-5 py-2.5">
                        <option value="" >All Departments</option>
                        <option value="" >Engineering</option>
                        <option value="" >Design</option>
                        <option value="" >Product</option>
                        <option value="" >Marketing</option>
                        <option value="" >Finance</option>
                        <option value="" >HR</option>

                    </select>
                </div>
                <div class="ml-7">
                    <button class="bg-lime-300 text-gray-900 font-bold px-5 py-2 rounded-[5px] hover: border-none">
                        + Add Employee
                    </button>
                </div>
            </div>
            <div class="mt-1">
                <p class="text-gray-500">
                    12 of 12 employees
                </p>
            </div>
            <div class="container flex justify-between mt-10">
                <Employee number="12" label="Total Employees" :percentage="100" />
                <Employee number="9"  label="Active"          :percentage="75"  />
                <Employee number="6"  label="Departments"     :percentage="50"  />
                <Employee number="3"  label="New This Month"  :percentage="25"  />
            </div>



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