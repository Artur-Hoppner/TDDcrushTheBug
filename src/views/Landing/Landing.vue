<template>
  <div class="landing-container">
    <!-- <img class="ant1" src="@/assets/backgroundImages/ant-3.png" alt="ant 1" /> -->
    <div class="introduction-container">
      <img class="garden-image" src="@/assets/garden.jpg" alt="ant 1" />
      <p class="p-introduction">
        Repell, Remove or Blast your bugs.
        <br />We have the solution for all your pest problems.
        With our product you will be able to get the same result as a professional exterminator.
        <router-link class="link-to-shop" to="/cart">Check out our product</router-link>, and become a professianal exterminatori yourself
        <br />
        <br />We are a small family business that have a long tradition hating insects!
      </p>
    </div>

    <div class="exterminator-container">
      <img
        class="exterminator"
        src="@/assets/backgroundImages/exterminator-5.png"
        alt="exterminator"
      />
      <img class="ant2" src="@/assets/backgroundImages/ant-1.png" alt="ant 2" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Landing'
};
</script>

<style lang="scss" scoped>
.landing-container {
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  .introduction-container {
    margin: 5px 0 0 20px;

    display: flex;
    flex-direction: row;
    .p-introduction {
      font-family: 'Raleway', sans-serif;
      font-size: 20px;

      margin: 30px 5vw 0 5vw;

      .link-to-shop {
        text-decoration: none;
        color: #a5d1bc;
        font-weight: 900;
        line-height: 1.6;
      }
    }
    .garden-image {
      height: 25vw;
      opacity: 85%;
    }
  }
}

.exterminator-container {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  .ant2 {
    width: 10vw;
    height: 6vw;
  }
  .exterminator {
    width: 15vw;
    height: 15vw;
  }
}
</style>
