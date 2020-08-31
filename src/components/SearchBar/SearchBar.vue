<template>
  <div>
    <input type="text" @keyup="getByThisKeyword($event.target.value)" />
  </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
  name: 'SearchBar',
  methods: {
    ...mapActions('searchbar', ['getByThisKeyword'])
  },
  mounted() {
    this.getByThisKeyword('');
  }
};
</script>
