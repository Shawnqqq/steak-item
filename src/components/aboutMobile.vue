<template>
  <div class="container">
    <swiper class="about" :options="swiperOption" ref="mySwiper">
      <swiper-slide class="swiper-item">
        <div class="item-title">
          <div class="title-en">ABOUT</div>
          <div class="title-cn">汉和牛</div>
        </div>
        <div class="item-container">
          <div class="item-content">
            <div class="item-content-title">Craftsmanship creates quality steak
              <br/>匠心筑就品质牛排
            </div>
            <div class="item-content-line"></div>
            <div class="item-content-text">
              <p>匠心养牛在坚持，品质出品在实力
                望和牛，世界顶级的和牛科学养殖体系，100多种饲料精选和配比，申请国家多项专利，智慧农场3.0用物联网IOT检测并干预和牛的成长。
                望和牛，与肉类加工领导者顶乐集团的战略合作，业内顶尖的屠宰，排酸，急冻，分割，精修等加工技术
              </p>
            </div>
          </div>
        </div>
        <div class="item-footer">
          <div class="item-prev">
            <img class="item-next-image" src="@/assets/arrow.png">
          </div>
          <div class="item-footer-number">01 — 02</div>
          <div class="item-next">
            <img class="item-next-image" src="@/assets/arrow.png">
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="swiper-item">
        <div class="item-title">
          <div class="title-en">HOW</div>
          <div class="title-cn">如何煎好一块牛排</div>
        </div>
        <div class="item-container">
          <div class="item-content">
            <img class="item-content-iamge" src="@/assets/how-1.jpg">
          </div>
        </div>
        <div class="item-footer">
          <div class="item-prev">
            <img class="item-next-image" src="@/assets/arrow.png">
          </div>
          <div class="item-footer-number">02 — 02</div>
          <div class="item-next">
            <img class="item-next-image" src="@/assets/arrow.png">
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  data(){
    return{
      swiperOption:{
        loop:true,
        navigation: {
          nextEl: ".item-next",
          prevEl: ".item-prev"
        }
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
  width: 100%;
  display: flex;
  flex-direction: column;
  .about{
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    color:white;
    .swiper-item{
      width: 100%;
      height: auto;
      padding-right: 30*@p;
      position: relative;
      .item-title{
        font-family: 'DIN-Regular';
        letter-spacing: 3*@p;
        margin-top: 30*@p;
        text-align: right;
        .title-en{
          font-size: 25*@p;
          line-height: 2;
          letter-spacing: 5*@p;
        }
        .title-cn{
          font-size: 25*@p;
          font-weight: 200;
        }
      }
      .item-container{
        height: 60%;
        .item-content{
          padding: 0 8%;
          margin-top: 50*@p;
          .item-content-title{
            font-family: NotoSansCJKsc-Thin;
            font-size: 34*@p;
            font-weight: 300;
            line-height: 1.5;
            margin-bottom: 20*@p;
          }
          .item-content-line{
            border-bottom: 1px solid #fff;
            width: 200*@p;
            opacity: 0.6;
          }
          .item-content-text{
            font-family: NotoSansCJKsc-Thin;
            font-size: 28*@p;
            font-weight: 300;
            letter-spacing: 2*@p;
            p{
              margin: 20*@p 0;
            }
          }
          .item-content-iamge{
            width: 100%;
          }
        }
      }
      .item-footer{
        display: flex;
        position: absolute;
        bottom: 2vh;
        right: 30*@p;
        width: auto;
        font-size: 32*@p;
        .item-next-image{
          width: 45*@p;
          height: 45*@p;
          cursor: pointer;
        }
        .item-prev{
          transform: rotate(90deg);
        }
        .item-next{
          transform: rotate(-90deg);
        }
        .item-footer-number{
          line-height: 54*@p;
          padding: 0 18*@p;
        }
      }
    }
  }
}
</style>