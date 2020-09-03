<template>
  <div>
    <router-link to="/cart">Go to cart!</router-link>
    <SearchBar />
    <ProductList />
    <Footer />
    <CartIcon />
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar/SearchBar.vue';
import Footer from '@/components/Footer/Footer.vue';
import CartIcon from '@/components/CartIcon/CartIcon.vue';
import ProductList from '@/components/ProductList/ProductList.vue';
export default {
  name: 'Shopping',
  components: {
    SearchBar,
    Footer,
    CartIcon,
    ProductList
  }
};
</script>
<style></style>