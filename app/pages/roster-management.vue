<script setup>
import AppSidebar from "~/components/AppSidebar.vue";
import { ref } from "vue"

// employee list
const employees = [
    "Chork Bora",
    "Dara Kim",
    "Lina Chan",
    "Sok Pisey"
]

</script>

<template>
    <div class="flex">
        <AppSidebar />
        <div class="mt-6 p-6 w-full">
            <h1 class="text-4xl font-bold mb-4">Roster Management</h1>

            <!-- Create Shift -->
            <div class="border p-4 mb-6 rounded">

                <h2 class="text-xl mb-3 font-black">Create Shift</h2>

                <input v-model="shiftName" placeholder="Shift Name" class="border p-2 mr-2" />

                <input type="date" v-model="shiftDate" class="border p-2 mr-2" />

                <input type="time" v-model="startTime" class="border p-2 mr-2" />

                <input type="time" v-model="endTime" class="border p-2 mr-2 rounded" />

                <button @click="addRoster" class="bg-blue-500 text-white px-4 py-2 rounded">
                    Create
                </button>

            </div>

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
