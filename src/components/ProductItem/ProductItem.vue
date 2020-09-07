<template>
  <section class="product">
    <div>
      <img
        class="product-pictures"
        :src="`${publicPath}assets/${product.tag}.png`"
        :alt="product.title"
      />
    </div>
    <div>
      <h2 class="product-title">{{ product.title }}</h2>
      <p>{{ product.desc }}</p>
    </div>
    <section v-if="getProductButtonToggle">
      <div>
        <h2>Quantity: {{ product.quantity }}</h2>
      </div>
      <div class="text-center">
        <button
          class="icon-btn add-btn green"
          @click="increaseThisQuantity(product)"
        >
          <div class="add-icon"></div>
          <div class="btn-txt">Add</div>
        </button>
        <button class="icon-btn add-btn" @click="decreaseThisQuantity(product)">
          <div class="btn-txt">Remove</div>
        </button>
      </div>
    </section>
    <div>
      <h3>{{ product.price }}Kr</h3>
    </div>
    <aside
      v-if="!getProductButtonToggle"
      class="addProduct"
      @click="addThisToCart(product)"
    >
      <img id="addToCart" src="@/assets/buy.png" alt="add to cart" />
    </aside>
    <aside
      v-if="getProductButtonToggle"
      class="removeProduct"
      @click="removeThisFromCart(product.id)"
    >
      <img
        id="removeFromCart"
        src="@/assets/trash.png"
        alt="remove from cart"
      />
    </aside>
  </section>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'ProductItem',
  data() {
    return {
      publicPath: process.env.BASE_URL
    };
  },
  computed: {
    ...mapGetters(['getProductButtonToggle'])
  },
  props: {
    product: Object
  },
  methods: {
    ...mapActions([
      'addThisToCart',
      'removeThisFromCart',
      'increaseThisQuantity',
      'decreaseThisQuantity'
    ])
  }
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital@1&family=Raleway&display=swap%27');

h2,
h3 {
  font-family: 'Montserrat', sans-serif;
}

p {
  font-family: 'Raleway', sans-serif;
}

#removeFromCart,
#addToCart {
  width: 3vw;
  height: 3vw;
  transition: all 0.2s ease-in-out;
}

#removeFromCart:hover,
#addToCart:hover {
  cursor: pointer;
  transform: scale(1.1);
}

#removeFromCart:active,
#addToCart:active {
  transform: scale(1.6);
}

.product {
  width: 40%;
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 40px;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  flex-direction: column;
}

.text-center {
  text-align: center;
  margin-top: 40px;
}

.icon-btn {
  width: 50px;
  height: 50px;
  border: 1px solid #cdcdcd;
  background: white;
  border-radius: 25px;
  overflow: hidden;
  position: relative;
  transition: width 0.2s ease-in-out;
}
.add-btn:hover {
  width: 120px;
}
.add-btn::before,
.add-btn::after {
  transition: width 0.2s ease-in-out, border-radius 0.2s ease-in-out;
  content: '';
  position: absolute;
  height: 4px;
  width: 10px;
  top: calc(50% - 2px);
  background: red;
}
.green::before,
.green::after {
  top: calc(50% - 2px);
  background: green;
}

.add-btn::after {
  right: 14px;
  overflow: hidden;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
}
.add-btn::before {
  left: 14px;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
}
.icon-btn:focus {
  outline: none;
}
.btn-txt {
  opacity: 0;
  transition: opacity 0.2s;
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
}
.add-btn:hover::before,
.add-btn:hover::after {
  width: 4px;
  border-radius: 2px;
}
.add-btn:hover .btn-txt {
  opacity: 1;
}
.add-icon::after,
.add-icon::before {
  transition: all 0.2s ease-in-out;
  content: '';
  position: absolute;
  height: 20px;
  width: 2px;
  top: calc(50% - 10px);
  /* background: red; */
  background: green;
  overflow: hidden;
}
.add-icon::before {
  left: 22px;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
}
.add-icon::after {
  right: 22px;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
}
.add-btn:hover .add-icon::before {
  left: 15px;
  height: 4px;
  top: calc(50% - 2px);
}
.add-btn:hover .add-icon::after {
  right: 15px;
  height: 4px;
  top: calc(50% - 2px);
}

.product-pictures {
  height: 10vw;
  margin-top: 20px;
  margin-bottom: -3px;
}
</style>
