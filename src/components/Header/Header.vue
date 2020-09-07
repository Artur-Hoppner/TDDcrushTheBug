<template>
  <div class="wrapper">
<nav class="header">
    <h1>Crush The Bug</h1>
      <img class="header-icon" src="@/assets/bug-icon.png" alt />
      <HamburgerIcon />
      <CartIcon />
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
.header{
  display: flex;
  justify-content: space-around;
}
.header {
  background: #a5d1bc;
}
.header-icon {
  height: 50px;
  width: 50px;
}
h1{}
</style>