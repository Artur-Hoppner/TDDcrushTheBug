<template>
  <div>
    <router-link to="/cart">Go to cart!</router-link>
    <SearchBar />
    <ProductList />
    <Footer />
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar/SearchBar.vue';
import Footer from '@/components/Footer/Footer.vue';
import ProductList from '@/components/ProductList/ProductList.vue';
export default {
  name: 'Shopping',
  components: {
    SearchBar,
    Footer,
    ProductList
  }
};
</script>

<style></style>
