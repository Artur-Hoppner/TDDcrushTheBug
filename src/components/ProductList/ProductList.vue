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
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'ProductList',
  components: {
    ProductItem
  },
  computed: {
    ...mapGetters(['filteredByKeyword', 'getProductToggle'])
  },
  methods: {
    ...mapActions(['changeThisProductButtonToggle'])
  },
  mounted() {
    this.changeThisProductButtonToggle(false);
  }
};
</script>

<style>
.products {
  height: 90vh;
  margin: 0rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
}
</style>
