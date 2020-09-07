<template>
  <div id="cartWrapper">
    <div id="iconWrapper">
    <router-link id="presentedCartItems" to="/cart">
      <img class="carticon" src="@/assets/shopping-cart.svg" alt />
    </router-link>
    </div>
    <div class="lengthWrapper">
    <p>{{cartItem.length}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cartItem: this.$store.state.cart
    };
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