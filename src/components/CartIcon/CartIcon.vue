<template>
  <div id="cartWrapper">
    <div id="iconWrapper">

      <img
        id="cartIcon"
        src="@/assets/shopping-cart.svg"
        alt=""
        @click="goTo('/cart')"
      />
      <p class="amount">{{ cartIconItems }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters(['cartIconItems'])
  },
  methods: {
    goTo(path) {

      this.$router.push(path).catch(err => {
        console.log(err);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@media (max-width: 600px) {
  #iconWrapper {
    margin: 0;
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
      width: 3rem;
      height: 3rem;
      cursor: pointer;
    }
    p {
      position: relative;
      margin-bottom: 4rem;
      background: rgb(236, 114, 70);
      border-radius: 100%;
      width: 1rem;
      padding: 0.1rem 0.2rem;
      color: white;
    }
  }
}

@media (min-width: 600px) {
  #iconWrapper {
    margin: 0;
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
    p {
      position: relative;
      margin-bottom: 4rem;
      background: rgb(236, 114, 70);
      border-radius: 100%;
      width: 1rem;
      padding: 0.1rem 0.2rem;
      color: white;
    }
  }
}

</style>