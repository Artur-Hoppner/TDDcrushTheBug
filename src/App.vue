<template>
  <div id="app">
<<<<<<< HEAD
    <Header />
    <router-link to="Shopping">Shopping</router-link>
    <router-link to="Landing">Landing</router-link>
    <router-link to="Cart">Cart</router-link>
    <router-link to="Order">Order</router-link>
    <router-view />
    <Footer />
=======

    <router-link to="Shopping">Test me mattias</router-link>
    <router-view />
    <HamburgerIcon />
    <CartIcon/>
>>>>>>> cart-icon
  </div>
</template>

<script>
<<<<<<< HEAD
import Header from '@/components/Header/Header.vue';
import Footer from '@/components/Footer/Footer.vue';

export default {
  name: 'App',
  components: { Header, Footer }
=======
import HamburgerIcon from '@/components/HamburgerIcon/HamburgerIcon.vue';
import CartIcon from '@/components/CartIcon/CartIcon.vue';
export default {
  name: 'App',
  components: { 
    HamburgerIcon,
    CartIcon
    }
>>>>>>> cart-icon
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