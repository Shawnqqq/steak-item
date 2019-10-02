<template>
  <div class="container">
    <div class="loading-image" v-show="imgLock">
      <img
        src="http://www.seedland.cc/wp/wp-content/themes/Seedland/assets/images/preloader.gif"
      />
    </div>
    <div class="video-bg" v-show="!imgLock">
      <video
        class="video-content"
        id="video-bg"
        muted="muted"
        loop="loop"
        autoplay="autoplay"
        src="http://www.seedland.cc/assets/videos/videobg.mp4"
      ></video>
    </div>
    <div v-if="!imgLock" class="home">
      <pcPage v-if="pc"/>
      <mobilePage v-else/>
    </div>
  </div>
</template>

<script>
import pcPage from "@/pages/PC-page.vue";
import mobilePage from "@/pages/Mobile-page.vue";

export default {
  name: "home",
  data() {
    return {
      imgLock: true,
      pc:true
    }
  },
  components:{
    pcPage,
    mobilePage
  },
  mounted() {
    let video = document.getElementById("video-bg");
    video.addEventListener(
      "canplaythrough",
      () => {
        this.imgLock = false;
      },
      false
    ),
    window.addEventListener('pageshow',this.mobileFunc)
    window.addEventListener('resize',this.mobileFunc)
  },
  methods:{
    mobileFunc(){
      let width = document.documentElement.clientWidth;
      if(width<1025){
        this.pc = false
      }else if(width>1024){
        this.pc = true
      }
    }
  }
};
</script>

<style lang="less" scoped>
.container{
  position: relative;
  width: 100%;
  height: 100%;
  .loading-image{
    width: 100vw;
    height: 100vh;
    background-color: #000;
    position: relative;
    img {
      display: block;
      margin: auto auto auto auto;
      max-height: 45%;
      max-width: 30%;
      position: absolute;
      top: 25%;
      left: 35%;
      z-index: 8;
    }
  }
  .video-bg {
    width: 100%;
    height: 100%;
    position: absolute;
    .video-content {
      position: fixed;
      background-size: cover;
      width: 100%;
      height: 100%;
      padding: 0;
      vertical-align: baseline;
      object-fit: cover;
      z-index: -99;
    }
  }
  .home {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>
