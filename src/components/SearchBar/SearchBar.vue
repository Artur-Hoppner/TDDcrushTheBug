<template>
  <div id="inputWithIcon">
    <input 
      id="input"
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
    ...mapActions(['getByThisKeyword', 'displayThisEntireArray'])
  },
  mounted() {
    this.displayThisEntireArray();
  }
};
</script>
<style scoped>
input[type="text"] {
  width: 100%;
  border: 2px solid #aaa;
  border-radius: 4px;
  margin: 8px 0;
  outline: none;
  padding: 8px;
  box-sizing: border-box;
  transition: 0.3s;
}

input[type="text"]:focus {
  border-color: dodgerBlue;
  box-shadow: 0 0 8px 0 dodgerBlue;
}

.inputWithIcon input[type="text"] {
  padding-left: 40px;
}

.inputWithIcon {
  position: relative;
}

.inputWithIcon i {
  position: absolute;
  left: 0;
  top: 8px;
  padding: 9px 8px;
  color: #aaa;
  transition: 0.3s;
}

.inputWithIcon input[type="text"]:focus + i {
  color: dodgerBlue;
}

.inputWithIcon.inputIconBg i {
  background-color: #aaa;
  color: #fff;
  padding: 9px 4px;
  border-radius: 4px 0 0 4px;
}

.inputWithIcon.inputIconBg input[type="text"]:focus + i {
  color: #fff;
  background-color: dodgerBlue;
}
.img{
  position: absolute;
  left: 30px;

}
</style>
