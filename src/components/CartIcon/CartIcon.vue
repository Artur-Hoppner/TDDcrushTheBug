<template>
  <div>
    <router-link  id="presentedCartItems" to="/cart">
      <img src="@/assets/shopping-cart.svg" alt="">
    </router-link>
    <div>
    <p>{{cartItem.length}}</p>
    </div>
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