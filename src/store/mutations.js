const mutations = {
  addToCart(state, id) {
    state.cart.push(state.allProducts.find(item => item.id == id));
  }
};

export default mutations;
