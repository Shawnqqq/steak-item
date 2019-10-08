<template>
  <swiper class="news" :options="swiperOption" ref="mySwiper">
    <swiper-slide class="swiper-item">
      <div class="nav-bar">
        <img src="@/assets/menu.png" class="head-logo" @click="navLock = true" />
      </div>
      <div class="news-box">
        <div class="news-text">
          <h1 class="cn">物流售后</h1>
          <h1 class="en">LOGISTICS</h1>
        </div>
        <div class="more">
          <morePart />
        </div>
      </div>
      <sideNav v-if="navLock" @close="closeNav" />
    </swiper-slide>
    <swiper-slide class="swiper-item">
      <img class="left-arrow" src="@/assets/left-arrow.png">
      <div class="logistics-top line"></div>
      <img class="logistics-left" src="@/assets/logistics-1.jpg" >
      <img class="logistics-right" src="@/assets/logistics-2.jpg" >
      <div class="logistics-bottom line"></div>
    </swiper-slide>
  </swiper>
</template>

<script>
import morePart from "@/components/morePart.vue";
import sideNav from "@/components/sideNav.vue";

export default {
  name: "news",
  data() {
    return {
      navLock: false,
      swiperOption:{
        loop:true,
        navigation:{
          nextEl:".more",
          prevEl:".left-arrow"
        }
      }
    };
  },
  components: {
    morePart,
    sideNav
  },
  methods: {
    closeNav(val) {
      this.navLock = val;
    }
  }
};
</script>

<style lang="less" scoped>
.news {
  height: 100%;
  width: 100%;
  color: white;
  position: relative;
  .swiper-item{
    width: 100%;
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
    .news-box {
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.24);
      .news-text {
        position: absolute;
        left: 55%;
        top: 55%;
        transform: translateY(-50%);
        .cn {
          line-height: 2;
          font-size: 44px;
          font-family: "NotoSansCJKsc-Light";
          font-weight: lighter;
        }
        .en {
          line-height: 50px;
          font-size: 65px;
          font-weight: lighter;
          text-transform: uppercase;
          font-family: NotoSansCJKsc-Thin;
        }
      }
      .more {
        position: absolute;
        bottom: 80px;
        right: 80px;
      }
    }
    .left-arrow{
      position: absolute;
      left: 5%;
      top: 6%;
      width: 45px;
    }
    .line{
      width: 80%;
      height: 1px;
      border: 1px solid #fff;
    }
    .logistics-top{
      position: absolute;
      top: 15%;
      left: 10%;
    }
    .logistics-bottom{
      position: absolute;
      bottom: 10%;
      left: 10%;
    }
    .logistics-left{
      position: absolute;
      top: 25%;
      left: 10%;
      height: 50%;
    }
    .logistics-right{
      position: absolute;
      top: 25%;
      left: 50%;
      height: 50%;
    }
  }
}
</style>

