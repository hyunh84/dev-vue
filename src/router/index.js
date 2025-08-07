// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';

import DefaultLayout from '@/layout/DefaultLayout.vue';
import HomeView from '@/views/HomeView.vue';

// guide
import GuideLayout from '@/guides/GuideLayout.vue';
import Btn from '@/guides/Btn.vue';
import Icon from '@/guides/Icon.vue';
import Form from '@/guides/Form.vue';
import Popup from '@/guides/Popup.vue';

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
      { path: 'btn', name:'buttonGuide', component: Btn },
      { path: 'icon', name:'iconGuide', component: Icon },
      { path: 'form', name:'formGuide', component: Form },
      { path: 'popup', name:'popupGuide', component: Popup },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
