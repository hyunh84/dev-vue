// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';

import DefaultLayout from '@/layout/DefaultLayout.vue';
import HomeView from '@/views/HomeView.vue';

// guide
import GuideLayout from '@/layout/GuideLayout.vue';
import Btn from '@/guides/Btn.vue';

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      { path: '', name:'Home', component: HomeView },
    ]
  },
  // 가이드
  {
    path: '/guide',
    component: GuideLayout,
    children: [
      { path: 'btn', name:'ButtonGuide', component: Btn },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
