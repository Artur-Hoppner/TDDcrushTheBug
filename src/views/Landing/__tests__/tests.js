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
  test('Test if method goTo is called on #icon click', async () => {
    // Arrange
    const goTo = jest.fn();
    const wrapper = shallowMount(Landing, {
      localVue,
      methods: {
        goTo
      }
    });
    // Act
    const input = wrapper.find('#link-to-shop');
    console.log(input, 'input data');
    await input.trigger('click');
    await localVue.nextTick();
    // Assert
    expect(goTo).toHaveBeenCalled();
  });
});
