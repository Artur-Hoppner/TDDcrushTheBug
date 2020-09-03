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
            price: '120'
          }
        ]
      }
    });

    const wrapper = shallowMount(CartIcon, {
      localVue,
      store
    });
    //Assert
    console.log(wrapper, 'this is the wrapper');
    const cartNumber = wrapper.find('p').text();
    //Assemble
    expect(cartNumber).toBe('1');
  });

  test('testing if router link exist in component CartIcon', () => {
    //Act
    const wrapper = mount(CartIcon, {
      localVue,
      store,
      stubs: {
        RouterLink: RouterLinkStub
      }
    });
    //Assert
    const routerLink = wrapper.findComponent(RouterLinkStub).props().to;
    //Assemble
    expect(routerLink).toBe('/cart');
  });
});