<template>
  <header class="header-container">
    <TitlePoem>{{ invictusPoem.title }}</TitlePoem>
    <author-poem>{{ invictusPoem.author }}</author-poem>
  </header>
  <poem-component :poem-text="invictusPoem.text" />
</template>

<script setup>
import TitlePoem from '@/components/TitlePoem.vue'
import AuthorPoem from '@/components/AuthorPoem.vue'
import { invictusPoem } from '@/poems/invictus.js'
import PoemComponent from '@/components/PoemComponent.vue'
</script>

<style scoped>
.header-container {
  display: flex;
  gap: 60px;
  justify-content: flex-end;
  align-items: flex-end;
  width: 600px;
  padding-top: 20px;
}

@media screen and (max-width: 900px) {
  .header-container {
    width: 100%;
    max-width: 600px;
    padding-left: 10px;
    padding-right: 10px;
  }
}
</style>
