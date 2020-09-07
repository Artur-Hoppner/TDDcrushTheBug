!<template>
  <div>
    <footer>
      <p>Copyright ⓒ {{ new Date().getFullYear() }}</p>
      <p>Heisenberg enterprise</p>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital@1&family=Raleway&display=swap%27');

footer {
  font-family: 'Raleway', sans-serif;
  background: #a5d1bc;
  padding: 1%;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
