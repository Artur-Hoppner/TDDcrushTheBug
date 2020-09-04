import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Cart from '@/views/Cart/Cart.vue';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('Test Cart', () => {
  test('Test if /cart is rendered', () => {
    //Arrange
    const wrapper = shallowMount(Cart, { localVue });
    //Assert
    expect(wrapper.element).toMatchSnapshot();
  });
});
