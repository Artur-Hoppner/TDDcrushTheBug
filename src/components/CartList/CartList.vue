<<<<<<< HEAD
<<<<<<< HEAD
!<template>
    
=======
=======
>>>>>>> 8a7a46b54df47d9e2b6608269fe4ae84061b22f1
<template>
  <div class="cartProducts">
    <ProductItem
      v-for="product in getCartProducts"
      v-bind:key="product.id"
      v-bind:product="product"
    />
  </div>
<<<<<<< HEAD
>>>>>>> dev
=======
>>>>>>> 8a7a46b54df47d9e2b6608269fe4ae84061b22f1
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
    ...mapActions(['changeThisProductButtonToggle'])
  },
  mounted() {
    this.changeThisProductButtonToggle(true);
  }
};
</script>

<style></style>
