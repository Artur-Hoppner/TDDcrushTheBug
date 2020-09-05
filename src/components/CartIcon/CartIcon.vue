<template>
  <div>
    <router-link id="presentedCartItems" to="/cart">
      <img src="@/assets/shopping-cart.svg" alt />
    </router-link>
    <div>
      <p>{{cartIconItems}}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters(['cartIconItems'])
  }
};
</script>

<style>
</style>