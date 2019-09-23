<template>
  <div class="about">
    <div class="swiper-item">
      <div class="item-left">
        <div class="item-left-en">PROFILE</div>
        <div class="item-left-cn">项目简介</div>
      </div>
      <div class="item-right">
        <div class="profile-title-en">Craftsmanship creates quality life products</div>
        <div class="profile-title-cn">匠心筑就智慧人居精品</div>
        <simplebar class="profile-text">
          <p>实地集团，2006年从广州出发，始于地产而不止于地产。13年来，实地一直致力于将人类科技的一切探索创新以人居业态为依托运用于生活中的方方面面，
            将科技与人文连接，重新构建人类对于自身与居住空间关系的认知。目前，实地集团已经发展成为一家为用户提供贯穿全生命周期智慧人居解决方案的综合性企业。</p>
          <p>实地集团现已覆盖全国六大最具成长力城市群，在26城全面绽放。每落子一地，均从区域先天资源的统筹观出发，开发每个城市的独特魅力，
            探索每个城市的人文价值，创造与之匹配的智能生活解决方案，为每座城市打造专属的人居经典。</p>
          <p>实地集团坚持用户至上原则，关注每一个个体的真实需求。从项目规划之初，就从用户痛点出发，以科技创新的产品思维先行，借助智能产品、数据分析、生活配套三位一体的服务体系，
            满足用户对居住环境安全、家庭健康、时间管理、情感交互等多维度的需求,以此为主线来逐步构建SLS (Smart Life System)智慧人居系统，为用户打造美好生活体验的同时，
            引领行业发展方向，提升城市整体的人居品质。</p>
        </simplebar>
      </div>
      <div class="item-footer">
        <div class="footer-left">
          <div class="page-number">
            <span>01</span>
            / 06
          </div>
        </div>
        <div class="footer-right">
          <div class="footer-frame">
            <div class="frame-left">
              <div class="en">EXPLORE MORE</div>
              <div class="cn">点击更多</div>
            </div>
            <div class="frame-right">
              <div class="arrow"></div>
              <div class="line"></div>
              <div :class="'aboutplus-'+index" v-for="index in 4" :key="index">+</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import simplebar from 'simplebar-vue';
import 'simplebar/dist/simplebar.min.css'

export default {
  name:'about',
  props: {
  },
  components: {
    simplebar
  }
}
</script>

<style lang="less" scoped>
.about{
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: rgba(0,0,0,.5);
  color: white;
  .swiper-item{
    width:100%;
    height: 100%;
    margin-top: 3%;
    margin-left: 5%;
    position: relative;
    .item-left{
      display: inline-block;
      position: absolute;
      top: 0;
      left: 0;
      .item-left-en{
        font-family: "DIN-Regular";
        font-size: 18px;
        letter-spacing: 3px;
        margin-bottom: 10px;
      }
      .item-left-cn{
        font-family: "NotoSansCJKsc-Light", sans-serif;
        font-size: 18px;
      }
    }
    .item-right{
      display: inline-block;
      width: 70vw;
      margin: 7% 0 0 7%;
      .profile-title-en{
        font-family: "NotoSansCJKsc-Light", sans-serif;
        font-size: 50px;
        font-weight: 300;
        white-space: nowrap;
      }
      .profile-title-cn{
        padding-left: 15%;
        margin-top: 1%;
        font-family: "NotoSansCJKsc-Light", sans-serif;
        font-size: 50px;
        white-space: nowrap;
        font-weight: 300;
      }
      .profile-text{
        float: right;
        margin-top: 5%;
        width: 40vw;
        height: 40vh;
        animation: fadeIn 500ms 3s linear forwards;
        @keyframes fadeIn{
          0%{opacity: 0;}
          100%{opacity: 1;}
        }
        p{
          font-family: "NotoSansCJKsc-Thin", sans-serif;
          font-size: 18px;
          font-weight: 300;
          margin-bottom: 1em;
          letter-spacing: 1px;
        }
      }
    }
    .item-footer{
      bottom: 30px;
      position: absolute;
      width: 100vw;
      .footer-left{
        display: inline-block;
        .page-number{
          font-family: "DIN-Regular";
          font-size: 40px;
          letter-spacing: 13px;
          white-space: nowrap;
          span{
            font-size:100px;
          }
        }
      }
      .footer-right{
        display: inline-block;
        position: absolute;
        right: 80px;
        bottom: 30px;
        padding-right: 80px;
        .footer-frame{
          background-color: transparent;
          transition: background-color 0.5s ease-in;
          border: 1px solid #fafafa;
          padding: 10px 13px 0px;
          width: 318px;
          position: relative;
          .frame-left{
            font-size: 18px;
            width: auto;
            white-space: nowrap;
            .en{
              cursor: pointer;
              letter-spacing: 3px;
              white-space: nowrap;
              padding-bottom: 5px;
              font-family: "DIN-Light";
              font-size: 14px;
            }
            .cn{
              font-size: 15px;
              letter-spacing: 3px;
              white-space: nowrap;
              font-family: "NotoSansCJKsc-Light", sans-serif;
            }
          }
          .frame-right{
            display: inline-block;
            font-size: 12px;
            .arrow{
              border-bottom: 2px solid #fafafa;
              margin-top: 1px;
              position: absolute;
              width: 12px;
              transform: rotate(32deg);
              transform-origin: bottom right;
              right: 35px;
              bottom: 35px;
            }
            .line{
              border-bottom: 2px solid #fafafa;
              margin-top: 25px;
              position: absolute;
              width: 70px;
              right: 35px;
              bottom: 35px;
            }
            .aboutplus-1{
              position: absolute;
              top: -11px;
              left: -5px;
              font-size: 18px;
            }
            .aboutplus-2{
              position: absolute;
              top: -11px;
              right: -5px;
              font-size: 18px;
            }
            .aboutplus-3{
              position: absolute;
              bottom: -12px;
              left: -5px;
              font-size: 18px;
            }
            .aboutplus-4{
              position: absolute;
              bottom: -12px;
              right: -5px;
              font-size: 18px;
            }
          }
        }
        .footer-frame:hover{
          background-color: rgb(82, 82, 82)
        }
      }
    }
  }
}
</style>