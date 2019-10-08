<template>
  <swiper class="container" ref="mySwiper" :options="swiperOption">
    <swiper-slide class="swiper-item">
      <div class="shadow">
      </div>
      <div class="brief-content">
        <div class="title-cn">产品故事</div>
        <div class="title-en">STORY</div>
        <div class="tips">
          <div class="tips-en">SILDE RIGHT FOR MORE</div>
          <div class="tips-cn">向右滑动</div>
        </div>
        <div class="more">
          <div class="more-ball"></div>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
export default {
  data(){
    return{
      swiperOption:{
        loop:true
      }
    }
  }
}
</script>

<style lang="less" scoped>
@divide: 10;
@pswWidth: 640;
@p: @divide/@pswWidth * 1rem;

.container{
  height: 100%;
  width:100%;
  color: white;
  position: relative;
  .swiper-item{
    height: 100%;
    width: 100%;
    position: relative;
    .shadow{
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 50%;
      background: linear-gradient(rgba(51,51,51,0.13),rgba(0,0,0,0.88));
      filter: blur(20*@p);
    }
    .brief-content{
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 50%;
      font-family: NotoSansCJKsc-Thin;
      padding:10% 10% 0 0;
      .title-cn{
        font-size: 100*@p;
        font-weight: 100;
        text-align: right;
        line-height: 2;
      }
      .title-en{
        font-size: 60*@p;
        font-weight: 300;
        text-align: right;
      }
      .tips{
        font-size: 20*@p;
        text-align: right;
        line-height: 1.5;
        position: absolute;
        bottom: 20%;
        right: 25%;
      }
      .more{
        border: 4*@p solid #fff;
        height: 46*@p;
        width: 75*@p;
        border-radius: 25*@p;
        padding: 7*@p;
        display: block;
        position: absolute;
        bottom: 20%;
        right: 10%;
        margin-top: 13*@p;
        .more-ball{
          position: absolute;
          border: 2*@p solid #fff;
          background-color: #fff;
          height: 15*@p;
          width: 15*@p;
          border-radius: 20*@p;
          top: 26%;
          animation: slideiconleft 2s 1s linear infinite;
        }
        @keyframes slideiconleft {
          0%{
            opacity: 1;
            left:70%;
          }
          100%{
            opacity: 0;
            left: 10%;
          }
        }
      }
    }
  }
}
</style>