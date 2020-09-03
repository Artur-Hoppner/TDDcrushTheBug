import {
  shallowMount,
  mount,
  RouterLinkStub,
  createLocalVue
} from '@vue/test-utils';
import App from '@/App.vue';
import Vuex from 'vuex';
import CartIcon from '@/components/CartIcon/CartIcon.vue';
import Cart from '@/views/Cart.vue';
import VueRouter from 'vue-router';
import routes from '@/router/index.js';
import store from '@/store/index.js';

const localVue = createLocalVue();
localVue.use(VueRouter, Vuex);
// localVue.use(Vuex);

describe('User can see numbers of selected cart items and on click go to cart', () => {
  // const cartItems = {
  //   id: '01',
  //   tag: 'bugspray',
  //   title: 'Hiroshima Bugspray',
  //   desc: 'It will nuke your bugs!',
  //   price: '120'
  // };

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

  // test('test if link to cartlist works', () => {
  //   //Act
  //   const moduleA = {
  //     state: () => ({
  //       cartItems
  //     }),
  //     mutations: {
  //       addCartItem(state, cartItems) {
  //         state.cartItems.push(cartItems);
  //       }
  //     }
  //   };
  //   const store = new Vuex.Store({
  //     modules: {
  //       moduleA
  //     }
  //   });

  //   const wrapper = shallowMount(CartIcon, {
  //     store,
  //     localVue
  //   });
  //   const cartNumber = wrapper.find('#presentedCartItems').text();

  //   expect(cartNumber).toBe('1');
  //   expect().toBeGreaterThan(0);
  // });

  // test('test of router-link to /cart exists?', async () => {
  //   //Act
  //   const router = new VueRouter({ routes });
  //   const wrapper = mount(App, {
  //     localVue,
  //     router
  //   });

  //   //Assert & Assemble
  //   router.push('/cart');
  //   await wrapper.vm.$nextTick();
  //   expect(wrapper.findComponent(Cart).exists()).toBe(true);
  // });

  describe('User clicks a link to see their cart', () => {
    it('test so component renders on router.push', async () => {
      const router = new VueRouter({ routes });
      const wrapper = mount(App, {
        localVue,
        router,
        store
      });

      expect(wrapper.findComponent(Cart).exists()).toBe(false);

      router.push('/Cart');
      await wrapper.vm.$nextTick();

      expect(wrapper.findComponent(Cart).exists()).toBe(true);
    });
  });
});
