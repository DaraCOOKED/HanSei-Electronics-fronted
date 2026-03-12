<template>
    <div class="w-64 bg-blue-900 text-white h-screen p-5">
        <h1 class="text-4xl font-bold mt-6">Dashboard</h1>

        <ul class="space-y-4 mt-15">
            <li class="hover:text-gray-500 cursor-pointer border-2 nowrap  ">
                <NuxtLink to="/employee-management">Employee Management</NuxtLink>
            </li>

            <li class="hover:text-gray-500 cursor-pointer border-2 ">
                <NuxtLink to="/attendence-management">Attendence Management</NuxtLink>
            </li>

            <li class="hover:text-gray-500 cursor-pointer border-2 ">
                <NuxtLink to="/roster-management">roster-management</NuxtLink>
            </li>

            <li class="hover:text-gray-500 cursor-pointer border-2 ">
                <NuxtLink to="/leave-management">Leave Management</NuxtLink>
            </li>

            <li class="hover:text-gray-500 cursor-pointer border-2 ">
                <NuxtLink to="/setting">setting</NuxtLink>
            </li>
        </ul>
    </div>
</template>