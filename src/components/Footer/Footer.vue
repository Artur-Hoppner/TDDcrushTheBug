!<template>
  <div>
    <footer>
      <p>Copyright ⓒ {{ new Date().getFullYear() }}</p>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,400;1,700;1,900&display=swap');
body {
  position: relative;
}

footer {
  background: #a5d1bc;
  border-width: 1px;
  border-style: solid;
  border-color: grey;
  padding: 1%;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
