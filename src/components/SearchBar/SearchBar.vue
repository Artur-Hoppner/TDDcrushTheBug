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
    //TODO: add another action/mutation to initiate filteredArray instead of mounting to getByThiskeyWord, so resetting search and showing all products again is possible.
  },
  mounted() {
    this.displayThisEntireArray();
  }
};
</script>
