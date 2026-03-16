<script setup>
<<<<<<< HEAD
import AppSidebar from '../components/AppSidebar.vue';

function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    // Start loop from index 1 to skip the header row (thead)
    for (i = 1; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
=======
import AppSidebar from "~/components/AppSidebar.vue";
import { ref } from "vue"

// employee list
const employees = [
    "Chork Bora",
    "Dara Kim",
    "Lina Chan",
    "Sok Pisey"
]

>>>>>>> d42f5cbb1d4c008830f552815674128213ff3684
</script>

<template>
    <div class="flex">
<<<<<<< HEAD
        <!-- leftbar -->
=======
>>>>>>> d42f5cbb1d4c008830f552815674128213ff3684
        <AppSidebar />
        <div class="mt-6 p-6 w-full">
            <h1 class="text-4xl font-bold mb-4">Roster Management</h1>

<<<<<<< HEAD
        <!-- rightbar -->
        <div class="mt-6 p-6 w-full">


            <div class="flex gap-10">
                <!-- The Tittle -->
                <h1 class="text-4xl font-syne font-bold mb-4">Roster Management</h1>

                <!-- search  -->
                <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search for Employee"
                    title="Type in a name"
                    class="w-100 p-3 pl-4 mb-4 text-base border border-black-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">

            </div>

            <!-- list Table -->
            <div class="overflow-x-auto">
                <table id="myTable" class="mt-8 min-w-full border-collapse border border-gray-300 text-lg">
                    <!-- list field -->
                    <thead>
                        <tr class="bg-gray-300 border-b border-gray-300">
                            <th class=" text-left p-3 font-semibold">EmployeeID</th>
                            <th class=" text-left p-3 font-semibold">fullName</th>
                            <th class=" text-left p-3 font-semibold">Position</th>
                            <th class=" text-left p-3 font-semibold">ShiftDate</th>
                            <th class=" text-left p-3 font-semibold">StartTime</th>
                            <th class=" text-left p-3 font-semibold">EndTime</th>
                            <th class=" text-left p-3 font-semibold">Location</th>
                            <th class=" text-left p-3 font-semibold">Availablity</th>
                        </tr>
                    </thead>

                    <!-- list employee -->
                    <tbody>
                        <tr class="border-b border-gray-200 hover:bg-gray-50">
                            <td class="p-3">23320-1</td>
                            <td class="p-3">Chork Bora</td>
                            <td class="p-3">Front-end Developer</td>
                            <td class="p-3">N/A</td>
                            <td class="p-3">7:00am</td>
                            <td class="p-3">4:00pm</td>
                            <td class="p-3">Black Durian</td>
                            <td class="p-3">N/A</td>
                        </tr>
                        <tr class="border-b border-gray-200 hover:bg-gray-50">
                            <td class="p-3">23033-2</td>
                            <td class="p-3">Thea Sithul</td>
                            <td class="p-3">Back-end Developer</td>
                            <td class="p-3">N/A</td>
                            <td class="p-3">8:30am</td>
                            <td class="p-3">9:00pm</td>
                            <td class="p-3">Hansei</td>
                            <td class="p-3">N/A</td>
                        </tr>
                        <tr class="border-b border-gray-200 hover:bg-gray-50">
                            <td class="p-3">8065-3</td>
                            <td class="p-3">Sorn Sokcheadalin</td>
                            <td class="p-3">UI/UX Designer</td>
                            <td class="p-3">N/A</td>
                            <td class="p-3">9:00am</td>
                            <td class="p-3">4:30pm</td>
                            <td class="p-3">Natixis</td>
                            <td class="p-3">N/A</td>
                        </tr>
                        <tr class="border-b border-gray-200 hover:bg-gray-50">
                            <td class="p-3">6928-4</td>
                            <td class="p-3">Somnang Dara</td>
                            <td class="p-3">Full Stack Developer</td>
                            <td class="p-3">N/A</td>
                            <td class="p-3">8:00am</td>
                            <td class="p-3">5:30pm</td>
                            <td class="p-3">BYTEDC</td>
                            <td class="p-3">N/A</td>
                        </tr>
                    </tbody>
                </table>
=======
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

>>>>>>> d42f5cbb1d4c008830f552815674128213ff3684
            </div>


        </div>

    </div>
<<<<<<< HEAD
=======

>>>>>>> d42f5cbb1d4c008830f552815674128213ff3684
</template>
