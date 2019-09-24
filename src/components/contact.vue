<template>
  <div class="contact">
    <div class="nav-bar">
      <img src="@/assets/menu.png" class="head-logo">
    </div>
    <div class="contact-box">
      <div class="box-left">
        <div class="left-select">
          <select class="select"> 
            <option :value="index" v-for="(item,index) in optionData" :key="index">{{item}}</option>
          </select>
        </div>
        <div class="address">
          <p class="address-title">广州市天河区华夏路16号富力盈凯广场21楼</p>
          <p class="address-desc">21st Floor, R&F Yingkai Plaza, 16 Huaxia Road, Tianhe District, Guangzhou</p>
        </div>
        <div class="contact-number">
          <p class="number">020-89192000</p>
        </div>
        <div class="footer-logo">
          <img src="@/assets/logo-white.png">
        </div>
      </div>
      <div class="box-middle">
        <span class="middle-text">
          ©2018 版权所有：广州实地房地产开发有限公司. <br/>
          ALL RIGHTS RESERVED: GUANGZHOU SEEDLAND REAL ESTATE DEVELOPMENT CO., LTD.<br/>
          <a href="https://github.com/">粤ICP备13058296号</a>
        </span>
      </div>
      <div class="box-right">
        <ul id="menu">
          <li class="right-item"><a href="#about">关于实地 ABOUT</a></li>
          <li class="right-item"><a href="javascript:;">地产开发 DEVELOPMENT</a></li>
          <li class="right-item"><a href="javascript:;">最新消息 LATEST NEWS</a></li>
          <li class="right-item"><a href="javascript:;">加入实地 JOIN US</a></li>
          <li class="right-item"><a href="javascript:;">廉洁举报 WHISTLEBLOWER</a></li>
        </ul>
      </div>
      <div class="box-contact">
        <div class="text">联系 CONTACT</div>
        <i></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'contact',
  data(){
    return{
      optionData:['实地地产（总部）','实地·广州常春藤','实地·广州蔷薇国际','实地·天津海棠雅著',
      '实地·武汉君兰汀岸','实地·无锡玫瑰庄园','实地·惠州常春藤','实地·遵义蔷薇国际','实地·三亚海棠华著',
      '实地·六盘水紫藤庄园','实地·中山璟湖城','实地·昆明花鹤翎','实地·惠州木槿雅著','实地·成都海棠名著',
      '实地·深圳剑兰郡','实地·太原紫藤公馆','实地·泰州君兰汀岸']
    }
  }
}
</script>

<style lang="less" scoped>
.contact{
  height: 100%;
  width: 100%;
  color: white;
  position: relative;
  .nav-bar{
    position: absolute;
    top: 8%;
    right: 6%;
    z-index: 1;
    img{
      width: 25px;
      height: 18px;
      cursor: pointer;
    }
  }
  .contact-box{
    position: absolute;
    height: 100vh;
    width: 100%;
    box-shadow: inset 0 -300px 196px rgba(0, 0, 0, 0.721);
    .box-left{
      position: absolute;
      bottom: 35px;
      left: 65px;
      .left-select{
        width: 350px;
        position: relative;
        .select{
          display: block;
          width: 350px;
          height: 50px;
          margin: 5px 0px;
          padding: 0px 24px;
          font-size: 16px;
          line-height: 1.75;
          color: #fff;
          background-color: rgba(255,255,255,0);
          border: 1px solid #cccccc;
          word-break: normal;
          appearance: none;
          option{
            background-color: #333
          }
        }
      }
      .left-select:after{
        content: url(http://py2j9zb6p.bkt.clouddn.com/arrow.png);
        font-size: 35px;
        color: #fff;
        right: 30px;
        top: 10px;
        padding: 0 0 2px;
        position: absolute;
        z-index: -1;
      }
      .address{
        margin-top: 30px;
        .address-title{
          width: 400px;
          line-height: 20px;
          margin-bottom: 20px;
          height: 13px;
          color: #fff;
        }
        .address-desc{
          width: 400px;
          font-size: 12px;
          line-height: 20px;
          white-space: nowrap;
        }
      }
      .contact-number{
        margin-top: 50px;
        .number{
          font-size: 20px;
        }
      }
      .footer-logo{
        margin-top: 70px;
        img{
          width: 270px
        }
      }
    }
    .box-middle{
      position: absolute;
      bottom: 30px;
      left: 37vw;
      text-align: center;
      .middle-text{
        font-size: 12px;
        position: relative;
        a{
          margin-top: 2px;
          color: white; text-decoration: none;
        }
      }
    }
    .box-right{
      position: absolute;
      display: block;
      bottom: 150px;
      right: 65px;
      ul{
        list-style: none;
        .right-item{
          color: #fff;
          padding: 10px;
          cursor: pointer;
          font-size: 14px;
          a{
            color:#fff;
            text-decoration: none;
          }
        }
      }
    }
    .box-contact{
      position: absolute;
      right: 5%;
      bottom: 30px;
      letter-spacing: 6px;
      font-size: 23px;
      i{
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