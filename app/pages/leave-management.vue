<script setup>
  import Appsidebar from '~/components/AppSidebar.vue'
import { reactive } from 'vue'
import StepIndicator from '../components/StepIndicator.vue'
const form = reactive({
  name: '',
  email: ''
})

function handleSubmit() {
  console.log(form) // { name: '...', email: '...' }
}
</script>
<template>
  <div class="flex min-h-screen mb-20">
    <Appsidebar />
    <div class="w-full mr-7 mt-10 ml-7">
      <div class="flex justify-between">
        <div class="">
          <h2 class="text-3xl font-syne font-bold text-5xl tracking-tighter">
            Leave Management
          </h2>
          <p class="text-gray-500">
            Fill in and submit your leave request
          </p> 
        </div>
        
       </div>
       <div class="mt-10">
    <StepIndicator :current="1" />  <!-- ← add this -->
    <!-- rest of card... -->
    </div>
      <div class="w-5xl m-auto bg-gray-100 rounded-[10px] p-8 mt-10 ">
        <div class="flex justify-between">
          <div class="">
            <h4 class="text-[30px] font-syne font- text-5xl tracking-tighter">
            Leave Request Form
          </h4>
          <p class="text-gray-500">
            Complete all details and click submit
          </p>  
          </div>
          <div class="">
            <router-link to="/leave-management">
            <button class="bg-blue-500  text-gray-900 font-bold px-5 py-2 rounded-[5px]  mr-5">
              Employee
            </button>
            </router-link>
            <router-link to="/admin-leave-management">
            <button class="bg-blue-500  text-gray-900 font-bold px-5 py-2 rounded-[5px] ">
             + Admin
            </button>
            </router-link>
          </div>
        </div>
        
        <div class="">
          <form @submit.prevent="handleSubmit" class="mt-5">

            <div class="pb-4">
              <label class="font-syne font-semibold text-[15px] tracking-tighter">YOUR FULL NAME</label>
              <input v-model="form.name" type="text" placeholder="Enter name" class="w-full border rounded-[10px] p-2.5 font-syne font-normal text-[15px] tracking-tighter"/>
            </div>
          
            <div class="pb-4">
              <label class="font-syne font-semibold text-[15px] tracking-tighter">DEPARTMENT</label>
             <select id="" type="All Departments" class="w-full border rounded-[10px] p-3 font-syne font-normal text-[15px] tracking-tighter text-gray-500">
                <option value="" >Engineering</option>
                <option value="" >Marketing</option>
                <option value="" >Finance</option>
                <option value="" >HR</option>
                <option value="" >Operations</option>

              </select>
            </div>
            <div class="pb-4">
              <label class="font-syne font-semibold text-[15px] tracking-tighter">LEAVE TYPE</label>
             <select id="" type="All Departments" class="w-full border rounded-[10px] p-3 font-syne font-normal text-[15px] tracking-tighter text-gray-500">
                <option value="" >Annual Leave</option>
                <option value="" >Sick Leave</option>
                <option value="" >Personal Leave</option>
                <option value="" >Paternity Leave</option>
                <option value="" >Emergency Leave</option>

              </select>
            </div>

            <div class="pb-4 flex">
              <div class="w-1/2 mr-1">
                <label class="font-syne font-semibold text-[15px] tracking-tighter">START DATE</label>
                
                <input type="date" class="w-full border rounded-[10px] p-2.5 font-syne font-normal text-[15px] tracking-tighter">
              </div> 
              
              
                <div class="w-1/2 ml-1">
                <label class="font-syne font-semibold text-[15px] tracking-tighter">END DATE</label>
                <input type="date" class="w-full border rounded-[10px] p-2.5 font-syne font-normal text-[15px] tracking-tighter">
              </div>
            </div>
            <div>
              <label for="">REASON FOR LEAVE</label>
              <textarea v-model="bio" class="w-full  border rounded-[10px] mb-4 p-2.5 font-syne font-normal text-[15px] tracking-tighter " rows="4" placeholder="Brilefly explain why you need this leave...">
              </textarea>
            </div>
            </form>
            <div class="text-right">
              <button class="bg-blue-500  text-gray-900 font-bold px-5 py-2 rounded-[5px]  mr-5">
                CLear
              </button>
              <router-link to="/sumit-employee">
              <button class="bg-blue-500  text-gray-900 font-bold px-5 py-2 rounded-[5px] ">
               Submit Request →
              </button>
              </router-link>
            </div>
        </div>
      </div>

      
    </div>
    
  </div>
</template>