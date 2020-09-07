<template>
  <div class="cart">
    <CartList />
  </div>
</template>

<script>
import CartList from '@/components/CartList/CartList.vue';
export default {
  name: 'Cart',
  components: {
    CartList
  }
};
</script>

<style lang="scss" scoped>
</style>
