import { shallowMount, mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import HamburgerMenu from '@/components/HamburgerMenu/HamburgerMenu.vue'

const localVue = createLocalVue();
localVue.use(Vuex);

describe('User opens menu', () => {
  let modules, store;

  modules = {
    hamburgerMenu
  };

  beforeEach(() => {
    store = new Vuex.Store({
      modules
    });
  });

  // Testa att det blir true när man öppnar, testa länkar

  test('menu should render when opened', async () => {
    const wrapper = shallowMount(HamburgerMenu, {
      store,
      localVue
    });

    const

  })


})