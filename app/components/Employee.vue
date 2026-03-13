<script setup>
const props = defineProps({
  number: [String, Number],
  label: String,
  percentage: {
    type: Number,
    default: 100
  }
})
</script>

<template>
  <div class="stat-card">
    <div class="content">
      <h2 class="number">{{ number }}</h2>
      <p class="label">{{ label }}</p>
    </div>
    <div class="progress-container">
      <div 
        class="progress-bar" 
        :style="{ width: percentage + '%' }"
      ></div>
    </div>
  </div>
</template>

<style scoped>
.stat-card {
  background: #3f8f26; /* Dark background from your image */
  border-radius: 12px;
  padding: 24px;
  min-width: 270px;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
}

.number {
  font-family: 'Inter', sans-serif; /* Use a bold, modern font */
  font-size: 2.5rem;
  font-weight: 800;
  color: white;
  margin: 0;
}

.label {
  color: #5d6575;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.8rem;
  margin-top: 8px;
}

.progress-container {
  position: absolute;
  bottom: 0;
  left: 0;  
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.05);
}

.progress-bar {
  height: 100%;
  background: linear-gradient(90deg, #bcfd49, #42b883);
  transition: width 0.5s ease;
}
</style>