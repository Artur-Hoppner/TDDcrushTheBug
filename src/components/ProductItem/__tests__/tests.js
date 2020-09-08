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

  test('Test that increment button actually increases product quantity in cart by 1', async () => {
    let state = {
      cart: [
        {
          desc:
            'Barely functions, use this if you have a love/hate relationship with your bedbugs.',
          id: '01',
          price: 378,
          quantity: 2,
          tag: 'bed-bug-rid',
          title: 'Bed Bug Rid'
        }
      ],
      allProducts: [
        {
          id: '01',
          tag: 'bed-bug-rid',
          title: 'Bed Bug Rid',
          desc:
            'Barely functions, use this if you have a love/hate relationship with your bedbugs.',
          price: 189
        }
      ],
      productButtonToggle: true
    };
    const getters = {
      getProductButtonToggle: state => {
        return state.productButtonToggle;
      }
    };
    const actions = {
      addThisToCart() {
        return null;
      },
      removeThisFromCart() {
        return null;
      },
      increaseThisQuantity(context, product) {
        context.commit('increaseQuantity', product);
      },
      decreaseThisQuantity() {
        return null;
      }
    };
    const mutations = {
      increaseQuantity(state, product) {
        //Check for default values of object in original allProducts array
        //Increase Product quantity and price
        let adjustPrice = state.allProducts.find(item => item.id == product.id);
        let index = state.cart.findIndex(item => item.id === product.id);
        state.cart[index].quantity++;
        state.cart[index].price += adjustPrice.price;
      }
    };

    const store = new Vuex.Store({ state, actions, getters, mutations });
    const wrapper = shallowMount(ProductItem, {
      localVue,
      store,
      propsData: {
        product: state.allProducts[0]
      }
    });

    expect(state.cart[0].quantity).toBe(2);

    await wrapper.find('.increase').trigger('click');

    expect(state.cart[0].quantity).toBe(3);
  });

  test('Test that decrease button actually decrease product quantity in cart by 1', async () => {
    let state = {
      cart: [
        {
          desc:
            'Barely functions, use this if you have a love/hate relationship with your bedbugs.',
          id: '01',
          price: 378,
          quantity: 2,
          tag: 'bed-bug-rid',
          title: 'Bed Bug Rid'
        }
      ],
      allProducts: [
        {
          id: '01',
          tag: 'bed-bug-rid',
          title: 'Bed Bug Rid',
          desc:
            'Barely functions, use this if you have a love/hate relationship with your bedbugs.',
          price: 189
        }
      ],
      productButtonToggle: true
    };
    const getters = {
      getProductButtonToggle: state => {
        return state.productButtonToggle;
      }
    };
    const actions = {
      addThisToCart() {
        return null;
      },
      removeThisFromCart() {
        return null;
      },
      increaseThisQuantity() {
        return null;
      },
      decreaseThisQuantity(context, product) {
        context.commit('decreaseQuantity', product);
      }
    };
    const mutations = {
      decreaseQuantity(state, product) {
        //Check for default values of object in original allProducts array
        //Decrease Product quantity and price
        let adjustPrice = state.allProducts.find(item => item.id == product.id);
        let index = state.cart.findIndex(item => item.id === product.id);
        state.cart[index].quantity--;
        state.cart[index].price -= adjustPrice.price;
        if (state.cart[index].quantity == 0) {
          state.cart.splice(index, 1);
        }
      }
    };

    const store = new Vuex.Store({ state, actions, getters, mutations });
    const wrapper = shallowMount(ProductItem, {
      localVue,
      store,
      propsData: {
        product: state.allProducts[0]
      }
    });

    expect(state.cart[0].quantity).toBe(2);

    await wrapper.find('.decrease').trigger('click');

    expect(state.cart[0].quantity).toBe(1);
  });

  test('Test that decrease button removes product from cart if there is only 1 in quantity', async () => {
    let state = {
      cart: [
        {
          desc:
            'Barely functions, use this if you have a love/hate relationship with your bedbugs.',
          id: '01',
          price: 378,
          quantity: 1,
          tag: 'bed-bug-rid',
          title: 'Bed Bug Rid'
        }
      ],
      allProducts: [
        {
          id: '01',
          tag: 'bed-bug-rid',
          title: 'Bed Bug Rid',
          desc:
            'Barely functions, use this if you have a love/hate relationship with your bedbugs.',
          price: 189
        }
      ],
      productButtonToggle: true
    };
    const getters = {
      getProductButtonToggle: state => {
        return state.productButtonToggle;
      }
    };
    const actions = {
      addThisToCart() {
        return null;
      },
      removeThisFromCart() {
        return null;
      },
      increaseThisQuantity() {
        return null;
      },
      decreaseThisQuantity(context, product) {
        context.commit('decreaseQuantity', product);
      }
    };
    const mutations = {
      decreaseQuantity(state, product) {
        //Check for default values of object in original allProducts array
        //Decrease Product quantity and price
        let adjustPrice = state.allProducts.find(item => item.id == product.id);
        let index = state.cart.findIndex(item => item.id === product.id);
        state.cart[index].quantity--;
        state.cart[index].price -= adjustPrice.price;
        if (state.cart[index].quantity == 0) {
          state.cart.splice(index, 1);
        }
      }
    };

    const store = new Vuex.Store({ state, actions, getters, mutations });
    const wrapper = shallowMount(ProductItem, {
      localVue,
      store,
      propsData: {
        product: state.allProducts[0]
      }
    });

    expect(state.cart[0].quantity).toBe(1);

    await wrapper.find('.decrease').trigger('click');

    expect(state.cart.length).toBe(0);
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
