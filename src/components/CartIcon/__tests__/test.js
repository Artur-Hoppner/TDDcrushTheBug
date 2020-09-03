import {
  shallowMount,
  mount,
  RouterLinkStub,
  createLocalVue
} from '@vue/test-utils';
import App from "@/App.vue"
import Vuex from 'vuex';
import store from '../../../store/index.js';
import CartIcon from '@/components/CartIcon/CartIcon.vue';
import Cart from '@/views/Cart.vue';
import VueRouter from 'vue-router';
import routes from '@/router/index.js';
import router from '@/router/index.js';

const localVue = createLocalVue();
localVue.use(VueRouter);
localVue.use(Vuex);

/* describe('User can see numbers of selected cart items and on click go to cart', () => {
  
  const cartItems = {
    id: '01',
    tag: 'bugspray',
    title: 'Hiroshima Bugspray',
    desc: 'It will nuke your bugs!',
    price: '120'
  }; */

  // test('test if link to cartlist works', () => {
  //   //Act
  //   const moduleA = {
  //     state: ()=>({
  //       cartItems
  //     }),
  //     mutations: {
  //       addCartItem (state, cartItems){
  //         state.cartItems.push(cartItems)
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
  //   const cartNumber = wrapper.find('#presentedCartItems').text()
  

  //   expect(cartNumber).toBe('1');
  //   expect().toBeGreaterThan(0);
  // });

  // test('test of router-link to /cart exists?', async () => {
  //   //Act 
  //   const router = new VueRouter({routes});
  //   const wrapper = mount(App, { 
  //     localVue,
  //     router
  //   });

  //   router.push("/cart")
  //   await wrapper.vm.$nextTick()

  //   expect(wrapper.findComponent(CartIcon).exists()).toBe(true)
  //   console.log(wrapper);
  //   console.log(router.currentRoute);
  //   console.log(wrapper.findComponent(CartIcon));
  // });

  test('testing extra for roouter ink?', () => {
    //Act
    const wrapper = mount(CartIcon, {
      store,
      localVue,
      stubs: {
        RouterLink: RouterLinkStub
      }
    });
    //Assert & Assemble
    expect(wrapper.findComponent(RouterLinkStub).props().to).toBe('/cart');
  });

