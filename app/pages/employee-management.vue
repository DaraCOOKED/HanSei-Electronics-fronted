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

        <Appsidebar />
        <div class="mt-6 p-6 w-full ">
            <div class="w-full flex justify-between">
                <div class="w-[500px] ">
                    <h2 class="text-3xl font-syne font-bold text-5xl tracking-tighter">
                        Employee Management
                    </h2>
                </div>
                <div class="flex">
                    <div class="ml-30">
                    <input v-model="searchQuery" type="search" placeholder="Search items..." class="border  p-2 rounded-[5px] hover:border-b hover:border-t" /> <ul> <li v-for="item in filteredItems" :key="item">{{ item }}</li> </ul>
                    </div>
                    <div class="ml-7">
                        <select id="" type="All Departments" class="bg-300 border rounded-[5px] text-gray-400 px-5 py-2.5 hover:border-b hover:border-t">
                            <option value="" >All Departments</option>
                            <option value="" >Engineering</option>
                            <option value="" >Design</option>
                            <option value="" >Product</option>
                            <option value="" >Marketing</option>
                            <option value="" >Finance</option>
                            <option value="" >HR</option>

                        </select>
                    </div>
                    <div class="ml-7 ">
                        <button class="bg-[#a9def9]  text-gray-900 font-bold px-5 py-2 rounded-[5px] border">
                            + Add Employee
                        </button>
                    </div>
                </div>
            </div>
            <div class="mt-1">
                <p class="text-gray-500">
                    12 of 12 employees
                </p>
            </div>



            <div class="container flex justify-between mt-10">
                <Employee number="12" text="Total Employees" :percentage="100" />
                <Employee number="9"  text="Active"          :percentage="75"  />
                <Employee number="6"  text="Departments"     :percentage="50"  />
                <Employee number="3"  text="New This Month"  :percentage="25"  />
            </div>



            <div class="mt-15 ml-10 mr-10   rounded-[5px]">
            <div class="flex justify-between bg-gray-300 pr-2 pl-2 rounded-[5px] p-2">
                <NuxtLink to="/NAME" class="transition-transform duration-400 ease-in-out hover:-translate-y-1">NAME</NuxtLink>
                <NuxtLink to="/NAME" class="transition-transform duration-400 ease-in-out hover:-translate-y-1">DEPT</NuxtLink>
                <NuxtLink to="/NAME" class="transition-transform duration-400 ease-in-out hover:-translate-y-1">ROLE</NuxtLink>
                <NuxtLink to="/NAME" class="transition-transform duration-400 ease-in-out hover:-translate-y-1">SALARY</NuxtLink>
                <NuxtLink to="/NAME" class="transition-transform duration-400 ease-in-out hover:-translate-y-1">STATUS</NuxtLink>
                <NuxtLink to="/NAME" class="transition-transform duration-400 ease-in-out hover:-translate-y-1">ACTIONS</NuxtLink>

            </div>
            <div>
                <EmployeeStaff picture="" name="Bora" email="chorkbora4@gmail.com" department="engineering" role="Lead Engineer" salary="130,000" status="	inactive"/>
                <EmployeeStaff picture="" name="Sthurl" email="chorkbora4@gmail.com" department="engineering" role="Lead Engineer" salary="320,000" status="	inactive"/>
                <EmployeeStaff picture="" name="Dara" email="chorkbora4@gmail.com" department="engineering" role="Lead Engineer" salary="420,000" status="	inactive"/>
                <EmployeeStaff picture="" name="Dalin" email="chorkbora4@gmail.com" department="engineering" role="Lead Engineer" salary="520,000" status="	inactive"/>
                <EmployeeStaff picture="" name="Bora" email="chorkbora4@gmail.com" department="engineering" role="Lead Engineer" salary="150,000" status="	inactive"/>
                <EmployeeStaff picture="" name="Bora" email="chorkbora4@gmail.com" department="engineering" role="Lead Engineer" salary="160,000" status="	inactive"/>
                <EmployeeStaff picture="" name="Bora" email="chorkbora4@gmail.com" department="engineering" role="Lead Engineer" salary="320,000" status="	inactive"/>
                <EmployeeStaff picture="" name="Bora" email="chorkbora4@gmail.com" department="engineering" role="Lead Engineer" salary="250,000" status="	inactive"/>
            </div>
        </div>

        </div>
        </div>

        
</template>