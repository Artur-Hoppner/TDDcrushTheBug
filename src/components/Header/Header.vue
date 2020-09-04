<template>
<div>
  <img src="" alt="buglogo">
  <h1>Crush The Bug</h1>
  <nav class="header">
    <img class="header-icon" src="@/assets/bug-icon.png" alt />
    <CartIcon />
    <HamburgerIcon />
  </nav>
  </div>
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