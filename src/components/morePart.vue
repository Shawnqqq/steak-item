<template>
  <div class="more-container">
    <div class="more-left">
      <div class="en">FIND OUT MORE</div>
      <div class="cn">了解更多</div>
    </div>
    <div class="more-right">
      <div class="arrow"></div>
      <div class="line"></div>
      <div :class="'moreplus-'+index" v-for="index in 4" :key="index">+</div>
    </div>
  </div>
</template>

<script>
export default {
  name:'moreContainer'
}
</script>

<style lang="less" scoped>
  .more-container{
    background-color: transparent;
    transition: background-color 0.5s ease-in;
    border: 1px solid #fafafa;
    padding: 10px 13px 0px;
    width: 350px;
    .more-left{
      font-size: 18px;
      width: auto;
      white-space: nowrap;
      cursor: pointer;
      .en{
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
    .more-right{
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
      .moreplus-1{
        position: absolute;
        top: -11px;
        left: -5px;
        font-size: 18px;
      }
      .moreplus-2{
        position: absolute;
        top: -11px;
        right: -5px;
        font-size: 18px;
      }
      .moreplus-3{
        position: absolute;
        bottom: -12px;
        left: -5px;
        font-size: 18px;
      }
      .moreplus-4{
        position: absolute;
        bottom: -12px;
        right: -5px;
        font-size: 18px;
      }
    }
  }
  .more-container:hover{
    background: #595959;
  }
</style>