<template>
  <div class="quatrain" :class="{ 'quatrain--hidden': isHidden }">
    <p v-for="(string, index) in quatrainText" :key="index">
      {{ string }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  quatrainText: { type: Array, required: true },
  isHidden: { type: Boolean, default: false }
})
</script>

<style scoped>
.quatrain {
  font-size: 27px;
  margin-bottom: 10px;
  transition:
    opacity,
    margin-bottom 0.8s ease;
}
.quatrain--hidden {
  max-height: 0;
  opacity: 0;
  margin-bottom: 0;
}
</style>
