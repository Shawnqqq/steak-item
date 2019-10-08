<template>
  <div class="container">
    <img class="header-menu" src="@/assets/menu.png" @click="navLock=true">
    <div class="deve-title">
      <div class="title-en">APPRECIATION</div>
      <div class="title-cn">菜品欣赏</div>
    </div>
    <v-touch class="deve-list"
      id="deve-list"
      v-on:swipeleft="swiperleft"
      v-on:swiperight="swiperright"
      v-show="singleLock">
      <div class="row">
        <div class="deve-item" v-for="(item,index) in deveData" :key="index" @click="singleTop(index)">
          <div class="deve-item-title">{{item.title}}</div>
          <div class="deve-item-desc">RMB<span>{{item.desc}}</span></div>
          <img class="deve-item-image" src="@/assets/steak.png">
        </div>
      </div>
      <div class="row">
        <div class="deve-item" v-for="(item,index) in deveDatas" :key="index" @click="item.sell ? singleBottom(index) : null">
          <div class="deve-item-title">{{item.title}}</div>
          <div class="deve-item-desc" v-if="item.sell">RMB<span>{{item.desc}}</span></div>
          <img class="deve-item-image" src="@/assets/steak.png">
        </div>
      </div>
    </v-touch>
    <div class="single" v-show="!singleLock" v-for="item in singleItem" :key="item.name">
      <img class="close" src="@/assets/close.png" @click="singleLock=true">
      <img class="single-image" src="@/assets/steak.png">
      <div class="single-title">
        <p>{{item.name}}</p>
      </div>
      <div class="single-desc">
        <p>重量：{{item.weight}}</p>
        <p>原产地：甘肃武威</p>
        <p>等级：{{item.grade}}</p>
        <p>厚度：{{item.thick}}</p>
        <p>数量：{{item.num}}</p>
        <p>保质期：18个月</p>
        <p>储存方式：-18°冷冻</p>
      </div>
      <div class="single-price">
        RMB<span>{{item.price}}</span>
      </div>
    </div>
    <div class="deve-line" v-show="singleLock">
      <div class="deve-line-index" id="deve-line-index" :style="{width:100/(itemMax+1)+'%'}"></div>
    </div>
    <div class="deve-more" v-show="singleLock">
      <div class="deve-more-left">
        <p class="deve-more-en">SLIDE FOR MORE</p>
        <p class="deve-more-cn">滑动更多</p>
      </div>
      <div class="deve-more-right">
        <div class="deve-more-ball"></div>
      </div>
    </div>
    <sideNavMobile v-if="navLock" @close="closeNav" />
  </div>
</template>

<script>
import sideNavMobile from "@/components/sideNavMobile.vue";

export default {
  data(){
    return{
      deveData:[
        {title:'全系列内卖试吃',desc:'249',singleText:{weight:'200+10g',grade:'特选',thick:'1.2-1.5cm',num:'1块',price:'249'}},
        {title:'汉和牛A5西冷牛排',desc:'630',singleText:{weight:'200+10g',grade:'A5',thick:'1.2-1.5cm',num:'1块',price:'630'}},
        {title:'汉和牛A4牛排',desc:'349',singleText:{weight:'200+10g',grade:'A4',thick:'1.2-1.5cm',num:'1块',price:'349'}},
        {title:'汉和牛A3牛排',desc:'249',singleText:{weight:'200+10g',grade:'A3',thick:'1.2-1.5cm',num:'1块',price:'249'}},
      ],
      deveDatas:[
        {title:'汉和牛牛肉粒',desc:'270',sell:true,singleText:{weight:'300+10g',grade:'特选',thick:'/',num:'1盒',price:'270'}},
        {title:'汉和牛A5菲力牛排',desc:'349',sell:true,singleText:{weight:'200+10g',grade:'A5',thick:'1.2-1.5cm',num:'1块',price:'349'}},
        {title:'敬请期待',sell:false}
      ],
      itemWidth:null,
      translateX:0,
      itemMax:2,    //一行的项目数量-2
      lineTranslateX:0,
      singleLock:true,
      singleItem:[],
      navLock:false
    }
  },
  methods:{
    swiperleft(){
      let list = document.getElementById('deve-list');
      let width = list.offsetWidth/2
      this.itemWidth = width * this.itemMax  //最大位移距离
      
      if(this.translateX<this.itemWidth){
        this.translateX = this.translateX +width
        list.style.transform = `translateX(-${this.translateX}px)`
      }

      let line = document.getElementById('deve-line-index');
      if(this.lineTranslateX<100*(this.itemMax)){
        this.lineTranslateX = this.lineTranslateX + 100
        line.style.transform = `translateX(${this.lineTranslateX}%)`
      }
    },
    swiperright(){
      let list = document.getElementById('deve-list');
      let width = list.offsetWidth/2;
      this.itemWidth = width * this.itemMax   

      if(this.translateX>0){
        this.translateX = this.translateX -width
        list.style.transform = `translateX(-${this.translateX}px)`
      }

      let line = document.getElementById('deve-line-index');
      if(this.lineTranslateX>0){
        this.lineTranslateX = this.lineTranslateX - 100
        line.style.transform = `translateX(${this.lineTranslateX}%)`
      }
    },
    singleTop(index){
      let content = this.deveData[index];
      this.singleItem.splice(0,1,content.singleText)
      this.singleItem[0].name=content.title;
      this.singleLock = false;
    },
    singleBottom(index){
      let content = this.deveDatas[index];
      this.singleItem.splice(0,1,content.singleText)
      this.singleItem[0].name=content.title;
      this.singleLock = false;
    },
    closeNav(val){
      this.navLock = val;
    }
  },
  components:{
    sideNavMobile
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
  color: white;
  .header-menu{
    width: 35*@p;
    height: 30*@p;
    position: absolute;
    top: 30*@p;
    left: 30*@p;
  }
  .deve-title{
    margin: 15% 5% 0 0;
    text-align: end;
    .title-en{
      font-size: 22*@p;
      font-weight: 300;
      letter-spacing: 3*@p;
      line-height: 1.5;
    }
    .title-cn{
      font-size: 24*@p;
    }
  }
  .deve-list{
    width: 100%;
    height: 50%;
    margin-top: 20*@p;
    transition: transform .8s;
    .row{
      width: 100%;
      height: 50%;
      white-space: nowrap;
      display: flex;
      .deve-item{
        width: 50%;
        flex: none;
        position: relative;
        height: 100%;
        vertical-align: top;
        background-size: cover;
        border: 3*@p solid black;
        border-left: 1*@p solid black;
        border-right: 1*@p solid black;
        display: flex;
        flex-direction: column;
        align-items: center;
        .deve-item-title{
          font-size: 26*@p;
          padding: 15*@p 0 0 15*@p;
          width: 100%;
          font-weight: 200;
        }
        .deve-item-desc{
          font-size: 20*@p;
          position: absolute;
          left: 15*@p;
          bottom: 15*@p;
          span{
            font-size: 32*@p;
            margin-left: 8*@p;
          }
        }
        .deve-item-image{
          width: 150*@p;
          height: 150*@p;
        }
      }
    }
  }
  .single{
    width: 100%;
    height: 50%;
    margin-top: 20*@p;
    position: relative;
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
    .close{
      position: absolute;
      right: 5%;
      top: 5%;
      width: 50*@p;
      height: 50*@p;
    }
    .single-image{
      position: absolute;
      top: 50%;
      left:60%;
      transform: translateX(-50%) translateY(-50%);
      width: 350*@p;
      height: 350*@p;
    }
    .single-title{
      position: absolute;
      top: 10%;
      left:10%;
      p{
        font-size: 26*@p;
        writing-mode: vertical-rl;
        letter-spacing: 5*@p;
        padding-left: 5*@p;
        border-left: 2*@p solid rgba(255, 0, 0, 0.9);
      }
    }
    .single-desc{
      position: absolute;
      bottom: 0;
      left: 10%;
      font-size: 16*@p;
      font-weight: 200;
    }
    .single-price{
      position: absolute;
      bottom: 0;
      right: 10%;
      font-size: 22*@p;
      span{
        font-size: 50*@p;
        margin-left: 20*@p;
      }
    }
  }
  .deve-line{
    height: 15*@p;
    background-color: rgba(51, 51, 51, 0.322);
    .deve-line-index{
      background-color: #ffffff9f;
      border-radius: 15*@p;
      height: 15*@p;
    }
  }
  .deve-more{
    display: flex;
    margin: 20*@p;
    .deve-more-left{
      font-size: 22*@p;
      line-height: 1.5;
      text-align: end;
      margin-right: 20*@p;
      .deve-more-cn{
        font-size: 18*@p;
      }
    }
    .deve-more-right{
      border: 4*@p solid #fff;
      height: 46*@p;
      width: 75*@p;
      border-radius: 25*@p;
      padding: 7*@p;
      display: block;
      position: relative;
      margin-top: 13*@p;
      .deve-more-ball{
        position: absolute;
        border: 2*@p solid #fff;
        background-color: #fff;
        height: 15*@p;
        width: 15*@p;
        border-radius: 20*@p;
        top: 26%;
        animation: slideiconleft 2s 1s linear infinite;
      }
      @keyframes slideiconleft {
        0%{
          opacity: 1;
          left:70%;
        }
        100%{
          opacity: 0;
          left: 10%;
        }
      }
    }
  }
}
</style>