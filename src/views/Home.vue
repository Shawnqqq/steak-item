<template>
  <div class="container">
    <div class="video-bg">
      <video class="video-content" muted="muted" loop='loop' autoplay="autoplay" src="@/assets/videobg.mp4"></video>
    </div>
    <div class="home">
      <banner/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import banner from "@/components/banner.vue";

export default {
  name: "home",
  components: {
    banner
  }
};
</script>

<style lang="less" scoped>
.container{
  position: relative;
  width: 100%;
  height: 100%;
  .video-bg{
  width: 100%;
  height: 100%;
    .video-content{
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
  .home{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>
