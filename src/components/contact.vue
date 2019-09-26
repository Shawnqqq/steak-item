<template>
  <div class="contact">
    <div class="nav-bar">
      <img src="@/assets/menu.png" class="head-logo" @click="navLock = true"/>
    </div>
    <div class="contact-box">
      <div class="box-left">
        <div class="left-select">
          <select class="select" id="select" @click="updateVal">
            <option
              :value="index"
              v-for="(item, index) in optionData"
              :key="index"
              >{{ item.title }}</option
            >
          </select>
        </div>
        <div class="address">
          <p class="address-title" v-text="adress"></p>
        </div>
        <div class="contact-number">
          <p class="number" v-text="tel"></p>
        </div>
        <div class="footer-logo">
          <img src="@/assets/logo-white.png" />
        </div>
      </div>
      <div class="box-middle">
        <span class="middle-text">
          ©2018 版权所有：广州实地房地产开发有限公司. <br />
          ALL RIGHTS RESERVED: GUANGZHOU SEEDLAND REAL ESTATE DEVELOPMENT CO.,
          LTD.<br />
          <a href="https://github.com/">粤ICP备13058296号</a>
        </span>
      </div>
      <div class="box-right">
        <ul id="menu">
          <li class="right-item"><a @click="goToSection('about')">关于实地 ABOUT</a></li>
          <li class="right-item">
            <a  @click="goToSection('development')">地产开发 DEVELOPMENT</a>
          </li>
          <li class="right-item"><a @click="goToSection('news')">最新消息 LATEST NEWS</a></li>
          <li class="right-item"><a @click="goToSection('join')">加入实地 JOIN US</a></li>
          <li class="right-item">
            <a @click="goToSection('whistleblower')">廉洁举报 WHISTLEBLOWER</a>
          </li>
        </ul>
      </div>
      <div class="box-contact">
        <div class="text">联系 CONTACT</div>
        <i></i>
      </div>
    </div>
    <sideNav v-if="navLock" @close="closeNav"/>
  </div>
</template>

<script>
import sideNav from "@/components/sideNav.vue";

export default {
  name: "contact",
  data(){
    return {
      optionData: [
        {title:"实地地产（总部）",adress:'广州市天河区华夏路16号富力盈凯广场21楼',tel:'020-89192000'},
        {title:"实地·广州常春藤",adress:'广州市黄埔区乔丰路与永和大道交汇处',tel:'020-26227888'},
        {title:"实地·广州蔷薇国际",adress:'广州市广汕路21号线钟岗地铁站西侧',tel:'020-32636888'},
        {title:"实地·天津海棠雅著",adress:'天津市津蓟区高速温泉城出口西侧500米',tel:'022-29208228'},
        {title:"实地·武汉君兰汀岸",adress:'武汉汉阳经济技术开发区滨江带',tel:'027-83769888'},
        {title:"实地·无锡玫瑰庄园",adress:'无锡市惠山区城铁国际商务区',tel:'0510-83256666'},
        {title:"实地·惠州常春藤",adress:'惠州市惠阳区惠南大道旁',tel:'0752-3916888'},
        {title:"实地·遵义蔷薇国际",adress:'遵义市新蒲新区播州大道与新蒲大道交叉路口',tel:'0851-28869999'},
        {title:"实地·三亚海棠华著",adress:'三亚海棠区海棠北路18号（海棠广场北侧200米）',tel:'0898-88859999'},
        {title:"实地·六盘水紫藤庄园",adress:'六盘水钟山区明湖路湿地公园旁',tel:'0858-8709888'},
        {title:"实地·中山璟湖城",adress:'中山市火炬开发区博爱七路113号（麦当劳得来速餐厅旁）',tel:'0760-85280728"'},
        {title:"实地·昆明花鹤翎",adress:'昆明市五华区普吉路普吉立交东北侧200米',tel:'0871-64336666'},
        {title:"实地·惠州木槿雅著",adress:'惠阳经济开发区御和路（淡水河岸）',tel:'0752-3737111'},
        {title:"实地·成都海棠名著",adress:'成都市青白江新城中心家乐福旁',tel:'028-83662666'},
        {title:"实地·深圳剑兰郡",adress:'深圳市罗湖区红桂路红桂横街27号',tel:'0755-22380888'},
        {title:"实地·太原紫藤公馆",adress:'太原市晋阳街与体育路交汇处以南',tel:'0351-5658888'},
        {title:"实地·泰州君兰汀岸",adress:'泰州市海陵区秋雪湖大道（秋雪湖旁100米',tel:'0523-82379999'}
      ],
      navLock:false,
      adress:'广州市天河区华夏路16号富力盈凯广场21楼',
      tel:'020-89192000'
    };
  },
  methods:{
    goToSection(section){
      fullpage_api.moveTo(section);
    },
    closeNav(val){
      this.navLock = val
    },
    updateVal(){
      let select = document.getElementById('select');
      let index = select.selectedIndex
      this.adress = this.optionData[index].adress
      this.tel = this.optionData[index].tel
    }
  },
  components:{
    sideNav
  }
};
</script>

<style lang="less" scoped>
.contact {
  height: 100%;
  width: 100%;
  color: white;
  position: relative;
  .nav-bar {
    position: absolute;
    top: 8%;
    right: 6%;
    z-index: 1;
    img {
      width: 25px;
      height: 18px;
      cursor: pointer;
    }
  }
  .contact-box {
    position: absolute;
    height: 100vh;
    width: 100%;
    box-shadow: inset 0 -300px 196px rgba(0, 0, 0, 0.721);
    .box-left {
      position: absolute;
      bottom: 35px;
      left: 65px;
      .left-select {
        width: 350px;
        position: relative;
        .select {
          display: block;
          width: 350px;
          height: 50px;
          margin: 5px 0px;
          padding: 0px 24px;
          font-size: 16px;
          line-height: 1.75;
          color: #fff;
          background-color: rgba(255, 255, 255, 0);
          border: 1px solid #cccccc;
          word-break: normal;
          appearance: none;
          option {
            background-color: #333;
          }
        }
      }
      .left-select:after {
        content: url(http://py2j9zb6p.bkt.clouddn.com/arrow.png);
        font-size: 35px;
        color: #fff;
        right: 30px;
        top: 10px;
        padding: 0 0 2px;
        position: absolute;
        z-index: -1;
      }
      .address {
        margin-top: 30px;
        .address-title {
          width: 400px;
          line-height: 20px;
          margin-bottom: 20px;
          height: 13px;
          color: #fff;
        }
        .address-desc {
          width: 400px;
          font-size: 12px;
          line-height: 20px;
          white-space: nowrap;
        }
      }
      .contact-number {
        margin-top: 50px;
        .number {
          font-size: 20px;
        }
      }
      .footer-logo {
        margin-top: 70px;
        img {
          width: 270px;
        }
      }
    }
    .box-middle {
      position: absolute;
      bottom: 30px;
      left: 37vw;
      text-align: center;
      .middle-text {
        font-size: 12px;
        position: relative;
        a {
          margin-top: 2px;
          color: white;
          text-decoration: none;
        }
      }
    }
    .box-right {
      position: absolute;
      display: block;
      bottom: 150px;
      right: 65px;
      ul {
        list-style: none;
        .right-item {
          color: #fff;
          padding: 10px;
          cursor: pointer;
          font-size: 14px;
          a {
            color: #fff;
            text-decoration: none;
          }
        }
      }
    }
    .box-contact {
      position: absolute;
      right: 5%;
      bottom: 30px;
      letter-spacing: 6px;
      font-size: 23px;
      i {
        transform: rotate(45deg);
        border: solid white;
        border-width: 0 3px 3px 0;
        display: inline-block;
        padding: 6px;
        position: absolute;
        top: 4px;
        right: -35px;
      }
    }
  }
}
</style>
