<template>
  <div class="container">
    <div class="header">
      <img class="header-menu" src="@/assets/menu.png" @click="navLock=true">
      <img class="header-logo" src="@/assets/logo.gif">
    </div>
    <div class="body">
      <div class="body-en">
        THE FUTURE<br/>IS HERE
      </div>
      <div class="body-cn">
        未来·就在眼前
      </div>
      <div class="body-down">
        <p class="donw-cn">向下滚动</p>
        <p class="donw-en">SLIDE FOR MORE</p>
      </div>
      <div class="slideicon">
        <div class="slideball"></div>
      </div>
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
  .header{
    display: flex;
    width: 100%;
    height: 60*@p;
    align-items: center;
    position: relative;
    .header-menu{
      width: 25*@p;
      height: 20*@p;
      position: absolute;
      left: 30*@p;
    }
    .header-logo{
      width: 200*@p;
      height: 16*@p;
      position: absolute;
      left: 50%;
      transform: translateX(-45%);
    }
  }
  .body{
    flex: 1;
    position: relative;
    padding-left: 30*@p;
    .body-en{
      position: absolute;
      top:15%;
      font-family: NotoSansCJKsc-Thin;
      font-size: 6vw;
      font-weight: 100;
    }
    .body-cn{
      position: absolute;
      top:30%;
      font-family: NotoSansCJKsc-Thin;
      font-size: 5vw;
      font-weight: 200;
      letter-spacing: 5*@p;
    }
    .body-down{
      position: absolute;
      bottom: 35%;
      left: -5%;
      display: flex;
      flex-direction: column;
      font-family: NotoSansCJKsc-Thin;
      font-size: 4vw;
      transform: rotate(-90deg);
      text-align: end;
    }
    .slideicon{
      position: absolute;
      bottom: 10%;
      border: 2*@p solid #fff;
      height: 65*@p;
      width: 30*@p;
      border-radius: 25*@p;
      padding: 7*@p;
      display: block;
      .slideball{
        position: absolute;
        border: 2*@p solid #fff;
        background-color: #fff;
        height: 10*@p;
        width: 10*@p;
        border-radius: 20*@p;
        top: 10%;
        animation: slideicondown 2s linear 1s infinite;
      }
      @keyframes slideicondown{
        0%{
          top:70%;
        }
        100%{
          top:10%;
        }
      }
    }
  }
}  
</style>