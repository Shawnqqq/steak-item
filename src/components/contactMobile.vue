<template>
  <div class="container">
    <img class="header-menu" src="@/assets/menu.png" @click="navLock=true">
    <div class="shadow"></div>
    <img class="footer-image" src="@/assets/footer.png">
    <div class="footer">
      <p>地址：广州市×××××××××××××××</p>
      <p>电话：0000-0000000</p>
      <p>©2019 版权所有：************</p>
      <p>ALL RIGHTS RESERVED:**************************************</p>
      <p>粤ICP备*********号</p>
    </div>
    <sideNavMobile v-if="navLock" @close="closeNav" />
  </div>
</template>

<script>
import sideNavMobile from "@/components/sideNavMobile.vue";

export default {
  data(){
    return{
      navLock:false
    }
  },
  components:{
    sideNavMobile
  },
  methods:{
    closeNav(val){
      this.navLock = val;
    }
  }
}
</script>

<style lang="less" scoped>
@divide: 10;
@pswWidth: 375;
@p: @divide/@pswWidth * 1rem;

.container{
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  color: white;
  position: relative;
  .header-menu{
    width: 25*@p;
    height: 20*@p;
    position: absolute;
    top: 30*@p;
    right: 30*@p;
  }
  .shadow{
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 50%;
    background: linear-gradient(rgba(51,51,51,0.13),rgba(0,0,0,0.88));
    filter: blur(20*@p);
  }
  .footer-image{
    width: 100%;
    margin-top: 40%;
  }
  .footer{
    position: absolute;
    bottom: 2%;
    width: 100%;
    text-align: center;
    p{
      font-size: 14*@p;
      transform: scale(.8)
    }
  }
}
</style>