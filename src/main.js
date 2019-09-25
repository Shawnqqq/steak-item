import Vue from "vue";
import App from "./App.vue";
import router from "./router";
//全屏滚动
import VueFullPage from "vue-fullpage.js";
Vue.use(VueFullPage);

//scroll native 模式特性
import vuescroll from "vuescroll/dist/vuescroll-native";
Vue.use(vuescroll);

//element
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

//轮播图
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
Vue.use(VueAwesomeSwiper);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
