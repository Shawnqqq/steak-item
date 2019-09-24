<template>
  <swiper class="about" :options="swiperOption" ref="mySwiper">
    <swiper-slide class="swiper-item">
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
    </swiper-slide>
    <swiper-slide class="swiper-item">
      <div class="item-left">
        <div class="item-left-en">MILESTONES</div>
        <div class="item-left-cn">里程碑</div>
      </div>
      <div class="item-right">
        <simplebar class="milestones-text">
          <strong>萌芽，生长的开始..</strong>
          <p>2006年,一股地产新兴势力在华南地区悄然崛起，实地集团正式成立。</p>
          <strong>扎根，能量的注入</strong>
          <p>2006年，实地集团在中山启动第一个综合社区项目——实地•中山璟湖城。该项目获当地“最受欢迎楼盘”、“最具魅力园林社区”等奖项，为集团赢得良好开局及市场声誉。</p>
          <strong>生长，全面的发展</strong>
          <p>实地集团发展迅猛，一路高歌、不断壮大，陆续推出实地•遵义蔷薇国际、实地•六盘水紫藤庄园等高品质地产项目，实现以广州为总部，辐射周边省份的跨越式发展。</p>
          <strong>成熟，崭新的高度</strong>
          <p>2013年，实地集团发展日益成熟，战略触角延伸至华东等地区。实地•无锡玫瑰庄园等项目的落地标志着实地集团吹响进发中国东部房地产市场的号角，并向更高的目标迈进。</p>
          <strong>回归，荣耀的释放</strong>
          <p>2015年，实地集团回归一线城市。在广州筑造的百万方生活综合体——实地•广州常春藤项目，拉开了集团新一轮战略布局的序幕。2017年，实地进入第二个十年，旗下项目多点齐发，打开全国发展的新格局。</p>
          <strong>绽放，力量的迸发</strong>
          <p>2018年，实地集团加速拓展，新布局十余个中国潜力城市，并正式提出构建SLS（Smart Life System）智慧人居系统的战略设想，通过建立统一的云平台，与用户保持高频次的互动，不断迭代产品、优化服务，构建覆盖家居、社区、城市的智慧生活版图。</p>
        </simplebar>
      </div>
      <div class="item-footer">
        <div class="footer-left">
          <div class="page-number">
            <span>02</span>
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
    </swiper-slide>
    <swiper-slide class="swiper-item">
      <div class="item-left">
        <div class="item-left-en">BRAND CONNOTATION</div>
        <div class="item-left-cn">品牌诠释</div>
      </div>
      <div class="item-right-brand">
        <video src="http://www.seedland.cc/wp/wp-content/uploads/2019/04/video_three.mp4" muted controls loop='loop' class="brand-video"></video>
        <div class="brand-text">
          <div class="brand-title">品牌诠释</div>
          <div class="brand-line"></div>
          <div class="brand-desc">实地（Seedland0），寓意为土壤，实地一直奉行种子文化，认为生活就像是一颗种子，需要阳光、水分、土壤、空气的用心滋养，只有不断去灌溉培育，精心呵护，
            才能让种子茁壮成长，生活才会变得更加美好幸福。不论是居住空间的创新与改造、高科技的社区智能集约，亦或是和谐人居的社区服务，实地致力于关注每一个个体的真实需求，
            为未来全新的智慧人居生活提供完整舒适的体验服务。</div>
        </div>
      </div>
      <div class="item-footer">
        <div class="footer-left">
          <div class="page-number">
            <span>03</span>
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
    </swiper-slide>
  </swiper>
</template>

<script>
import simplebar from 'simplebar-vue';
import 'simplebar/dist/simplebar.min.css'

export default {
  name:'about',
  props: {
  },
  data(){
    return{
      swiperOption:{
        loop: false
      }
    }
  },
  components: {
    simplebar
  }
}
</script>

<style lang="less" scoped>
.about{
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: rgba(0,0,0,.5);
  color: white;
  .swiper-item{
    width:100%;
    height:auto;
    padding-top: 3%;
    padding-left: 5%;
    position: relative;
    .item-left{
      display: inline-block;
      position: absolute;
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
      margin: 5% 0 0 7%;
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
        margin-top: 3%;
        width: 50vw;
        height: 30vh;
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
      .milestones-text{
        margin: 5%;
        width: 70vw;
        height: 40vh;
        strong{
          font-family: 'NotoSansCJKsc-Medium';
          font-size:18px;
        }
        p{
          font-family: "NotoSansCJKsc-Thin", sans-serif;
          font-size: 18px;
          font-weight: 300;
          margin: 1em 0;
          letter-spacing: 1px;
          opacity: 0.9;
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
    .item-right-brand{
      display: flex;
      width: 75vw;
      margin: 7% 10% 5%;
      .brand-video{
        width: 50%;
      }
      .brand-text{
        margin-left:5%;
        .brand-title{
          font-family: "NotoSansCJKsc-Light", sans-serif;
          font-size: 42px;
          font-weight: 300;
        }
        .brand-line{
          border-bottom: white 1px solid;
          width: 100px;
          margin: 20px 0px;
        }
        .brand-desc{
          font-family: "NotoSansCJKsc-Thin", sans-serif;
          font-size: 18px;
          max-width: 100%;
          position: relative;
          line-height: 24px;
          font-weight: 300;
        }
      }
    }
  }
}
</style>