<template>
  <div class="cartProducts">
    <ProductItem
      v-for="product in getCartProducts"
      v-bind:key="product.id"
      v-bind:product="product"
    />
  </div>
</template>
<script>
import ProductItem from '../ProductItem/ProductItem.vue';
import { mapGetters, mapActions } from 'vuex';
import router from '@/router/index.js';
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
    createOrder() {
      this.$store.dispatch('checkoutCreateThisOrder');
      this.goTo('/order');
    },
    goTo(path) {
      router.push({ path: path }).catch(err => {
        err;
      });
    }
  },
  mounted() {
    this.changeThisProductButtonToggle(true);
  }
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital@1&family=Raleway&display=swap%27');

h2 {
  font-family: 'Montserrat', sans-serif;
}

.cartProducts {
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
}

.emptyCartImage {
  margin-top: 10%;
  width: 200px;
}
</style>
