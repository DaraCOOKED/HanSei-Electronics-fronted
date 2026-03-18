<script setup>
const props = defineProps({
    Text: String,
    Number: Number,
    Description: String,
})
</script>

<template>
    <div class="relative overflow-hidden bg-[#a9def9] rounded-xl p-6 min-w-[300px] hover:bg-gray-100 transition-transform duration-400 ease-in-out hover:-translate-y-1">
        <p class="text-lg py-1">
            {{ Text }}
        </p>
        <h2 class="text-4xl py-1">
            {{ Number }}
        </h2>
        <p class="text-lg py-1">
            {{ Description }}
        </p>
    </div>
</template>