<template>
  <section class="orderInfo">
    <h1 class="orderNumber">
      Thank you for your order! Your order number is:
      <span>{{ getOrderInfo.orderNumber }}</span>
    </h1>
    <br />
    <h3 class="orderList" :key="item.id" v-for="item in getOrderItems">
      Product: <span>{{ item.title }}</span>
      <br />
      <img
        class="product-pictures"
        :src="`${publicPath}assets/${item.tag}.png`"
        :alt="item.title"
      />
      <br />
      Quantity: <span>{{ item.quantity }}</span>
      <br />
      Cost: <span>{{ item.price }}:-</span>
    </h3>
    <br />
    <h1 class="orderCost">
      Total price: <span>{{ getOrderInfo.orderCost }}</span
      >:-
    </h1>
    <h2 class="deliveryETA">
      Expected delivery in: <span>{{ getOrderInfo.deliveryETA }}</span> days
    </h2>
    <img
      id="exterminator-thumbsup"
      src="@/assets/backgroundImages/exterminator-3.png"
      alt="exterminator thumbs up"
    />
  </section>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  name: 'OrderInfo',
  data() {
    return {
      publicPath: process.env.BASE_URL
    };
  },
  computed: {
    ...mapGetters(['getOrderInfo', 'getOrderItems'])
  }
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital@1&family=Raleway&display=swap%27');

* {
  // box-sizing: border-box;
}

.orderInfo {
  font-family: 'Raleway', sans-serif;
  padding-top: 2rem;
}

span {
  font-family: 'Montserrat', sans-serif;
  font: bolder;
}

.product-pictures {
  width: 6vw;
  height: 6vw;
}

.deliveryETA {
  margin-bottom: -15%;
}

#exterminator-thumbsup {
  width: 30vw;
  height: 30vw;
  margin-left: 0;
  margin-top: 0;
  margin-bottom: -0.25rem;
  margin-right: -60%;

}
//font-family: 'Montserrat', sans-serif;
//font-family: 'Raleway', sans-serif;
</style>
