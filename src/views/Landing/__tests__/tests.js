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

  test('test if link action goTo is activated on click', async () => {
    //Arrange
    const actions = {
      goTo: jest.fn()
    };
    const store = new Vuex.Store({
      actions
    });
    const wrapper = shallowMount(Landing, {
      localVue,
      store
    });
    // Act
    const input = wrapper.find('#link-to-shop');
    console.log(input, 'input data');
    await input.trigger('click');
    await localVue.nextTick();
    // Assert
    expect(actions.goTo).toHaveBeenCalled();
  });
});
