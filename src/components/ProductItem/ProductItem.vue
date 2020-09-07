<template>
  <section class="product">
    <div>
      <img
        class="product-pictures"
        :src="`${publicPath}assets/${product.tag}.png`"
        :alt="product.title"
      />
    </div>
    <div>
      <h2 class="producttitle">{{ product.title }}</h2>
      <p>{{ product.desc }}</p>
    </div>
    <section v-if="getProductButtonToggle">
      <aside class="increaseQuantity">
        <h1 @click="increaseThisQuantity(product)">+</h1>
      </aside>
      <div>
        <h2>Quantity: {{ product.quantity }}</h2>
      </div>
      <aside class="decreaseQuantity">
        <h1 @click="decreaseThisQuantity(product)">-</h1>
      </aside>
    </section>
    <div>
      <h3>{{ product.price }}Kr</h3>
    </div>
    <aside v-if="!getProductButtonToggle" class="addProduct" @click="addThisToCart(product)">
      <!--TODO: add image to the click add product functionality <img /> -->
      <h1>ADD</h1>
    </aside>
    <aside v-if="getProductButtonToggle" class="removeProduct" @click="removeThisFromCart(product)">
      <!--TODO: add image to the click add product functionality <img /> -->
      <h1>REMOVE</h1>
    </aside>
  </section>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'ProductItem',
  data() {
    return {
      publicPath: process.env.BASE_URL
    };
  },
  computed: {
    ...mapGetters(['getProductButtonToggle'])
  },
  props: {
    product: Object
  },
  methods: {
    ...mapActions([
      'addThisToCart',
      'removeThisFromCart',
      'increaseThisQuantity',
      'decreaseThisQuantity'
    ])
  }
};
</script>
<style>
.product-pictures {
  height: 10vw;
}
</style>
