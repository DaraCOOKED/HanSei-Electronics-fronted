<script setup>
    import ReportCard from '~/components/ReportCard.vue';
    import Percentage from '~/components/Percentage.vue';
</script>
<template>
    <div class="flex ">
        <AppSidebar />
        <div class="m-auto mt-8">
            <div class="mt-12">
                <p class="text-blue-500">PROJECT STATUS REPORT</p> <br>
                <h2 class="text-4xl">Apollo Platform Rebuild</h2>
                <span>Q1 2026 · Engineering Division</span>
            </div>
            <div class="border mt-10 "></div>
             <div class="container flex justify-between mt-10 gap-10">
                <ReportCard -text="OVERALL PROGRESS" -number="68%" -description="+6 from last week" />
                <ReportCard -text="TASKS DONE" -number="34" -description="of 50 total tasks" />
                <ReportCard -text="DAY LEFT" -number="22" -description="deadline Apr 7,2026" />
                <ReportCard -text="OPEN RISKS" -number="3" -description="1 high . 2 medium" />
            </div>
            <div class="">
                <p class="mt-10">OVERVIEW </p>
            </div>
            <div class="flex border p-6 mt-5 rounded-xl justify-between">
                <div class=" w-[48%]">
                    <h2>Project Details</h2>
                    <div class="border mt-5"></div>
                    <div class="flex justify-between mt-4">
                        <p class="text-gray-500">Project Details</p>
                        <p class="">Sarah Chen</p>
                    </div>
                    <div class="flex justify-between mt-4">
                        <p class="text-gray-500">Team Size</p>
                        <p class="">8 members</p>
                    </div>
                    <div class="flex justify-between mt-4">
                        <p class="text-gray-500">Start Date</p>
                        <p class="">Jan 6,2026</p>
                    </div>
                    <div class="flex justify-between mt-4">
                        <p class="text-gray-500">Target End </p>
                        <p class="">Apr 7,2026</p>
                    </div>
                    <div class="flex justify-between mt-4">
                        <p class="text-gray-500">Budget Used</p>
                        <p class="">$142k /$200k</p>
                    </div>
                </div>
                <div class=" w-[49%]">
                    <h2>Project Details</h2>
                    <div class="border mt-5"></div>
                    <div class="flex justify-between mt-4">
                        <p class="text-gray-500">Discovery</p>
                        <p class="border px-3 rounded-sm bg-blue-200">Complete</p>
                    </div>
                    <div class="flex justify-between mt-4">
                        <p class="text-gray-500">Architecture</p>
                        <p class="border px-3 rounded-sm bg-blue-200">Complete</p>
                    </div>
                    <div class="flex justify-between mt-4">
                        <p class="text-gray-500">Development</p>
                        <p class="border px-3 rounded-sm bg-green-200">On Truck</p>
                    </div>
                    <div class="flex justify-between mt-4">
                        <p class="text-gray-500"> QA & Testing </p>
                        <p class="border px-3 rounded-sm bg-yellow-200">At Risk</p>
                    </div>
                    <div class="flex justify-between mt-4">
                        <p class="text-gray-500">Deployment</p>
                        <p class="border px-3 rounded-sm bg-gray-200">upcoming</p>    
                    </div>
                </div>
            </div>
            <div class="mt-10">
                    <p>COMPONENT PROGRESS</p>
                    <div class="mt-4">
                        <Percentage title="Backend API" -description="REST endpoints, authentication, database layer" :percentage="90" status="on-track"/>
                        <Percentage title="Frontend Dashboard" -description="React UI components, routing, state management" :percentage="72" status="on-track"/>
                        <Percentage title="Data Pipeline" -description="ETL jobs, data transformation, warehouse sync" :percentage="55" status="on-track"/>
                        <Percentage title="Data Pipeline" -description="Unit tests, integration tests, E2E coverage" :percentage="35" status="on-track"/>
                    </div>
            </div>
            <div class="">
                    <p class="mt-10">Key Milestones </p>
            </div>
            <div class="border p-5 rounded-lg mt-4">
                <div class="flex gap-2">
                    <div class="border p-2.5 rounded-xl bg-green-400"></div>
                    <p class="">Kickoff & Requirements Signed</p>
                    
                </div>
                <span class="ml-7 text-sm text-gray-600">Jan 06, 2026 · completed</span>
                <div class="flex gap-2 mt-3">
                    <div class="border p-2.5 rounded-xl bg-green-400"></div>
                    <p>Architecture Review Approved</p>
                    
                </div>
                <span class="ml-7 text-sm text-gray-600">Jan 27, 2026 · completed</span>
                <div class="flex gap-2 mt-3">
                    <div class="border p-2.5 rounded-xl bg-green-400"></div>
                    <p>Backend API Feature Complete</p>
                    
                </div>
                <span class="ml-7 text-sm text-gray-600">Mar 03, 2026 · completed</span>
                <div class="flex gap-2 mt-3">
                    <div class="border p-2.5 rounded-xl bg-blue-400"></div>
                    <p>Frontend Development Sprint</p>
                    
                </div>
                <span class="ml-7 text-sm text-gray-600">Mar 10 – Mar 24, 2026 · in progress</span>
                <div class="flex gap-2 mt-3">
                    <div class="border p-2.5 rounded-xl"></div>
                    <p>QA & User Acceptance Testing</p>
                    
                </div>
                <span class="ml-7 text-sm text-gray-600">Mar 25 – Apr 01, 2026 · upcoming</span>
                <div class="flex gap-2 mt-3">
                    <div class="border p-2.5 rounded-xl "></div>
                    <p>Production Deployment</p>
                    
                </div>
                <span class="ml-7 text-sm text-gray-600"> Mar 10 – Mar 24, 2026 · in progress</span>
                
            </div>
            <div class="">
                    <p class="mt-10">Risk Register </p>
            </div>
            <div class="flex justify-between mt-4">
                <div class="border p-5 w-[49%] rounded-lg">
                    <div class="flex justify-between mb-3">
                        <p class="">Deployment</p>
                        <p class="border px-3 rounded-sm bg-red-400">high</p>   
                    </div>
                    <span class="text-sm">ETL jobs running 2 weeks behind schedule. May impact QA start date. Mitigation: 2 engineers re-assigned.</span> 
                </div>
                <div class="border p-5 w-[49%] rounded-lg">
                    <div class="flex justify-between mb-3">
                        <p class="">QA Resource Gap</p>
                        <p class="border px-3 rounded-sm bg-yellow-400">medium</p>   
                    </div>
                    <span class="text-sm">Only 1 QA engineer available during final sprint. Requesting external contractor by March 20.</span> 
                </div>
            </div>
            <div class="flex justify-between mt-4">
                <div class="border p-5 w-[49%] rounded-lg">
                    <div class="flex justify-between mb-3">
                        <p class="">Third-party API Changes</p>
                        <p class="border px-3 rounded-sm bg-yellow-400">medium</p>   
                    </div>
                    <span class="text-sm">Vendor v3 API migration required before launch. Compatibility layer in progress, ETA March 22.</span> 
                </div>
                <div class="border p-5 w-[49%] rounded-lg">
                    <div class="flex justify-between mb-3">
                        <p class="">Performance Benchmarks</p>
                        <p class="border px-3 rounded-sm bg-blue-400">Monitoring</p>   
                    </div>
                    <span class="text-sm">Load testing scheduled for March 28. Current staging performance meets 85% of SLA targets.</span> 
                </div>
            </div>
        </div>

    </div>
</template>