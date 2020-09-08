<template>
  <div class="sidebar">
    <div class="sidebar-backdrop" @click="changeThisToggle" v-if="showHamburger"></div>
    <transition name="slide">
      <div v-if="showHamburger" class="sidebar-panel">
        <div class="links" @click="changeThisToggle">
          <router-link to="/" exact-active-class="active" tag="a">Home</router-link>
        </div>
        <div class="links" @click="changeThisToggle">
          <router-link to="/shopping" exact-active-class="active" tag="a">Our Shop</router-link>
        </div>
        <div class="links" @click="changeThisToggle">
          <router-link to="/cart" exact-active-class="active" tag="a">Cart</router-link>
        </div>
        <div class="links" @click="changeThisToggle">
          <router-link to="/order" exact-active-class="active" tag="a">Order</router-link>
        </div>
        <slot></slot>
      </div>
    </transition>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'HamburgerMenu',
  computed: {
    ...mapGetters(['showHamburger'])
  },
  methods: {
    ...mapActions(['changeThisToggle'])
  }
};
</script>
<style lang="scss" scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.2s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(100%);
  transition: all 150ms ease-in 0s;
}

.sidebar-backdrop {
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 999;
  top: 0;
  right: 0;
  cursor: pointer;
}

.sidebar-panel {
  overflow-y: auto;
  box-shadow: inset 18px 0px rgba(0, 0, 0, 0.205);
  background: #2c3e50;
  position: fixed;
  right: 0;
  top: 0;
  height: 100%;
  z-index: 999;
  width: 400px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 100%;
}

.links {
  text-decoration: none;
  text-align: center;
  font-size: 2.5rem;
  display: flex;
  align-content: center;
  justify-items: center;
  width: 400px;
  height: 25%;
}

a {
  font-family: 'Montserrat', sans-serif;
  color: #ffffff;
  text-decoration: none;
  display: block;
  width: 100%;
  /* padding: 18.5%; */
  padding: 18.6% 18.6%;
  text-align: center;
  align-self: center;
  justify-self: center;
  transition: box-shadow 0.4s ease-in;
}

a:hover {
  color: #a5d1bc;
  box-shadow: inset 18px 0px #a5d1bc;
}

.active {
  color: #a5d1bc5d;
  box-shadow: inset 18px 0px #a5d1bc5d;
}

.active:hover {
  color: #a5d1bc5d;
  box-shadow: inset 18px 0px #a5d1bc5d;
}
</style>
