import {
  shallowMount,
  mount,
  RouterLinkStub,
  createLocalVue
} from '@vue/test-utils';
import Vuex from 'vuex';
import CartIcon from '@/components/CartIcon/CartIcon.vue';
import VueRouter from 'vue-router';
import store from '@/store/index.js';
import getters from '../../../store/getters';

const localVue = createLocalVue();
localVue.use(VueRouter, Vuex);

describe('User can see numbers of selected cart items and on click go to cart', () => {
  test('test if cartIcon can receive  store.state.cart.length', () => {
    //Act;

    const store = new Vuex.Store({
      state: {
        cart: [
          {
            id: '01',
            tag: 'bugspray',
            title: 'Hiroshima Bugspray',
            desc: 'It will nuke your bugs!',
            price: '120',
            quantity: 1
          }
        ]
      },
      getters: {
        cartIconItems: state => {
          let total = 0;
          state.cart.forEach(cart => {
            total += cart.quantity;
          });
          return total;
        }
      }
    });

    const wrapper = shallowMount(CartIcon, {
      localVue,
      store
    });
    //Assert
    const cartNumber = wrapper.find('p').text();
    //Assemble
    expect(cartNumber).toBe('1');
  });
});
