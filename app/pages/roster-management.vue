<script setup>
import { ref, computed } from 'vue'
import AppSidebar from '../components/AppSidebar.vue'
import Roster from '../components/Roster.vue'
import RosterStatic from '~/components/RosterStatic.vue'

const search = ref("")

const employees = [
    {
        id: "23320-1",
        name: "Chork Bora",
        position: "Front-end Developer",
        shifttime: "12Mar",
        starttime: "7:00am",
        endtime: "4:00pm",
        location: "Black Durian"
    },
    {
        id: "23320-2",
        name: "Thea Sithul",
        position: "Backend Developer",
        shifttime: "14April",
        starttime: "8:00am",
        endtime: "5:00pm",
        location: "Main Office"
    },
    {
        id: "23320-3",
        name: "Sorn sokcheadalin",
        position: "UX/UI Designer",
        shifttime: "13Mar",
        starttime: "8:00am",
        endtime: "5:00pm",
        location: "Main Office",
        availability: "Available"
    },
    {
        id: "23320-4",
        name: "Somnang Dara",
        position: "Full Stack Developer",
        shifttime: "20Mar",
        starttime: "8:00am",
        endtime: "5:00pm",
        location: "Main Office",
        availability: "Available"
    },

    {
        id: "3456-5",
        name: "Kong Socheata",
        position: "Q/A",
        shifttime: "23Mar",
        starttime: "9:00am",
        endtime: "8:00pm",
        location: "PSE-Institute",
        availability: "Available"

    },

    {
        id: "23780-6",
        name: "Em Mealea",
        position: "IT",
        shifttime: "29Mar",
        starttime: "8:30am",
        endtime: "5:00pm",
        location: "MunAkom",
        availability: "Available"

    },

    {
        id: "2398-7",
        name: "kun Nita",
        position: "CTO",
        shifttime: "1April",
        starttime: "8:30am",
        endtime: "5:00pm",
        location: "MunAkom",
        availability: "Available"

    },
]

const filteredEmployees = computed(() => {
    return employees.filter(emp =>
        emp.name.toLowerCase().includes(search.value.toLowerCase()) ||
        emp.id.toLowerCase().includes(search.value.toLowerCase())
    )
});

// button alert
const showForm = ref(false)

function openForm() {
    showForm.value = true
}

function closeForm() {
    showForm.value = false
}

</script>

<template>
    <div class="flex">

        <!-- Left bar -->
        <AppSidebar />

        <div class="p-6 w-full">

            <!-- right Bar -->
            <div class="flex items-center gap-6">
                <h1 class="text-4xl font-bold mt-5">
                    Roster Management
                </h1>

                <input v-model="search" placeholder="Search for Employee"
                    class="w-100 p-3 pl-4 mt-5 text-base border rounded-md" />

                <!-- button for create employee -->
                <button @click="showForm = true"
                    class="border rounded-md p-2 mt-5 text-2xl hover:bg-blue-400 font-bold transition-transform duration-400 ease-in-out hover:-translate-y-1">
                    Add Employee
                </button>

                <!-- alert table creating employee -->

                <div v-if="showForm" class="rounded-md block p-5 mt-5 border">
                    <p class="text-center w-full font-black text-4xl">Add Employee
                        <button @click="showForm = false" class="left-0 top-0 border-1 rounded-sm hover:bg-red-500">

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                stroke="currentColor" class="w-10 h-10">

                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>

                        </button>
                    </p>


                    <div class="">
                        <form action="/action_page.php" class="mt-5 display-none position-fixed">
                            <div class="flex gap-5">
                                <label for="uname" class="font-bold text-start"><b>Firstname</b></label> <br>
                                <input type="text" placeholder="Enter Firstname" name="uname"
                                    class="border rounded-md p-3 font-light" required><br><br>

                                <label for="uname" class="font-bold text-start"><b>Lastname</b></label> <br>
                                <input type="text" placeholder="Enter Lastname" name="uname"
                                    class="border rounded-md p-3 font-light" required><br><br>
                            </div><br>

                            <div class="flex gap-5">
                                <label for="uname" class="font-bold text-start"><b>Position</b></label> <br>
                                <input type="text" placeholder="Enter   Position" name="uname"
                                    class="border rounded-md p-3 font-light" required><br><br>

                                <label for="uname" class="font-bold text-start"><b>Shifttime</b></label> <br>
                                <input type="text" placeholder="Enter Shiftime" name="uname"
                                    class="border rounded-md p-3 font-light" required><br><br>
                            </div><br>

                            <div class="flex gap-5">
                                <label for="uname" class="font-bold text-start"><b>StartTime</b></label> <br>
                                <input type="text" placeholder="Enter Starttime" name="uname"
                                    class="border rounded-md p-3 font-light" required><br><br>

                                <label for="uname" class="font-bold text-start"><b>EndTime</b></label> <br>
                                <input type="text" placeholder="Enter EndTime" name="uname"
                                    class="border rounded-md p-3 font-light" required><br><br>
                            </div><br>

                            <div class="flex gap-5">
                                <label for="uname" class="font-bold text-start"><b>Location</b></label> <br>
                                <input type="text" placeholder="Enter Location" name="uname"
                                    class="border rounded-md p-3 font-light" required><br><br>

                                <label for="uname" class="font-bold text-start"><b>Availability</b></label> <br>
                                <input type="text" placeholder="Enter Availability" name="uname"
                                    class="border rounded-md p-3 font-light" required><br><br>
                            </div><b></b><br>

                            <!-- role radio -->
                            <div class="flex gap-3">
                                <p class="font-bold text-xl font-sans">Role</p>
                                <input type="radio" id="age1" name="age" value="Staff">
                                <label for="age1">Staff</label><br>
                                <input type="radio" id="age2" name="age" value="60">
                                <label for="age2">Instuctor</label>
                            </div><br>

                            <!-- checkbox -->
                            <label>
                                <input type="checkbox" checked="checked" name="remember"> Let user know they were added
                                to this course
                            </label><br><br>

                            <div class="flex gap-4 ">
                                <input type="submit" value="Submit  "
                                    class=" text-center rounded-md p-2 text-xl bg-blue-400 hover:bg-gray-300 w-30 transition-transform duration-400 ease-in-out hover:-translate-y-1">

                                <input type="submit" value="Cencel"
                                    class="text-center rounded-md p-2 text-xl bg-red-500 hover:bg-gray-300  w-30 transition-transform duration-400 ease-in-out hover:-translate-y-1">
                            </div>
                        </form>

                    </div>
                </div>


            </div>


            <table class="min-w-full  mt-12 rounded-md">

                <thead class="bg-gray-200">
                    <tr>
                        <th class="p-3 text-left">EmployeeID</th>
                        <th class="p-3 text-left">FullName</th>
                        <th class="p-3 text-left">Position</th>
                        <th class="p-3 text-left">ShiftDate</th>
                        <th class="p-3 text-left">StartTime</th>
                        <th class="p-3 text-left">EndTime</th>
                        <th class="p-3 text-left">Location</th>
                        <th class="p-3 text-left">Availability</th>
                    </tr>
                </thead>

                <tbody>

                    <Roster v-for="emp in filteredEmployees" :key="emp.id" v-bind="emp" />

                </tbody>

            </table>


            <!-- static employee -->
            <div class="grid grid-cols-4 gap-4 duration-500 font-sans translate-(--my-translate) ">
                <!-- box -->
                <RosterStatic tittle="Shedule" number="20+" />
                <RosterStatic tittle="Check-in" number="60" />
                <RosterStatic tittle="Check-out" number="50" />
                <RosterStatic tittle="Total" number="10" />
            </div>

        </div>
    </div>


</template>
