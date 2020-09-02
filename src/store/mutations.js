const mutations = {
  addToCart(state, id) {
    state.cart.push(state.allProducts.find(item => item.id == id));
  },
  changeProductButtonToggle(state, boolean) {
    state.productButtonToggle = boolean;
  }
};

export default mutations;
