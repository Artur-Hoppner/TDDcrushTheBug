<template>
  <div>
    <OrderInfo />
  </div>
</template>

<script>
import OrderInfo from '@/components/OrderInfo/OrderInfo.vue';
export default {
  name: 'Order',
  components: {
    OrderInfo
  }
};
</script>

<style lang="scss" scoped>
div {
  background-color: #f5f5f5;
}
</style>
