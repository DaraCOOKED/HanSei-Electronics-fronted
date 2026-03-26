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

      <div class="rounded-lg bg-blue-300 text-white shadow">
        <div class="p-5 text-lg font-semibold">Total Employees</div>
        <div class="flex items-center justify-between border-t bg-blue-300 px-5 py-3">
        <NuxtLink to="/attendence-management" class="text-sm hover:underline">
            View Employee List
        </NuxtLink>
          <span class="text-lg">›</span>
        </div>
      </div>

    
      <div class="rounded-lg bg-blue-300 text-white shadow">
        <div class="p-5 text-lg font-semibold">Today's Attendance</div>
        <div class="flex items-center justify-between border-t bg-blue-300 px-5 py-3">
          <NuxtLink to="/attendence-management" class="text-sm hover:underline">
            View Attendance Report
        </NuxtLink>
          <span class="text-lg">›</span>
        </div>
      </div>

      
      <div class="rounded-lg bg-blue-300 text-white shadow">
        <div class="p-5 text-lg font-semibold">Active Employees</div>
        <div class="flex items-center justify-between border-t bg-blue-300 px-5 py-3">
          <NuxtLink to="/attendence-management" class="text-sm hover:underline">
            View Active Staff
        </NuxtLink>
          <span class="text-lg">›</span>
        </div>
      </div>


      <div class="rounded-lg bg-blue-300 text-white shadow">
        <div class="p-5 text-lg font-semibold">Pending Leave Requests</div>
        <div class="flex items-center justify-between border-t bg-blue-300 px-5 py-3">
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

<div class="bg-white mt-5 border rounded-lg p-6 mb-6">
  
  <!-- Header -->
  <div class="flex items-center gap-2 border-b pb-3 mb-4">
    <svg class="w-5 h-5 text-gray-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
      <path d="M64 256V160H224v96H64zm0 64H224v96H64V320zm224 96V320H448v96H288zM448 256H288V160H448v96zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"/>
    </svg>

    <h2 class="text-lg font-semibold text-gray-700">
      DataTable Example
    </h2>
  </div>

  <!-- Top controls -->
  <div class="flex justify-between items-center mb-4">

    <div>
      <select class="border rounded px-2 py-1 text-sm">
        <option>5</option>
        <option selected>10</option>
        <option>15</option>
        <option>20</option>
        <option>25</option>
      </select>
      <span class="text-sm ml-2 text-gray-600">entries per page</span>
    </div>

    <input
      type="search"
      placeholder="Search..."
      class="border rounded px-3 py-1 text-sm focus:outline-none focus:ring focus:ring-blue-200"
    />

  </div>

  <!-- Table -->
  <div class="overflow-x-auto">
    <table class="w-full border border-gray-200 rounded-lg">
      <thead class="bg-gray-100 text-gray-700 text-sm">
        <tr>
          <th class="px-4 py-2 text-left">Name</th>
          <th class="px-4 py-2 text-left">Position</th>
          <th class="px-4 py-2 text-left">Office</th>
          <th class="px-4 py-2 text-left">Age</th>
          <th class="px-4 py-2 text-left">Start date</th>
          <th class="px-4 py-2 text-left">Salary</th>
        </tr>
      </thead>

      <tbody class="text-sm">
        <tr class="border-t hover:bg-gray-50">
          <td class="px-4 py-2">Tiger Nixon</td>
          <td class="px-4 py-2">System Architect</td>
          <td class="px-4 py-2">Edinburgh</td>
          <td class="px-4 py-2">61</td>
          <td class="px-4 py-2">2011/04/25</td>
          <td class="px-4 py-2">$320,800</td>
        </tr>

        <tr class="border-t hover:bg-gray-50">
          <td class="px-4 py-2">Garrett Winters</td>
          <td class="px-4 py-2">Accountant</td>
          <td class="px-4 py-2">Tokyo</td>
          <td class="px-4 py-2">63</td>
          <td class="px-4 py-2">2011/07/25</td>
          <td class="px-4 py-2">$170,750</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- Bottom -->
  <div class="flex justify-between items-center mt-4 text-sm text-gray-600">
    <p>Showing 1 to 10 of 57 entries</p>

    <div class="flex gap-2">
      <button class="px-3 py-1 border rounded hover:bg-gray-100">1</button>
      <button class="px-3 py-1 border rounded hover:bg-gray-100">2</button>
      <button class="px-3 py-1 border rounded hover:bg-gray-100">3</button>
    </div>
  </div>

</div>
  </div>


  
    </div>

    
</template>