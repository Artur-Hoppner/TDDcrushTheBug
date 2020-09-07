<template>
  <div class="sidebar">
    <div class="sidebar-backdrop" @click="changeThisToggle" v-if="showHamburger"></div>
    <transition name="slide">
      <div v-if="showHamburger" class="sidebar-panel">
        <ul class="sidebar-panel-nav">
          <!-- v-if="this.$route.path !== '/landing'" -->
          <li @click="changeThisToggle">
            <router-link to="/" exact-active-class="active">Home</router-link>
          </li>
          <li @click="changeThisToggle">
            <router-link to="/shopping" exact-active-class="active">Our Shop</router-link>
          </li>
          <li @click="changeThisToggle">
            <router-link to="/cart" exact-active-class="active">Cart</router-link>
          </li>
          <li @click="changeThisToggle">
            <router-link to="/order" exact-active-class="active">Order</router-link>
          </li>
        </ul>
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
    ...mapGetters('hamburgerIcon', ['showHamburger'])
  },
  methods: {
    ...mapActions('hamburgerIcon', ['changeThisToggle'])
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
  background-color: #415d48;
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  z-index: 999;
  padding: 3rem 20px 2rem 20px;
  width: 300px;
}
ul.sidebar-panel-nav {
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

ul.sidebar-panel-nav > li > a {
  text-decoration: none;
  font-size: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 1.5em;
}

ul > li > a {
  color: #fff;
}
.active {
  color: red;
}
</style>
