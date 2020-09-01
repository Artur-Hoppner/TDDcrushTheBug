import mutations from './mutations.js';
import getters from './getters.js';
import actions from './actions.js';

const state = {
  namespaced: true,
  //TODO: placeholder array, remove this array when we have array with actual products!
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
    filteredProducts: []
  },
  mutations: mutations,
  getters: getters,
  actions: actions
};

export default state;
