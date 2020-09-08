//***********************/
//*** GLOBAL GETTERS ***/
//*********************/

const getters = {
  getProductButtonToggle: state => {
    return state.productButtonToggle;
  },
  getCartProducts: state => {
    return state.cart;
  },
  filteredByKeyword: state => {
    return state.filteredProducts;
  },
  getOrderInfo: state => {
    return state.orderInfo;
  },
  getOrderItems: state => {
    return state.orderInfo.orderList;
  },
  cartIconItems: state => {
    let total = 0;
    state.cart.forEach(cart => {
      total += cart.quantity;
    });
    return total;
  },
  showHamburger: state => {
    return state.isBurgerActive;
  }
};

export default getters;
