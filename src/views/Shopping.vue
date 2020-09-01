<template>
  <div>
    <SearchBar />
    <ProductList />
  </div>
</template>

<script>
import ProductList from '@/components/ProductList/ProductList.vue';
import SearchBar from '@/components/SearchBar/SearchBar.vue';
export default {
  name: 'Shopping',
  components: {
    SearchBar,
    ProductList
  }
};
</script>

<style></style>
