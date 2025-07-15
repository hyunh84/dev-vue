// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';

import DefaultLayout from '@/layout/DefaultLayout.vue';
import HomeView from '@/views/HomeView.vue';

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      { path: '', name:'Home', component: HomeView },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
