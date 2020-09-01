<template>
  <div class="products">
    <ProductItem
      v-for="product in filteredByKeyword"
      v-bind:key="product.id"
      v-bind:product="product"
    />
  </div>
</template>
<script>
import ProductItem from '../ProductItem/ProductItem.vue';
import { mapGetters } from 'vuex';
export default {
  name: 'ProductList',
  components: {
    ProductItem
  },
  computed: {
    ...mapGetters(['filteredByKeyword'])
  }
};
</script>

<style></style>
