import { shallowMount, mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import store from '../../../store/index.js';
import Header from '@/components/Header/Header.vue';

//create a local instance of our vue
const localVue = createLocalVue();
//make our instance use vuex
localVue.use(Vuex);

describe('User loads the page', () => {
  test('Test so that everything renders correctly', async () => {
    //Mount component with store & localvue, take snapshot and check so it renders correctly
    const wrapper = shallowMount(Header, { store, localVue });
    expect(wrapper.element).toMatchSnapshot();
  });
});
