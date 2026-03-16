<script setup>
import AppSidebar from '~/components/AppSidebar.vue';

import { ref, computed } from 'vue'

definePageMeta({ layout: 'default' })

useHead({
    link: [{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&display=swap' }]
})

const sidebarOpen = useState('sidebarOpen', () => true)

const searchQuery = ref('')
const selectedDepartment = ref('All')
const showAddModal = ref(false)
const showDeleteModal = ref(false)
const editingEmployee = ref(null)
const deletingEmployee = ref(null)
const currentPage = ref(1)
const itemsPerPage = 8

const departments = ['All', 'Engineering', 'Marketing', 'Finance', 'HR', 'Operations']



const newEmployee = ref({ name: '', email: '', role: '', department: 'Engineering', status: 'Active' })

const stats = computed(() => ({
    total: employees.value.length,
    active: employees.value.filter(e => e.status === 'Active').length,
    onLeave: employees.value.filter(e => e.status === 'On Leave').length,
    inactive: employees.value.filter(e => e.status === 'Inactive').length,
}))

const filtered = computed(() => {
    return employees.value.filter(e => {
        const matchSearch =
            e.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
            e.email.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
            e.role.toLowerCase().includes(searchQuery.value.toLowerCase())
        const matchDept = selectedDepartment.value === 'All' || e.department === selectedDepartment.value
        return matchSearch && matchDept
    })
})

const totalPages = computed(() => Math.ceil(filtered.value.length / itemsPerPage))

const paginated = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage
    return filtered.value.slice(start, start + itemsPerPage)
})

const avatarColor = (initials) => {
    const colors = ['bg-blue-500', 'bg-indigo-500', 'bg-violet-500', 'bg-emerald-500', 'bg-amber-500', 'bg-rose-500', 'bg-cyan-500']
    const index = (initials.charCodeAt(0) + initials.charCodeAt(1)) % colors.length
    return colors[index]
}

const statusStyle = (status) => {
    if (status === 'Active') return 'bg-emerald-100 text-emerald-700'
    if (status === 'On Leave') return 'bg-amber-100 text-amber-700'
    return 'bg-gray-100 text-gray-500'
}

const openAdd = () => {
    editingEmployee.value = null
    newEmployee.value = { name: '', email: '', role: '', department: 'Engineering', status: 'Active' }
    showAddModal.value = true
}

const openEdit = (emp) => {
    editingEmployee.value = emp
    newEmployee.value = { ...emp }
    showAddModal.value = true
}

const saveEmployee = () => {
    if (!newEmployee.value.name || !newEmployee.value.email || !newEmployee.value.role) return
    if (editingEmployee.value) {
        const idx = employees.value.findIndex(e => e.id === editingEmployee.value.id)
        if (idx !== -1) {
            employees.value[idx] = {
                ...employees.value[idx],
                ...newEmployee.value,
                avatar: newEmployee.value.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()
            }
        }
    } else {
        employees.value.push({
            id: Date.now(),
            ...newEmployee.value,
            avatar: newEmployee.value.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase(),
            joined: new Date().toISOString().split('T')[0]
        })
    }
    showAddModal.value = false
}

const confirmDelete = (emp) => {
    deletingEmployee.value = emp
    showDeleteModal.value = true
}

const deleteEmployee = () => {
    employees.value = employees.value.filter(e => e.id !== deletingEmployee.value.id)
    showDeleteModal.value = false
    deletingEmployee.value = null
}
</script>

<template>

    <div class="min-h-screen bg-gray-50 font-['Sora',sans-serif] flex">


        <!-- Sidebar -->
        <AppSidebar />


        <!-- Main content - shifts based on sidebar state -->
        <div :class="['flex-1 flex flex-col transition-all duration-300 ease-in-out', sidebarOpen ? 'ml-64' : 'ml-16']">

            <!-- Top navbar -->
            <nav
                class="sticky top-0 z-30 bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between">
                <div class="flex items-center gap-3">
                    <!-- Hamburger toggle -->
                    <button @click="sidebarOpen = !sidebarOpen"
                        class="p-2 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    <span class="text-sm font-semibold text-gray-400 tracking-widest uppercase hidden sm:block">
                        Employee Management
                    </span>
                </div>
                <div class="flex items-center gap-3">
                    <div
                        class="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold">
                        AD</div>
                    <span class="text-sm font-medium text-gray-700 hidden sm:block">Admin</span>
                </div>
            </nav>

            <!-- Page content -->
            <div class="flex-1 px-6 py-8">

                <!-- Page header -->
                <div class="flex items-center justify-between mb-8">
                    <div>
                        <h1 class="text-2xl font-bold text-gray-900 tracking-tight">Employee Management</h1>
                        <p class="text-sm text-gray-500 mt-1">Manage your team members and their information</p>
                    </div>
                    <button @click="openAdd"
                        class="flex items-center gap-2 px-5 py-2.5 rounded-xl text-white text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
                        style="background: linear-gradient(135deg, #0077b6, #0096d6);">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                        </svg>
                        <span class="hidden sm:inline">Add Employee</span>
                    </button>
                </div>

                <!-- Stats cards -->
                <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    <div class="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                        <p class="text-xs text-gray-400 font-medium uppercase tracking-wider mb-1">Total</p>
                        <p class="text-3xl font-bold text-gray-900">{{ stats.total }}</p>
                        <div class="mt-2 h-1 w-12 rounded-full bg-blue-500"></div>
                    </div>
                    <div class="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                        <p class="text-xs text-gray-400 font-medium uppercase tracking-wider mb-1">Active</p>
                        <p class="text-3xl font-bold text-emerald-600">{{ stats.active }}</p>
                        <div class="mt-2 h-1 w-12 rounded-full bg-emerald-400"></div>
                    </div>
                    <div class="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                        <p class="text-xs text-gray-400 font-medium uppercase tracking-wider mb-1">On Leave</p>
                        <p class="text-3xl font-bold text-amber-500">{{ stats.onLeave }}</p>
                        <div class="mt-2 h-1 w-12 rounded-full bg-amber-400"></div>
                    </div>
                    <div class="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                        <p class="text-xs text-gray-400 font-medium uppercase tracking-wider mb-1">Inactive</p>
                        <p class="text-3xl font-bold text-gray-400">{{ stats.inactive }}</p>
                        <div class="mt-2 h-1 w-12 rounded-full bg-gray-300"></div>
                    </div>
                </div>

                <!-- Search + Filter -->
                <div
                    class="bg-white rounded-2xl border border-gray-100 shadow-sm px-6 py-4 flex flex-col sm:flex-row gap-3 mb-6">
                    <div class="relative flex-1">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
                        </svg>
                        <input v-model="searchQuery" type="text" placeholder="Search by name, email or role..."
                            class="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                            @input="currentPage = 1" />
                    </div>
                    <div class="flex gap-2 flex-wrap">
                        <button v-for="dept in departments" :key="dept"
                            @click="selectedDepartment = dept; currentPage = 1"
                            class="px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-150"
                            :class="selectedDepartment === dept ? 'bg-blue-600 text-white shadow-sm' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'">
                            {{ dept }}
                        </button>
                    </div>
                </div>

                <!-- Table -->
                <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                    <table class="w-full text-sm">
                        <thead>
                            <tr class="border-b border-gray-100 bg-gray-50">
                                <th
                                    class="text-left px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                                    Employee</th>
                                <th
                                    class="text-left px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider hidden md:table-cell">
                                    Department</th>
                                <th
                                    class="text-left px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider hidden lg:table-cell">
                                    Joined</th>
                                <th
                                    class="text-left px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                                    Status</th>
                                <th
                                    class="text-right px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                                    Actions</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-50">
                            <tr v-if="paginated.length === 0">
                                <td colspan="5" class="text-center py-16 text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 mx-auto mb-3 opacity-30"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                            d="M17 20h5v-2a4 4 0 00-5-3.87M9 20H4v-2a4 4 0 015-3.87m6-4.13a4 4 0 10-8 0 4 4 0 008 0z" />
                                    </svg>
                                    No employees found
                                </td>
                            </tr>
                            <tr v-for="emp in paginated" :key="emp.id"
                                class="hover:bg-gray-50 transition-colors duration-150">
                                <td class="px-6 py-4">
                                    <div class="flex items-center gap-3">
                                        <div class="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                                            :class="avatarColor(emp.avatar)">
                                            {{ emp.avatar }}
                                        </div>
                                        <div>
                                            <p class="font-semibold text-gray-800">{{ emp.name }}</p>
                                            <p class="text-xs text-gray-400">{{ emp.email }}</p>
                                            <p class="text-xs text-gray-500 mt-0.5 md:hidden">{{ emp.department }}</p>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-6 py-4 hidden md:table-cell">
                                    <p class="font-medium text-gray-700">{{ emp.department }}</p>
                                    <p class="text-xs text-gray-400">{{ emp.role }}</p>
                                </td>
                                <td class="px-6 py-4 text-gray-500 hidden lg:table-cell">{{ emp.joined }}</td>
                                <td class="px-6 py-4">
                                    <span class="px-3 py-1 rounded-full text-xs font-semibold"
                                        :class="statusStyle(emp.status)">
                                        {{ emp.status }}
                                    </span>
                                </td>
                                <td class="px-6 py-4">
                                    <div class="flex items-center justify-end gap-2">
                                        <button @click="openEdit(emp)"
                                            class="p-2 rounded-lg text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none"
                                                viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                            </svg>
                                        </button>
                                        <button @click="confirmDelete(emp)"
                                            class="p-2 rounded-lg text-gray-400 hover:text-rose-600 hover:bg-rose-50 transition">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none"
                                                viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <!-- Pagination -->
                    <div class="px-6 py-4 border-t border-gray-100 flex items-center justify-between">
                        <p class="text-xs text-gray-400">
                            Showing {{ Math.min((currentPage - 1) * itemsPerPage + 1, filtered.length) }}–{{
                                Math.min(currentPage * itemsPerPage, filtered.length) }} of {{ filtered.length }} employees
                        </p>
                        <div class="flex gap-1">
                            <button @click="currentPage--" :disabled="currentPage === 1"
                                class="px-3 py-1.5 rounded-lg text-xs font-medium text-gray-500 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition">
                                ← Prev
                            </button>
                            <button v-for="p in totalPages" :key="p" @click="currentPage = p"
                                class="px-3 py-1.5 rounded-lg text-xs font-medium transition"
                                :class="currentPage === p ? 'bg-blue-600 text-white' : 'text-gray-500 hover:bg-gray-100'">
                                {{ p }}
                            </button>
                            <button @click="currentPage++" :disabled="currentPage === totalPages"
                                class="px-3 py-1.5 rounded-lg text-xs font-medium text-gray-500 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition">
                                Next →
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <!-- Add / Edit Modal -->
        <Teleport to="body">
            <div v-if="showAddModal" class="fixed inset-0 z-50 flex items-center justify-center p-4">
                <div class="absolute inset-0 bg-black/40 backdrop-blur-sm" @click="showAddModal = false"></div>
                <div class="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 z-10">
                    <h2 class="text-lg font-bold text-gray-900 mb-1">
                        {{ editingEmployee ? 'Edit Employee' : 'Add New Employee' }}
                    </h2>
                    <p class="text-sm text-gray-400 mb-6">
                        
                    </p>
                    <div class="space-y-4">
                        <div>
                            <label class="block text-xs font-semibold text-gray-600 mb-1">Full Name</label>
                            <input v-model="newEmployee.name" type="text" placeholder="e.g. James Anderson"
                                class="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />
                        </div>
                        <div>
                            <label class="block text-xs font-semibold text-gray-600 mb-1">Email</label>
                            <input v-model="newEmployee.email" type="email" placeholder="e.g. james@hansei.com"
                                class="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />
                        </div>
                        <div>
                            <label class="block text-xs font-semibold text-gray-600 mb-1">Role</label>
                            <input v-model="newEmployee.role" type="text" placeholder="e.g. Senior Engineer"
                                class="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />
                        </div>
                        <div class="grid grid-cols-2 gap-3">
                            <div>
                                <label class="block text-xs font-semibold text-gray-600 mb-1">Department</label>
                                <select v-model="newEmployee.department"
                                    class="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition bg-white">
                                    <option v-for="d in departments.filter(d => d !== 'All')" :key="d">{{ d }}</option>
                                </select>
                            </div>
                            <div>
                                <label class="block text-xs font-semibold text-gray-600 mb-1">Status</label>
                                <select v-model="newEmployee.status"
                                    class="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition bg-white">
                                    <option>Active</option>
                                    <option>On Leave</option>
                                    <option>Inactive</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="flex gap-3 mt-8">
                        <button @click="showAddModal = false"
                            class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 transition">
                            Cancel
                        </button>
                        <button @click="saveEmployee"
                            class="flex-1 py-2.5 rounded-xl text-white text-sm font-semibold transition"
                            style="background: linear-gradient(135deg, #0077b6, #0096d6);">
                            {{ editingEmployee ? 'Save Changes' : 'Add Employee' }}
                        </button>
                    </div>
                </div>
            </div>
        </Teleport>

        <!-- Delete Modal -->
        <Teleport to="body">
            <div v-if="showDeleteModal" class="fixed inset-0 z-50 flex items-center justify-center p-4">
                <div class="absolute inset-0 bg-black/40 backdrop-blur-sm" @click="showDeleteModal = false"></div>
                <div class="relative bg-white rounded-2xl shadow-2xl w-full max-w-sm p-8 z-10 text-center">
                    <div class="w-14 h-14 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 text-rose-500" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </div>
                    <h2 class="text-lg font-bold text-gray-900 mb-2">Remove Employee?</h2>
                    <p class="text-sm text-gray-400 mb-6">
                        Are you sure you want to remove <span class="font-semibold text-gray-700">{{
                            deletingEmployee?.name }}</span>? This action cannot be undone.
                    </p>
                    <div class="flex gap-3">
                        <button @click="showDeleteModal = false"
                            class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 transition">
                            Cancel
                        </button>
                        <button @click="deleteEmployee"
                            class="flex-1 py-2.5 rounded-xl bg-rose-500 hover:bg-rose-600 text-white text-sm font-semibold transition">
                            Yes, Remove
                        </button>
                    </div>
                </div>
            </div>
        </Teleport>
    </div>

</template>