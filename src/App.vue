<template>
  <div id="app">
    <Header />
    <router-link to="Shopping">Test me mattias</router-link>
    <router-view />
    <HamburgerIcon />
  </div>
</template>

<script>
import HamburgerIcon from '@/components/HamburgerIcon/HamburgerIcon.vue';
import Header from '@/components/Header/Header.vue';
export default {
  name: 'App',
  components: { HamburgerIcon, Header }
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
