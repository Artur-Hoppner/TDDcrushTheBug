<template>
  <nav class="header">
    <HamburgerIcon />
  </nav>
</template>

<script>
import HamburgerIcon from '@/components/HamburgerIcon/HamburgerIcon.vue';
//TODO: import cartIcon when it's finished

export default {
  name: 'Header',
  components: {
    HamburgerIcon
  }
};
</script>

<style></style>
