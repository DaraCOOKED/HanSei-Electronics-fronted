<script setup>
import AppSidebar from "~/components/AppSidebar.vue";
import { ref } from "vue"

// employee list
const employees = ref([
    "Chork Bora",
    "Dara Kim",
    "Lina Chan",
    "Sok Pisey"
])

// Roster data
const rosters = ref([])

// Form data
const shiftName = ref('')
const shiftDate = ref('')
const startTime = ref('')
const endTime = ref('')
const selectedEmployees = ref([])

// Add new roster
const addRoster = () => {
    if (!shiftName.value || !shiftDate.value || !startTime.value || !endTime.value) return

    rosters.value.push({
        id: Date.now(),
        name: shiftName.value,
        date: shiftDate.value,
        time: `${startTime.value} - ${endTime.value}`,
        employees: [...selectedEmployees.value]
    })

    // Reset form
    shiftName.value = ''
    shiftDate.value = ''
    startTime.value = ''
    endTime.value = ''
    selectedEmployees.value = []
}

// Delete roster
const deleteRoster = (id) => {
    rosters.value = rosters.value.filter(r => r.id !== id)
}
</script>

<template>
    <div class="flex min-h-screen">
        <AppSidebar />
        <div class="mt-6 p-6 w-full">
            <h1 class="text-4xl font-bold mb-4">Roster Management</h1>

            <!-- Create Shift -->
            <div class="border p-4 mb-6 rounded-lg bg-white shadow-sm">

                <h2 class="text-xl mb-3 font-black">Create Shift</h2>

                <div class="flex flex-wrap gap-3 mb-4">
                    <input v-model="shiftName" placeholder="Shift Name" class="border p-2 rounded" />

                    <input type="date" v-model="shiftDate" class="border p-2 rounded" />

                    <input type="time" v-model="startTime" class="border p-2 rounded" />

                    <input type="time" v-model="endTime" class="border p-2 rounded" />

                    <button @click="addRoster" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                        Create Shift
                    </button>
                </div>
            </div>

            <!-- Assign Employees -->
            <div class="border p-4 mb-6 rounded-lg bg-white shadow-sm">

                <h2 class="text-xl mb-3 font-black">Assign Employees</h2>

                <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <label v-for="emp in employees" :key="emp" class="flex items-center gap-2">
                        <input type="checkbox" :value="emp" v-model="selectedEmployees" class="rounded">
                        <span class="text-sm">{{ emp }}</span>
                    </label>
                </div>
            </div>

            <!-- Roster Table -->
            <div class="border p-4 rounded-lg bg-white shadow-sm">

                <h2 class="text-xl font-black mb-3">Roster List</h2>

                <div v-if="rosters.length === 0" class="text-center py-8 text-gray-500">
                    No shifts created yet. Create your first shift above.
                </div>

                <div v-else class="overflow-x-auto">
                    <table class="w-full border-collapse border border-gray-300">

                        <thead>
                            <tr class="bg-gray-200">
                                <th class="border border-gray-300 p-3 text-left font-semibold">Shift Name</th>
                                <th class="border border-gray-300 p-3 text-left font-semibold">Date</th>
                                <th class="border border-gray-300 p-3 text-left font-semibold">Time</th>
                                <th class="border border-gray-300 p-3 text-left font-semibold">Employees</th>
                                <th class="border border-gray-300 p-3 text-left font-semibold">Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr v-for="roster in rosters" :key="roster.id" class="hover:bg-gray-50">
                                <td class="border border-gray-300 p-3">{{ roster.name }}</td>
                                <td class="border border-gray-300 p-3">{{ roster.date }}</td>
                                <td class="border border-gray-300 p-3">{{ roster.time }}</td>
                                <td class="border border-gray-300 p-3">
                                    <div class="flex flex-wrap gap-1">
                                        <span v-for="emp in roster.employees" :key="emp"
                                              class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                                            {{ emp }}
                                        </span>
                                    </div>
                                </td>
                                <td class="border border-gray-300 p-3">
                                    <button @click="deleteRoster(roster.id)"
                                            class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
