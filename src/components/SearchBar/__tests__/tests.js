import { shallowMount, mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import store from '../../../store/index.js';
import SearchBar from '@/components/SearchBar/SearchBar.vue';

//Create a local instance of our vue
const localVue = createLocalVue();
//Make our instance use vuex
localVue.use(Vuex);

describe('User enters a searchword into the searchbar', () => {
  test('Test so that everything renders correctly', () => {
    //Mount component with store & localvue, take snapshot and check so it renders correctly
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
    //Check so that filteredProducts.length is greater than 0
    expect(store.state.filteredProducts.length).toBeGreaterThan(0);
  });

  test('Test so that searchword returns items with matching letters', async () => {
    //Arrange
    const wrapper = shallowMount(SearchBar, { store, localVue });
    const input = wrapper.find('input');
    //Act
    input.setValue('stan');
    await input.trigger('keyup');
    //Assert
    //Find object containing tag: stan in array
    expect(store.state.filteredProducts).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          tag: 'stan'
        })
      ])
    );
  });

  test('Test so that searchword with capital letters becomes lowercase', async () => {
    //Arrange
    const wrapper = shallowMount(SearchBar, { store, localVue });
    const input = wrapper.find('input');
    //Act
    input.setValue('STAN');
    await input.trigger('keyup');
    //Assert
    //Find object containing tag: stan in array
    expect(store.state.filteredProducts).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          tag: 'stan'
        })
      ])
    );
  });

  test('Test so that action getByThisKeyword in vuex is called on keyup from component', async () => {
    // Arrange
    const actions = {
      //Spy on getByThisKeyword
      getByThisKeyword: jest.fn(),
      displayThisEntireArray() {
        return false;
      }
    };
    const getters = {
      filteredByKeyword: state => {
        return state.filteredProducts;
      }
    };
    const store = new Vuex.Store({
      actions,
      getters
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
    expect(actions.getByThisKeyword).toHaveBeenCalled();
  });
});
