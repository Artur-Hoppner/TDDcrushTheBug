import { shallowMount, mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import searchbar from '../../../store/SearchBar/index.js';
// import getters from '../../../store/SearchBar/getters.js';
// import actions from '../../../store/actions/actions.js';
// import mutations from '../../../store/SearchBar/mutations.js';
import SearchBar from '@/components/SearchBar/SearchBar.vue';

//create a local instance of our vue
const localVue = createLocalVue();
//make our instance use vuex
localVue.use(Vuex);

describe('User enters a searchword into the searchbar', () => {
  let modules, store;

  modules = {
    searchbar
  };

  beforeEach(() => {
    //mock our store
    store = new Vuex.Store({
      modules
    });
  });

  test('Test so that everything renders correctly', () => {
    const wrapper = shallowMount(SearchBar, { store, localVue });
    expect(wrapper.element).toMatchSnapshot();
  });

  test('check so that an input empty string makes Store.filteredArray full with all products', async () => {
    //Arrange
    const wrapper = shallowMount(SearchBar, { store, localVue });
    const input = wrapper.find('input');
    //Act
    input.setValue('');
    await input.trigger('keyup');
    await localVue.nextTick();
    //Assert
    expect(searchbar.state.filteredProducts.length).toBeGreaterThan(0);
  });

  test('check so that searchword returns items with matching letters', async () => {
    //Arrange
    const wrapper = shallowMount(SearchBar, { store, localVue });
    const input = wrapper.find('input');
    //Act
    input.setValue('goldfish');
    await input.trigger('keyup');
    await localVue.nextTick();
    //Assert
    expect(searchbar.state.filteredProducts).toContain('goldfish');
  });

  test('check so that searchword with capital letters becomes lowercase', async () => {
    //Arrange
    const wrapper = shallowMount(SearchBar, { store, localVue });
    const input = wrapper.find('input');
    //Act
    input.setValue('GOLDFISH');
    await input.trigger('keyup');
    await localVue.nextTick();
    //Assert
    expect(searchbar.state.filteredProducts).toContain('goldfish');
  });

  test('check so that action getByThisKeywrod in vuex is called on keyup from component', async () => {
    // Arrange
    const searchbar = {
      namespaced: true,
      state: {},
      mutations: {},
      actions: {
        getByThisKeyword: jest.fn()
      },
      getters: {}
    };
    const store = new Vuex.Store({
      modules: {
        searchbar
      }
    });
    const wrapper = shallowMount(SearchBar, {
      store,
      localVue
    });

    // Act
    const input = wrapper.find('input');
    await input.trigger('keyup');
    await localVue.nextTick();
    // Assert
    expect(searchbar.actions.getByThisKeyword).toHaveBeenCalled();
  });
});
