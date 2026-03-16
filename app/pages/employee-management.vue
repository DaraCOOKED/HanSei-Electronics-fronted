<script setup>
import { ref } from 'vue'
import Appsidebar from '~/components/AppSidebar.vue'
import Employee from '~/components/Employee.vue'

import AppSidebar from '~/components/AppSidebar.vue';

const searchQuery = ref('')
const selectedValue = ref('')


import Employee from '~/components/Employee.vue';

<<<<<<< HEAD
=======
const stats = [
    { val: '12', lab: 'Total Employees', percent: 100 },
    { val: '9', lab: 'Active', percent: 75 },
    { val: '6', lab: 'Departments', percent: 50 },
    { val: '3', lab: 'New This Month', percent: 25 }
]
</script>
>>>>>>> d42f5cbb1d4c008830f552815674128213ff3684

const stats = [
    { val: '12', lab: 'Total Employees', percent: 100 },
    { val: '9', lab: 'Active', percent: 75 },
    { val: '6', lab: 'Departments', percent: 50 },
    { val: '3', lab: 'New This Month', percent: 25 }
]</script>

<template>
    <div class="flex min-h-screen">


        <div class="mt-6 p-6 w-full ">

            <div class="w-full flex">
                <div class="w-125 ">
                    <h2 class=" font-syne font-bold text-5xl tracking-tighter">
                        Employee Management
                    </h2>
                </div>
                <div class="ml-30">
                    <input v-model="searchQuery" type="search" placeholder="Search items..."
                        class="border p-2 rounded-[5px] " />
                    <ul>
                        <li v-for="item in filteredItems" :key="item">{{ item }}</li>
                    </ul>
                </div>
                <div class="ml-7">
                    <select id="" v-model="selectedValue"
                        class="bg-lime-300 rounded-[5px] text-gray-900 font-bold px-5 py-2.5">
                        <option value="">All Departments</option>
                        <option value="">Engineering</option>
                        <option value="">Design</option>
                        <option value="">Product</option>
                        <option value="">Marketing</option>
                        <option value="">Finance</option>
                        <option value="">HR</option>

<<<<<<< HEAD
                <div class="flex justify-between gap-5">
                    <div class="">
                        <input v-model="searchQuery" type="search" placeholder="Search items..."
                            class="border  p-2 rounded-[5px] hover:border-b hover:border-t" />
                        <ul>
                            <li v-for="item in filteredItems" :key="item">{{ item }}</li>
                        </ul>
                    </div>
                    <div class="">
                        <select id="" type="All Departments"
                            class="bg-300 border rounded-[5px] text-gray-400 px-5 py-2.5 hover:border-b hover:border-t">
                            <option value="">All Departments</option>
                            <option value="">Engineering</option>
                            <option value="">Design</option>
                            <option value="">Product</option>
                            <option value="">Marketing</option>
                            <option value="">Finance</option>
                            <option value="">HR</option>

                        </select>
                    </div>
                    <div class=" ">
                        <button class="bg-[#a9def9]  text-gray-900 font-bold px-5 py-2 rounded-[5px] border">
                            + Add Employee
                        </button>
                    </div>
=======
                    </select>
                </div>
                <div class="ml-7">
                    <button class="bg-lime-300 text-gray-900 font-bold px-5 py-2 rounded-[5px] hover: border-none">
                        + Add Employee
                    </button>
>>>>>>> d42f5cbb1d4c008830f552815674128213ff3684

                </div>
            </div>
            <div class="mt-1">
                <p class="text-gray-500">
                    12 of 12 employees
                </p>
            </div>

            <div class="container flex justify-between mt-10">
<<<<<<< HEAD
                <Employee number="12" text="Total Employees" :percentage="100" />
                <Employee number="9" text="Active" :percentage="75" />
                <Employee number="6" text="Departments" :percentage="50" />
                <Employee number="3" text="New This Month" :percentage="25" />
            </div>

            <div class="mt-15 ml-10 mr-10  rounded-[5px]">
                <div class="flex justify-between bg-gray-300 pr-5 pl-5  rounded-[5px] pt-2 pb-2">
                    <NuxtLink to="/NAME"
                        class="transition-transform duration-400 ease-in-out hover:-translate-y-1 hover:border-b hover:text-blue-700 hover: font-bold font-bold">
                        NAME</NuxtLink>
                    <NuxtLink to="/NAME"
                        class="transition-transform duration-400 ease-in-out hover:-translate-y-1 hover:border-b hover:text-blue-700 hover: font-bold font-bold">
                        DEPT</NuxtLink>
                    <NuxtLink to="/NAME"
                        class="transition-transform duration-400 ease-in-out hover:-translate-y-1 hover:border-b hover:text-blue-700 hover: font-bold font-bold">
                        ROLE</NuxtLink>
                    <NuxtLink to="/NAME"
                        class="transition-transform duration-400 ease-in-out hover:-translate-y-1 hover:border-b hover:text-blue-700 hover: font-bold font-bold">
                        SALARY</NuxtLink>
                    <NuxtLink to="/NAME"
                        class="transition-transform duration-400 ease-in-out hover:-translate-y-1 hover:border-b hover:text-blue-700 hover: font-bold font-bold">
                        STATUS</NuxtLink>
                    <NuxtLink to="/NAME"
                        class="transition-transform duration-400 ease-in-out hover:-translate-y-1 hover:border-b hover:text-blue-700 hover: font-bold font-bold">
                        ACTIONS</NuxtLink>
                </div>
                <div>
                    <EmployeeStaff picture="" name="Bora" email="chorkbora4@gmail.com" department="engineering"
                        role="Lead Engineer" salary="130,000" status="	inactive" />
                    <EmployeeStaff picture="" name="Sthurl" email="chorkbora4@gmail.com" department="engineering"
                        role="Lead Engineer" salary="320,000" status="	inactive" />
                    <EmployeeStaff picture="" name="Dara" email="chorkbora4@gmail.com" department="engineering"
                        role="Lead Engineer" salary="420,000" status="	inactive" />
                    <EmployeeStaff picture="" name="Dalin" email="chorkbora4@gmail.com" department="engineering"
                        role="Lead Engineer" salary="520,000" status="	inactive" />
                    <EmployeeStaff picture="" name="Chork Bora" email="chorkbora4@gmail.com" department="engineering"
                        role="Lead Engineer" salary="150,000" status="	inactive" />
                    <EmployeeStaff picture="" name="Bora" email="chorkbora4@gmail.com" department="engineering"
                        role="Lead Engineer" salary="160,000" status="	inactive" />
                    <EmployeeStaff picture="" name="Bora" email="chorkbora4@gmail.com" department="engineering"
                        role="Lead Engineer" salary="320,000" status="	inactive" />
                    <EmployeeStaff picture="" name="Bora" email="chorkbora4@gmail.com" department="engineering"
                        role="Lead Engineer" salary="250,000" status="	inactive" />
                </div>
            </div>

        </div>
    </div>


=======
                <Employee number="12" label="Total Employees" :percentage="100" />
                <Employee number="9" label="Active" :percentage="75" />
                <Employee number="6" label="Departments" :percentage="50" />
                <Employee number="3" label="New This Month" :percentage="25" />
            </div>



            <input type="search" placeholder="Search items..." class="border p-2 rounded-md" />

            <select class="bg-lime-300 px-4 py-2 rounded-md font-bold">
                <option>All Departments</option>
            </select>

            <button class="bg-lime-300 px-4 py-2 rounded-md font-bold">
                + Add Employee
            </button>
        </div>

        <!-- Cards -->
        <div class="grid grid-cols-4 gap-6 mt-10">
            <Employee number="12" label="Total Employees" :percentage="100" />
            <Employee number="9" label="Active" :percentage="75" />
            <Employee number="6" label="Departments" :percentage="50" />
            <Employee number="3" label="New This Month" :percentage="25" />
        </div>

    </div>


>>>>>>> d42f5cbb1d4c008830f552815674128213ff3684

</template>