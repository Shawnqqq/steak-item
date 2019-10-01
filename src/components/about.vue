<template>
  <div class="container">
    <swiper class="about" :options="swiperOption" ref="mySwiper">
      <swiper-slide class="swiper-item">
        <div class="item-left">
          <div class="item-left-en">PROFILE</div>
          <div class="item-left-cn">项目简介</div>
        </div>
        <div class="item-right">
          <div class="profile-title-en">
            Craftsmanship creates quality life products
          </div>
          <div class="profile-title-cn">匠心筑就智慧人居精品</div>
          <div class="profile-text">
            <p>
              实地集团，2006年从广州出发，始于地产而不止于地产。13年来，实地一直致力于将人类科技的一切探索创新以人居业态为依托运用于生活中的方方面面，
              将科技与人文连接，重新构建人类对于自身与居住空间关系的认知。目前，实地集团已经发展成为一家为用户提供贯穿全生命周期智慧人居解决方案的综合性企业。
            </p>
            <p>
              实地集团现已覆盖全国六大最具成长力城市群，在26城全面绽放。每落子一地，均从区域先天资源的统筹观出发，开发每个城市的独特魅力，
              探索每个城市的人文价值，创造与之匹配的智能生活解决方案，为每座城市打造专属的人居经典。
            </p>
            <p>
              实地集团坚持用户至上原则，关注每一个个体的真实需求。从项目规划之初，就从用户痛点出发，以科技创新的产品思维先行，借助智能产品、数据分析、生活配套三位一体的服务体系，
              满足用户对居住环境安全、家庭健康、时间管理、情感交互等多维度的需求,以此为主线来逐步构建SLS
              (Smart Life System)智慧人居系统，为用户打造美好生活体验的同时，
              引领行业发展方向，提升城市整体的人居品质。
            </p>
          </div>
        </div>
        <div class="item-footer">
          <div class="footer-left">
            <div class="page-number">
              <span>01</span>
              / 05
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
          <div class="item-left-en">MILESTONES</div>
          <div class="item-left-cn">里程碑</div>
        </div>
        <div class="item-right">
          <div class="milestones-text">
            <strong>萌芽，生长的开始..</strong>
            <p>2006年,一股地产新兴势力在华南地区悄然崛起，实地集团正式成立。</p>
            <strong>扎根，能量的注入</strong>
            <p>
              2006年，实地集团在中山启动第一个综合社区项目——实地•中山璟湖城。该项目获当地“最受欢迎楼盘”、“最具魅力园林社区”等奖项，为集团赢得良好开局及市场声誉。
            </p>
            <strong>生长，全面的发展</strong>
            <p>
              实地集团发展迅猛，一路高歌、不断壮大，陆续推出实地•遵义蔷薇国际、实地•六盘水紫藤庄园等高品质地产项目，实现以广州为总部，辐射周边省份的跨越式发展。
            </p>
            <strong>成熟，崭新的高度</strong>
            <p>
              2013年，实地集团发展日益成熟，战略触角延伸至华东等地区。实地•无锡玫瑰庄园等项目的落地标志着实地集团吹响进发中国东部房地产市场的号角，并向更高的目标迈进。
            </p>
            <strong>回归，荣耀的释放</strong>
            <p>
              2015年，实地集团回归一线城市。在广州筑造的百万方生活综合体——实地•广州常春藤项目，拉开了集团新一轮战略布局的序幕。2017年，实地进入第二个十年，旗下项目多点齐发，打开全国发展的新格局。
            </p>
            <strong>绽放，力量的迸发</strong>
            <p>
              2018年，实地集团加速拓展，新布局十余个中国潜力城市，并正式提出构建SLS（Smart
              Life
              System）智慧人居系统的战略设想，通过建立统一的云平台，与用户保持高频次的互动，不断迭代产品、优化服务，构建覆盖家居、社区、城市的智慧生活版图。
            </p>
          </div>
        </div>
        <div class="item-footer">
          <div class="footer-left">
            <div class="page-number">
              <span>02</span>
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
      </swiper-slide>
      <swiper-slide class="swiper-item">
        <div class="item-left">
          <div class="item-left-en">BRAND CONNOTATION</div>
          <div class="item-left-cn">品牌诠释</div>
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
            <div class="brand-title">品牌诠释</div>
            <div class="brand-line"></div>
            <div class="brand-desc">
              实地（Seedland0），寓意为土壤，实地一直奉行种子文化，认为生活就像是一颗种子，需要阳光、水分、土壤、空气的用心滋养，只有不断去灌溉培育，精心呵护，
              才能让种子茁壮成长，生活才会变得更加美好幸福。不论是居住空间的创新与改造、高科技的社区智能集约，亦或是和谐人居的社区服务，实地致力于关注每一个个体的真实需求，
              为未来全新的智慧人居生活提供完整舒适的体验服务。
            </div>
          </div>
        </div>
        <div class="item-footer">
          <div class="footer-left">
            <div class="page-number">
              <span>03</span>
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
      </swiper-slide>
      <swiper-slide class="swiper-item">
        <div class="item-left">
          <div class="item-left-en">PHILOSOPHY</div>
          <div class="item-left-cn">实地理念</div>
        </div>
        <div class="item-right-ideal">
          <div class="ideal-btn">
            <div
              :class="{ idealBtn: true, active: render }"
              @click="render = true"
            >
              实地文化 [Culture]
              <div
                :class="'ideal-push-' + index"
                v-for="index in 4"
                :key="index"
              >
                +
              </div>
            </div>
            <div
              :class="{ idealBtn: true, active: !render }"
              @click="render = false"
            >
              实地愿景 [Vision]
              <div
                :class="'ideal-push-' + index"
                v-for="index in 4"
                :key="index"
              >
                +
              </div>
            </div>
          </div>
          <div class="ideal-text" id="idealText">
            <div class="text-left" v-for="item in textData" :key="item.title">
              <div class="text-left-title">{{ item.title }}</div>
              <div class="text-left-desc" v-html="item.text"></div>
            </div>
            <div class="text-right" v-for="item in blurData" :key="item.title">
              <div class="text-left-title">{{ item.title }}</div>
              <div class="text-left-desc" v-html="item.text"></div>
            </div>
          </div>
        </div>
        <div class="item-footer">
          <div class="footer-left">
            <div class="page-number">
              <span>04</span>
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
      </swiper-slide>
      <swiper-slide class="swiper-item">
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
      </swiper-slide>
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
      navLock: false,
      idealText1: [
        {
          title: "万物向阳 实地生长",
          text:
            "<p>我们认为,生活就像是一颗种子，需要阳光、水分、土壤、空气的用心滋养，只有不断去灌溉培育，精心呵护，才能让种子茁壮成长，生活才会变得更加美好幸福。</p><p>实地集团将为孕育人们美好生活的种子提供养分与能量，扶植他们破土发芽，生根向阳，去向更美好的地方。</p>"
        }
      ],
      idealText2: [
        {
          title: "打造美好人居生活体验",
          text:
            "<p>人类文明的繁衍传承来自于外在两大驱力的推动，即科技创新与人文关怀。二者互为促进，互为支撑。实地集团坚持用户至上原则，始终秉承初心，关注每一个个体的真实需求，锲而不舍的创新只为提升生活品质。勇者不囿于现状，而智者尤擅于超越。实地相信，唯有不拘传统、锐意进取、持续迭代，才能在未来人居体验的探索道路上，创造匠心铸就的精品。</p>"
        }
      ]
    };
  },
  methods: {
    closeNav(val) {
      this.navLock = val;
    }
  },
  watch: {
    render() {
      let idealText = document.getElementById("idealText");
      idealText.style.opacity = 0;
      idealText.style.cssText += "transition:none";
      setTimeout(() => {
        idealText.style.cssText += "transition:opacity 500ms linear";
        idealText.style.opacity = 1;
      }, 500);
    }
  },
  computed: {
    textData() {
      if (this.render) {
        return this.idealText1;
      } else {
        return this.idealText2;
      }
    },
    blurData() {
      if (this.render) {
        return this.idealText2;
      } else {
        return this.idealText1;
      }
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
          animation: fadeIn 500ms 3s linear forwards;
          @keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }
          p {
            font-family: "NotoSansCJKsc-Thin", sans-serif;
            font-size: 18px;
            font-weight: 300;
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
          .brand-title {
            font-family: "NotoSansCJKsc-Light", sans-serif;
            font-size: 42px;
            font-weight: 300;
          }
          .brand-line {
            border-bottom: white 1px solid;
            width: 100px;
            margin: 20px 0px;
          }
          .brand-desc {
            font-family: "NotoSansCJKsc-Thin", sans-serif;
            font-size: 18px;
            max-width: 100%;
            position: relative;
            line-height: 24px;
            font-weight: 300;
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
