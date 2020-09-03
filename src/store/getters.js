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
  }
};

export default getters;
