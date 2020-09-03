<template>
  <div>
    <p>{{cartItem}}</p>
    <router-link id="presentedCartItems" to="/cart">Number of CartItems{{cartItem}}</router-link>
  </div>
</template>

<script>
export default {
  computed: {
    cartItem() {
      return this.$store.state.cart.length;
    }
  }
};
</script>

<style>
</style>