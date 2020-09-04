import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Landing from '@/views/Landing/Landing.vue';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('Test Landing', () => {
  test('Test if /Landing is rendered', () => {
    //Arrange
    const wrapper = shallowMount(Landing, { localVue });
    //Assert
    expect(wrapper.element).toMatchSnapshot();
  });
});
