//***********************/
//*** GLOBAL ACTIONS ***/
//*********************/
const actions = {
  //***********************************/
  //*** CART ARRAY RELATED ACTIONS ***/
  //*********************************/
  addThisToCart(context, product) {
    context.commit('addToCart', product);
  },
  removeThisFromCart(context, id) {
    context.commit('removeFromCart', id);
  },
  increaseThisQuantity(context, product) {
    context.commit('increaseQuantity', product);
  },
  decreaseThisQuantity(context, product) {
    context.commit('decreaseQuantity', product);
  },
  checkoutCreateThisOrder(context) {
    context.commit('checkoutCreateOrder');
  },
  //*************************************************/
  //*** PRODUCT & FILTERED ARRAY RELATED ACTIONS ***/
  //***********************************************/
  getByThisKeyword(context, keyWord) {
    context.commit('getByKeyword', keyWord);
  },
  displayThisEntireArray(context) {
    context.commit('displayEntireArray');
  },
  //*******************************/
  //*** TOGGLE RELATED ACTIONS ***/
  //*****************************/
  changeThisProductButtonToggle(context, boolean) {
    context.commit('changeProductButtonToggle', boolean);
  },
  showThisCart(context) {
    context.commit('showCart');
  }
};

export default actions;
