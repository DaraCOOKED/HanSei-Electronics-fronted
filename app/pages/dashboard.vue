<script setup >
import AppSidebar from '~/components/AppSidebar.vue';
import { onMounted } from 'vue'
import Chart from 'chart.js/auto'

onMounted(() => {

const ctx1 = document.getElementById('areaChart')

new Chart(ctx1, {
  type: 'line',
  data: {
    labels: ['Mar 1','Mar 3','Mar 5','Mar 7','Mar 9','Mar 11','Mar 13'],
    datasets: [{
      label: 'Revenue',
      data: [10000,30000,18000,31000,25000,33000,39000],
      fill: true
    }]
  }
})


const ctx2 = document.getElementById('barChart')

new Chart(ctx2, {
  type: 'bar',
  data: {
    labels: ['January','February','March','April','May','June'],
    datasets: [{
      label: 'Revenue',
      data: [4000,5200,6300,7841,9800,15000]
    }]
  }
})

})



document.addEventListener("DOMContentLoaded", function () {
    const datatablesSimple = document.getElementById('datatablesSimple');
    if (datatablesSimple) {
        new simpleDatatables.DataTable(datatablesSimple);
    }
});


</script>



<template>
    <div class="flex min-h-screen">
        <AppSidebar />
        
  <div class="container-fluid px-4 w-full ">
    <h1 class="mt-4 colo-black text-5xl ">Dashboard</h1>
    <ol class="breadcrumb mb-4">
      <li class="breadcrumb-item active">Dashboard</li>
    </ol>
    <div class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">

      <div class="rounded-lg bg-blue-600 text-white shadow">
        <div class="p-5 text-lg font-semibold">Total Employees</div>
        <div class="flex items-center justify-between border-t border-blue-500 px-5 py-3">
        <NuxtLink to="/attendence-management" class="text-sm hover:underline">
            View Employee List
        </NuxtLink>
          <span class="text-lg">›</span>
        </div>
      </div>

    
      <div class="rounded-lg bg-yellow-500 text-white shadow">
        <div class="p-5 text-lg font-semibold">Today's Attendance</div>
        <div class="flex items-center justify-between border-t border-yellow-400 px-5 py-3">
          <NuxtLink to="/attendence-management" class="text-sm hover:underline">
            View Attendance Report
        </NuxtLink>
          <span class="text-lg">›</span>
        </div>
      </div>

      
      <div class="rounded-lg bg-green-600 text-white shadow">
        <div class="p-5 text-lg font-semibold">Active Employees</div>
        <div class="flex items-center justify-between border-t border-green-500 px-5 py-3">
          <NuxtLink to="/attendence-management" class="text-sm hover:underline">
            View Active Staff
        </NuxtLink>
          <span class="text-lg">›</span>
        </div>
      </div>


      <div class="rounded-lg bg-red-600 text-white shadow">
        <div class="p-5 text-lg font-semibold">Pending Leave Requests</div>
        <div class="flex items-center justify-between border-t border-red-500 px-5 py-3">
          <NuxtLink to="/attendence-management" class="text-sm hover:underline">
            Review Requests
        </NuxtLink>
          <span class="text-lg">›</span>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">

  <!-- Area Chart Card -->
  <div class="bg-white rounded-lg shadow border">
    
    <div class="flex items-center gap-2 border-b px-5 py-3 text-gray-700 font-semibold">
      <i class="fa-solid fa-chart-area"></i>
      Area Chart Example
    </div>

    <div class="p-5">
      <canvas id="areaChart"></canvas>
    </div>

  </div>



  <div class="bg-white rounded-lg shadow border w-full ">

    <div class="flex items-center gap-2 border-b w-ful px-5 py-3 text-gray-700 font-semibold">


      <i class="fa-solid fa-chart-bar"></i>
      Bar Chart Example
    </div>

    <div class="p-5 w-full">

      <canvas id="barChart"></canvas>

    </div>

  </div>

</div>
  </div>


  
    </div>

    
</template>