const actions = {
  addThisToCart(context, id) {
    context.commit('addToCart', id);
  }
};

export default actions;
