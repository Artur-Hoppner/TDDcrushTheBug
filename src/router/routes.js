import Landing from '../views/Landing/Landing.vue';
import Cart from '../views/Cart/Cart.vue';
import Order from '../views/Order/Order.vue';
import Shopping from '../views/Shopping/Shopping.vue';
import store from '@/store/index.js';

const routes = [
  {
    path: '/landing',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/order',
    name: 'Order',
    component: Order,
    beforeEnter(to, from, next) {
      // check if vuex store orderInfo is empty. Cant go to order page without checking out//
      if (store.state.orderInfo !== '') {
        next();
      } else {
        next({
          name: 'Shopping' // back to safety route //
        });
      }
    }
  },
  {
    path: '/shopping',
    name: 'Shopping',
    component: Shopping
  }
];

export default routes;
