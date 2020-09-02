import mutations from './mutations.js';
import getters from './getters.js';
import actions from './actions.js';

const state = {
  namespaced: true,
  state: {},
  mutations: mutations,
  getters: getters,
  actions: actions
};

export default state;
