<script setup>

defineProps({
    id: String,
    name: String,
    position: String,
    shifttime: Date,
    starttime: Date,
    endtime: Date,
    location: String,

});
</script>


<template>
  <tbody>
    <tr class="border-b border-gray-200 hover:bg-gray-50">
      <td class="p-3">{{ id }}</td>
      <td class="p-3">{{ name }}</td>
      <td class="p-3">{{ position }}</td>
      <td class="p-3">{{ shifttime }}</td>
      <td class="p-3">{{ starttime }}</td>
      <td class="p-3">{{ endtime }}</td>
      <td class="p-3">{{ location }}</td>
    </tr>
  </tbody>
</template>