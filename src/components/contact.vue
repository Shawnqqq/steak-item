<template>
  <div class="contact">
    <div class="nav-bar">
      <img src="@/assets/menu.png" class="head-logo" @click="navLock = true" />
    </div>
    <div class="contact-box">
      <div class="box-left">
        <div class="address">
          <p class="address-title">广州市×××××××××××××××</p>
        </div>
        <div class="contact-number">
          <p class="number">0000-0000000</p>
        </div>
        <div class="footer-logo">
          <img src="@/assets/wanglogo.png" />
        </div>
      </div>
      <div class="box-middle">
        <span class="middle-text">
          ©2019 版权所有：************ <br />
          ALL RIGHTS RESERVED: **************************************<br />
          <a href="https://github.com/">粤ICP备*********号</a>
        </span>
      </div>
      <div class="box-right">
        <ul id="menu">
          <li class="right-item">
            <a @click="goToSection('about')">关于汉和牛 ABOUT</a>
          </li>
          <li class="right-item">
            <a @click="goToSection('development')">商品欣赏 DEVELOPMENT</a>
          </li>
          <li class="right-item">
            <a @click="goToSection('news')">产品故事 STORY</a>
          </li>
          <li class="right-item">
            <a @click="goToSection('news')">物流售后 LOGISTICS</a>
          </li>
        </ul>
      </div>
      <div class="box-contact">
        <div class="text">联系 CONTACT</div>
        <i></i>
      </div>
    </div>
    <sideNav v-if="navLock" @close="closeNav" />
  </div>
</template>

<script>
import sideNav from "@/components/sideNav.vue";

export default {
  name: "contact",
  data() {
    return {
      navLock: false
    };
  },
  methods: {
    goToSection(section) {
      fullpage_api.moveTo(section);
    },
    closeNav(val) {
      this.navLock = val;
    }
  },
  components: {
    sideNav
  }
};
</script>

<style lang="less" scoped>
.contact {
  height: 100%;
  width: 100%;
  color: white;
  position: relative;
  .nav-bar {
    position: absolute;
    top: 0;
    right: 6%;
    z-index: 1;
    img {
      width: 25px;
      height: 18px;
      cursor: pointer;
    }
  }
  .contact-box {
    position: absolute;
    height: 100vh;
    width: 100%;
    box-shadow: inset 0 -300px 196px rgba(0, 0, 0, 0.721);
    .box-left {
      position: absolute;
      bottom: 35px;
      left: 65px;
      .left-select {
        width: 350px;
        position: relative;
        .select {
          display: block;
          width: 350px;
          height: 50px;
          margin: 5px 0px;
          padding: 0px 24px;
          font-size: 16px;
          line-height: 1.75;
          color: #fff;
          background-color: rgba(255, 255, 255, 0);
          border: 1px solid #cccccc;
          word-break: normal;
          appearance: none;
          option {
            background-color: #333;
          }
        }
      }
      .left-select:after {
        content: url(http://py2j9zb6p.bkt.clouddn.com/arrow.png);
        font-size: 35px;
        color: #fff;
        right: 30px;
        top: 10px;
        padding: 0 0 2px;
        position: absolute;
        z-index: -1;
      }
      .address {
        margin-top: 30px;
        font-size: 16px;
        .address-title {
          width: 400px;
          line-height: 20px;
          margin-bottom: 20px;
          height: 13px;
          color: #fff;
        }
        .address-desc {
          width: 400px;
          font-size: 12px;
          line-height: 20px;
          white-space: nowrap;
        }
      }
      .contact-number {
        margin-top: 50px;
        .number {
          font-size: 20px;
        }
      }
      .footer-logo {
        margin-top: 70px;
        img {
          width: 150px;
        }
      }
    }
    .box-middle {
      position: absolute;
      bottom: 30px;
      left: 37vw;
      text-align: center;
      font-size: 12px;
      .middle-text {
        font-size: 12px;
        position: relative;
        line-height: 1.5;
        a {
          margin-top: 2px;
          color: white;
          text-decoration: none;
        }
      }
    }
    .box-right {
      position: absolute;
      display: block;
      bottom: 150px;
      right: 65px;
      ul {
        list-style: none;
        .right-item {
          color: #fff;
          padding: 10px;
          cursor: pointer;
          font-size: 14px;
          a {
            color: #fff;
            text-decoration: none;
          }
        }
      }
    }
    .box-contact {
      position: absolute;
      right: 5%;
      bottom: 30px;
      letter-spacing: 6px;
      font-size: 23px;
      i {
        transform: rotate(45deg);
        border: solid white;
        border-width: 0 3px 3px 0;
        display: inline-block;
        padding: 6px;
        position: absolute;
        top: 4px;
        right: -35px;
      }
    }
  }
}
</style>
