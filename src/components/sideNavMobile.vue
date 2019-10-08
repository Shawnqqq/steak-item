<template>
  <div class="side-nav">
    <img class="header-menu" src="@/assets/menu.png" @click="navLock=true">
    <div class="nav-container">
      <img class="nav-image" src="@/assets/close.png" @click="lock" />
      <div class="nav-menu">
        <a class="nan-item" @click="goToSection('bannerMobile')">
          01
          <p class="nav-item-text">
            主页
            <span class="nav-item-en">HOME</span>
          </p>
        </a>
        <a class="nan-item" @click="goToSection('aboutMobile')">
          02
          <p class="nav-item-text">
            关于汉和牛
            <span class="nav-item-en">ABOUT</span>
          </p>
        </a>
        <a class="nan-item" @click="goToSection('developmentMobile')">
          03
          <p class="nav-item-text">
            商品欣赏
            <span class="nav-item-en">DEVELOPMENT</span>
          </p>
        </a>
        <a class="nan-item" @click="goToSection('newsMobile')">
          04
          <p class="nav-item-text">
            产品故事
            <span class="nav-item-en">STORY</span>
          </p>
        </a>
        <a class="nan-item" @click="goToSection('contactMobile')">
          05
          <p class="nav-item-text">
            联系我们
            <span class="nav-item-en">CONTACT</span>
          </p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  methods: {
    lock() {
      this.$emit("close", false);
    },
    goToSection(section) {
      fullpage_api.moveTo(section);
      this.$emit("close", false);
    },
  }
};
</script>

<style lang="less" scoped>
@divide: 10;
@pswWidth: 640;
@p: @divide/@pswWidth * 1rem;

.side-nav {
  position: absolute;
  background: rgba(0, 0, 0, 0.85);
  width: 100%;
  height: 100vh;
  z-index: 99;
  top: 0;
  left: 0;
  animation: slideInRight 1s both;
  @keyframes slideInRight {
    0% {
      transform: translate3d(100%, 0, 0);
      visibility: visible;
    }
    100% {
      transform: translate3d(0, 0, 0);
    }
  }
  .nav-container {
    height: 100vh;
    width: 300*@p;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 100;
    transition: all 0.7s;
    .nav-image {
      float: right;
      width: 34*@p;
      margin-right: 48*@p;
      margin-top: 40*@p;
      cursor: pointer;
    }
    .nav-menu {
      position: absolute;
      top: 100*@p;
      .nan-item {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: white;
        font-size: 16*@p;
        margin: 25*@p 0;
        cursor: pointer;
        .nav-item-text {
          display: flex;
          flex-direction: column;
          margin-left: 10*@p;
          padding: 5*@p 0*@p 5*@p 15*@p;
          font-size: 14*@p;
          font-weight: 100;
          line-height: 1.5;
          border-left: 1*@p solid #ffffff69;
          .nav-item-en {
            font-size: 8*@p;
          }
        }
      }
    }
  }
  .header-menu{
    width: 25*@p;
    height: 20*@p;
    position: absolute;
    top: 30*@p;
    right: 30*@p;
  }
}
</style>