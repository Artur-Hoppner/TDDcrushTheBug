<template>
  <nav class="header">
    <img class="header-icon" src="@/assets/bug-icon.png" alt />
    <CartIcon />
    <HamburgerIcon />
  </nav>
</template>
<script>
import CartIcon from '@/components/CartIcon/CartIcon.vue';
import HamburgerIcon from '@/components/HamburgerIcon/HamburgerIcon.vue';

export default {
  components: {
    CartIcon,
    HamburgerIcon
  }
};
</script>

<style>
.header-icon {
  width: 5%;
}
</style>