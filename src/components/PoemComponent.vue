<template>
  <div class="poem">
    <div class="poem__control-elements">
      <control-element
        v-for="(el, index) in poemText.length"
        :key="index"
        :is-active="invisibleQuatrains[index]"
        @click="toggleQuatrain(index)"
      />
    </div>
    <div class="poem__quatrains">
      <QuatrainComponent
        v-for="(quatrain, index) in poemText"
        :key="index"
        :is-hidden="invisibleQuatrains[index]"
        :quatrain-text="quatrain"
      />
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import QuatrainComponent from '@/components/QuatrainComponent.vue'
import ControlElement from '@/components/ControlElement.vue'

const props = defineProps({
  poemText: { type: Array, required: true }
})

const invisibleQuatrains = reactive(props.poemText.map(() => false))

function toggleQuatrain(index) {
  const visibleCount = invisibleQuatrains.filter((visible) => visible === false).length
  if (visibleCount > 1 || invisibleQuatrains[index]) {
    invisibleQuatrains[index] = !invisibleQuatrains[index]
  }
}
</script>

<style scoped>
.poem {
  width: 800px;
  display: flex;
  gap: 20px;
  padding: 10px;
}
.poem__control-elements {
  display: flex;
  gap: 25px;
  padding-top: 5px;
}
.poem__quatrains {
  display: flex;
  flex-direction: column;
}

@media screen and (max-width: 900px) {
  .poem {
    width: fit-content;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
