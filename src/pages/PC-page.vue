<template>
  <full-page
    class="container"
    ref="fullpage"
    :options="options"
    id="fullpage"
    >
    <div class="section"><banner /></div>
    <div class="section"><about /></div>
    <div class="section"><development /></div>
    <div class="section"><news /></div>
    <div class="section"><join /></div>
    <div class="section"><whistleblower /></div>
    <div class="section"><contact /></div>
  </full-page>
</template>

<script>
import banner from "@/components/banner.vue";
import about from "@/components/about.vue";
import development from "@/components/development.vue";
import news from "@/components/news.vue";
import join from "@/components/join.vue";
import whistleblower from "@/components/whistleblower.vue";
import contact from "@/components/contact.vue";

export default {
  name:'pcPage',
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
        licenseKey: "4F375E3E-7D814D7F-B82954BA-31DC667F",
        anchors: [
          "loading",
          "about",
          "development",
          "news",
          "join",
          "whistleblower",
          "contact"
        ]
      }
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 100%;
}
</style>