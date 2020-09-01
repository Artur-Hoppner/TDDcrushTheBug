import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Footer from '@/components/Footer/Footer.vue';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('test ', () => {
  test('check that component is rendered', () => {
    //Arrange
    const wrapper = shallowMount(Footer, { localVue });
    //Assert
    expect(wrapper.element).toMatchSnapshot();
  });

  test('Check if static element values exists', () => {
    const wrapper = shallowMount(Footer, { localVue });
    // const paragraph = wrapper.find('p');
    const paragraph = wrapper.contains('p');
    const textContent = wrapper.text();
    expect(paragraph).toBe(true);
    expect(textContent).toBe('2020 stop bugging me');
  });
});
