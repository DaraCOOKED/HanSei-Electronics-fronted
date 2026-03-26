<script setup>
import AppSidebar from '~/components/AppSidebar.vue'
import { ref, computed } from 'vue'

const sidebarOpen = ref(true)

const employees = ref([
  { id: 1, name: 'Chork Bora',        email: 'chorkbora@hansei.com',          role: 'Front-end Developer',   department: 'Engineering', status: 'Active',   joined: '2023-01-15', avatar: 'CB' },
  { id: 2, name: 'Dara Kim',          email: 'dara.kim@hansei.com',           role: 'UI/UX Designer',        department: 'Design',      status: 'Active',   joined: '2023-02-20', avatar: 'DK' },
  { id: 3, name: 'Lina Chan',         email: 'lina.chan@hansei.com',          role: 'Project Manager',       department: 'Operations',  status: 'Active',   joined: '2023-03-10', avatar: 'LC' },
  { id: 4, name: 'Sok Pisey',         email: 'sok.pisey@hansei.com',          role: 'Back-end Developer',    department: 'Engineering', status: 'On Leave', joined: '2023-04-05', avatar: 'SP' },
  { id: 5, name: 'Thea Sithul',       email: 'thea.sithul@hansei.com',        role: 'Marketing Specialist',  department: 'Marketing',   status: 'Active',   joined: '2023-05-12', avatar: 'TS' },
  { id: 6, name: 'Sorn Sokcheadalin', email: 'sorn.sokcheadalin@hansei.com',  role: 'HR Manager',            department: 'HR',          status: 'Active',   joined: '2023-06-18', avatar: 'SS' },
  { id: 7, name: 'Somnang Dara',      email: 'somnang.dara@hansei.com',       role: 'Financial Analyst',     department: 'Finance',     status: 'Inactive', joined: '2023-07-22', avatar: 'SD' },
  { id: 8, name: 'Rithy Chen',        email: 'rithy.chen@hansei.com',         role: 'DevOps Engineer',       department: 'Engineering', status: 'Active',   joined: '2023-08-30', avatar: 'RC' },
])

const departments = ['All', 'Engineering', 'Design', 'Operations', 'Marketing', 'HR', 'Finance']
const searchQuery = ref('')
const selectedDepartment = ref('All')
const currentPage = ref(1)
const perPage = 5

const showAddModal = ref(false)
const showDeleteModal = ref(false)
const editingEmployee = ref(null)
const deletingEmployee = ref(null)

const form = ref({ name: '', email: '', role: '', department: 'Engineering', status: 'Active' })

const stats = computed(() => ({
  total:    employees.value.length,
  active:   employees.value.filter(e => e.status === 'Active').length,
  onLeave:  employees.value.filter(e => e.status === 'On Leave').length,
  inactive: employees.value.filter(e => e.status === 'Inactive').length,
}))

const filtered = computed(() =>
  employees.value.filter(e => {
    const matchDept   = selectedDepartment.value === 'All' || e.department === selectedDepartment.value
    const matchSearch = e.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    return matchDept && matchSearch
  })
)

const totalPages = computed(() => Math.ceil(filtered.value.length / perPage))

const paginated = computed(() => {
  const start = (currentPage.value - 1) * perPage
  return filtered.value.slice(start, start + perPage)
})

function openAdd() {
  editingEmployee.value = null
  form.value = { name: '', email: '', role: '', department: 'Engineering', status: 'Active' }
  showAddModal.value = true
}

function openEdit(emp) {
  editingEmployee.value = emp
  form.value = { ...emp }
  showAddModal.value = true
}

function saveEmployee() {
  if (editingEmployee.value) {
    const i = employees.value.findIndex(e => e.id === editingEmployee.value.id)
    employees.value[i] = { ...editingEmployee.value, ...form.value }
  } else {
    employees.value.push({ id: Date.now(), ...form.value })
  }
  showAddModal.value = false
}

function confirmDelete(emp) {
  deletingEmployee.value = emp
  showDeleteModal.value = true
}

function deleteEmployee() {
  employees.value = employees.value.filter(e => e.id !== deletingEmployee.value.id)
  showDeleteModal.value = false
}

function statusStyle(status) {
  if (status === 'Active')   return 'bg-green-100 text-green-700'
  if (status === 'On Leave') return 'bg-yellow-100 text-yellow-700'
  return 'bg-gray-100 text-gray-500'
}
</script>

<template>
  <div class="min-h-screen bg-gray-50 font-['Sora',sans-serif] flex">

    <!-- Sidebar -->
    <AppSidebar />

    <!-- Main content -->
    <div :class="['flex-1 flex flex-col transition-all duration-300 ease-in-out', sidebarOpen ? 'ml-0' : 'ml-0']">

      

      <!-- Page content -->
      <div class="flex-1 px-6 py-8">

        <!-- Header -->
        <div class="flex items-center justify-between mb-6">
          <div>
            <h1 class="text-2xl font-bold text-gray-900">Employee Management</h1>
            <p class="text-sm text-gray-500 mt-1">Manage your team members</p>
          </div>
          <button @click="openAdd"
            class="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700">
            <span>+ Add Employee</span>
          </button>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div class="bg-white border rounded-xl p-4">
            <p class="text-xs text-gray-400 uppercase mb-1">Total</p>
            <p class="text-2xl font-bold text-gray-900">{{ stats.total }}</p>
          </div>
          <div class="bg-white border rounded-xl p-4">
            <p class="text-xs text-gray-400 uppercase mb-1">Active</p>
            <p class="text-2xl font-bold text-green-600">{{ stats.active }}</p>
          </div>
          <div class="bg-white border rounded-xl p-4">
            <p class="text-xs text-gray-400 uppercase mb-1">On Leave</p>
            <p class="text-2xl font-bold text-yellow-500">{{ stats.onLeave }}</p>
          </div>
          <div class="bg-white border rounded-xl p-4">
            <p class="text-xs text-gray-400 uppercase mb-1">Inactive</p>
            <p class="text-2xl font-bold text-gray-400">{{ stats.inactive }}</p>
          </div>
        </div>

        <!-- Search + Filter -->
        <div class="bg-white border rounded-xl px-4 py-3 flex flex-col sm:flex-row gap-3 mb-5">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search by name..."
            class="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            @input="currentPage = 1"
          />
          <div class="flex gap-2 flex-wrap">
            <button
              v-for="dept in departments"
              :key="dept"
              @click="selectedDepartment = dept; currentPage = 1"
              class="px-3 py-1.5 rounded-lg text-xs font-medium"
              :class="selectedDepartment === dept ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'"
            >
              {{ dept }}
            </button>
          </div>
        </div>

        <!-- Table -->
        <div class="bg-white border rounded-xl overflow-hidden">
          <table class="w-full text-sm">
            <thead class="bg-gray-50 border-b">
              <tr>
                <th class="text-left px-5 py-3 text-xs font-semibold text-gray-400 uppercase">Employee</th>
                <th class="text-left px-5 py-3 text-xs font-semibold text-gray-400 uppercase hidden md:table-cell">Department</th>
                <th class="text-left px-5 py-3 text-xs font-semibold text-gray-400 uppercase">Status</th>
                <th class="text-right px-5 py-3 text-xs font-semibold text-gray-400 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100">
              <tr v-if="paginated.length === 0">
                <td colspan="4" class="text-center py-12 text-gray-400">No employees found</td>
              </tr>
              <tr v-for="emp in paginated" :key="emp.id" class="hover:bg-gray-50">
                <td class="px-5 py-3">
                  <p class="font-medium text-gray-800">{{ emp.name }}</p>
                  <p class="text-xs text-gray-400">{{ emp.email }}</p>
                </td>
                <td class="px-5 py-3 text-gray-600 hidden md:table-cell">{{ emp.department }}</td>
                <td class="px-5 py-3">
                  <span class="px-2 py-1 rounded-full text-xs font-medium" :class="statusStyle(emp.status)">
                    {{ emp.status }}
                  </span>
                </td>
                <td class="px-5 py-3 text-right">
                  <button @click="openEdit(emp)" class="text-gray-400 hover:text-blue-600 mr-2 text-xs">Edit</button>
                  <button @click="confirmDelete(emp)" class="text-gray-400 hover:text-red-600 text-xs">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>

          <!-- Pagination -->
          <div class="px-5 py-3 border-t flex items-center justify-between">
            <p class="text-xs text-gray-400">{{ filtered.length }} employees</p>
            <div class="flex gap-1">
              <button @click="currentPage--" :disabled="currentPage === 1"
                class="px-3 py-1 rounded text-xs text-gray-500 hover:bg-gray-100 disabled:opacity-30">Prev</button>
              <button
                v-for="p in totalPages"
                :key="p"
                @click="currentPage = p"
                class="px-3 py-1 rounded text-xs"
                :class="currentPage === p ? 'bg-blue-600 text-white' : 'text-gray-500 hover:bg-gray-100'"
              >{{ p }}</button>
              <button @click="currentPage++" :disabled="currentPage === totalPages"
                class="px-3 py-1 rounded text-xs text-gray-500 hover:bg-gray-100 disabled:opacity-30">Next</button>
            </div>
          </div>
        </div>

      </div>
      <!-- end page content -->

    </div>
    <!-- end main content -->

  </div>
  <!-- end outer wrapper -->

  <!-- Add / Edit Modal -->
  <div v-if="showAddModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
    <div class="bg-white rounded-xl shadow-xl p-6 w-full max-w-md">
      <h2 class="text-lg font-bold text-gray-900 mb-4">{{ editingEmployee ? 'Edit Employee' : 'Add Employee' }}</h2>
      <div class="flex flex-col gap-3">
        <input v-model="form.name" type="text" placeholder="Full name"
          class="px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <input v-model="form.email" type="email" placeholder="Email"
          class="px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <input v-model="form.role" type="text" placeholder="Role"
          class="px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <select v-model="form.department"
          class="px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option v-for="dept in departments.filter(d => d !== 'All')" :key="dept">{{ dept }}</option>
        </select>
        <select v-model="form.status"
          class="px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>Active</option>
          <option>On Leave</option>
          <option>Inactive</option>
        </select>
      </div>
      <div class="flex justify-end gap-2 mt-5">
        <button @click="showAddModal = false"
          class="px-4 py-2 text-sm text-gray-500 hover:bg-gray-100 rounded-lg">Cancel</button>
        <button @click="saveEmployee"
          class="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700">Save</button>
      </div>
    </div>
  </div>

  <!-- Delete Confirm Modal -->
  <div v-if="showDeleteModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
    <div class="bg-white rounded-xl shadow-xl p-6 w-full max-w-sm">
      <h2 class="text-lg font-bold text-gray-900 mb-2">Delete Employee</h2>
      <p class="text-sm text-gray-500 mb-5">
        Are you sure you want to delete <span class="font-semibold text-gray-700">{{ deletingEmployee?.name }}</span>?
        This action cannot be undone.
      </p>
      <div class="flex justify-end gap-2">
        <button @click="showDeleteModal = false"
          class="px-4 py-2 text-sm text-gray-500 hover:bg-gray-100 rounded-lg">Cancel</button>
        <button @click="deleteEmployee"
          class="px-4 py-2 text-sm bg-red-600 text-white rounded-lg hover:bg-red-700">Delete</button>
      </div>
    </div>
  </div>
</template>