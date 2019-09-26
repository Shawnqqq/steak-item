<template>
  <div class="join">
    <div class="nav-bar">
      <img src="@/assets/menu.png" class="head-logo" @click="navLock = true"/>
    </div>
    <div class="join-box">
      <div class="join-text">
        <h1 class="cn">加入实地</h1>
        <h1 class="en">JOIN US</h1>
      </div>
      <div class="more">
        <morePart />
      </div>
    </div>
    <sideNav v-if="navLock" @close="closeNav"/>
  </div>
</template>

<script>
import morePart from "@/components/morePart.vue";
import sideNav from "@/components/sideNav.vue";

export default {
  name: "join",
  data(){
    return{
      navLock:false
    }
  },
  components: {
    morePart,
    sideNav
  },
  methods:{
    closeNav(val){
      this.navLock = val
    }
  }
};
</script>

<style lang="less" scoped>
.join {
  height: 100%;
  width: 100%;
  color: white;
  position: relative;
  .nav-bar {
    position: absolute;
    top: 8%;
    right: 6%;
    z-index: 1;
    img {
      width: 25px;
      height: 18px;
      cursor: pointer;
    }
  }
  .join-box {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.24);
    .join-text {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      margin-left: 10%;
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
      right: 200px;
      top: 50%;
      transform: translateY(-50%);
      margin-left: 5%;
    }
  }
}
</style>
