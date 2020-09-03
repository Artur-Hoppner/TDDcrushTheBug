import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Footer from '@/components/Footer/Footer.vue';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('Test footer rendering and elements', () => {
  test('check that component is rendered', () => {
    //Arrange
    const wrapper = shallowMount(Footer, { localVue });
    //Assert
    expect(wrapper.element).toMatchSnapshot();
  });

  test('Check if static element values exists', () => {
    //Arrange
    const wrapper = shallowMount(Footer, { localVue });
    const timeStamp = new Date().getFullYear();
    //Act
    const paragraph = wrapper.find('p');
    const textContent = wrapper.text();
    //Assert
    expect(paragraph.exists()).toBe(true);
    expect(textContent).toBe('Copyright ⓒ ' + timeStamp);
  });
});
