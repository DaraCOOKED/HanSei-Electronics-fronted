<script setup>
const props = defineProps({
    Text: String,
    Number: Number,
    Description: String,
})
</script>

<template>
    <div class="rounded-xl p-6 border w-[300px]">
        <p class="text-lg py-1">
            {{ Text }}
        </p>
        <h2 class="text-4xl py-1 ">
            {{ Number }}
        </h2>
        <p class="text-lg py-1">
            {{ Description }}
        </p>
    </div>
</template>