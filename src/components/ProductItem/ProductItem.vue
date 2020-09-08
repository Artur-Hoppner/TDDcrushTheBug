<template>
  <div>
    <section v-if="!getProductButtonToggle" class="product-shopping">
      <div class="product-pictures-container">
        <img
          class="product-pictures-shopping"
          :src="`${publicPath}assets/${product.tag}.png`"
          :alt="product.title"
        />
      </div>
      <div>
        <h2 class="product-title">{{ product.title }}</h2>
        <p>{{ product.desc }}</p>
      </div>
      <div>
        <h3>{{ product.price }}Kr</h3>
      </div>
      <aside class="addProduct" @click="addThisToCart(product)">
        <img id="addToCart" src="@/assets/buy.png" alt="add to cart" />
      </aside>
    </section>
    <section v-if="getProductButtonToggle" class="product-cart">
      <div class="product-pictures-container">
        <img
          class="product-pictures-cart"
          :src="`${publicPath}assets/${product.tag}.png`"
          :alt="product.title"
        />
      </div>
      <div>
        <h2 class="product-title">{{ product.title }}</h2>
      </div>
      <div>
        <h2>Quantity: {{ product.quantity }}</h2>
      </div>
      <div class="text-center">
        <button
          class="icon-btn add-btn green increase"
          @click="increaseThisQuantity(product)"
        >
          <div class="add-icon"></div>
          <div class="btn-txt">Add</div>
        </button>
        <button
          class="icon-btn add-btn decrease"
          @click="decreaseThisQuantity(product)"
        >
          <div class="btn-txt">Remove</div>
        </button>
      </div>
      <div>
        <h3>{{ product.price }}Kr</h3>
      </div>
      <aside class="removeProduct" @click="removeThisFromCart(product.id)">
        <img
          id="removeFromCart"
          src="@/assets/trash.png"
          alt="remove from cart"
        />
      </aside>
    </section>
  </div>
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
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital@1&family=Raleway&display=swap%27');
div {
  display: inline-block;
}

#removeFromCart,
#addToCart {
  width: 3vw;
  height: 3vw;
  transition: all 0.2s ease-in-out;
  margin: 10px;
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

.product-shopping {
  width: 80%;
  height: 55vh;
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 40px;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  border: 4px solid #a5d1bc;
  border-radius: 10px;
}

.product-cart {
  width: 100%;
  height: 20%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  text-align: center;
  align-items: center;
  flex-direction: row;
  margin-top: 1px;
  margin-bottom: 1px;
  border: 1px solid #a5d1bc;
}

.text-center {
  text-align: center;
  display: block;
  margin-left: -10%;
  height: 100%;
  width: 20%;
}

.product-shopping > div > h2,
h3 {
  font-family: 'Montserrat', sans-serif;
  margin: 8px;
}

.product-shopping > div > p {
  display: block;
  font-family: 'Raleway', sans-serif;
  margin: 8px;
}

.product-cart > div > h2,
h3 {
  font-family: 'Montserrat', sans-serif;
  display: inline-block;
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

.product-pictures-shopping {
  height: 20vh;
  width: auto;
  margin-top: 20px;
}

.product-pictures-cart {
  height: 10vh;
  width: 6vw;
  margin: 10px;
}

.product-pictures-container {
  margin-top: 5px;
}
.product-shopping:hover {
  .product-pictures-shopping {
    -webkit-animation: wiggle 1.5s linear infinite;
    animation: wiggle 1.5s linear infinite;
  }
}
/* ANIMATION */
@-webkit-keyframes wiggle {
  0% {
    -webkit-transform: rotateZ(0);
    transform: rotateZ(0);
  }
  10% {
    -webkit-transform: rotateZ(-15deg);
    transform: rotateZ(-15deg);
  }
  20% {
    -webkit-transition: rotateZ(10deg);
    transition: rotateZ(10deg);
  }
  25% {
    -webkit-transition: rotateZ(-10deg);
    transition: rotateZ(-10deg);
  }
  30% {
    -webkit-transition: rotateZ(6deg);
    transition: rotateZ(6deg);
  }
  35% {
    -webkit-transform: rotateZ(-4deg);
    transform: rotateZ(-4deg);
  }
  40% {
    transform: rotateZ(7deg);
  }
  50% {
    transform: rotateZ(-6deg);
  }
  60% {
    transform: rotateZ(10deg);
  }
  70% {
    transform: rotateZ(-14deg);
  }
  80% {
    transform: rotateZ(3deg);
  }
  90% {
    transform: rotateZ(-7deg);
  }
  100% {
    -webkit-transition: rotateZ(0);
    transition: rotateZ(0);
  }
}
</style>
