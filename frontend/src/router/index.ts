import { createRouter, createWebHistory } from 'vue-router';

import Mainlayout from '@components/Mainlayout.vue';
import HomeView from '@views/HomeView.vue';
import AuthView from '@views/AuthView.vue';
import ReservationsView from '@views/ReservationsView.vue';
import RestaurantsView from '@views/RestaurantsView.vue';

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Mainlayout,
      children: [
        { path: '', component: HomeView },
        { path: 'reservations', component: ReservationsView },
        { path: 'restaurants', component: RestaurantsView },
      ],
    },
    {
      path: '/auth',
      name: 'Authentication',
      component: AuthView,
    },
  ],
});
