const mutations = {
  getByKeyword(state, keyWord) {
    const search = keyWord.toLowerCase();
    if (!search.length) {
      state.filteredProducts = state.allProducts;
    } else {
      const foundProducts = state.allProducts.filter(item =>
        item.match(search)
      );
      state.filteredProducts = foundProducts;
    }
  },
  displayEntireArray(state) {
    state.filteredProducts = state.allProducts;
  }
};

export default mutations;
