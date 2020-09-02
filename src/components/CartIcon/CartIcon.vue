<template>
  <div>
    
    <router-link id="presentedCartItems" to="/cart">{{cartItem}}</router-link>
    <!-- change link to hamburge menu later. This is for controlling that the test works -->
  </div>
</template>

<script>
export default {
  name: Cart,
  computed: {
    cartItem () {
      return this.$store.state.cart
    }
  }
}
</script>

<style>
</style>