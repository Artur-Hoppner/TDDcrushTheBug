import Vue from 'vue';
import Vuex from 'vuex';
import searchbar from './SearchBar/index.js';
import actions from './actions.js';
import mutations from './mutations.js';
import getters from './SearchBar/getters.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allProducts: [
      'cat',
      'dog',
      'parrot',
      'goldfish',
      'horse',
      'elephant',
      'ant',
      'snake',
      'crow',
      'cow',
      'eagle',
      'rhinoceros',
      'chimpanzee'
    ],
    cart: [],
    filteredProducts: []
  },
  actions: actions,
  mutations: mutations,
  getters: getters,
  modules: {
    searchbar: searchbar
  }
});
