import {
  shallowMount,
  mount,
  RouterLinkStub,
  createLocalVue
} from '@vue/test-utils';
import Vuex from 'vuex';
import CartIcon from '@/components/CartIcon/CartIcon.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('User can see numbers of selected cart items and on click go to cart', () => {
  const cartItems = {
    id: '01',
    tag: 'bugspray',
    title: 'Hiroshima Bugspray',
    desc: 'It will nuke your bugs!',
    price: '120'
  };

  test('test if link to cartlist works', () => {
    //Act
    const wrapper = shallowMount(CartIcon, {
      localVue,
      propsData: {
        cartItems
      }
    });
    console.log(cartItems.length, 'test length of product should be 1');
    const iconContent = wrapper.text();
    //Assert
    // send item to cart
    //Assemble

    expect(iconContent).toBe('cartIcon');
    expect(cartState.state.cart.length).toBeGreaterThan(0);
  });

  test('test of router-link to /cart exists?', () => {
    //Act
    const wrapper = mount(CartIcon, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    });
    //Assert & Assemble
    expect(wrapper.findComponent(RouterLinkStub).props().to).toBe('/cart');
  });
});
