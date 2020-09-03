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
  },
  getByThisKeyword(context, keyWord) {
    context.commit('getByKeyword', keyWord);
  },
  displayThisEntireArray(context) {
    context.commit('displayEntireArray');
  }
};

export default actions;
