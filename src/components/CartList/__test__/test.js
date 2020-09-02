import { shallowMount, mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import store from '../../../store/index.js';
import CartList from '@/components/CartList/CartList.vue';

//create a local instance of our vue
const localVue = createLocalVue();
//make our instance use vuex
localVue.use(Vuex);

describe('User loads the page', () => {
  test('Test so that everything renders correctly', async () => {
    const wrapper = shallowMount(CartList, { store, localVue });
    expect(wrapper.element).toMatchSnapshot();
  });
});
