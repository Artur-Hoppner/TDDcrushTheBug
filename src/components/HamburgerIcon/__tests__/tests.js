import { shallowMount, mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import hamburgerIcon from '../../../store/HamburgerIcon/index.js';
import HamburgerIcon from '@/components/HamburgerIcon/HamburgerIcon.vue';
import VueRouter from "vue-router"
import routes from '../../../router/routes.js'

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(VueRouter);

describe('User clicks icon/button', () => {
  let modules, store, router;

  modules = {
    hamburgerIcon
  };


  beforeEach(() => {
    //mock our store
    store = new Vuex.Store({
      modules
    });
    router = new VueRouter({
      routes
    });
  });

  test('Test so that everything renders correctly', () => {
    const wrapper = shallowMount(HamburgerIcon, { store, localVue });
    expect(wrapper.element).toMatchSnapshot();
  });

  test('Icon should show when rendered', async () => {
    const wrapper = shallowMount(HamburgerIcon, {
      router,
      store,
      localVue,
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
      getters: {
        showHamburger() {
          return null;
        }
      }
    };
    const store = new Vuex.Store({
      modules: {
        hamburgerIcon
      }
    });
    const wrapper = mount(HamburgerIcon, {
      router,
      store,
      localVue,
    });

    const buttonIcon = wrapper.find('.hamburgerImage');

    await buttonIcon.trigger('click');

    expect(hamburgerIcon.actions.changeThisToggle).toHaveBeenCalled();
  });
});
