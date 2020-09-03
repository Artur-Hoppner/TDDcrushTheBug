<template>
  <div id="hamburgerIcon">
    <HamburgerMenu>
      <ul class="sidebar-panel-nav"><!-- v-if="this.$route.path !== '/landing'" -->
      <li @click="changeThisToggle"><router-link to="/landing" exact-active-class="active">Home</router-link></li>
      <li @click="changeThisToggle"><router-link to="/shopping" exact-active-class="active">Our Shop</router-link></li>
      <li @click="changeThisToggle"><router-link to="/cart" exact-active-class="active">Cart</router-link></li>
      <li @click="changeThisToggle"><router-link to="/order" exact-active-class="active">Order</router-link></li>
      </ul>
    </HamburgerMenu>
    <nav class="burger-button">
      <img
        class="hamburgerImage"
        src="@/assets/navicon.svg"
        alt="hamburgerImage"
        @click="changeThisToggle"
      />
    </nav>
  </div>
</template>

<script>
import HamburgerMenu from '@/components/HamburgerMenu/HamburgerMenu.vue';

import { mapActions } from 'vuex';
export default {
  name: 'HamburgerIcon',
  components: { HamburgerMenu },
  methods: {
    ...mapActions('hamburgerIcon', ['changeThisToggle']),
    goTo(path) {
      this.$router
        .push(path)
        .then(this.changeThisToggle())
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style lang="scss" scoped>
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