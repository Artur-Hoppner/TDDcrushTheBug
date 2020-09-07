<template>
  <div>
    <div class="boom">
      <h1>Welcome to our store!</h1>
      <h2>scroll down to see contents</h2>
      <section id="section06">
        <a href="#funka"> <span></span>Scroll </a>
      </section>
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
#section06 {
  position: relative;
}
section::after {
  position: absolute;
  bottom: 0;
  left: 0;
  content: '';
  background: -webkit-linear-gradient(
    top,
    rgba(0, 0, 0, 0) 0,
    rgba(0, 0, 0, 0.8) 80%,
    rgba(0, 0, 0, 0.8) 100%
  );
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0,
    rgba(0, 0, 0, 0.8) 80%,
    rgba(0, 0, 0, 0.8) 100%
  );
}

/* ANIMATION */
#section06 a {
  padding-top: 10rem;
}
#section06 a span {
  position: absolute;
  top: 0;
  left: 50%;
  width: 2rem;
  height: 2rem;
  margin-left: -12px;
  border-left: 5px solid #fff;
  border-bottom: 5px solid #fff;
  -webkit-transform: rotateZ(-45deg);
  transform: rotateZ(-45deg);
  -webkit-animation: sdb06 1.5s infinite;
  animation: sdb06 1.5s infinite;
  box-sizing: border-box;
}
@-webkit-keyframes sdb06 {
  0% {
    -webkit-transform: rotateY(0) rotateZ(-45deg) translate(0, 0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    -webkit-transform: rotateY(720deg) rotateZ(-45deg) translate(-20px, 20px);
    opacity: 0;
  }
}
@keyframes sdb06 {
  0% {
    transform: rotateY(0) rotateZ(-45deg) translate(0, 0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: rotateY(720deg) rotateZ(-45deg) translate(-20px, 20px);
    opacity: 0;
  }
}
</style>
