import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/modules/home/HomePage.vue'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
  ]
});