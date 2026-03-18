<script setup>
import { ref, computed } from "vue"
import AppSidebar from "~/components/AppSidebar.vue"

const sidebarOpen = useState('SidebarOpen', () => true)

const employees = ref([
  { id: 1, name: "Chork Bora", email: "bora@mail.com", department: "IT", status: "Active" },
  { id: 2, name: "Dara Kim", email: "dara@mail.com", department: "HR", status: "On Leave" },
  { id: 3, name: "Lina Chan", email: "lina@mail.com", department: "Finance", status: "Inactive" },
  { id: 4, name: "Sok Pisey", email: "pisey@mail.com", department: "IT", status: "Active" }
])

const departments = ["All", "IT", "HR", "Finance"]
const searchQuery = ref("")
const selectedDepartment = ref("All")
const currentPage = ref(1)
const perPage = 5

const showAddModal = ref(false)
const showDeleteModal = ref(false)
const editingEmployee = ref(null)
const deletingEmployee = ref(null)

const form = ref({ name: "", email: "", department: "IT", status: "Active" })

const filtered = computed(() => {
  return employees.value.filter(e => {
    const matchDept = selectedDepartment.value === "All" || e.department === selectedDepartment.value
    const matchSearch = e.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    return matchDept && matchSearch
  })
})

const totalPages = computed(() => Math.ceil(filtered.value.length / perPage))

const paginated = computed(() => {
  const start = (currentPage.value - 1) * perPage
  return filtered.value.slice(start, start + perPage)
})

const stats = computed(() => ({
  total: employees.value.length,
  active: employees.value.filter(e => e.status === "Active").length,
  onLeave: employees.value.filter(e => e.status === "On Leave").length,
  inactive: employees.value.filter(e => e.status === "Inactive").length
}))

function openAdd() {
  editingEmployee.value = null
  form.value = { name: "", email: "", department: "IT", status: "Active" }
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
  if (status === "Active") return "bg-green-100 text-green-700"
  if (status === "On Leave") return "bg-yellow-100 text-yellow-700"
  return "bg-gray-100 text-gray-500"
}
</script>

<template>
  <div class="flex">
    <AppSidebar />

    <div class="flex-1 px-6 py-8">

      <!-- Header -->
      <div class="flex items-center justify-between mb-6">
        <div>
          <h1 class="text-2xl font-bold text-gray-900">Employee Management</h1>
          <p class="text-sm text-gray-500 mt-1">Manage your team members</p>
        </div>
        <button @click="openAdd" class="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700">
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
        <div class="flex gap-2">
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
            <button @click="currentPage--" :disabled="currentPage === 1" class="px-3 py-1 rounded text-xs text-gray-500 hover:bg-gray-100 disabled:opacity-30">Prev</button>
            <button
              v-for="p in totalPages"
              :key="p"
              @click="currentPage = p"
              class="px-3 py-1 rounded text-xs"
              :class="currentPage === p ? 'bg-blue-600 text-white' : 'text-gray-500 hover:bg-gray-100'"
            >
              {{ p }}
            </button>
            <button @click="currentPage++" :disabled="currentPage === totalPages" class="px-3 py-1 rounded text-xs text-gray-500 hover:bg-gray-100 disabled:opacity-30">Next</button>
          </div>
        </div>
      </div>

    </div>
  </div>

  <!-- Add / Edit Modal -->
  <div v-if="showAddModal" class="fixed inset-0 z-50 flex items-center justify-center p-4">
    <div class="absolute inset-0 bg-black/40" @click="showAddModal = false"></div>
    <div class="relative bg-white rounded-xl shadow-xl w-full max-w-md p-6 z-10">
      <h2 class="text-lg font-bold text-gray-900 mb-4">{{ editingEmployee ? 'Edit Employee' : 'Add Employee' }}</h2>
      <div class="space-y-3">
        <div>
          <label class="block text-xs font-medium text-gray-600 mb-1">Full Name</label>
          <input v-model="form.name" type="text" class="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <label class="block text-xs font-medium text-gray-600 mb-1">Email</label>
          <input v-model="form.email" type="email" class="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-xs font-medium text-gray-600 mb-1">Department</label>
            <select v-model="form.department" class="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
              <option v-for="d in departments.filter(d => d !== 'All')" :key="d">{{ d }}</option>
            </select>
          </div>
          <div>
            <label class="block text-xs font-medium text-gray-600 mb-1">Status</label>
            <select v-model="form.status" class="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
              <option>Active</option>
              <option>On Leave</option>
              <option>Inactive</option>
            </select>
          </div>
        </div>
      </div>
      <div class="flex gap-3 mt-6">
        <button @click="showAddModal = false" class="flex-1 py-2 border rounded-lg text-sm text-gray-600 hover:bg-gray-50">Cancel</button>
        <button @click="saveEmployee" class="flex-1 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg">
          {{ editingEmployee ? 'Save Changes' : 'Add Employee' }}
        </button>
      </div>
    </div>
  </div>

  <!-- Delete Modal -->
  <div v-if="showDeleteModal" class="fixed inset-0 z-50 flex items-center justify-center p-4">
    <div class="absolute inset-0 bg-black/40" @click="showDeleteModal = false"></div>
    <div class="relative bg-white rounded-xl shadow-xl w-full max-w-sm p-6 z-10 text-center">
      <h2 class="text-lg font-bold text-gray-900 mb-2">Remove Employee?</h2>
      <p class="text-sm text-gray-400 mb-5">
        Are you sure you want to remove <span class="font-medium text-gray-700">{{ deletingEmployee?.name }}</span>?
      </p>
      <div class="flex gap-3">
        <button @click="showDeleteModal = false" class="flex-1 py-2 border rounded-lg text-sm text-gray-600 hover:bg-gray-50">Cancel</button>
        <button @click="deleteEmployee" class="flex-1 py-2 bg-red-500 hover:bg-red-600 text-white text-sm font-medium rounded-lg">Remove</button>
      </div>
    </div>
  </div>
</template>