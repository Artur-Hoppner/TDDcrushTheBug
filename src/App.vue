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

<style lang="scss">
*,
html,
body {
  margin: 0;
  padding: 0;
}

body #app {
  min-height: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: grid;
  grid-template-rows: 15vh auto 10vh;
  position: relative;
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
  }
}
</style>
