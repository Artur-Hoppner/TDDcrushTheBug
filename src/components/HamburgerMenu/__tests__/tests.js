import { shallowMount, mount, createLocalVue, RouterLinkStub, createWrapper } from '@vue/test-utils';
import Vuex from 'vuex';
import HamburgerMenu from '@/components/HamburgerMenu/HamburgerMenu.vue';
import hamburgerMenu from '../../../store/HamburgerMenu/index.js'
import hamburgerIcon from '../../../store/HamburgerIcon/index.js'
import VueRouter from 'vue-router';

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(VueRouter);

describe('User opens menu', () => {
  let modules, store;

  modules = {
    hamburgerMenu,
    hamburgerIcon
  };

  beforeEach(() => {
    store = new Vuex.Store({
      modules
    });
  });

  test('Test so that everything renders correctly', () => {
    const hamburgerIcon = {
      namespaced: true,
      state: { isBurgerActive: true },
      mutations: {},
      actions: {},
      getters: { showHamburger: state => state.isBurgerActive }
    };
    const store = new Vuex.Store({
      modules: {
        hamburgerIcon
      }
    });
    const wrapper = shallowMount(HamburgerMenu, { store, localVue });
    expect(wrapper.element).toMatchSnapshot();
  });

  test('Check that hamburger menu shows when isBurgerActive is true', () => {
    const hamburgerIcon = {
      namespaced: true,
      state: { isBurgerActive: true },
      mutations: {},
      actions: {},
      getters: { showHamburger: state => state.isBurgerActive }
    };
    const store = new Vuex.Store({
      modules: {
        hamburgerIcon
      }
    });

    const wrapper = shallowMount(HamburgerMenu, {
      store,
      localVue
    });

    expect(wrapper.find('.sidebar-backdrop').exists()).toBe(true);
  });

  test('Check that hamburger menu does not show when isBurgerActive is false', () => {
    const hamburgerIcon = {
      namespaced: true,
      state: { isBurgerActive: false },
      mutations: {},
      actions: {},
      getters: { showHamburger: state => state.isBurgerActive }
    };
    const store = new Vuex.Store({
      modules: {
        hamburgerIcon
      }
    });

    const wrapper = shallowMount(HamburgerMenu, {
      store,
      localVue
    });

    expect(wrapper.find('.sidebar-backdrop').exists()).toBe(false);
  });

  test('Check that close button exists', async () => {
    const hamburgerIcon = {
      namespaced: true,
      state: { isBurgerActive: true },
      mutations: {},
      actions: {},
      getters: { showHamburger: state => state.isBurgerActive }
    };
    const store = new Vuex.Store({
      modules: {
        hamburgerIcon
      }
    });

    const wrapper = shallowMount(HamburgerMenu, {
      store,
      localVue
    });

    const sideBar = wrapper.find('.sidebar-backdrop');

    expect(sideBar.exists()).toBe(true);
  });

  test('Check that menu is closed when close button is clicked', async () => {
    const hamburgerIcon = {
      namespaced: true,
      state: { isBurgerActive: true },
      mutations: {},
      actions: {
        changeThisToggle: jest.fn()
      },
      getters: { showHamburger: state => state.isBurgerActive }
    };
    const store = new Vuex.Store({
      modules: {
        hamburgerIcon
      }
    });
    const wrapper = shallowMount(HamburgerMenu, {
      store,
      localVue
    });

    const sideBar = wrapper.find('.sidebar-backdrop');

    await sideBar.trigger('click');

    expect(hamburgerIcon.actions.changeThisToggle).toHaveBeenCalled();
  });

  test('testing if router-link for "/landing" exists in component HamburgerMenu', () => {
    const hamburgerIcon = {
      namespaced: true,
      state: { isBurgerActive: true },
      mutations: {},
      actions: {},
      getters: { showHamburger: state => state.isBurgerActive }
    };
    const store = new Vuex.Store({
      modules: {
        hamburgerIcon
      }
    });
    const wrapper = mount(HamburgerMenu, {
      store,
      localVue,
      stubs: {
        RouterLink: RouterLinkStub
      }
    });
    expect(wrapper.findComponent(RouterLinkStub).props().to).toBe('/landing')
  })
});