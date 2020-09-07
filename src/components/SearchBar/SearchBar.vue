<template>
  <section >
    <div class="container">
      <input
        id="input"
        type="text"
        @keyup="getByThisKeyword($event.target.value)"
        placeholder="Search..."
      />
      <div class="search" @click="displayThisEntireArray"></div>
    </div>
  </section>
</template>
<script>
import { mapActions } from 'vuex';
export default {
  name: 'SearchBar',
  methods: {
    ...mapActions(['getByThisKeyword', 'displayThisEntireArray'])
  },
  mounted() {
    this.displayThisEntireArray();
  }
};
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  width: 100%;
  height: 100%;
}
body {
  background: #252525;
}
.container {
  position:fixed;
  margin: auto;
  top: 20px;
  left: 0;
  right: 0;
  bottom: 600px;
  width: 300px;
  height: 100px;
  padding:1rem;
  .search {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 80px;
    height: 80px;
    background: #a5d1bc;
    border-radius: 50%;
    transition: all 1s;
    z-index: 4;
    &:hover {
      cursor: pointer;
    }
    &::before {
      content: '';
      position: absolute;
      margin: auto;
      top: 22px;
      right: 0;
      bottom: 0;
      left: 22px;
      width: 12px;
      height: 2px;
      background: white;
      transform: rotate(45deg);
      transition: all 0.5s;
    }
    &::after {
      content: '';
      position: absolute;
      margin: auto;
      top: -5px;
      right: 0;
      bottom: 0;
      left: -5px;
      width: 25px;
      height: 25px;
      border-radius: 50%;
      border: 2px solid white;
      transition: all 0.5s;
    }
  }
  input {
    font-family: 'Montserrat', sans-serif;
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 50px;
    outline: none;
    border: none;
    background: #a5d1bc;
    color: white;
    text-shadow: 0 0 10px #a5d1bc;
    padding: 0 80px 0 20px;
    border-radius: 30px;
    transition: all 1s;
    opacity: 0;
    z-index: 5;
    font-weight: bolder;
    letter-spacing: 0.1em;
    &:hover {
      cursor: pointer;
    }
    &:focus {
      width: 300px;
      opacity: 1;
      cursor: text;
    }
    &:focus ~ .search {
      right: -250px;
      background: #151515;
      z-index: 6;
      &::before {
        top: 0;
        left: 0;
        width: 25px;
      }
      &::after {
        top: 0;
        left: 0;
        width: 25px;
        height: 2px;
        border: none;
        background: white;
        border-radius: 0%;
        transform: rotate(-45deg);
      }
    }
    &::placeholder {
      color: white;
      opacity: 0.5;
      font-weight: bolder;
    }
  }
}
</style>
