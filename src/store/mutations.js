const mutations = {
  addToCart(state, product) {
    let checkExisting = state.cart.filter(item => item.id == product.id);
    if (checkExisting.length >= 1) {
      let index = state.cart.findIndex(item => item.id === product.id);
      state.cart[index].quantity++;
      state.cart[index].price += product.price;
    } else {
      state.cart.push({
        id: product.id,
        tag: product.tag,
        title: product.title,
        desc: product.desc,
        price: product.price,
        quantity: 1
      });
    }
  },
  changeProductButtonToggle(state, boolean) {
    state.productButtonToggle = boolean;
  },
  removeFromCart(state, id) {
    let findIndex = state.cart.find(item => item.id == id);
    let index = state.cart.indexOf(findIndex);
    state.cart.splice(index, 1);
  },
  increaseQuantity(state, product) {
    let adjustPrice = state.allProducts.find(item => item.id == product.id);
    let index = state.cart.findIndex(item => item.id === product.id);
    state.cart[index].quantity++;
    state.cart[index].price += adjustPrice.price;
  },
  decreaseQuantity(state, product) {
    let adjustPrice = state.allProducts.find(item => item.id == product.id);
    let index = state.cart.findIndex(item => item.id === product.id);
    state.cart[index].quantity--;
    state.cart[index].price -= adjustPrice.price;
    if (state.cart[index].quantity == 0) {
      state.cart.splice(index, 1);
    }
  }
};

export default mutations;
