import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import SeminarsPage from '@/views/SeminarsPage.vue';
import DetailsPage from '@/views/DetailsPage.vue';
import ContactPage from '@/views/ContactPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/seminars', component: SeminarsPage },
  { path: '/seminars/:id', component: DetailsPage },
  { path: '/contact', component: ContactPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
