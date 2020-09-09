<template>
  <div class="landing-container">
    <div class="introduction-container">
      <img class="garden-image" src="@/assets/garden.jpg" alt="Garden Image" />
      <div class="paragraph-container">
        <p class="paragraph-introduction">
          Repel, Remove or Blast your bugs!
          <br />We have the solution for all of your pest problems. With our
          products you will be able to get the same results as if you hired a
          professional exterminator.
          <a
            class="link-to-shop"
            id="link-to-shop"
            href
            @click="goTo('/shopping')"
          >Check out our products</a>, and become a professional exterminator yourself
          <br />
          <br />We are a small family business that have a long tradition of
          hating insects!
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
import { mapActions } from 'vuex';
export default {
  name: 'Landing',
  methods: {
    ...mapActions(['goTo'])
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
      // opacity: 85%;
      height: 25vw;
      width: 40vw;
      border-radius: 1%;
      @media (max-width: 1000px) {
        align-self: center;
        height: 40vw;
        width: 60vw;
        margin-bottom: 1vh;
      }
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
