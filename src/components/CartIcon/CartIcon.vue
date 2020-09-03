<template>
  <div>
    <router-link id="presentedCartItems" to="/cart">
      <p>Cart Items {{cartItem.length}}</p>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cartItem: this.$store.state.cart
    };
  }
};
</script>

<style>
</style>