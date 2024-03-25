import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '@/views/HomeView.vue'),
  },
  {
    path: '/search',
    name: 'search',
    component: () => import(/* webpackChunkName: "about" */ '@/views/SearchResults.vue'),
  },
  {
    path: '/create',
    name: 'create',
    component: () => import(/* webpackChunkName: "about" */ '@/views/GenerateJocksView.vue'),
  },
  {
    path: '/historical',
    name: 'historical',
    component: () => import(/* webpackChunkName: "about" */ '@/views/HistoricalView.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name === from.name) {
    next(false);
  } else {
    next();
  }
});

export default router;
