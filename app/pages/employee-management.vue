<script setup>

import { ref, computed } from 'vue'
import AppSidebar from '~/components/AppSidebar.vue'
import Employee from '~/components/Employee.vue'
import EmployeeStaff from '~/components/EmployeeStaff.vue'


const employees = ref([]);
const searchQuery = ref('')
const selectedValue = ref('')


const employees = ref([
  { picture: '', name: 'Bora', email: 'chorkbora4@gmail.com', department: 'engineering', role: 'Lead Engineer', salary: '130,000', status: 'active' },
  { picture: '', name: 'Sthurl', email: 'chorkbora4@gmail.com', department: 'engineering', role: 'Senior Engineer', salary: '320,000', status: 'active' },
  { picture: '', name: 'Dara', email: 'chorkbora4@gmail.com', department: 'design', role: 'UI Designer', salary: '420,000', status: 'active' },
  { picture: '', name: 'Dalin', email: 'chorkbora4@gmail.com', department: 'marketing', role: 'Marketing Manager', salary: '520,000', status: 'inactive' },
  { picture: '', name: 'Chork Bora', email: 'chorkbora4@gmail.com', department: 'finance', role: 'Financial Analyst', salary: '150,000', status: 'active' },
  { picture: '', name: 'Bora', email: 'chorkbora4@gmail.com', department: 'hr', role: 'HR Specialist', salary: '160,000', status: 'active' },
  { picture: '', name: 'Bora', email: 'chorkbora4@gmail.com', department: 'engineering', role: 'DevOps Engineer', salary: '320,000', status: 'onleave' },
  { picture: '', name: 'Bora', email: 'chorkbora4@gmail.com', department: 'product', role: 'Product Manager', salary: '250,000', status: 'active' }
])

const filteredEmployees = computed(() => {
  let filtered = employees.value

  if (searchQuery.value) {
    filtered = filtered.filter(emp =>
      emp.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      emp.email.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      emp.role.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  }

  if (selectedValue.value) {
    filtered = filtered.filter(emp => emp.department === selectedValue.value)
  }

  return filtered
})

const stats = computed(() => {
  const total = employees.value.length
  const active = employees.value.filter(emp => emp.status === 'active').length
  const departments = new Set(employees.value.map(emp => emp.department)).size
  const onLeave = employees.value.filter(emp => emp.status === 'onleave').length

  return [
    { val: total.toString(),       lab: 'Total Employees', percent: 100 },
    { val: active.toString(),      lab: 'Active',          percent: (active / total) * 100 },
    { val: departments.toString(), lab: 'Departments',     percent: (departments / 6) * 100 },
    { val: onLeave.toString(),     lab: 'On Leave',        percent: (onLeave / total) * 100 }
  ]
})

const editEmployee = (emp) => console.log('Edit employee:', emp)
const deleteEmployee = (emp) => {
  employees.value = employees.value.filter(e => e !== emp)
}
</script>

<template>
  <div class="flex min-h-screen bg-gray-50">
    <AppSidebar />

    <!-- Main Content -->
    <div class="flex-1 flex flex-col p-8 gap-8 overflow-auto">

      <!-- ── Header ── -->
      <div class="flex items-center justify-between">
        <!-- Title -->
        <div class="flex flex-col gap-0.5">
          <span class="text-xs font-semibold uppercase tracking-widest text-gray-400">Dashboard</span>
          <h2 class="font-syne font-bold text-4xl tracking-tighter text-gray-900 leading-none">
            Employee Management
          </h2>
        </div>

        <!-- Controls -->
        <div class="flex items-center gap-3">
          <!-- Search -->
          <div class="relative">
            <span class="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
              </svg>
            </span>
            <input
              v-model="searchQuery"
              type="search"
              placeholder="Search employees..."
              class="pl-9 pr-4 py-2.5 text-sm bg-white border border-gray-200 rounded-lg text-gray-700
                     placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-300
                     focus:border-transparent hover:border-gray-300 transition-all w-60"
            />
          </div>

          <!-- Divider -->
          <div class="h-8 w-px bg-gray-200" />

          <!-- Department Filter -->
          <select
            v-model="selectedValue"
            class="text-sm bg-white border border-gray-200 rounded-lg text-gray-700 font-medium
                   px-4 py-2.5 cursor-pointer shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-300
                   focus:border-transparent hover:border-gray-300 transition-all appearance-none pr-8"
            style="background-image: url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 24 24%27 stroke=%27%236b7280%27%3E%3Cpath stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27M19 9l-7 7-7-7%27/%3E%3C/svg%3E');
                   background-repeat: no-repeat; background-position: right 0.6rem center; background-size: 1rem;"
          >
            <option value="">All Departments</option>
            <option value="engineering">Engineering</option>
            <option value="design">Design</option>
            <option value="product">Product</option>
            <option value="marketing">Marketing</option>
            <option value="finance">Finance</option>
            <option value="hr">HR</option>
          </select>

          <!-- Add Button -->
          <button
            class="flex items-center gap-2 bg-lime-300 hover:bg-lime-400 active:scale-95 text-gray-900
                   font-bold text-sm px-5 py-2.5 rounded-lg shadow-sm hover:shadow-md transition-all duration-150"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 4v16m8-8H4" />
            </svg>
            Add Employee
          </button>
        </div>
      </div>

      <!-- ── Stats Cards ── -->
      <div class="grid grid-cols-4 gap-5">
        <Employee
          v-for="stat in stats"
          :key="stat.lab"
          :number="stat.val"
          :text="stat.lab"
          :percentage="stat.percent"
        />
      </div>

      <!-- ── Employee Table ── -->
      <div class="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">

        <!-- Table Header -->
        <div class="grid grid-cols-6 items-center px-6 py-3 bg-gray-50 border-b border-gray-200">
          <span class="text-xs font-semibold uppercase tracking-wider text-gray-500">Name</span>
          <span class="text-xs font-semibold uppercase tracking-wider text-gray-500">Department</span>
          <span class="text-xs font-semibold uppercase tracking-wider text-gray-500">Role</span>
          <span class="text-xs font-semibold uppercase tracking-wider text-gray-500">Salary</span>
          <span class="text-xs font-semibold uppercase tracking-wider text-gray-500">Status</span>
          <span class="text-xs font-semibold uppercase tracking-wider text-gray-500 text-right">Actions</span>
        </div>

        <!-- Table Rows -->
        <div class="divide-y divide-gray-100">
          <EmployeeStaff
            v-for="emp in filteredEmployees"
            :key="emp.name + emp.email"
            :picture="emp.picture"
            :name="emp.name"
            :email="emp.email"
            :department="emp.department"
            :role="emp.role"
            :salary="emp.salary"
            :status="emp.status"
            @edit="editEmployee(emp)"
            @delete="deleteEmployee(emp)"
          />

          <!-- Empty state -->
          <div v-if="filteredEmployees.length === 0" class="flex flex-col items-center justify-center py-16 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 mb-3 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                d="M17 20h5v-2a4 4 0 00-5-3.87M9 20H4v-2a4 4 0 015-3.87m6-4a4 4 0 11-8 0 4 4 0 018 0zm6 4a2 2 0 100-4 2 2 0 000 4zM3 18a2 2 0 100-4 2 2 0 000 4z" />
            </svg>
            <p class="text-sm font-medium">No employees found</p>
            <p class="text-xs mt-1">Try adjusting your search or filter</p>
          </div>
        </div>

        <!-- Table Footer -->
        <div class="px-6 py-3 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
          <span class="text-xs text-gray-400">
            Showing <span class="font-semibold text-gray-600">{{ filteredEmployees.length }}</span>
            of <span class="font-semibold text-gray-600">{{ employees.length }}</span> employees
          </span>
          <span class="text-xs text-gray-400">Employee Management System</span>

        </div>
      </div>

    </div>

  </div>

</template>