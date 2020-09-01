<template>
  <div class="products">
    <ProductItem
      v-for="product in productItems"
      v-bind:key="product.id"
      v-bind:item="product"
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
    ...mapGetters('searchbar', ['filteredByKeyword'])
  }
};
</script>

<style></style>
