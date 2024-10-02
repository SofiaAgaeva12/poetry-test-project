<template>
  <div>
    <p class="quatrain" v-for="(string, index) in quatrainText" :key="index">{{ string }}</p>
  </div>
</template>

<script setup>
defineProps({
  quatrainText: { type: Array, required: true }
})
</script>

<style scoped>
.quatrain {
  font-size: 27px;
}
</style>
