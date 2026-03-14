<script setup>
  import Appsidebar from '~/components/AppSidebar.vue'

import { reactive } from 'vue'

const form = reactive({
  name: '',
  email: ''
})

function handleSubmit() {
  console.log(form) // { name: '...', email: '...' }
}
 
const emit = defineEmits(['update:modelValue'])
</script>
<template>
  <div class="flex min-h-screen">
    <Appsidebar />
    <div class="w-full mr-7 mt-15 ml-7">
      <div class="flex justify-between">
        <div class="">
          <h2 class="text-3xl font-syne font-bold text-5xl tracking-tighter">
            Submit Leave Request
          </h2>
          <p class="text-gray-500">
            ស្នើសុំច្បាប់ — Fill in and submit your leave request
          </p> 
        </div>
        
       </div>

      <div class="w-5xl m-auto bg-gray-100 rounded-[10px] p-8 mt-10 ">
        <div class="flex justify-between">
          <div class="">
            <h4 class="text-[35px] font-syne font- text-5xl tracking-tighter">
            Leave Request Form
          </h4>
          <p class="text-gray-500">
            Complete all details and click submit
          </p>  
          </div>
          <div class="">
            <button class="bg-[#a9def9]  text-gray-900 font-bold px-5 py-2 rounded-[5px] border mr-5">
              Employee
            </button>
            <button class="bg-[#a9def9]  text-gray-900 font-bold px-5 py-2 rounded-[5px] border">
             + Admin
            </button>
          </div>
        </div>
        <div class="">
          <form @submit.prevent="handleSubmit" class="mt-5">

            <div class="pb-4">
              <label class="font-syne font-semibold text-[20px] tracking-tighter">YOUR FULL NAME</label>
              <input v-model="form.name" type="text" placeholder="Enter name" class="w-full border rounded-[10px] p-2.5 font-syne font-normal text-[18px] tracking-tighter"/>
            </div>
          
            <div class="pb-4">
              <label class="font-syne font-semibold text-[20px] tracking-tighter">DEPARTMENT</label>
             <select id="" type="All Departments" class="w-full border rounded-[10px] p-3 font-syne font-normal text-[18px] tracking-tighter text-gray-500">
                <option value="" >Engineering</option>
                <option value="" >Marketing</option>
                <option value="" >Finance</option>
                <option value="" >HR</option>
                <option value="" >Operations</option>

              </select>
            </div>
            <div class="pb-4">
              <label class="font-syne font-semibold text-[20px] tracking-tighter">LEAVE TYPE</label>
             <select id="" type="All Departments" class="w-full border rounded-[10px] p-3 font-syne font-normal text-[18px] tracking-tighter text-gray-500">
                <option value="" >Annual Leave</option>
                <option value="" >Sick Leave</option>
                <option value="" >Personal Leave</option>
                <option value="" >Paternity Leave</option>
                <option value="" >Emergency Leave</option>

              </select>
            </div>

            <div class="pb-4 flex">
              <div class="w-1/2 mr-1">
                <label class="font-syne font-semibold text-[20px] tracking-tighter">START DATE</label>
                
                <input type="date" class="w-full border rounded-[10px] p-2.5 font-syne font-normal text-[18px] tracking-tighter">
              </div> 
              
              
                <div class="w-1/2 ml-1">
                <label class="font-syne font-semibold text-[20px] tracking-tighter">END DATE</label>
                <input type="date" class="w-full border rounded-[10px] p-2.5 font-syne font-normal text-[18px] tracking-tighter">
              </div>
            </div>
            <div>
              <label for="">REASON FOR LEAVE</label>
              <textarea v-model="bio" class="w-full  border rounded-[10px] mb-4 p-2.5 font-syne font-normal text-[18px] tracking-tighter " rows="4" placeholder="Brilefly explain why you need this leave...">
              </textarea>
            </div>
            </form>
            <div class="text-right">
              <button class="bg-[#a9def9]  text-gray-900 font-bold px-5 py-2 rounded-[5px] border mr-5">
                CLear
              </button>
              <button class="bg-[#a9def9]  text-gray-900 font-bold px-5 py-2 rounded-[5px] border">
               Submit Request →
              </button>
            </div>
        </div>
      </div>

      
    </div>
    
  </div>
</template>