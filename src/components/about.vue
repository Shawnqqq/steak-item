<template>
  <div class="container">
    <swiper class="about" :options="swiperOption" ref="mySwiper">
      <swiper-slide class="swiper-item">
        <div class="item-left">
          <div class="item-left-en">ABOUT</div>
          <div class="item-left-cn">汉和牛</div>
        </div>
        <div class="item-right">
          <div class="profile-title-en">
            Craftsmanship creates quality steak
          </div>
          <div class="profile-title-cn">匠心筑就品质牛排</div>
          <div class="profile-text">
            <p>
              匠心养牛在坚持，品质出品在实力
            </p>
            <p>
              望和牛，世界顶级的和牛科学养殖体系，100多种饲料精选和配比，申请国家多项专利，智慧农场3.0用物联网IOT检测并干预和牛的成长。
            </p>
            <p>
              望和牛，与肉类加工领导者顶乐集团的战略合作，业内顶尖的屠宰，排酸，急冻，分割，精修等加工技术
            </p>
          </div>
        </div>
        <div class="item-footer">
          <div class="footer-left">
            <div class="page-number">
              <span>01</span>
              / 02
            </div>
          </div>
          <div class="footer-right">
            <div class="footer-frame">
              <div class="frame-left">
                <div class="en">EXPLORE MORE</div>
                <div class="cn">了解更多</div>
              </div>
              <div class="frame-right">
                <div class="arrow"></div>
                <div class="line"></div>
                <div
                  :class="'aboutplus-' + index"
                  v-for="index in 4"
                  :key="index"
                >
                  +
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-pagination"></div>
        <div class="nav-bar">
          <img
            src="@/assets/menu.png"
            class="head-logo"
            @click="navLock = true"
          />
        </div>
      </swiper-slide>
      <swiper-slide class="swiper-item">
        <div class="item-left">
          <div class="item-left-en">HOW</div>
          <div class="item-left-cn">如何煎好一块牛排</div>
        </div>
        <div class="item-right-brand">
          <video
            src="http://www.seedland.cc/wp/wp-content/uploads/2019/04/video_three.mp4"
            muted
            controls
            loop="loop"
            class="brand-video"
          ></video>
          <div class="brand-text">
            <img src="@/assets/how-1.jpg">
          </div>
        </div>
        <div class="item-footer">
          <div class="footer-left">
            <div class="page-number">
              <span>02</span>
              / 02
            </div>
          </div>
          <div class="footer-right">
            <div class="footer-prev">
              <div class="frame-next">
                <div class="arrow"></div>
                <div class="line"></div>
                <div
                  :class="'aboutplus-' + index"
                  v-for="index in 4"
                  :key="index"
                >
                  +
                </div>
              </div>
            </div>
            <div class="footer-frame next prev">
              <div class="frame-next">
                <div class="arrow"></div>
                <div class="line"></div>
                <div
                  :class="'aboutplus-' + index"
                  v-for="index in 4"
                  :key="index"
                >
                  +
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-pagination"></div>
        <div class="nav-bar">
          <img
            src="@/assets/menu.png"
            class="head-logo"
            @click="navLock = true"
          />
        </div>
      </swiper-slide>
      <!-- <swiper-slide class="swiper-item">
        <div class="item-left">
          <div class="item-left-en">GLORY</div>
          <div class="item-left-cn">实地荣誉</div>
        </div>
        <div class="item-right-glory">
          <div class="glory-left">Seedland credentials 集团荣誉</div>
          <ul class="glory-right">
            <li>2017年、2018年</li>
            <p>
              连续两年入选国务院发展研究中心企业研究所、清华大学房地产研究所、中国指数研究院-中国房地产公司品牌价值TOP30、中国房地产住宅开发专业领先品牌价值TOP10
              –智慧人居
            </p>
            <li>2018年</li>
            <p>
              中国房地产业协会-中国房地产开发企业100强、中国房地产开发企业品牌价值华南10强
            </p>
            <li>2018年</li>
            <p>新浪乐居 年度品牌创新科技奖</p>
            <li>2018年</li>
            <p>时代周报 年度产品创新奖</p>
            <li>2018年</li>
            <p>人民网 年度实力品牌企业</p>
            <li>2019 年</li>
            <p>
              国务院发展研究中心企业研究所、清华大学房地产研究所、中国指数研究院联合发布-中国房地产百强企业
            </p>
            <p>观点指数研究院-房地产卓越100榜</p>
            <p>
              亿翰智库-中国房地产品牌价值TOP100、中国房地产企业粤港澳大湾区竞争力TOP20、中国房地产企业品牌价值成长性二十强、中国房地产企业品牌运营能力二十强
            </p>
            <p>观点指数研究院-中国年度科技地产领军企业</p>
            <p>♦实地 · 武汉君兰汀岸</p>
            <p>2017年环球设计第1601期推荐项目</p>
            <p>♦实地 · 三亚海棠华著</p>
            <p>意大利A’Design Award室内空间和展览类金奖</p>
            <p>♦实地 · 遵义蔷薇国际</p>
            <p>遵义地产十年地标楼盘</p>
            <p>♦ 实地 · 天津海棠雅著</p>
            <p>意大利A’Design Award室内空间和展览类银奖</p>
            <p>红棉中国设计奖 年度室内设计至尊奖</p>
            <p>2017年金盘奖 年度最佳售楼空间</p>
            <p>♦实地 · 广州常春藤</p>
            <p>
              2016年、2018年先后两次通过BREEAM英国绿色建筑评估认证荣获广州区域首个全球杰出先驱奖
            </p>
            <p>2018年荣获新浪乐居 年度智慧人居奖</p>
            <p>2018年获网易新闻&广东省地产商会中国地产冠军榜年度人气明星楼盘</p>
            <p>2017年度中国地产冠军榜 年度品质精工楼盘</p>
            <p>♦实地 · 广州蔷薇国际</p>
            <p>意大利A’Design Award室内空间和展览类银奖</p>
            <p>2017中国房产风云榜年度品质楼盘</p>
            <p>2017年获克尔瑞 广州楼盘销售面积TOP10</p>
            <p>2017年获微博 十大房地产创新营销项目类（广东）</p>
            <p>
              2018年获网易房产&广东省地产商会中国地产冠军榜十大畅销红盘（广州）
            </p>
          </ul>
        </div>
        <div class="item-footer">
          <div class="footer-left">
            <div class="page-number">
              <span>05</span>
              / 05
            </div>
          </div>
          <div class="footer-right">
            <div class="footer-prev">
              <div class="frame-next">
                <div class="arrow"></div>
                <div class="line"></div>
                <div
                  :class="'aboutplus-' + index"
                  v-for="index in 4"
                  :key="index"
                >
                  +
                </div>
              </div>
            </div>
            <div class="footer-frame next prev">
              <div class="frame-next">
                <div class="arrow"></div>
                <div class="line"></div>
                <div
                  :class="'aboutplus-' + index"
                  v-for="index in 4"
                  :key="index"
                >
                  +
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-pagination"></div>
        <div class="nav-bar">
          <img
            src="@/assets/menu.png"
            class="head-logo"
            @click="navLock = true"
          />
        </div>
      </swiper-slide> -->
    </swiper>
    <sideNav v-if="navLock" @close="closeNav" />
  </div>
</template>

<script>
import sideNav from "@/components/sideNav.vue";

export default {
  name: "about",
  props: {},
  components: {
    sideNav
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".footer-frame",
          prevEl: ".footer-prev"
        }
      },
      render: true,
      navLock: false
    };
  },
  methods:{
    closeNav(val) {
      this.navLock = val;
    }
  }
};
</script>

<style lang="less">
.container {
  width: 100%;
  height: 100%;
  position: relative;
  .about {
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    .swiper-item {
      width: 100%;
      height: auto;
      padding-top: 3%;
      padding-left: 5%;
      position: relative;
      .item-left {
        display: inline-block;
        position: absolute;
        .item-left-en {
          font-family: "DIN-Regular";
          font-size: 18px;
          letter-spacing: 3px;
          margin-bottom: 10px;
        }
        .item-left-cn {
          font-family: "NotoSansCJKsc-Light", sans-serif;
          font-size: 18px;
        }
      }
      .item-right {
        display: inline-block;
        width: 70vw;
        margin: 5% 0 0 7%;
        .profile-title-en {
          font-family: "NotoSansCJKsc-Light", sans-serif;
          font-size: 50px;
          font-weight: 300;
          white-space: nowrap;
        }
        .profile-title-cn {
          padding-left: 15%;
          margin-top: 1%;
          font-family: "NotoSansCJKsc-Light", sans-serif;
          font-size: 50px;
          white-space: nowrap;
          font-weight: 300;
        }
        .profile-text {
          overflow-y: auto;
          float: right;
          margin-top: 3%;
          width: 50vw;
          height: 30vh;
          p {
            font-family: "NotoSansCJKsc-Thin", sans-serif;
            font-size: 22px;
            font-weight: 300;
            line-height: 1.5;
            margin-bottom: 1em;
            letter-spacing: 1px;
          }
        }
        .milestones-text {
          overflow-y: auto;
          margin: 5%;
          width: 70vw;
          height: 40vh;
          strong {
            font-family: "NotoSansCJKsc-Medium";
            font-size: 18px;
          }
          p {
            font-family: "NotoSansCJKsc-Thin", sans-serif;
            font-size: 18px;
            font-weight: 300;
            margin: 1em 0;
            letter-spacing: 1px;
            opacity: 0.9;
          }
        }
      }
      .item-footer {
        bottom: 30px;
        position: absolute;
        width: 100vw;
        .footer-left {
          display: inline-block;
          .page-number {
            font-family: "DIN-Regular";
            font-size: 40px;
            letter-spacing: 13px;
            white-space: nowrap;
            span {
              font-size: 100px;
            }
          }
        }
        .footer-right {
          display: inline-block;
          position: absolute;
          right: 80px;
          bottom: 30px;
          padding-right: 80px;
          font-size: 16px;
          .footer-frame {
            background-color: transparent;
            transition: background-color 0.3s ease-in;
            border: 1px solid #fafafa;
            padding: 10px 13px 0px;
            width: 318px;
            position: relative;
            .frame-left {
              font-size: 18px;
              width: auto;
              white-space: nowrap;
              .en {
                cursor: pointer;
                letter-spacing: 3px;
                white-space: nowrap;
                padding-bottom: 5px;
                font-family: "DIN-Light";
                font-size: 14px;
              }
              .cn {
                font-size: 15px;
                letter-spacing: 3px;
                white-space: nowrap;
                font-family: "NotoSansCJKsc-Light", sans-serif;
              }
            }
            .frame-right {
              display: inline-block;
              font-size: 12px;
              .arrow {
                border-bottom: 2px solid #fafafa;
                margin-top: 1px;
                position: absolute;
                width: 12px;
                transform: rotate(32deg);
                transform-origin: bottom right;
                right: 35px;
                bottom: 35px;
              }
              .line {
                border-bottom: 2px solid #fafafa;
                margin-top: 25px;
                position: absolute;
                width: 70px;
                right: 35px;
                bottom: 35px;
              }
              .aboutplus-1 {
                position: absolute;
                top: -11px;
                left: -5px;
                font-size: 18px;
              }
              .aboutplus-2 {
                position: absolute;
                top: -11px;
                right: -5px;
                font-size: 18px;
              }
              .aboutplus-3 {
                position: absolute;
                bottom: -12px;
                left: -5px;
                font-size: 18px;
              }
              .aboutplus-4 {
                position: absolute;
                bottom: -12px;
                right: -5px;
                font-size: 18px;
              }
            }
          }
          .footer-frame:hover {
            background-color: rgb(82, 82, 82);
          }
          .footer-frame.next,
          .footer-prev {
            background-color: transparent;
            border: 1px solid #fafafa;
            padding: 10px;
            height: 57px;
            width: 57px;
            position: relative;
            display: inline-block;
            margin-right: 50px;
            transition: background-color 0.3s ease-in;
            .frame-next {
              position: absolute;
              top: 50%;
              left: 25%;
              .arrow {
                transform: rotate(-35deg) translateY(1px);
                transform-origin: bottom left;
                width: 10px;
                border-bottom: 1px solid #fafafa;
              }
              .line {
                border-bottom: 1px solid #fafafa;
                width: 29px;
              }
              .aboutplus-1 {
                position: absolute;
                top: -37px;
                left: -19px;
              }
              .aboutplus-2 {
                position: absolute;
                top: -37px;
                right: -17px;
              }
              .aboutplus-3 {
                position: absolute;
                bottom: -35px;
                left: -19px;
              }
              .aboutplus-4 {
                position: absolute;
                bottom: -35px;
                right: -19px;
              }
            }
          }
          .footer-frame.next:hover {
            background-color: rgb(82, 82, 82);
          }
          .footer-prev:hover {
            background-color: rgb(82, 82, 82);
          }
          .footer-frame.next.prev {
            margin-right: 0;
            .arrow {
              transform: rotate(389deg) translate(17px, -9px);
              transform-origin: bottom right;
            }
          }
        }
      }
      .item-right-brand {
        display: flex;
        width: 75vw;
        margin: 7% 10% 5%;
        .brand-video {
          width: 50%;
        }
        .brand-text {
          margin-left: 5%;
          img{
            position: absolute;
            height: 60vh;
          }
        }
      }
      .item-right-ideal {
        display: flex;
        flex-direction: column;
        width: 65vw;
        margin: 1% 15% 5%;
        max-height: 65vh;
        overflow-y: auto;
        padding: 1%;
        .ideal-btn {
          display: flex;
          .idealBtn {
            background: rgba(255, 255, 255, 0.5);
            position: relative;
            padding: 13px 25px;
            border: 1px solid #fff;
            font-family: "NotoSansCJKsc-Light";
            font-weight: 100;
            font-size: 24px;
            cursor: pointer;
            white-space: nowrap;
            width: 250px;
            margin-right: 5%;
            opacity: 0.5;
            .ideal-push-1 {
              position: absolute;
              display: none;
              top: -17px;
              left: -8px;
            }
            .ideal-push-2 {
              position: absolute;
              display: none;
              top: -17px;
              right: -9px;
            }
            .ideal-push-3 {
              position: absolute;
              display: none;
              bottom: -15px;
              left: -8px;
            }
            .ideal-push-4 {
              position: absolute;
              display: none;
              bottom: -15px;
              right: -9px;
            }
          }
          .idealBtn.active {
            opacity: 1;
            .ideal-push-1 {
              display: block;
            }
            .ideal-push-2 {
              display: block;
            }
            .ideal-push-3 {
              display: block;
            }
            .ideal-push-4 {
              display: block;
            }
          }
        }
        .ideal-text {
          display: flex;
          margin-top: 7%;
          .text-left {
            width: 65%;
            margin-right: 6%;
            .text-left-title {
              font-family: "NotoSansCJKsc-Thin";
              font-size: 4vw;
              white-space: nowrap;
              font-weight: 100;
            }
            .text-left-desc {
              font-family: "NotoSansCJKsc-Thin";
              font-size: 20px;
              margin-top: 30px;
              font-weight: 100;
              opacity: 0.9;
              p {
                margin: 4% 0;
                line-height: 1.5;
              }
            }
          }
          .text-right {
            width: 28%;
            opacity: 0.8;
            filter: blur(3px);
            .text-left-title {
              font-family: "NotoSansCJKsc-Thin";
              font-size: 30px;
              font-weight: 100;
            }
            .text-left-desc {
              font-family: "NotoSansCJKsc-Thin";
              font-size: 16px;
              margin-top: 30px;
              font-weight: 100;
              opacity: 0.9;
              p {
                margin: 4% 0;
                line-height: 1.5;
              }
            }
          }
        }
      }
      .item-right-glory {
        width: 70vw;
        margin: 8% 15% 5%;
        max-height: 50vh;
        overflow-y: auto;
        padding-top: 20px;
        display: flex;
        .glory-left {
          width: 38%;
          font-size: 18px;
          font-family: "NotoSansCJKsc-Medium";
          margin-top: 25px;
        }
        .glory-right {
          width: 60%;
          font-family: "NotoSansCJKsc-Thin", sans-serif;
          font-size: 18px;
          font-weight: 100;
          opacity: 0.9;
          li {
            line-height: 1.5;
            margin: 20px 0;
          }
          p {
            line-height: 1.5;
            margin: 15px 0;
          }
        }
      }
      .swiper-pagination {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        .swiper-pagination-bullet {
          height: 40px;
          margin-bottom: 8px;
          opacity: 0.3;
          cursor: pointer;
          border-radius: 0;
          width: 30px;
          border-left: 2px solid #fff;
          background: transparent;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
        }
      }
      .nav-bar {
        position: absolute;
        top: 0;
        right: 6%;
        z-index: 1;
        img {
          width: 25px;
          height: 18px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
