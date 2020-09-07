<template>
  <div class="cartProducts">
    <ProductItem
      v-for="product in getCartProducts"
      v-bind:key="product.id"
      v-bind:product="product"
    />
    <section class="checkout">
      <div>
        <router-link
          @click.native="asyncCreateOrder"
          to="/order"
          class="checkoutButton"
          tag="button"
          ><span>Purchase items</span></router-link
        >
      </div>
    </section>
  </div>
</template>
<script>
import ProductItem from '../ProductItem/ProductItem.vue';
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'CartList',
  components: {
    ProductItem
  },
  computed: {
    ...mapGetters(['getProductToggle', 'getCartProducts'])
  },
  methods: {
    ...mapActions(['changeThisProductButtonToggle']),
    async asyncCreateOrder() {
      await this.$store.dispatch('checkoutCreateThisOrder');
      this.$router.push('/order').catch(err => {
        err;
        console.log('No items in cart!');
      });
    }
  },
  mounted() {
    this.changeThisProductButtonToggle(true);
  }
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

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
