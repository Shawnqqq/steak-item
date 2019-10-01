<template>
  <div class="side-nav">
    <div class="nav-container">
      <img class="nav-image" src="@/assets/close.png" @click="lock" />
      <div class="nav-menu">
        <a class="nan-item" @click="goToSection('loading')">
          01
          <p class="nav-item-text">
            主页
            <span class="nav-item-en">HOME</span>
          </p>
        </a>
        <a class="nan-item" @click="goToSection('about')">
          02
          <p class="nav-item-text">
            关于地产
            <span class="nav-item-en">ABOUT</span>
          </p>
        </a>
        <a class="nan-item" @click="goToSection('development')">
          03
          <p class="nav-item-text">
            地产开发
            <span class="nav-item-en">DEVELOPMENT</span>
          </p>
        </a>
        <a class="nan-item" @click="goToSection('news')">
          04
          <p class="nav-item-text">
            最新消息
            <span class="nav-item-en">LATEST NEWS</span>
          </p>
        </a>
        <a class="nan-item" @click="goToSection('join')">
          05
          <p class="nav-item-text">
            加入实地
            <span class="nav-item-en">JOIN US</span>
          </p>
        </a>
        <a class="nan-item" @click="goToSection('whistleblower')">
          06
          <p class="nav-item-text">
            廉洁举报
            <span class="nav-item-en">WHISTLEBLOWER</span>
          </p>
        </a>
        <a class="nan-item" @click="goToSection('contact')">
          07
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
    }
  }
};
</script>

<style lang="less" scoped>
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
    width: 300px;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 100;
    transition: all 0.7s;
    .nav-image {
      float: right;
      width: 34px;
      margin-right: 48px;
      margin-top: 40px;
      cursor: pointer;
    }
    .nav-menu {
      position: absolute;
      top: 100px;
      .nan-item {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: white;
        font-size: 16px;
        margin: 25px 0;
        cursor: pointer;
        .nav-item-text {
          display: flex;
          flex-direction: column;
          margin-left: 10px;
          padding: 5px 0px 5px 15px;
          font-size: 14px;
          font-weight: 100;
          line-height: 1.5;
          border-left: 1px solid #ffffff69;
          .nav-item-en {
            font-size: 8px;
          }
        }
      }
    }
  }
}
</style>
