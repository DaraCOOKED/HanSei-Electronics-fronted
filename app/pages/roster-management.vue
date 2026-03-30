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
            <!-- Assign Employees -->
            <div class="border p-4 mb-6 rounded">

                <h2 class="text-xl mb-3 font-black">Assign Employees</h2>

                <div v-for="emp in employees" :key="emp">
                    <label>
                        <input type="checkbox" :value="emp" v-model="selectedEmployees">

                        {{ emp }}
                    </label>
                </div>

            </div>

            <!-- Roster Table -->
            <!-- Roster Table -->
            <div class="border p-4 rounded">

                <h2 class="text-xl font-black mb-3">Roster List</h2>

                <table class="w-full border">

                    <thead>
                        <tr class="bg-gray-200">
                            <th class="border p-2">Shift</th>
                            <th class="border p-2">Date</th>
                            <th class="border p-2">Time</th>
                            <th class="border p-2">Employees</th>
                            <th class="border p-2">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td class="border p-2"></td>
                            <td class="border p-2"></td>
                            <td class="border p-2"></td>
                            <td class="border p-2"></td>
                            <td class="border p-2">
                                <button class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    </tbody>

                </table>


            </div>
        </div>
    </div>

</template>
