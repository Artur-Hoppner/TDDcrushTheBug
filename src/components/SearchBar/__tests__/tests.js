import { shallowMount, mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import store from '../../../store/index.js';
import SearchBar from '@/components/SearchBar/SearchBar.vue';

//create a local instance of our vue
const localVue = createLocalVue();
//make our instance use vuex
localVue.use(Vuex);

describe('User enters a searchword into the searchbar', () => {
  test('Test so that everything renders correctly', () => {
    const wrapper = shallowMount(SearchBar, { store, localVue });
    expect(wrapper.element).toMatchSnapshot();
  });

  test('Test so that an input empty string makes Store.filteredArray full with all products', async () => {
    //Arrange
    const wrapper = shallowMount(SearchBar, { store, localVue });
    const input = wrapper.find('input');
    //Act
    input.setValue('');
    await input.trigger('keyup');
    //Assert
    expect(store.state.filteredProducts.length).toBeGreaterThan(0);
  });

  test('Test so that searchword returns items with matching letters', async () => {
    //Arrange
    const wrapper = shallowMount(SearchBar, { store, localVue });
    const input = wrapper.find('input');
    //Act
    input.setValue('saltgunv3');
    await input.trigger('keyup');
    //Assert
    //Find object containing tag: saltgunv3 in array
    expect(store.state.filteredProducts).toEqual(
      // 1
      expect.arrayContaining([
        // 2
        expect.objectContaining({
          // 3
          tag: 'saltgunv3' // 4
        })
      ])
    );
  });

  test('Test so that searchword with capital letters becomes lowercase', async () => {
    //Arrange
    const wrapper = shallowMount(SearchBar, { store, localVue });
    const input = wrapper.find('input');
    //Act
    input.setValue('SALTGUNV3');
    await input.trigger('keyup');
    //Assert
    //Find object containing tag: saltgunv3 in array
    expect(store.state.filteredProducts).toEqual(
      // 1
      expect.arrayContaining([
        // 2
        expect.objectContaining({
          // 3
          tag: 'saltgunv3' // 4
        })
      ])
    );
  });

  test('Test so that action getByThisKeyword in vuex is called on keyup from component', async () => {
    // Arrange
    const searchbar = {
      namespaced: true,
      state: {},
      mutations: {},
      actions: {
        getByThisKeyword: jest.fn(),
        displayThisEntireArray() {
          return false;
        }
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
