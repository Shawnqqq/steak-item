<template>
  <div class="news">
    <div class="nav-bar">
      <img src="@/assets/menu.png" class="head-logo">
    </div>
    <div class="news-box">
      <div class="news-text">
        <h1 class="cn">最新消息</h1>
        <h1 class="en">LATEST NEWS</h1>
      </div>
      <div class="more">
        <morePart/>
      </div>
    </div>
  </div>
</template>

<script>
import morePart from "@/components/morePart.vue";

export default {
  name:'news',
  components:{
    morePart
  }
}
</script>

<style lang="less" scoped>
.news{
  height: 100%;
  width: 100%;
  color: white;
  position: relative;
  .nav-bar{
    position: absolute;
    top: 8%;
    right: 6%;
    z-index: 1;
    img{
      width: 25px;
      height: 18px;
      cursor: pointer;
    }
  }
  .news-box{
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.24);
    .news-text{
      position: absolute;
      left: 55%;
      top: 55%;
      transform: translateY(-50%);
      .cn{
        line-height: 2;
        font-size: 44px;
        font-family: "NotoSansCJKsc-Light";
        font-weight: lighter;
      }
      .en{
        line-height: 50px;
        font-size: 65px;
        font-weight: lighter;
        text-transform: uppercase;
        font-family: NotoSansCJKsc-Thin;
      }
    }
    .more{
      position: absolute;
      bottom: 80px;
      right: 80px;
    }
  }
}
</style>