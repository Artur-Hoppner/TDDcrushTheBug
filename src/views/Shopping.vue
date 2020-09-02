<template>
  <div>
    <SearchBar />
    <Footer />
    <CartIcon />
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar/SearchBar.vue';
import Footer from '@/components/Footer/Footer.vue';
import CartIcon from '@/components/CartIcon/CartIcon.vue';
export default {
  name: 'Shopping',
  components: {
    SearchBar,
    Footer,
    CartIcon
  }
};
</script>

<style></style>
