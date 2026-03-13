<script setup>
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
</script>

<template>
    <div class="flex">
        <!-- leftbar -->
        <AppSidebar />

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
            </div>


        </div>

    </div>
</template>
