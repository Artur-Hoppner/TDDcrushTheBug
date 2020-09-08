import {
  shallowMount,
  mount,
  createLocalVue,
  RouterLinkStub
} from '@vue/test-utils';
import Vuex from 'vuex';
import HamburgerMenu from '@/components/HamburgerMenu/HamburgerMenu.vue';
import store from '../../../store/index.js';
import VueRouter from 'vue-router';

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(VueRouter);

describe('User opens menu', () => {
  test('Test so that everything renders correctly', () => {
    const state = {
      isBurgerActive: true
    };
    const getters = {
      showHamburger: state => {
        return state.isBurgerActive;
      }
    };
    const store = new Vuex.Store({
      state,
      getters
    });
    const wrapper = shallowMount(HamburgerMenu, { store, localVue });
    expect(wrapper.element).toMatchSnapshot();
  });

  test('Check that hamburger menu shows when isBurgerActive is true', () => {
    const state = {
      isBurgerActive: true
    };
    const getters = {
      showHamburger: state => {
        return state.isBurgerActive;
      }
    };
    const store = new Vuex.Store({
      getters,
      state
    });
    const wrapper = shallowMount(HamburgerMenu, {
      store,
      localVue
    });

    expect(wrapper.find('.sidebar-backdrop').exists()).toBe(true);
  });

  test('Check that hamburger menu does not show when isBurgerActive is false', () => {
    const wrapper = shallowMount(HamburgerMenu, {
      store,
      localVue
    });

    expect(wrapper.find('.sidebar-backdrop').exists()).toBe(false);
  });

  test('Check that close button exists', async () => {
    const state = {
      isBurgerActive: true
    };
    const getters = {
      showHamburger: state => {
        return state.isBurgerActive;
      }
    };
    const store = new Vuex.Store({
      getters,
      state
    });
    const wrapper = shallowMount(HamburgerMenu, {
      store,
      localVue
    });
    const sideBar = wrapper.find('.sidebar-backdrop');

    expect(sideBar.exists()).toBe(true);
  });

  test('Check that menu is closed when close button is clicked', async () => {
    const state = {
      isBurgerActive: true
    };
    const actions = {
      changeThisToggle: jest.fn()
    };
    const getters = {
      showHamburger: state => {
        return state.isBurgerActive;
      }
    };
    const store = new Vuex.Store({
      actions,
      getters,
      state
    });
    const wrapper = shallowMount(HamburgerMenu, {
      store,
      localVue
    });

    const sideBar = wrapper.find('.sidebar-backdrop');

    await sideBar.trigger('click');

    expect(actions.changeThisToggle).toHaveBeenCalled();
  });

  test('testing if router-link for "/landing" exists in component HamburgerMenu', () => {
    const state = {
      isBurgerActive: true
    };
    const getters = {
      showHamburger: state => {
        return state.isBurgerActive;
      }
    };
    const store = new Vuex.Store({
      getters,
      state
    });

    const wrapper = mount(HamburgerMenu, {
      store,
      localVue,
      stubs: {
        RouterLink: RouterLinkStub
      }
    });
    expect(wrapper.findComponent(RouterLinkStub).props().to).toBe('/');
  });
});
