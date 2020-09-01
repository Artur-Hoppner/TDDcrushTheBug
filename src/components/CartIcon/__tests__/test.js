import {
  shallowMount,
  mount,
  createLocalVue,
  RouterLinkStub
} from '@vue/test-utils';
import Vuex from 'vuex';
import CartIcon from '@/components/CartIcon/CartIcon.vue';

// const localVue = createLocalVue();
// localVue.use(VueRouter);
// const $route = {
//   path: '/shopingcart'
// };

describe('User can see numbers of selected cart items and on click go to cart', () => {
  // test('test if in numbers of cartitems is displayed', () => {
  //   //Act
  //   //Assert
  //   //Assemble
  //   expect(true).toBe(true);
  // });

  // test('test if link to cartlist works', () => {
  //   //Act
  //   const wrapper = shallowMount(CartIcon, localVue);
  //   //Assert
  //   //Assemble

  //   expect(true).toBe(true);
  // });

  test('test of router-link to /cart exists?', () => {
    const wrapper = mount(CartIcon, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    });
    expect(wrapper.findComponent(RouterLinkStub).props().to).toBe('/cart');
  });
});
