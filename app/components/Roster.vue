<script setup>
const props = defineProps({
  id: String,
  name: String,
  position: String,
  shifttime: String,
  starttime: String,
  endtime: String,
  location: String
});
</script>

<template>
  <tr class="border-b border-gray-200 hover:bg-gray-50">
    <td class="p-3">{{ props.id }}</td>
    <td class="p-3">{{ props.name }}</td>
    <td class="p-3">{{ props.position }}</td>
    <td class="p-3">{{ props.shifttime }}</td>
    <td class="p-3">{{ props.starttime }}</td>
    <td class="p-3">{{ props.endtime }}</td>
    <td class="p-3">{{ props.location }}</td>
  </tr>
</template>