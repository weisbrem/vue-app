import { createWebHistory, createRouter } from 'vue-router';

import PageHome from '@/pages/PageHome.vue';
import PageFavorites from '@/pages/PageFavorites.vue';
import PageProfile from '@/pages/PageProfile.vue';

const routes = [
  { path: '/', name: 'PageHome', component: PageHome },
  { path: '/favorites', name: 'PageFavorites', component: PageFavorites },
  { path: '/profile', name: 'PageProfile', component: PageProfile },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
