//*************************/
//*** GLOBAL MUTATIONS ***/
//***********************/

const mutations = {
  //*************************************/
  //*** CART ARRAY RELATED MUTATIONS ***/
  //***********************************/
  //Add product to cart, takes product object as argument
  addToCart(state, product) {
    //Check if cart already has existing item so no doublettes will be created, only update quantity & price
    let checkExisting = state.cart.filter(item => item.id == product.id);
    if (checkExisting.length >= 1) {
      let index = state.cart.findIndex(item => item.id === product.id);
      state.cart[index].quantity++;
      state.cart[index].price += product.price;
    } else {
      state.cart.push({
        id: product.id,
        tag: product.tag,
        title: product.title,
        desc: product.desc,
        price: product.price,
        quantity: 1
      });
    }
  },
  //Remove Product from cart using index
  removeFromCart(state, id) {
    let findIndex = state.cart.find(item => item.id == id);
    let index = state.cart.indexOf(findIndex);
    state.cart.splice(index, 1);
  },
  //Increase Product Quantity in cart
  increaseQuantity(state, product) {
    //Check for default values of object in original allProducts array
    //Increase Product quantity and price
    let adjustPrice = state.allProducts.find(item => item.id == product.id);
    let index = state.cart.findIndex(item => item.id === product.id);
    state.cart[index].quantity++;
    state.cart[index].price += adjustPrice.price;
  },
  //Decrease Product Quantity in cart
  decreaseQuantity(state, product) {
    //Check for default values of object in original allProducts array
    //Decrease Product quantity and price
    let adjustPrice = state.allProducts.find(item => item.id == product.id);
    let index = state.cart.findIndex(item => item.id === product.id);
    state.cart[index].quantity--;
    state.cart[index].price -= adjustPrice.price;
    if (state.cart[index].quantity == 0) {
      state.cart.splice(index, 1);
    }
  },
  //Create order object based on state.cart
  checkoutCreateOrder(state) {
    if (state.cart != '') {
      //Randomize ordernumber and calculate total cost
      let newOrderNumber = Math.floor(Math.random() * 100000 + 1);
      let totalCost = 0;
      for (let i = 0; i < state.cart.length; i++) {
        totalCost += state.cart[i].price;
      }
      //Create Order object
      state.orderInfo = {
        orderNumber: newOrderNumber,
        orderCost: totalCost,
        deliveryETA: '3',
        orderList: state.cart
      };
    } else {
      return false;
    }
  },
  //*************************************************/
  //*** FILTEREDPRODUCTS ARRAY RELATED MUTATIONS ***/
  //***********************************************/
  //Take input searchword as argument, then use it to filter through allproducts array and match all products including the searchword
  getByKeyword(state, keyWord) {
    const search = keyWord.toLowerCase();
    if (!search.length) {
      state.filteredProducts = state.allProducts;
    } else {
      let foundProducts = [];
      foundProducts = state.allProducts.filter(item => item.tag.match(search));
      state.filteredProducts = foundProducts;
    }
  },
  //Reset the displayArray so it shows all products
  displayEntireArray(state) {
    state.filteredProducts = state.allProducts;
  },
  //*********************************/
  //*** TOGGLE RELATED MUTATIONS ***/
  //*******************************/
  //Change the toggle which decides if ProductItem shows AddToCart button or Increment, Decrement & RemoveFromCart depending on if we are viewing cart or shopping page
  changeProductButtonToggle(state, boolean) {
    state.productButtonToggle = boolean;
  },
  changeCart(state) {
    state.showCart = !state.showCart;
  },
  toggle(state) {
    state.isBurgerActive = !state.isBurgerActive
  }
};

export default mutations;
