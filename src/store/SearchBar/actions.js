const actions = {
  getByThisKeyword(context, keyWord) {
    const search = keyWord.toLowerCase();
    if (!search.length) {
      context.rootState.filteredProducts = context.rootState.allProducts;
    } else {
      const foundProducts = context.rootState.allProducts.filter(item =>
        item.match(search)
      );
      context.rootState.filteredProducts = foundProducts;
    }
  },
  displayThisEntireArray(context) {
    context.rootState.filteredProducts = context.rootState.allProducts;
  }
};

export default actions;
