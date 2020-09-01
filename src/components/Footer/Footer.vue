!<template>
  <div>
    <p>2020 stop bugging me</p>
    <footer>
      <p>Copyright ⓒ {{currentYear}}</p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    currentYear: '';
  },
  mounted() {
    this.currentYear = new Date().getFullYear();
  }
};
</script>

<style>
</style>