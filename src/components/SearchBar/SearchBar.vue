<template>
  <div>
    <input
      type="text"
      @keyup="getByThisKeyword($event.target.value)"
      placeholder="Search..."
    />
    <button @click="displayThisEntireArray">Reset</button>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
  name: 'SearchBar',
  methods: {
    ...mapActions('searchbar', ['getByThisKeyword', 'displayThisEntireArray'])
  },
  mounted() {
    this.displayThisEntireArray();
  }
};
</script>
