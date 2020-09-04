<template>
  <div>
    <router-link to="/cart">Go to cart!</router-link>
    <SearchBar />
    <ProductList />
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar/SearchBar.vue';
import ProductList from '@/components/ProductList/ProductList.vue';
export default {
  name: 'Shopping',
  components: {
    SearchBar,
    ProductList
  }
};
</script>
<style></style>