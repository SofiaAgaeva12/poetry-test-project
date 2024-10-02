<template>
  <div class="poem">
    <div class="poem__control-elements">
      <control-element v-for="element in poemText.length" :key="element" />
    </div>
    <div class="poem__quatrains">
      <QuatrainComponent
        v-for="(quatrain, index) in poemText"
        :quatrain-text="quatrain"
        :key="index"
      />
    </div>
  </div>
</template>

<script setup>
import QuatrainComponent from '@/components/QuatrainComponent.vue'
import ControlElement from '@/components/ControlElement.vue'

defineProps({
  poemText: { type: Array, required: true }
})
</script>

<style scoped>
.poem {
  width: 800px;
  display: flex;
  gap: 20px;
  padding-top: 10px;
}
.poem__control-elements {
  display: flex;
  gap: 25px;
  padding-top: 5px;
}
.poem__quatrains {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
