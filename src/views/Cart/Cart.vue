<template>
  <div class="cart">
    <CartList />
        <section class="checkout" v-if="!getCartProducts.length == 0">
      <div>
        <button class="checkoutButton" @click="createOrder('/order')">
          <span>Purchase items</span>
        </button>
      </div>
    </section>
    <section class="emptyCart" v-if="getCartProducts.length == 0">
        <h2 >
      No items in cart..
      <img
        class="emptyCartImage"
        src="@/assets/empty-cart.png"
        alt="emptyCart"
      />
    </h2>
              <a
            class="link-to-shop"
            id="link-to-shop"
            href
            @click="goTo('/shopping')"
          >Check out our products <u>here</u></a>,
  </section>
    
  </div>
</template>

<script>
import CartList from '@/components/CartList/CartList.vue';
import { mapGetters, mapActions } from 'vuex';
import router from '@/router/index.js';
export default {
  name: 'Cart',
  components: {
    CartList
  },
  computed: {
    ...mapGetters(['getCartProducts', 'getProductToggle'])
  },
  methods: {
    ...mapActions(['showThisCart']),
        createOrder() {
      this.$store.dispatch('checkoutCreateThisOrder');
      this.goTo('/order');
    },
    goTo(path) {
      router.push({ path: path }).catch(err => {
        err;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.emptyCart{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;

h2 {
  font-family: 'Montserrat', sans-serif;
}
.link-to-shop {
  text-decoration: none;
  color: #a5d1bc;
  font-weight: 900;
  font-size: 2.5rem;
}

}
.checkoutButton {
  font-family: 'Montserrat', sans-serif;
  background: #2193b0; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to left,
    #6dd5ed,
    #2193b0
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to left,
    #6dd5ed,
    #2193b0
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  color: #ffffff;
  margin-bottom: 50px;
  margin-top: 20px;
  cursor: pointer;
  font-size: 2em;
  padding: 1.5rem;
  border: 0;
  transition: all 0.5s;
  border-radius: 40px;
  width: auto;
  position: relative;
  z-index: 1;
  &::after {
    content: '⇨';
    // content: '👍';
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    position: absolute;
    z-index: 1;
    left: 85%;
    top: 27%;
    right: 5%;
    bottom: 0;
    opacity: 0;
  }
  &:hover {
    background: #2193b0; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to left,
      #6dd5ed,
      #2193b0
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to left,
      #6dd5ed,
      #2193b0
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    transition: all 0.5s;
    border-radius: 40px;
    box-shadow: 0px 6px 15px #07070761;
    padding: 1.5rem 3.5rem 1.5rem 1.5rem;
    &::after {
      opacity: 1;
      transition: all 0.5s;
    }
  }
}
</style>
