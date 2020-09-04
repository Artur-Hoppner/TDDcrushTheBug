<template>
  <section class="orderInfo">
    <h1 class="orderNumber">
      Thank you for your order! Your order number is:
      {{ getOrderInfo.orderNumber }}
    </h1>
    <h3 class="orderList" :key="item.id" v-for="item in getOrderItems">
      Product: {{ item.title }}
      <br />
      Quantity: {{ item.quantity }}
      <br />
      Cost: {{ item.price }}:-
    </h3>
    <h1 class="orderCost">Total price: {{ getOrderInfo.orderCost }}:-</h1>
    <h2 class="deliveryETA">
      Expected delivery in: {{ getOrderInfo.deliveryETA }} days
    </h2>
  </section>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  name: 'OrderInfo',
  computed: {
    ...mapGetters(['getOrderInfo', 'getOrderItems'])
  }
};
</script>

<style></style>
