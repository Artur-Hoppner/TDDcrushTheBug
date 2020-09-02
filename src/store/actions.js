const actions = {
  addThisToCart(context, id) {
    context.commit('addToCart', id);
  },
  changeThisProductButtonToggle(context, boolean) {
    context.commit('changeProductButtonToggle', boolean);
  }
};

export default actions;
