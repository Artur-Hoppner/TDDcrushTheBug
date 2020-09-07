<template>
  <div id="app">
    <Header class="header" />

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

<style lang="scss" scoped>
html {
  position: relative;
  min-height: 100%;
}
body #app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
}

.footer {
  background: #a5d1bc;
  // position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
