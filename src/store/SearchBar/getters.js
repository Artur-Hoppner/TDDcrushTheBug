const getters = {
  filteredByKeyword: (state, getters, rootState) => {
    return rootState.filteredProducts;
  }
};

export default getters;
