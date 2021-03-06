import {
  shallowMount,
  mount,
  createLocalVue,
  RouterLinkStub
} from '@vue/test-utils';
import Vuex from 'vuex';
import store from '../../../store/index.js';
import CartList from '@/components/CartList/CartList.vue';
import VueRouter from 'vue-router';

//create a local instance of our vue
const localVue = createLocalVue();
//make our instance use vuex
localVue.use(Vuex, VueRouter);

describe('User loads the page', () => {
  test('Test so that everything renders correctly', async () => {
    //Mount component with store & localvue, take snapshot and check so it renders correctly
    const wrapper = shallowMount(CartList, {
      store,
      localVue
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
