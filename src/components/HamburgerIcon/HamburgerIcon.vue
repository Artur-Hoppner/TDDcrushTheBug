<template>
  <div id="hamburgerIcon">
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
// import HamburgerMenu from "@/components/HamburgerMenu.vue"
import { mapActions } from 'vuex';
export default {
  name: 'HamburgerIcon',
  methods: {
    ...mapActions('hamburgerIcon', ['changeThisToggle'])
  }
};
</script>