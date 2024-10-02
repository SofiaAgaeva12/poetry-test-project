import { createRouter, createWebHistory } from 'vue-router'
import PoemPage from '@/page/PoemPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'poem-page',
      component: PoemPage
    }
  ]
})
export default router
