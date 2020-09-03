<template>
  <div>
<<<<<<< HEAD
      <section class="cartWrapper">
      <router-link  to ='/cart'><img src="@/assets/shopping-cart.svg" alt="cart"></router-link> 
      <section class="lengthWrapper">
        <span>{{getCartProducts.length}}</span>
      </section>
    </section>
=======
    <router-link id="presentedCartItems" to="/cart">
      <p>Cart Items {{cartItem.length}}</p>
    </router-link>
>>>>>>> d8b5a3d87bd0007fc1953663607a3f9587cec200
  </div>
</template>

<script> 
import{ mapActions, mapGetters } from 'vuex';
export default {
<<<<<<< HEAD
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
=======
  data() {
    return {
      cartItem: this.$store.state.cart
    };
  }
>>>>>>> d8b5a3d87bd0007fc1953663607a3f9587cec200
};
</script>

<style>
</style>