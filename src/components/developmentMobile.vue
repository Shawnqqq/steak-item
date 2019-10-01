<template>
  <div class="container">
    <div class="deve-title">
      <div class="title-en">PROJECTS</div>
      <div class="title-cn">项目展示</div>
    </div>
    <v-touch class="deve-list"
      id="deve-list"
      v-on:swipeleft="swiperleft"
      v-on:swiperight="swiperright">
      <div class="row">
        <div class="deve-item" :style="{backgroundImage:item.url}" v-for="(item,index) in deveData" :key="index">
          <div class="deve-item-title">{{item.title}}</div>
          <div class="deve-item-desc">{{item.desc}}</div>
        </div>
      </div>
      <div class="row">
        <div class="deve-item" :style="{backgroundImage:item.url}" v-for="(item,index) in deveDatas" :key="index">
          <div class="deve-item-title">{{item.title}}</div>
          <div class="deve-item-desc">{{item.desc}}</div>
        </div>
      </div>
    </v-touch>
    <div class="deve-line">
      <div class="deve-line-index" id="deve-line-index" :style="{width:100/itemMax+'%'}"></div>
    </div>
  </div>
</template>

<script>

export default {
  data(){
    return{
      deveData:[
        {title:'昆明花鹤翎',desc:'CAMILLIA RISE',url:'url(http://www.seedland.cc/wp/wp-content/uploads/2018/10/昆明花鹤翎.jpg)'},
        {title:'天津海棠雅舍',desc:'HOUSE OF BEGONIA',url:'url(http://www.seedland.cc/wp/wp-content/uploads/2019/06/天津海棠雅著.jpg)'},
        {title:'深圳剑兰郡',desc:'THE GLADIOLUS',url:'url(http://www.seedland.cc/wp/wp-content/uploads/2018/10/深圳剑兰郡.jpg)'},
        {title:'遵义蔷薇国际',desc:'ROSE INTERNATIONAL',url:'url(http://www.seedland.cc/wp/wp-content/uploads/2019/06/遵义蔷薇国际.jpg)'},
        {title:'武汉君兰汀岸',desc:'ORCHID SHORE',url:'url(http://www.seedland.cc/wp/wp-content/uploads/2018/10/ORCHID-SHORE-Intro-2.jpg)'},
        {title:'无锡玫瑰庄园',desc:'ROSE MANOR',url:'url(http://www.seedland.cc/wp/wp-content/uploads/2019/06/无锡玫瑰庄园.jpg)'},
        {title:'中山璟湖城',desc:'LAKEVIEW COMMUNITY',url:'url(http://www.seedland.cc/wp/wp-content/uploads/2019/06/中山璟湖城.jpg)'},
        {title:'六盘水紫藤庄园',desc:'WISTERIA LAKE',url:'url(http://www.seedland.cc/wp/wp-content/uploads/2018/10/六盘水紫藤庄园.jpg)'},
      ],
      deveDatas:[
        {title:'广州增城蔷薇国际',desc:'QIANGWEI HUAYUAN',url:'url(http://www.seedland.cc/wp/wp-content/uploads/2018/10/广州增城蔷薇国际.jpg)'},
        {title:'广州常春藤',desc:'BOSTON IVY',url:'url(http://www.seedland.cc/wp/wp-content/uploads/2018/10/广州常春藤-1.jpg)'},
        {title:'永川蔷薇国际',desc:'ROSA INTERNATIONAL',url:'url(http://www.seedland.cc/wp/wp-content/uploads/2019/08/3e658b0fa85713ed7a6d47caeb276c6.jpg)'},
        {title:'惠州常春藤',desc:'ROYAL IVY',url:'url(http://www.seedland.cc/wp/wp-content/uploads/2018/10/惠州常春藤.jpg)'},
        {title:'惠州木槿雅著',desc:'RIVER ROSELLE',url:'url(http://www.seedland.cc/wp/wp-content/uploads/2018/10/惠州木槿雅著.jpg)'},
        {title:'太原紫藤公馆',desc:'THE WISTERIA',url:'url(http://www.seedland.cc/wp/wp-content/uploads/2019/06/太原紫藤公馆.jpg)'},
        {title:'成都海棠名著',desc:'BEGONIA WEAVE',url:'url(http://www.seedland.cc/wp/wp-content/uploads/2019/06/成都海棠名著.jpg)'},
        {title:'三亚海棠华著',desc:'CRYSTAL BAY',url:'url(http://www.seedland.cc/wp/wp-content/uploads/2018/10/三亚海棠华著.jpg)'},
      ],
      itemWidth:null,
      translateX:0,
      itemMax:6,    //一行的项目数量-2
      lineTranslateX:0
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
      if(this.lineTranslateX<100*(this.itemMax-1)){
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
    }
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
        border: 3px solid black;
        border-left: 1px solid black;
        border-right: 1px solid black;
        .deve-item-title{
          font-size: 26*@p;
          padding: 15*@p 0 0 15*@p;
        }
        .deve-item-desc{
          font-size: 28*@p;
          position: absolute;
          left: 15*@p;
          bottom: 15*@p;
        }
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
}
</style>