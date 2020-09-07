<template>
  <div id="app">
    <Header class="header" />

    <router-view class="main" />
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
  margin: 0%;
  padding: 0%;
}
body #app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: grid;
  grid-template-rows: 50vh auto 10vh;
  .header {
    grid-row: 1;
    grid-row-end: 2;
  }

  .main {
    grid-row-start: 2;
    grid-row-end: 3;
  }
  .footer {
    grid-row-start: 3;
    grid-row-end: 4;
    background: #a5d1bc;
    // position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
  }
}
</style>
