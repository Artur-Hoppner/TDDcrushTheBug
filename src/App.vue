<template>
  <div id="app">
    <Header />
    <router-link to="Shopping">Shopping</router-link>
    <router-link to="Landing">Landing</router-link>
    <router-link to="Cart">Cart</router-link>
    <router-link to="Order">Order</router-link>
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header/Header.vue';
import Footer from '@/components/Footer/Footer.vue';

export default {
  name: 'App',
  components: { Header, Footer }
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