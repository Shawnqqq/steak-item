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
    <div class="section"><story /></div>
    <div class="section"><news /></div>
    <div class="section"><contact /></div>
  </full-page>
</template>

<script>
import banner from "@/components/banner.vue";
import about from "@/components/about.vue";
import development from "@/components/development.vue";
import story from "@/components/story.vue";
import news from "@/components/news.vue";
import contact from "@/components/contact.vue";

export default {
  name:'pcPage',
  components: {
    banner,
    about,
    development,
    story,
    news,
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
          "story",
          "news",
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