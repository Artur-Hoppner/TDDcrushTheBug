import { shallowMount, mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import store from '../../../store/index.js';
import OrderInfo from '@/components/OrderInfo/OrderInfo.vue';

//create a local instance of our vue
const localVue = createLocalVue();
//make our instance use vuex
localVue.use(Vuex);

describe('User is sent to view Order after checkout, expecting orderinfo to be displayed', () => {
  test('Test so that everything renders correctly', async () => {
    //Mount component with store & localvue, take snapshot and check so it renders correctly
    const wrapper = shallowMount(OrderInfo, { store, localVue });
    expect(wrapper.element).toMatchSnapshot();
  });

  test('Test that rendered output is representative of what is actually in the order Object', async () => {
    //Create an order
    const order = {
      orderNumber: 843888,
      orderCost: 218,
      deliveryETA: '3 working days',
      orderList: [
        {
          id: '10',
          tag: 'zapper',
          title: 'Regular zapper',
          desc: 'It tickles a little bit',
          price: 98
        },
        {
          id: '09',
          tag: 'mosquitozapper',
          title: 'Mosquito Zapper',
          desc: 'Designed especially for mosquitos, whatever that means',
          price: 120
        }
      ]
    };
    //Mock getters to return order that is created above
    const getters = {
      getOrderInfo() {
        return order;
      },
      getOrderItems() {
        return order.orderList;
      }
    };

    const store = new Vuex.Store({ getters });
    const wrapper = shallowMount(OrderInfo, { store, localVue });

    //Find all output elements
    const orderNumber = wrapper.find('.orderNumber');
    const orderCost = wrapper.find('.orderCost');
    const deliveryETA = wrapper.find('.deliveryETA');
    const orderList = wrapper.findAll('.orderList');

    //Test that output is representative of what order contains
    expect(orderNumber.text()).toContain(order.orderNumber);
    expect(orderCost.text()).toContain(order.orderCost);
    expect(deliveryETA.text()).toContain(order.deliveryETA);
    expect(orderList.length).toBeGreaterThan(0);
  });
});
