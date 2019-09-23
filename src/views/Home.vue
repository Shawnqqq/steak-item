<template>
  <div class="container">
    <div class="video-bg">
      <video class="video-content" muted="muted" loop='loop' autoplay="autoplay" src="@/assets/videobg.mp4"></video>
    </div>
    <full-page class="home" 
      ref="fullpage"
      :options="options"
      id="fullpage">
      <div class="section"><banner/></div>
      <div class="section"><about/></div>
      <div class="section"><development/></div>
      <div class="section"><news/></div>
      <div class="section"><join/></div>
      <div class="section"><whistleblower/></div>
      <div class="section"><contact/></div>
    </full-page>
  </div>
</template>

<script>
// @ is an alias to /src
import banner from "@/components/banner.vue";
import about from "@/components/about.vue";
import development from "@/components/development.vue";
import news from "@/components/news.vue";
import join from "@/components/join.vue"
import whistleblower from "@/components/whistleblower.vue"
import contact from "@/components/contact.vue"

export default {
  name: "home",
  components: {
    banner,
    about,
    development,
    news,
    join,
    whistleblower,
    contact
  },
  data(){
    return{
      options:{
        licenseKey: "4F375E3E-7D814D7F-B82954BA-31DC667F"
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
  .video-bg{
  width: 100%;
  height: 100%;
  position: absolute;
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
