<template>
  <nav class="header">
    <CartIcon />
    <HamburgerIcon />
  </nav>
</template>

<script>
import CartIcon from '@/components/CartIcon/CartIcon.vue';
import HamburgerIcon from '@/components/HamburgerIcon/HamburgerIcon.vue';
//TODO: import cartIcon when it's finished

export default {
  name: 'Header',
  components: {
    CartIcon,
    HamburgerIcon
  }
};
</script>

<style></style>
