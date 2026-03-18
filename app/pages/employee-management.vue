<script setup>
import { ref, computed } from 'vue'
import AppSidebar from '~/components/AppSidebar.vue'
import Employee from '~/components/Employee.vue'

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
  const newThisMonth = employees.value.filter(emp => emp.status === 'active').length // Assuming active are new, adjust logic as needed

  return [
    { val: total.toString(), lab: 'Total Employees', percent: 100 },
    { val: active.toString(), lab: 'Active', percent: (active / total) * 100 },
    { val: departments.toString(), lab: 'Departments', percent: (departments / 6) * 100 }, // Assuming max 6 departments
    { val: newThisMonth.toString(), lab: 'New This Month', percent: (newThisMonth / total) * 100 }
  ]
})

const editEmployee = (emp) => {
  // TODO: Implement edit functionality
  console.log('Edit employee:', emp)
}

const deleteEmployee = (emp) => {
  // TODO: Implement delete functionality
  console.log('Delete employee:', emp)
}
</script>

<template>
    <div class="flex min-h-screen">
        <AppSidebar />
        <div class="mt-6 p-6 w-full">

            <div class="w-full flex">
                <div class="w-125">
                    <h2 class="font-syne font-bold text-5xl tracking-tighter">
                        Employee Management
                    </h2>
                </div>
                <div class="flex justify-between gap-5">
                <div class="">
                    <input v-model="searchQuery" type="search" placeholder="Search employees..."
                        class="border p-2 rounded-[5px] hover:border-b hover:border-t" />
                </div>
                <div class="">
                    <select id="" v-model="selectedValue"
                        class="bg-lime-300 rounded-[5px] text-gray-900 font-bold px-5 py-2.5">
                        <option value="">All Departments</option>
                        <option value="engineering">Engineering</option>
                        <option value="design">Design</option>
                        <option value="product">Product</option>
                        <option value="marketing">Marketing</option>
                        <option value="finance">Finance</option>
                        <option value="hr">HR</option>
                    </select>
                </div>
                    <div class="">
                        <button class="bg-[#a9def9] text-gray-900 font-bold px-5 py-2 rounded-[5px] border">
                            + Add Employee
                        </button>
                    </div>
                </div>
            </div>

            <div class="mt-1">
                <p class="text-gray-500">
                    {{ filteredEmployees.length }} of {{ employees.length }} employees
                </p>
            </div>

            <div class="container flex justify-between mt-10">
                <Employee v-for="stat in stats" :key="stat.lab" :number="stat.val" :text="stat.lab" :percentage="stat.percent" />
            </div>

            <div class="mt-15 ml-10 mr-10 rounded-[5px]">
                <div class="flex justify-between bg-gray-300 pr-5 pl-5 rounded-[5px] pt-2 pb-2">
                    <span class="font-bold">NAME</span>
                    <span class="font-bold">DEPT</span>
                    <span class="font-bold">ROLE</span>
                    <span class="font-bold">SALARY</span>
                    <span class="font-bold">STATUS</span>
                    <span class="font-bold">ACTIONS</span>
                </div>
                <div>
                    <EmployeeStaff v-for="emp in filteredEmployees" :key="emp.name + emp.email"
                        :picture="emp.picture" :name="emp.name" :email="emp.email" :department="emp.department"
                        :role="emp.role" :salary="emp.salary" :status="emp.status"
                        @edit="editEmployee(emp)" @delete="deleteEmployee(emp)" />
                </div>
            </div>

        </div>
    </div>
</template>