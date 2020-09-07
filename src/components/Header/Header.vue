<template>
  <div class="wrapper">
    <nav class="header">
      <img id="icon" class="header-icon" src="@/assets/bug-icon.png" @click="goTo('/landing')" />
      <h1 id="text">Crush The Bug</h1>
      <section class="icons">
        <CartIcon />
        <HamburgerIcon />
      </section>
    </nav>
  </div>
</template>
<script>
import CartIcon from '@/components/CartIcon/CartIcon.vue';
import HamburgerIcon from '@/components/HamburgerIcon/HamburgerIcon.vue';

export default {
  components: {
    CartIcon,
    HamburgerIcon
  },
  methods: {
    goTo(path) {
      this.$router
        .push(path)
        .then(this.closeMenu())
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style>
@media (max-width: 600px) {
  .wrapper .header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
  }
  .header {
    background: #a5d1bc;
    width: 100%;
  }
  .header-icon {
    height: 100px;
    width: 100px;
  }
  #text {
    display: none;
  }
  .icons {
    display: flex;
    text-align: center;
  }
}
@media (min-width: 600px) {
  .wrapper .header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
  }
  .header {
    background: #a5d1bc;
    width: 100%;
  }
  .header-icon {
    height: 100px;
    width: 100px;
    cursor: pointer;
  }
  #text {
    justify-content: center;
    font-size: 3rem;
  }
  .icons {
    display: flex;
    text-align: center;
  }
}
</style>
