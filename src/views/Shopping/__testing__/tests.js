import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Shopping from '@/views/Shopping/Shopping.vue';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('Test Shopping', () => {
  test('Test if /Shopping is rendered', () => {
    //Arrange
    const wrapper = shallowMount(Shopping, { localVue });
    //Assert
    expect(wrapper.element).toMatchSnapshot();
  });
});
