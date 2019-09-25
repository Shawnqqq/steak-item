<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="less">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
::-webkit-scrollbar{width:7px;background-color:#7c849271;border-radius:20px}
::-webkit-scrollbar-thumb{background-color:#dce4f39a;border-radius:10px;border-radius:20px}
::-webkit-scrollbar-thumb:hover{background-color:#dce4f39a;}
::-webkit-scrollbar-thumb:active{border:0;border-radius:0;background-color:#57df7573}
::-webkit-scrollbar-thumb:window-inactive{background-color:#dce4f32f}
body,html{
  width: 100%;
  height: 100%;
}
#app{
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
}
.about .simplebar-scrollbar:before{
  background-color: rgba(255, 255, 255, 0.637);
}
.development .simplebar-scrollbar:before{
  background-color:#fff;
}
</style>
