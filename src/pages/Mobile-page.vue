<template>
  <full-page
    class="mobile-container"
    ref="fullpage"
    :options="options"
    id="fullpage"
  > 
    <div class="section"><bannerMobile /></div>
    <div class="section"><aboutMobile /></div>
    <div class="section"><developmentMobile /></div>
  </full-page>
</template>

<script>
import bannerMobile from "@/components/bannerMobile.vue";
import aboutMobile from "@/components/aboutMobile.vue";
import developmentMobile from "@/components/developmentMobile.vue";

export default {
  data(){
    return{
      options:{
        licenseKey: "4F375E3E-7D814D7F-B82954BA-31DC667F",
      }
    }
  },
  components:{
    bannerMobile,
    aboutMobile,
    developmentMobile
  }
}
</script>

<style lang="less">
@divide: 10;
@pswWidth: 640;
@p: @divide/@pswWidth * 1rem;

.mobile-container{
  width: 100%;
  height: 100%;
}
</style>