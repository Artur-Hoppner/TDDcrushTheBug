<template>
  <section class="product">
    <div>
      <img
        :src="`${publicPath}assets/${product.tag}.png`"
        :alt="product.title"
      />
    </div>
    <div>
      <h2 class="producttitle">{{ product.title }}</h2>
      <p>{{ product.desc }}</p>
    </div>
    <div>
      <h3>{{ product.price }}Kr</h3>
    </div>
    <aside
      v-if="!getProductButtonToggle"
      class="addProduct"
      @click="addThisToCart(product.id)"
    >
      <!--TODO: add image to the click add product functionality <img /> -->
      <h1>+</h1>
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
    ...mapActions(['addThisToCart'])
  }
};
</script>
<style></style>
