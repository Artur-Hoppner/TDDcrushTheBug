<template>
  <div>
      <section class="cartWrapper">
      <router-link  to ='/cart'><img src="@/assets/shopping-cart.svg" alt="cart"></router-link> 
      <section class="lengthWrapper">
        <span>{{getCartProducts.length}}</span>
      </section>
    </section>
  </div>
</template>

<script> 
import{ mapActions, mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters(['getCartProducts'])
  },
  methods: {
    ...mapActions(['showThisCart'])
  }
  // computed: {
  //   cartItem() {
  //     return this.$store.state.cart.length;
  //   }
  // }
};
</script>

<style>
</style>