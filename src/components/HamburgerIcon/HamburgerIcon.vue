<template>
  <div class="burgerwrapper">
    <div id="hamburgerIcon">
      <HamburgerMenu></HamburgerMenu>
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
  </div>
</template>

<script>
import HamburgerMenu from '@/components/HamburgerMenu/HamburgerMenu.vue';

import { mapActions } from 'vuex';
export default {
  name: 'HamburgerIcon',
  components: {
    HamburgerMenu
  },
  methods: {
    ...mapActions(['changeThisToggle']),
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
@media (max-width: 600px) {
  #hamburgerIcon {
    z-index: 9999;
    display: flex;
    background: #a5d1bc;
    border: 3px solid white;
    border-radius: 100%;
    margin: 1rem;
    height: 3rem;
    width: 3rem;
    padding: 1rem;
    justify-content: center;
    align-items: center;
    img {
      width: 2rem;
      height: 2rem;
      cursor: pointer;
    }
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
}
@media (min-width: 600px) {
  #hamburgerIcon {
    z-index: 9999;
    display: flex;
    background: #a5d1bc;
    border: 3px solid white;
    border-radius: 100%;
    margin: 1rem;
    height: 4rem;
    width: 4rem;
    padding: 1rem;
    justify-content: center;
    align-items: center;
    img {
      width: 3rem;
      height: 3rem;
      cursor: pointer;
    }
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
}
</style>
