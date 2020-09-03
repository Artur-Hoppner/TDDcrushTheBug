<template>
  <nav class="header">
    <CartIcon />
    <HamburgerIcon />
  </nav>
</template>

<script>
import CartIcon from '@/components/CartIcon/CartIcon.vue';
import HamburgerIcon from '@/components/HamburgerIcon/HamburgerIcon.vue'

export default {
  components: {
    CartIcon,
    HamburgerIcon
  }
};
</script>


<style>
</style>