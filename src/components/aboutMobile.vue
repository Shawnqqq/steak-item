<template>
  <div class="container">
    <swiper class="about" :options="swiperOption" ref="mySwiper">
      <swiper-slide class="swiper-item">
        <div class="item-title">
          <div class="title-en">PROFILE</div>
          <div class="title-cn">项目简介</div>
        </div>
        <div class="item-container">
          <div class="item-content">
            <div class="item-content-title">Craftsmanship creates quality life products
              <br/>匠心筑就智慧人居精品
            </div>
            <div class="item-content-line"></div>
            <div class="item-content-text">
              <p>实地集团，2006年从广州出发，始于地产而不止于地产。13年来，
                实地一直致力于将人类科技的一切探索创新以人居业态为依托运用于生活中的方方面面，将科技与人文连接，
                重新构建人类对于自身与居住空间关系的认知。目前，实地集团已经发展成为一家为用户提供贯穿全生命周期智慧人居解决方案的综合性企业。
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
          <div class="title-en">PHILOSOPHY</div>
          <div class="title-cn">实地理念</div>
        </div>
        <div class="item-container">
          <div class="item-content">
            <div class="item-content-title">Culture
              <br/>实地文化
            </div>
            <div class="item-content-line"></div>
            <div class="item-content-text">
              <p>
                我们认为,生活就像是一颗种子，需要阳光、水分、土壤、空气的用心滋养，只有不断去灌溉培育，精心呵护，才能让种子茁壮成长，生活才会变得更加美好幸福。
              </p>
              <p>
                实地集团将为孕育人们美好生活的种子提供养分与能量，扶植他们破土发芽，生根向阳，去向更美好的地方。
              </p>
            </div>
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