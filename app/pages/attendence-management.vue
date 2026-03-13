<script setup>
import AppSidebar from '~/components/AppSidebar.vue'
</script>

<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css">
    <div class="flex">

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css">
        <Appsidebar />
        <div class="mt-6 p-6 w-full ">
            <div class="w-full flex justify-between">
                <div class="w-xl ">
                    <h2 class="text-3xl font-mono">
                        Attendance Management
                    </h2>
                    <p>Analya attendance record of employee</p>
                </div>
                <div class="bg-blue-500 p-4 rounded-lg mr-1 text-white text-xl">
                    Download 
                    <i class="fa-solid fa-cloud-arrow-down"></i>
                </div>
            </div>
            <div class="flex justify-between mt-10">
                <div class="border bg-white p-10 rounded-xl  ">
                    <div class="flex mr-25">
                        <div class="border rounded-lg p-1"><i class="fa-regular fa-circle-check"></i></div>
                        <div class="px-4 mt-1 text-xl">Present Today</div>
                    </div> <br>
                    <div class="py-1 text-xl">40</div>
                    <div class="py-1 text-xl">124 People Remaining</div>
                </div>
                <div class="border p-10 rounded-xl ">
                    <div class="flex mr-25">
                        <div class="border rounded-lg p-1"><i class="fa-regular fa-clock"></i></div>
                        <div class="px-4 mt-1 text-xl">Lates Entry .....</div>
                    </div> <br>
                    <div class="py-1 text-xl">28</div>
                    <div class="py-1 text-xl">12 People are on time</div>
                </div>
                <div class="border p-10 rounded-xl ">
                    <div class="flex mr-25">
                        <div class="border rounded-lg p-1"><i class="fa-chisel fa-regular fa-leaf"></i></div>
                        <div class="px-4 mt-1 text-xl">On Leaves .....</div>
                    </div> <br>
                    <div class="py-1 text-xl">04</div>
                    <div class="py-1 text-xl">Approved leave</div>
                </div> 
                 <div class="border p-10 rounded-xl ">
                    <div class="flex mr-25">
                        <div class="border rounded-lg p-1"><i class="fa-regular fa-face-frown"></i></div>
                        <div class="px-4 mt-1 text-xl">Absents .....</div>
                    </div> <br>
                    <div class="py-1 text-xl">01</div>
                    <div class="py-1 text-xl">Without informing</div>
                </div>
            </div>
            <div class="w-full flex mt-10">
                   <button class="bg-blue-500 p-4 rounded-lg mr-1 text-white text-xl">Leaves
                        <i class="fa-solid fa-xmark"></i>
                   </button> 
                    
                    <button class="bg-blue-500 p-4 rounded-lg mr-1 text-white text-xl">Absents
                        <i class="fa-solid fa-xmark"></i>
                   </button>
                   <button class="bg-blue-500 p-4 rounded-lg mr-1 text-white text-xl">Actives
                        <i class="fa-solid fa-xmark"></i>
                   </button>
            </div>
            <div class="border mt-15"></div>
            <div class="flex justify-between">
                <div class="">Employee</div>
                <div class="">Sunday</div>
                <div class="">Sunday</div>
                <div class="">Sunday</div>
                <div class="">Sunday</div>
                <div class="">Sunday</div>
                <div class="">Sunday</div>
                <div class="">Sunday</div>
            </div>

        </div>
    </div>
    

</template>