<template>
  <div class="development">
    <simplebar class="deve-box" 
      data-simplebar-auto-hide="false"
      v-show="singleLock">
      <div class="row">
        <div
          class="deve-item"
          v-for="(item, index) in deveDataTop"
          :key="index"
        >
          <div class="bg-color"></div>
          <img class="title-tips" src="@/assets/tips.png">
          <div class="deve-item-title">
            <div class="title-cn">{{ item.titleCn }}</div>
          </div>
          <img class="title-image" src="@/assets/steak.png">
          <div class="deve-item-btn" @click="singleTop(index)">
            <div :class="'btn-push-' + index" v-for="index in 4" :key="index">
              +
            </div>
            <div class="btn-box">EXPLORE</div>
            <div class="box-line-top"></div>
            <div class="box-line-left"></div>
            <div class="box-line-right"></div>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          class="deve-item"
          v-for="(item, index) in deveDataBottom"
          :key="index"
        >
          <div class="bg-color"></div>
          <img class="title-tips" src="@/assets/tips.png">
          <div class="deve-item-title">
            <div class="title-cn">{{ item.titleCn }}</div>
          </div>
          <img class="title-image" src="@/assets/steak.png">
          <div class="deve-item-btn" v-if="item.more"  @click="singleBottom(index)">
            <div :class="'btn-push-' + index" v-for="index in 4" :key="index">
              +
            </div>
            <div class="btn-box">EXPLORE</div>
            <div class="box-line-top"></div>
            <div class="box-line-left"></div>
            <div class="box-line-right"></div>
          </div>
        </div>
      </div>
    </simplebar>
    <div class="singleItem" v-show="!singleLock" v-for="item in singleItem" :key="item.name">
      <div class="shadow">
        <img class="single-out" src="@/assets/left-arrow.png" @click="singleLock=true">
      </div>
      <img class="single-image" src="@/assets/steak.png">
      <div class="single-content">
        <div class="single-title">产品参数</div>
        <div class="single-text">
          <p>品名：{{item.name}}</p>
          <p>重量：{{item.weight}}</p>
          <p>原产地：甘肃武威</p>
          <p>等级：{{item.grade}}</p>
          <p>厚度：{{item.thick}}</p>
          <p>数量：{{item.num}}</p>
          <p>保质期：18个月</p>
          <p>储存方式：-18°冷冻</p>
        </div>
      </div>
      <p class="price">RMB:
        <span>{{item.price}}</span>
      </p>
    </div>
  </div>
</template>

<script>
import simplebar from "simplebar-vue";
import "simplebar/dist/simplebar.min.css";

export default {
  name: "development",
  components: {
    simplebar
  },
  data() {
    return {
      deveDataTop: [
        {
          titleCn: "全系列内卖试吃",
          singleText:{weight:'200+10g',grade:'特选',thick:'1.2-1.5cm',num:'1块',price:'249'}
        },
        {
          titleCn: "汉和牛A5西冷牛排",
          singleText:{weight:'200+10g',grade:'A5',thick:'1.2-1.5cm',num:'1块',price:'630'}
        },
        {
          titleCn: "汉和牛A4牛排",
          singleText:{weight:'200+10g',grade:'A4',thick:'1.2-1.5cm',num:'1块',price:'349'}
        },
        {
          titleCn: "汉和牛A3牛排",
          singleText:{weight:'200+10g',grade:'A3',thick:'1.2-1.5cm',num:'1块',price:'249'}
        }
      ],
      deveDataBottom: [
        {
          titleCn: "汉和牛牛肉粒",
          singleText:{weight:'300+10g',grade:'特选',thick:'/',num:'1盒',price:'270'},
          more:true
        },
        {
          titleCn: "汉和牛A5菲力牛排",
          singleText:{weight:'200+10g',grade:'A5',thick:'1.2-1.5cm',num:'1块',price:'349'},
          more:true
        },
        {
          titleCn: "敬请期待",
          more:false
        }
      ],
      singleItem:[],
      singleLock:true
    };
  },
  methods:{
    singleTop(index){
      let content = this.deveDataTop[index]
      this.singleItem.splice(0,1,content.singleText)
      this.singleItem[0].name=content.titleCn
      this.singleLock=false
    },
    singleBottom(index){
      let content = this.deveDataBottom[index]
      this.singleItem.splice(0,1,content.singleText)
      this.singleItem[0].name=content.titleCn
      this.singleLock=false
    }
  }
};
</script>

<style lang="less" scoped>
.development {
  height: 100%;
  width: 100%;
  position: relative;
  .deve-box {
    height: 100%;
    position: relative;
    .row {
      display: flex;
      flex-wrap: nowrap;
      height: 50%;
      .deve-item {
        flex: none;
        position: relative;
        width: 25%;
        height: 50vh;
        box-sizing: border-box;
        background-size: cover;
        background-repeat: no-repeat;
        white-space: nowrap;
        transition: all 2s ease-in-out;
        font-size: 14px;
        .bg-color {
          position: absolute;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.7);
        }
        .title-tips{
          position: absolute;
          width: 64px;
        }
        .deve-item-title {
          position: absolute;
          top: 20%;
          color: #fff;
          z-index: 1;
          font-size: 15px;
          text-align: center;
          width: 100%;
          .title-cn {
            font-size: 16px;
            letter-spacing: 1px;
          }
        }
        .title-image{
          width: 200px;
          height: 200px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translateX(-50%) translateY(-50%)
        }
        .deve-item-btn {
          position: absolute;
          width: 125px;
          right: 10%;
          top: calc(50vh - 10vh);
          .btn-push-1 {
            color: #fff;
            position: absolute;
            left: -4px;
            bottom: -7px;
            transition: transform 0.7s ease-in-out;
          }
          .btn-push-2 {
            color: #fff;
            position: absolute;
            right: -4px;
            bottom: -7px;
            transition: transform 0.7s ease-in-out;
          }
          .btn-push-3 {
            color: #fff;
            position: absolute;
            left: -4px;
            bottom: -7px;
            z-index: 2 !important;
            transition: transform 0.7s ease-in-out;
          }
          .btn-push-4 {
            color: #fff;
            position: absolute;
            right: -4px;
            bottom: -7px;
            z-index: 2 !important;
            transition: transform 0.7s ease-in-out;
          }
          .btn-box {
            opacity: 0;
            z-index: 1;
            font-size: 14px;
            margin-top: -22px;
            float: right;
            width: 125px;
            height: 33px;
            padding-top: 6px;
            padding-bottom: 6px;
            color: #fff;
            background-color: rgba(0, 0, 0, 0.5);
            cursor: pointer;
            font-family: "DIN-Regular";
            letter-spacing: 3px;
            border-bottom: 1px solid #ffffff;
            text-align: center;
            line-height: 21px;
            transition: opacity 1.3s ease-in-out;
          }
          .box-line-top {
            width: 0px;
            height: 1px;
            background: #fff;
            position: absolute;
            bottom: 33px;
            right: 0;
            transition: width 1.6s;
            opacity: 0.7;
          }
          .box-line-left {
            width: 1px;
            height: 0px;
            background: #fff;
            position: absolute;
            left: 0px;
            bottom: 0px;
            transition: height 2.3s;
            opacity: 0.7;
          }
          .box-line-right {
            width: 1px;
            height: 0px;
            background: #fff;
            position: absolute;
            right: 0px;
            top: -21px;
            transition: height 2s;
            opacity: 0.7;
          }
          .btn-box:hover {
            background-color: rgba(179, 175, 175, 0.397);
          }
        }
      }
      .deve-item:hover {
        .bg-color {
          background: rgba(0, 0, 0, 0.35);
        }
        .btn-push-1 {
          transform: rotate(360deg);
        }
        .btn-push-2 {
          transform: rotate(360deg);
        }
        .btn-push-3 {
          transform: translateY(-33px) rotate(360deg);
        }
        .btn-push-4 {
          transform: translateY(-33px) rotate(360deg);
        }
        .btn-box {
          opacity: 1;
        }
        .box-line-top {
          width: 125px;
        }
        .box-line-left {
          height: 33px;
        }
        .box-line-right {
          height: 33px;
        }
      }
    }
    .right-arrow{
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width:64px;
      height: 64px;
      img{
        position: absolute;
        top:0;
        left: 0;
      }
    }
  }
  .singleItem{
    width: 100%;
    height: 100%;
    animation: slideInRight 1s both;
    @keyframes slideInRight {
      0% {
        transform: translate3d(100%, 0, 0);
        visibility: visible;
      }
      100% {
        transform: translate3d(0, 0, 0);
      }
    }
    .shadow{
      width: 120px;
      height: 120px;
      background-color: rgba(0, 0, 0, 0.432);
      position: relative;
      .single-out{
        width: 60px;
        height: 80px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%)translateY(-50%);
      }
    }
    .single-image{
      width: 550px;
      height: 550px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-70%)translateY(-55%);
    }
    .single-content{
      position: absolute;
      top:0;
      right: 0;
      width: 25%;
      height: 100%;
      background-color:rgba(0, 0, 0, 0.7);
      padding-left: 5%;
      text-align: left;
      .single-title{
        margin-top: 20%;
        font-size: 24px;
        color: rgba(197, 197, 36, 0.9);
        line-height: 3;
      }
      .single-text{
        font-size: 18px;
        color: #ffffffd2;
        line-height: 1.5;
      }
    }
    .price{
      position: absolute;
      bottom: 15%;
      right: 35%;
      color: #fff;
      font-size: 38px;
      span{
        font-size: 70px;
      }
    }
  }
}
</style>
