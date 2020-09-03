import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import hamburgerIcon from '../../../store/HamburgerIcon/index.js';
import HamburgerIcon from '@/components/HamburgerIcon/HamburgerIcon.vue';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('User clicks icon/button', () => {
  let modules, store;

  modules = {
    hamburgerIcon
  };

  beforeEach(() => {
    //mock our store
    store = new Vuex.Store({
      modules
    });
  });

  test('Icon should show when rendered', async () => {
    const wrapper = shallowMount(HamburgerIcon, {
      store,
      localVue
    });

    const buttonIcon = wrapper.find('.hamburgerImage');

    expect(buttonIcon.exists()).toBe(true);
  });

  test('Icon should toggle menu on click', async () => {
    const hamburgerIcon = {
      namespaced: true,
      state: {},
      mutations: {},
      actions: {
        changeThisToggle: jest.fn()
      },
      getters: {}
    };
    const store = new Vuex.Store({
      modules: {
        hamburgerIcon
      }
    });
    const wrapper = shallowMount(HamburgerIcon, {
      store,
      localVue
    });

    const buttonIcon = wrapper.find('.hamburgerImage');

    await buttonIcon.trigger('click');

    expect(hamburgerIcon.actions.changeThisToggle).toHaveBeenCalled();
  });
});
