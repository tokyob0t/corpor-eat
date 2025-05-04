import { createRouter, createWebHistory } from 'vue-router';

import { useUserStore } from '@/stores/user';
import Mainlayout from '@components/Mainlayout.vue';

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Mainlayout,
      children: [
        { path: '', component: () => import('@views/HomeView.vue') },
        {
          path: 'reservations',
          component: () => import('@views/ReservationsView.vue'),
          beforeEnter(to, from, next) {
            const userStore = useUserStore();
            if (!userStore.isAuthenticated) return next('/auth');
            next();
          },
        },
        {
          path: 'restaurants',
          component: () => import('@views/RestaurantsView.vue'),
        },
        {
          path: 'privacy-policy',
          component: () => import('@views/PrivacyPolicyView.vue'),
        },
        {
          path: 'terms-of-service',
          component: () => import('@views/TermsOfServiceView.vue'),
        },
        {
          path: 'faq',
          component: () => import('@views/FaqView.vue'),
        },
      ],
    },

    {
      path: '/payment',
      name: 'payment',
      component: () => import('@/views/PaymentView.vue'),
    },
    {
      path: '/auth',
      name: 'Authentication',
      component: () => import('@/views/AuthView.vue'),
    },
    {
      path: '/admin',
      name: 'Admin',
      component: () => import('@/views/AdminView.vue'),
    },
  ],
});
