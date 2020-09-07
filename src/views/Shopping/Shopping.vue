<template>
  <div>
    <div class="boom">
      <h1>Welcome to our store!</h1>
      <h2>scroll down to see contents</h2>
      <a href="#funka"><img id="down" src="@/assets/arrow-down.svg" alt=""/></a>
    </div>
    <div class="boom2" v-scrollanimation>
      <SearchBar id="funka" />
      <ProductList />
    </div>
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar/SearchBar.vue';
import ProductList from '@/components/ProductList/ProductList.vue';
export default {
  name: 'Shopping',
  components: {
    SearchBar,
    ProductList
  }
};
</script>
<style>
html {
  scroll-behavior: smooth;
}
.boom {
  display: flex;
  background: #ffe259; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #ffa751,
    #ffe259
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #ffa751,
    #ffe259
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
}
#down {
  margin-top: 10rem;
  height: 5rem;
  width: 5rem;
}
.before-enter {
  opacity: 0;
  transform: translateY(50vh);
  transition: all 1s ease-out;
}
.enter {
  opacity: 1;
  transform: translateY(0);
}
#funka {
  padding-bottom: 5rem;
}
</style>
