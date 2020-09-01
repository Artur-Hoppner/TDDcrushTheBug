import Vue from 'vue';
import Vuex from 'vuex';
import searchbar from './SearchBar/index.js';
import actions from './actions.js';
import mutations from './mutations.js';
import getters from './SearchBar/getters.js';
import hamburgerIcon from './HamburgerIcon/index.js'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allProducts: [],
    cart: [],
    searchedProducts: []
  },
  actions: actions,
  mutations: mutations,
  getters: getters,
  modules: {
    searchbar: searchbar,
    hamburgerIcon: hamburgerIcon
  }
});
