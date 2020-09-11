import { mount, shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Cart from '@/views/Cart/Cart.vue';
import store from '../../../store/index.js';
import VueRouter from 'vue-router';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('Test Cart', () => {
  test('Test if /cart is rendered', () => {
    //Arrange
    const wrapper = shallowMount(Cart, { localVue, store });
    //Assert
    expect(wrapper.element).toMatchSnapshot();
  });

  test('Test so that order is created on click (if cart is not empty)', async () => {
    //Act
    const state = {
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
      orderInfo: ''
    };
    const actions = {
      checkoutCreateThisOrder(context) {
        context.commit('checkoutCreateOrder');
      },
      changeThisProductButtonToggle() {
        return null;
      }
    };
    const mutations = {
      checkoutCreateOrder(state) {
        if (state.cart != '') {
          //Randomize ordernumber and calculate total cost
          let newOrderNumber = Math.floor(Math.random() * 100000 + 1);
          let totalCost = 0;
          for (let i = 0; i < state.cart.length; i++) {
            totalCost += state.cart[i].price;
          }
          //Create Order object
          state.orderInfo = {
            orderNumber: newOrderNumber,
            orderCost: totalCost,
            deliveryETA: '3',
            orderList: state.cart
          };
        } else {
          return false;
        }
      }
    };
    const getters = {
      getCartProducts: state => {
        return state.cart;
      },
      getProductButtonToggle() {
        return null;
      }
    };
    const store = new Vuex.Store({ state, actions, mutations, getters });
    const wrapper = mount(Cart, {
      localVue,
      store
    });
    //Assert
    const checkoutButton = wrapper.find('.checkoutButton');
    await checkoutButton.trigger('click');
    //Assemble
    expect(store.state.orderInfo).not.toBe('');
  });

  test('Test so that action checkoutCreateThisOrder is called after click on checkout button', async () => {
    const cart = [
      {
        desc:
          'Barely functions, use this if you have a love/hate relationship with your bedbugs.',
        id: '01',
        price: 378,
        quantity: 2,
        tag: 'bed-bug-rid',
        title: 'Bed Bug Rid'
      }
    ];
    const actions = {
      checkoutCreateThisOrder: jest.fn(),
      changeThisProductButtonToggle() {
        return null;
      }
    };
    const getters = {
      getProductButtonToggle() {
        return null;
      },
      getCartProducts() {
        return cart;
      }
    };
    const store = new Vuex.Store({ actions, getters });
    const wrapper = mount(Cart, {
      localVue,
      store
    });

    const checkoutButton = wrapper.find('button');

    await checkoutButton.trigger('click');

    expect(actions.checkoutCreateThisOrder).toHaveBeenCalled();
  });
});
