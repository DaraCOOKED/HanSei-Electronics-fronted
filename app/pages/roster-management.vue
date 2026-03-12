<script setup>
import Appsidebar from '~/components/Appsidebar.vue';
</script>

<template>
    <div class="flex">

        <Appsidebar />

        <div class="mt-6 p-6 w-full">

            <h1 class="text-4xl font-medium mb-4">Roster Management</h1>

            <table class="w-full border">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Position</th>
                </tr>

                <tr>
                    <td>1</td>
                    <td>Anna</td>
                    <td>Manager</td>
                </tr>

                <tr>
                    <td>2</td>
                    <td>John</td>
                    <td>Developer</td>
                </tr>
            </table>

        </div>

    </div>
</template>
