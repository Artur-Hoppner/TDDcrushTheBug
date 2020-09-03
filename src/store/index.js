import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions.js';
import mutations from './mutations.js';
import getters from './getters.js';
import hamburgerIcon from './HamburgerIcon/index.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allProducts: [
      {
        id: '01',
        tag: 'cutezapper',
        title: 'The Hello Kitty Zapper',
        desc:
          'Barely functions, use this if you have a love/hate relationship with your bugs.',
        price: 67
      },
      {
        id: '02',
        tag: 'heavydutyzapper',
        title: 'Heavy Duty Zapper',
        desc: 'Zap zap zap!',
        price: 140
      },
      {
        id: '03',
        tag: 'saltgunv3',
        title: 'Salt Gun v.3',
        desc: 'Fire at will, soldier!',
        price: 250
      },
      {
        id: '04',
        tag: 'ultramegazapper',
        title: 'Ultra-Mega-Zapper',
        desc: 'Same voltage as the electric chair!',
        price: 960
      },
      {
        id: '05',
        tag: 'thebigbadbugspray',
        title: 'The Big Bad Bugspray',
        desc: 'Wear a gasmask, or else you will join the bugs.',
        price: 175
      },
      {
        id: '06',
        tag: 'mothtrap',
        title: 'Moth Trap',
        desc: 'Use this if you have problems with the night butterflies',
        price: 220
      },
      {
        id: '07',
        tag: 'mousetrap',
        title: 'Buh-Bye, Mickey Mouse!',
        desc: 'He is not so happy anymore.',
        price: 65
      },
      {
        id: '08',
        tag: 'repellant',
        title: 'Insect Repellant',
        desc: 'Whatever that does',
        price: 48
      },
      {
        id: '09',
        tag: 'mosquitozapper',
        title: 'Mosquito Zapper',
        desc: 'Designed especially for mosquitos, whatever that means',
        price: 120
      },
      {
        id: '10',
        tag: 'zapper',
        title: 'Regular zapper',
        desc: 'It tickles a little bit',
        price: 98
      }
    ],
    cart: [
      {
        id: '01',
        tag: 'cutezapper',
        title: 'The Hello Kitty Zapper',
        desc:
          'Barely functions, use this if you have a love/hate relationship with your bugs.',
        price: 67
      },
      {
        id: '02',
        tag: 'heavydutyzapper',
        title: 'Heavy Duty Zapper',
        desc: 'Zap zap zap!',
        price: 140
      }
    ],
    filteredProducts: [],
    productButtonToggle: false
  },
  actions: actions,
  mutations: mutations,
  getters: getters,
  modules: {
    hamburgerIcon: hamburgerIcon
  }
});
