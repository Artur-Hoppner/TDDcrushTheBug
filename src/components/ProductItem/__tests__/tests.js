import { shallowMount, mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import store from '../../../store/index.js';
import ProductItem from '@/components/ProductItem/ProductItem.vue';

//Create a local instance of our vue
const localVue = createLocalVue();
//Make our instance use vuex
localVue.use(Vuex);

describe('User navigates to this page, component renders', () => {
  //Mock product object
  const product = {
    id: '01',
    tag: 'bugspray',
    title: 'Regular Bugspray',
    desc: 'It does something',
    price: '120'
  };

  test('Test so that everything renders correctly', () => {
    //Mount with store, local instance of vue and computed prop
    const wrapper = shallowMount(ProductItem, {
      store,
      localVue,
      propsData: {
        product
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  test('Test that output is representative of product object in component prop', async () => {
    //Arrange
    const wrapper = shallowMount(ProductItem, {
      store,
      localVue,
      propsData: {
        product
      }
    });
    //Act
    const h2 = wrapper.find('.product-title');
    const p = wrapper.find('p');
    const price = wrapper.find('h3');

    //Assert
    //Check so that product prop is diplayed properly
    expect(h2.text()).toContain(product.title);
    expect(p.text()).toContain(product.desc);
    expect(price.text()).toContain(product.price);
  });

  test('Test so that addthisToCart is displayed when state.productButtonToggle is false', async () => {
    //Arrange
    const wrapper = shallowMount(ProductItem, {
      store,
      localVue,
      propsData: {
        product
      }
    });
    //Act
    const button = wrapper.find('.addProduct');

    //Assert
    expect(store.state.productButtonToggle).toBe(false);
    expect(button.exists()).toBe(true);
  });

  test('Test so that addthisToCart is NOT displayed when state.productButtonToggle is true', async () => {
    //Arrange
    const wrapper = shallowMount(ProductItem, {
      store,
      localVue,
      propsData: {
        product
      }
    });
    //Act
    store.state.productButtonToggle = true;
    await wrapper.vm.$nextTick();
    const button = wrapper.find('.addProduct');

    //Assert
    expect(store.state.productButtonToggle).toBe(true);
    expect(button.exists()).toBe(false);
  });

  test('Test so that addThisToCart in vuex is called on button click from component', async () => {
    // Arrange
    //Spy on AddThisToCart action
    const actions = {
      addThisToCart: jest.fn()
    };
    const getters = {
      getProductButtonToggle: tag => {
        return null;
      }
    };

    const store = new Vuex.Store({
      actions,
      getters
    });
    const wrapper = shallowMount(ProductItem, {
      store,
      localVue,
      propsData: {
        product
      }
    });

    // Act
    const input = wrapper.find('.addProduct');
    await input.trigger('click');
    await localVue.nextTick();
    // Assert
    expect(actions.addThisToCart).toHaveBeenCalled();
  });
});
