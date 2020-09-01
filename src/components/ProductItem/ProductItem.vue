<template>
  <section class="product">
    <aside class="add" @click="addThisToCart(product.id)">
      <!--TODO: add image to the click add product functionality -->
      <img />
    </aside>
    <div>
      <!-- TODO: :src="require(`@/assets/${product.tag}.png`)" -->
      <!-- :src="getProductImg(product.tag)" -->
      <img :alt="product.title" />
    </div>
    <div>
      <h2 class="producttitle">{{ product.title }}</h2>
      <p>{{ product.desc }}</p>
    </div>
    <div>
      <h3>{{ product.price }}Kr</h3>
    </div>
  </section>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'ProductItem',
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['getProductImg'])
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
