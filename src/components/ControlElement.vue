<template>
  <div class="control-element" :class="{ 'control-element--active': isActive }"></div>
</template>

<script setup>
defineProps({
  isActive: { type: Boolean, default: false }
})
</script>

<style scoped>
.control-element {
  background-color: black;
  width: 20px;
  height: 20px;
  border: 2px solid black;
  transition:
    background-color 0.3s,
    transform 0.3s;
}
.control-element--active {
  background-color: white;
  transform: scale(1.1);
}
</style>
