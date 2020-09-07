<template>
  <div id="cartWrapper">
    <div id="iconWrapper">
    <router-link id="presentedCartItems" to="/cart">
      <img class="carticon" src="@/assets/shopping-cart.svg" alt />
    </router-link>
<<<<<<< HEAD
    </div>
    <div class="lengthWrapper">
    <p>{{cartItem.length}}</p>
=======
    <div>
      <p>{{cartIconItems}}</p>
>>>>>>> 077386d5bd8a6c9baf1fa1e001556c7d63e8bbd0
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters(['cartIconItems'])
  }
};
</script>

<style >
.lengthWrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(236, 114, 70);
  border-radius: 100%;
  width: 20px;
  height: 20px;
  position: absolute;
  top: 0;
  right: 0;
}
.lengthWrapper span {
  font-size: 20px;
}
#iconWrapper{
  width: 10%;
  height: 1px;
}
.cartWrapper {
  z-index: 999;
  display: flex;
  background: rgb(22, 22, 22);
  border-radius: 100%;
  margin: 1rem;
  height: 2rem;
  width: 2rem;
  padding: 1rem;
  margin-bottom: 5rem;
  position: absolute;
  right: 0;
  cursor: pointer;
}
</style>