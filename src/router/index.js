import Vue from 'vue';
import VueRouter from 'vue-router';
// import Landing from '../views/Landing.vue';
// import Cart from '../views/Cart.vue';
// import Order from '../views/Order.vue';
// import Shopping from '../views/Shopping.vue';
import routes from './routes.js';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
