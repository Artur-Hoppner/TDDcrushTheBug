<template>
  <div>
    <SearchBar />
    <Footer />
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar/SearchBar.vue';
import Footer from '@/components/Footer/Footer.vue';
export default {
  name: 'Shopping',
  components: {
    SearchBar,
    Footer
  }
};
</script>

<style></style>
