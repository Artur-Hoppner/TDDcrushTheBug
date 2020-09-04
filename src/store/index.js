import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions.js';
import mutations from './mutations.js';
import getters from './getters.js';
import hamburgerIcon from './HamburgerIcon/index.js';

Vue.use(Vuex);
//*********************/
//*** GLOBAL STATE ***/
//*******************/

export default new Vuex.Store({
  state: {
    allProducts: [
      {
        id: '01',
        tag: 'bed-bug-rid',
        title: 'Bed Bug Rid',
        desc:
          'Barely functions, use this if you have a love/hate relationship with your bedbugs.',
        price: 189
      },
      {
        id: '02',
        tag: 'bm3-mousetrap',
        title: 'Bm3 Moustrap',
        desc: 'The moustrap for your middle sizes ratmonsters.',
        price: 75
      },
      {
        id: '03',
        tag: 'bw-terminator',
        title: 'The BW Terminator',
        desc:
          'This bad boy will not only take care of your antproblem in your garden, it will cleanse the whole neighborhood!',
        price: 34500
      },
      {
        id: '04',
        tag: 'c5d-mousetrap',
        title: 'c5d Moustrap',
        desc: 'Buh-Bye, Mickey Mouse!.',
        price: 39
      },
      {
        id: '05',
        tag: 'fly-zapper',
        title: 'Fly Zapper',
        desc: 'Zap Zap!',
        price: 85
      },
      {
        id: '06',
        tag: 'fly-stunner',
        title: 'Fly Stunner',
        desc: 'This will not stun the fly',
        price: 99
      },
      {
        id: '07',
        tag: 'flying-death',
        title: 'D2 Flying Death',
        desc: 'Take care of your pestproblem from your sofa.',
        price: 12300
      },
      {
        id: '08',
        tag: 'mosquito-mauler',
        title: 'Mosquito Mauler',
        desc: 'Crush those bloodsuckers. Comes with batteries!',
        price: 99
      },
      {
        id: '09',
        tag: 'nepenthes',
        title: 'Nepenthes',
        desc: 'Natural enemy of smal flies',
        price: 349
      },
      {
        id: '10',
        tag: 'plastic-container',
        title: 'Plastic Container',
        desc: 'A big container for your rat poison',
        price: 179
      },
      {
        id: '11',
        tag: 'ortable-bugspray',
        title: 'Portable Bugsprayer',
        desc: 'Carry twice the amount of pest "repellent" ;)',
        price: 500
      },
      {
        id: '12',
        tag: 'rat-cleaver',
        title: 'The Rat Cleaver',
        desc: 'Happy hunting!',
        price: 16300
      },
      {
        id: '13',
        tag: 'ratpoison-dust',
        title: 'Ratpoison powder',
        desc: 'doesnt expire, the rat does thou.',
        price: 399
      },
      {
        id: '14',
        tag: 'ratpoison-liquid',
        title: 'Liquid Ratpoison',
        desc: 'Get creative.',
        price: 399
      },
      {
        id: '15',
        tag: 'sg20-anti-hive',
        title: 'Anti Ant Hive',
        desc: 'Plugg and play',
        price: 2499
      },
      {
        id: '16',
        tag: 'spray',
        title: 'Spraycan',
        desc: 'Empty spraycan',
        price: 19
      },
      {
        id: '17',
        tag: 'stan',
        title: 'Stan',
        desc:
          'This is Stan, your friendly raccoon. He loves snails, big small and slimy.',
        price: 9000
      },
      {
        id: '18',
        tag: 'stinger',
        title: 'Stinger',
        desc: 'For your ratproblems, and you can suede manure.',
        price: 300
      },
      {
        id: '19',
        tag: 'tesla-coil',
        title: 'Tesla Coil',
        desc: 'Wont be good for flying insects, for your electric bill...',
        price: 1300
      },
      {
        id: '20',
        tag: 'Venus-flytrap',
        title: 'Venus Flytrap',
        desc: 'A beautifull plant that eats banana flies',
        price: 220
      }
    ],
    cart: [],
    filteredProducts: [],
    productButtonToggle: false,
    showCart: false,
    orderInfo: {
      orderNumber: '',
      orderCost: '',
      deliveryETA: '',
      orderList: []
    }
  },
  actions: actions,
  mutations: mutations,
  getters: getters,
  modules: {
    hamburgerIcon: hamburgerIcon
  }
});
