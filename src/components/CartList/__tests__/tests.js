import {
  shallowMount,
  mount,
  createLocalVue,
  RouterLinkStub
} from '@vue/test-utils';
import Vuex from 'vuex';
import store from '../../../store/index.js';
import CartList from '@/components/CartList/CartList.vue';
import VueRouter from 'vue-router';

//create a local instance of our vue
const localVue = createLocalVue();
//make our instance use vuex
localVue.use(Vuex, VueRouter);

describe('User loads the page', () => {
  test('Test so that everything renders correctly', async () => {
    //Mount component with store & localvue, take snapshot and check so it renders correctly
    const wrapper = shallowMount(CartList, {
      store,
      localVue,
      stubs: {
        RouterLink: RouterLinkStub
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  test('Test so that router-link routes to /order', async () => {
    //Act
    const wrapper = mount(CartList, {
      localVue,
      store,
      stubs: {
        RouterLink: RouterLinkStub
      }
    });
    //Assert
    const routerLink = wrapper.findComponent(RouterLinkStub).props().to;
    //Assemble
    expect(routerLink).toBe('/order');
  });
  test('Test so that action checkoutCreateThisOrder is called after click on router-link', async () => {
    const actions = {
      checkoutCreateThisOrder: jest.fn(),
      changeThisProductButtonToggle() {
        return null;
      }
    };
    const getters = {
      getProductToggle() {
        return null;
      },
      getCartProducts() {
        return null;
      }
    };
    const store = new Vuex.Store({ actions, getters });
    const wrapper = mount(CartList, {
      localVue,
      store,
      stubs: {
        RouterLink: RouterLinkStub
      }
    });

    const routerLink = wrapper.find('li');

    await routerLink.trigger('click');

    expect(actions.checkoutCreateThisOrder).toHaveBeenCalled();
  });
});
