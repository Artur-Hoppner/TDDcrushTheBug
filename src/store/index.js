import Vue from 'vue';
import Vuex from 'vuex';
import searchbar from './SearchBar/index.js';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    searchbar: searchbar
  }
});
