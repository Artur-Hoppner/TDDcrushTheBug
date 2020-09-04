import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Order from '@/views/Order/Order.vue';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('Test Order', () => {
  test('Test if /Order is rendered', () => {
    //Arrange
    const wrapper = shallowMount(Order, { localVue });
    //Assert
    expect(wrapper.element).toMatchSnapshot();
  });
});
