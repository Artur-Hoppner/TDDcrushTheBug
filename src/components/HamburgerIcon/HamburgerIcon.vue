<template>
  <div id="hamburgerIcon">
    <HamburgerMenu />
    <nav class="burger-button">
      <img
        class="hamburgerImage"
        src="@/assets/navicon.svg"
        alt="hamburgerImage"
        @click="changeThisToggle"
      />
      <HamburgerMenu />
    </nav>
  </div>
</template>

<script>
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu.vue';
import { mapActions } from 'vuex';
export default {
  name: 'HamburgerIcon',
  components: {
    HamburgerMenu
  },
  methods: {
    ...mapActions('hamburgerIcon', ['changeThisToggle'])
  }
};
</script>