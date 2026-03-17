<script setup>
import AppSidebar from '~/components/AppSidebar.vue';
// import { ref } from "vue"

// const employee = ref("")
// const hoursWorked = ref(0)
// const hourlyRate = ref(0)

// const result = ref(null)

// function calculateSalary() {

//   const normalHours = Math.min(hoursWorked.value, 8)
//   const overtimeHours = Math.max(hoursWorked.value - 8, 0)

//   const normalPay = normalHours * hourlyRate.value
//   const overtimePay = overtimeHours * hourlyRate.value * 1.5

//   const total = normalPay + overtimePay

//   result.value = {
//     normalHours,
//     overtimeHours,
//     normalPay,
//     overtimePay,
//     total
//   }
// }
</script>

<template>

    <div class="flex">
        <AppSidebar />

        <div class="mt-6 p-6 w-full ">
            <h1 class="text-3xl font-bold mb-4">Salary & OT Calculation</h1>

            <div class="border p-4 rounded mb-6">

                <input placeholder="Employee Name" class="border p-2 mr-2" />

                <input type="number" placeholder="Hours Worked" class="border p-2 mr-2" />

                <input type="number" placeholder="Hourly Rate" class="border p-2 mr-2" />

                <button class="bg-blue-500 text-white px-4 py-2 rounded">
                    Calculate
                </button>

            </div>

            <div class="border p-4 rounded">
                <p>Normal Hours:</p>
                <p>Overtime Hours:</p>
                <p>Normal Pay:</p>
                <p>Overtime Pay:</p>

                <h2 class="text-xl font-bold mt-2">
                    Total Salary:
                </h2>
            </div>

        </div>
    </div>

</template>