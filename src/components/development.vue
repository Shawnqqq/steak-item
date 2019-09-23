<template>
  <div class="development">
    <simplebar class="deve-box" data-simplebar-auto-hide="false">
      <div class="row">
        <div class="deve-item" style="background-image: url(http://www.seedland.cc/wp/wp-content/uploads/2018/10/广州增城蔷薇国际.jpg)">
          <div class="bg-color"></div>
          <div class="deve-item-title">
            <div class="title-cn">广州蔷薇花园</div>
            <div class="title-en">QIANGWEI HUAYUAN</div>
          </div>
          <div class="deve-item-btn">
            <div :class="'btn-push-'+index" v-for="index in 4" :key="index">+</div>
            <div class="btn-box">EXPLORE</div>
          </div>
        </div>
      </div>
      <div class="row"></div>
    </simplebar>
  </div>
</template>

<script>
import simplebar from 'simplebar-vue';
import 'simplebar/dist/simplebar.min.css';

export default {
  name:'development',
  components:{
    simplebar
  }
}
</script>

<style lang="less" scoped>
.development{
  height: 100%;
  width: 100%;
  position: relative;
  .deve-box{
    height: 100%;
    .row{
      display:flex;
      flex-wrap: nowrap;
      height: 50%;
      .deve-item{
        flex: none;
        position: relative;
        width: 25%;
        height: 50vh;
        box-sizing: border-box;
        background-size: cover;
        background-repeat: no-repeat;
        white-space: nowrap;
        transition: all 2s ease-in-out;
        .bg-color{
          position: absolute;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.7);
        }
        .deve-item-title{
          position: absolute;
          color: #fff;
          z-index: 1;
          font-size: 15px;
          margin-left: 20px;
          padding-top: 20px;
          margin-right: 20px;
          .title-cn{
            font-size: 18px;
            letter-spacing: 1px;
          }
          .title-en{
            letter-spacing: 2px;
            font-size: 15px;
            white-space: pre-line;
            line-height: 25px;
          }
        }
        .deve-item-btn{
          position: absolute;
          width: 125px;
          right: 10%;
          top: calc(50vh - 10vh);
          .btn-push-1{
            color: #fff;
            position: absolute;
            left: -4px;
            bottom: -10px;
          }
          .btn-push-2{
            color: #fff;
            position: absolute;
            right: -4px;
            bottom: -10px;
          }
          .btn-push-3{
            color: #fff;
            position: absolute;
            left: -4px;
            top: 2px;
            transform: transform 0.7s ease-in-out;
          }
          .btn-push-4{
            color: #fff;
            position: absolute;
            right: -4px;
            top: 2px;
            transform: transform 0.7s ease-in-out;
          }
          .btn-box{
            opacity: 0;
            z-index: 2;
            font-size: 14px;
            margin-top: -22px;
            float: right;
            width: 125px;
            height: 33px;
            padding-top: 6px;
            padding-bottom: 6px;
            color: #fff;
            background-color: rgba(0,0,0,0.50);
            cursor: pointer;
            font-family: "DIN-Regular";
            letter-spacing: 3px;
            border: none;
            text-align: center;
            line-height: 21px;
            transition: opacity 0.7s ease-in-out;
          }
        }
      }
      .deve-item:hover{
        .bg-color{
          background: rgba(0,0,0,0.35);
        }
        .btn-push-3{
          transform: translateY(-30px)
        }
        .btn-push-4{
          // top: -30px;
          transform: translateY(-30px)
        }
        .btn-box{
          opacity:1;
        }
      }
    }
  }
}
</style>