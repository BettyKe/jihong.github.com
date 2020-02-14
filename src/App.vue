<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
    <div class="tab dfa">
      <router-link to="/index" class="tab_item dfc fdc">
        <img src="./image/c_ic_home_d@2x.png" />
        <span>首页</span>
      </router-link>
      <router-link to="/classify" class="tab_item dfc fdc">
        <img src="./image/c_ic_classify_d@2x.png" />
        <span>分类</span>
      </router-link>
      <router-link to="/cart" class="tab_item dfc fdc">
        <img src="./image/c_ic_shopping_d@2x.png" />
        <span>购物车</span>
      </router-link>
      <router-link to="/my" class="tab_item dfc fdc">
        <img src="./image/c_ic_my_d@2x.png" />
        <span>我的</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style scoped lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--theme-default);
}
.tab{
  width: 100vw;
  height: 98px;
  background: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  box-shadow:0px 7px 24px 0px rgba(0, 0, 0, 0.27);
  .tab_item{
    span{
      line-height: 1.5;
    }
    &.router-link-active{
      color: var(--theme);
    }
  }
  img{
    width: 40px;
    height: 40px;
  }
}
</style>
