<template>
  <div class="cartProducts">
    <ProductItem
      v-for="product in getCartProducts"
      v-bind:key="product.id"
      v-bind:product="product"
    />
    <section class="checkout">
      <li @click="checkoutCreateThisOrder">
        <router-link to="/order">Create order!</router-link>
      </li>
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
    ...mapActions(['changeThisProductButtonToggle', 'checkoutCreateThisOrder'])
  },
  mounted() {
    this.changeThisProductButtonToggle(true);
  }
};
</script>

<style></style>
