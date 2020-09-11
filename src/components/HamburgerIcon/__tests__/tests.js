import { shallowMount, mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import store from '../../../store/index.js';
import HamburgerIcon from '@/components/HamburgerIcon/HamburgerIcon.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('User clicks icon/button', () => {
  test('Test so that everything renders correctly', () => {
    const wrapper = shallowMount(HamburgerIcon, { store, localVue });
    expect(wrapper.element).toMatchSnapshot();
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
    const state = {
      isBurgerActive: false
    };
    const actions = {
      changeThisToggle: jest.fn()
    };
    const getters = {
      showHamburger() {
        return state => state.isBurgerActive;
      }
    };
    const store = new Vuex.Store({
      actions,
      getters,
      state
    });
    const wrapper = shallowMount(HamburgerIcon, {
      store,
      localVue
    });

    const buttonIcon = wrapper.find('.hamburgerImage');

    await buttonIcon.trigger('click');

    expect(actions.changeThisToggle).toHaveBeenCalled();
  });
});
