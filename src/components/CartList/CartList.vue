<template>
    <div class="cartProducts">
    <ProductItem
        v-for="product in getCartProducts"
        v-bind:key="product.id"
        v-bind:product="product"
    />
<<<<<<< HEAD
    </div>
=======
  </div>
>>>>>>> d8b5a3d87bd0007fc1953663607a3f9587cec200
</template>
<script>
import ProductItem from '../ProductItem/ProductItem.vue';
import { mapGetters, mapActions } from 'vuex';
export default {
    name: 'CartList',
    components: {
    ProductItem
    },
    computed: {
    ...mapGetters(['getProductToggle', 'getCartProducts'])
  },
  methods: {
    ...mapActions(['changeThisProductButtonToggle'])
  },
  mounted() {
    this.changeThisProductButtonToggle(true);
  }
};
</script>

<style></style>
