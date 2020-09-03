<template>
  <div>
    <CartList />
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer/Footer.vue';
import CartList from '@/components/CartList/CartList.vue';
export default {
  name: 'Cart',
  components: {
    Footer,
    CartList
  }
};
</script>

<style></style>
