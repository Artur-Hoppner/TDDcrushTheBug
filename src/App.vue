<template>
  <div id="app">
    <Header class="header" />
    <router-link to="Shopping">Shopping</router-link>
    <router-link to="Landing">Landing</router-link>
    <router-link to="Cart">Cart</router-link>
    <router-link to="Order">Order</router-link>
    <router-view />
    <Footer class="footer" />
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
html {
  position: relative;
  min-height: 100%;
}
body #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.footer {
  background: #a5d1bc;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>