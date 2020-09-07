<template>
  <div class="landing-container">
    <div class="introduction-container">
      <img class="garden-image" src="@/assets/garden.jpg" alt="ant 1" />
      <div class="paragraph-container">
        <p class="paragraph-introduction">
          Repell, Remove or Blast your bugs!
          <br />We have the solution for all your pest problems.
          With our product you will be able to get the same result as a professional exterminator.
          <a
            class="link-to-shop"
            id="link-to-shop"
            href
            @click="goTo('/landing')"
          >Check out our product</a>
          , and become a professianal exterminatori yourself
          <br />
          <br />We are a small family business that have a long tradition hating insects!
        </p>
      </div>
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
  name: 'Landing',
  methods: {
    goTo(path) {
      this.$router
        .push(path)
        .then(this.closeMenu())
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.landing-container {
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  align-content: center;

  .introduction-container {
    margin: 5px 0 0 20px;
    display: flex;
    flex-direction: row;
    @media (max-width: 1000px) {
      flex-direction: column-reverse;
    }
    .paragraph-container {
      display: flex;
      align-self: center;
      padding: 1vw;
      border: #a5d1bc8e solid 1px;
      margin: 30px 5vw 2vh 5vw;
      .paragraph-introduction {
        font-family: 'Raleway', sans-serif;
        font-size: 20px;
        line-height: 1.6;

        .link-to-shop {
          text-decoration: none;
          color: #a5d1bc;
          font-weight: 900;
        }
      }
    }
    .garden-image {
      @media (max-width: 1000px) {
        align-self: center;
        height: 40vw;
        width: 60vw;
        margin-bottom: 1vh;
      }
      height: 30vw;
      width: 40vw;
      opacity: 85%;
      border-radius: 1%;
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
