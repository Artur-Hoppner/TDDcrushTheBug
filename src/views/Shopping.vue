<template>
  <div>
    <SearchBar />
    <ProductList />
    <Footer />
  </div>
</template>

<script>
import ProductList from '@/components/ProductList/ProductList.vue';
import SearchBar from '@/components/SearchBar/SearchBar.vue';
import Footer from '@/components/Footer/Footer.vue';
export default {
  name: 'Shopping',
  components: {
    SearchBar,
    ProductList,
    Footer
  }
};
</script>

<style></style>
