<template>
  <div id="app">

    <router-link to="Shopping">Test me mattias</router-link>
    <router-view />
    <HamburgerIcon />
    <CartIcon/>
  </div>
</template>

<script>
import HamburgerIcon from '@/components/HamburgerIcon/HamburgerIcon.vue';
import CartIcon from '@/components/CartIcon/CartIcon.vue';
export default {
  name: 'App',
  components: { 
    HamburgerIcon,
    CartIcon
    }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
