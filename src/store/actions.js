const actions = {
  addThisToCart(context, product) {
    context.commit('addToCart', product);
  },
  changeThisProductButtonToggle(context, boolean) {
    context.commit('changeProductButtonToggle', boolean);
  },
  removeThisFromCart(context, id) {
    context.commit('removeFromCart', id);
  },
  increaseThisQuantity(context, product) {
    context.commit('increaseQuantity', product);
  },
  decreaseThisQuantity(context, product) {
    context.commit('decreaseQuantity', product);
  }
};

export default actions;
