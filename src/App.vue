<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <div class="tab dfa" v-if="showTaber(path)">
      <router-link to="/index" class="tab_item dfc fdc">
        <div class="tab_icon index"></div>
        <span>首页</span>
      </router-link>
      <router-link to="/classify" class="tab_item dfc fdc">
        <div class="tab_icon classify"></div>
        <span>分类</span>
      </router-link>
      <router-link to="/cart" class="tab_item dfc fdc">
        <div class="tab_icon cart"></div>
        <span>购物车</span>
      </router-link>
      <router-link to="/my" class="tab_item dfc fdc">
        <div class="tab_icon my"></div>
        <span>我的</span>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      path: ''
    }
  },
  created() {
    this.path = this.$route.path
  },
  methods: {
    showTaber(path) {
      return path == '/index' || path == '/classify' || path == '/cart' || path == '/my' ? true : false
    }
  },
  watch: {
    $route(info) {
      this.path = info.path
    }
  }
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
    .tab_icon{
      width: 40px;
      height: 40px;
      background-repeat: no-repeat;
      background-position: center;
      background-size: 100% 100%;
    }
    .index{
      background-image: url('./image/c_ic_home_d@2x.png');
    }
    .classify{
      background-image: url('./image/c_ic_classify_d@2x.png');
    }
    .cart{
      background-image: url('./image/c_ic_shopping_d@2x.png');
    }
    .my{
      background-image: url('./image/c_ic_my_d@2x.png');
    }
    &.router-link-active{
      color: var(--theme);
      .index{
        background-image: url('./image/c_ic_home_s@2x.png');
      }
      .classify{
        background-image: url('./image/c_ic_classify_s@2x.png');
      }
      .cart{
        background-image: url('./image/c_ic_shopping_s@2x.png');
      }
      .my{
        background-image: url('./image/c_ic_my_s@2x.png');
      }
    }
  }
}
</style>
