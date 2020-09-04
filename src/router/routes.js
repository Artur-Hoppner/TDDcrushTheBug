import Landing from '../views/Landing/Landing.vue';
import Cart from '../views/Cart/Cart.vue';
import Order from '../views/Order/Order.vue';
import Shopping from '../views/Shopping/Shopping.vue';

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
    component: Order
  },
  {
    path: '/shopping',
    name: 'Shopping',
    component: Shopping
  }
];

export default routes;
