<template>
    <div class="container">
        <div class="top">
            <div class="store_info df ais-start jct-between">
                <div class="df">
                    <img class="store_pic" :src="ImageTool.initImage(storeInfo.avatar)" alt="">
                    <div class="df ais-start jct-around fdc">
                        <div class="fs34 to-line">{{storeInfo.fullName}}</div>
                        <div>
                            <span class="collect_btn dfc" @click="collect">
                                <img class="img36" src="../../image/d_ic_attention@2x.png" alt="">
                                关注
                            </span>
                        </div>
                    </div>
                </div>
                <div class="store_right_btn dfc">
                    <img class="img36" src="../../image/c_ic_home_white@2x.png" alt="" @click="$router.push('/index')" >
                    <span class="line"></span>
                    <img class="img36" src="../../image/d_ic_close@2x.png" alt="" @click="$router.back()" >
                </div>
            </div>
            <div class="dfb">
                <div class="dfs search_box flex">
                    <img class="img40 mgr20" src="../../image/d_ic_grabble_white@2x.png" alt="">
                    <span>搜索商品</span>
                </div>
                <div class="search_btn theme dfc">搜本店</div>
            </div>
        </div>
        <div class="content">
            <!-- 首页 -->
            <div v-show="tabIndex==0" class="tab_box home_box">
                <div class="title dfc">
                    <img class="img32" src="../../image/d_ic_symbol@2x.png" alt="">
                    <span class="fs32 b">全部商品</span>
                    <img class="img32" src="../../image/d_ic_symbol@2x.png" alt="">
                </div>
                <van-list
                    v-model="indexLoading"
                    :finished="indexFinished"
                    finished-text="没有更多了"
                    @load="updateIndexGoods"
                >
                  <scroll :data="goodsList" :probeType ="3" :listenScroll="true" class="middle">
                    <div class="goods_list fw jct-start df">
                        <goods-item class="goods_item" v-for="(item,index) in goodsList" :key="index"  :goodsInfo.sync="item" @toDetail="toGoodsDetail(item.product.id)"></goods-item>
                    </div>
                  </scroll>
                </van-list>
            </div>
            <!-- 分类 -->
            <div v-show="tabIndex==1" class="tab_box classify_box df jct-between">
                <van-list class="classify_left">
                    <div
                        v-for="(item,index) in classifyList"
                        :key="index"
                        @click="setCategory(index)"
                        :class="['left_item dfc fs24',index==navLeft?'active fs28 b':'']"
                    >{{item.categoryName}}</div>
                </van-list>
                <div class="classify_right flex" v-if="classifyList.length">
                    <div class="classify_pic dfc">
                        <img src="../../image/d_photo_1@2x.png" alt="">
                        <span class="dfc">{{classifyList[navLeft].categoryName}}</span>
                    </div>
                    <div
                        class="second_level"
                        v-for="(item, index) in classifyList[navLeft].secondCategoryDTO"
                        :key="index"
                    >
                        <div
                            class="second_top df ais"
                            @click="toGoodsList(item.categorySecondId)"
                        >{{item.categorySecondName}}</div>
                        <div class="second_con df fw">
                            <!-- <div class="second_item dfc active" @click="toGoodsList">二级分类</div> -->
                            <div
                                class="second_item dfc"
                                v-for="(items,indexs) in item.thirdCategoryDTO"
                                @click="toGoodsList(items.categoryThirdId)"
                                :key="indexs"
                            >{{items.categoryThirdName}}</div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 全部宝贝 -->
            <div v-show="tabIndex==2" class="tab_box goods">
              <condition></condition>
              <div class="bottom">
                  <scroll :data="allGoodsList" :probeType ="3" :listenScroll="true" class="middle">
                      <div class="goods_list fw jct-start df">
                          <goods-item :goodsInfo.sync="item" @toDetail="toGoodsDetail" v-for="(item,index) in allGoodsList" :key="index" class="goods_item"></goods-item>
                      </div>
                  </scroll>
              </div>
            </div>
        </div>
        <div class="tab dfa">
            <div class="dfc fdc">
                <img class="img52" v-if="tabIndex==0" src="../../image/c_ic_home_s@2x.png" alt="">
                <img
                    class="img52"
                    v-else
                    @click="toggleTab(0)"
                    src="../../image/c_ic_home_d@2x.png"
                    alt=""
                >
                <span :class="tabIndex==0?'theme':''">首页</span>
            </div>
            <div class="dfc fdc">
                <img
                    class="img52"
                    v-if="tabIndex==1"
                    src="../../image/c_ic_classify_s@2x.png"
                    alt=""
                >
                <img
                    class="img52"
                    v-else
                    @click="toggleTab(1)"
                    src="../../image/c_ic_classify_d@2x.png"
                    alt=""
                >
                <span :class="tabIndex==1?'theme':''">分类</span>
            </div>
            <div class="dfc fdc">
                <img class="img52" v-if="tabIndex==2" src="../../image/d_ic_baby_s@2x.png" alt="">
                <img
                    class="img52"
                    v-else
                    @click="toggleTab(2)"
                    src="../../image/d_ic_baby_d@2x.png"
                    alt=""
                >
                <span :class="tabIndex==2?'theme':''">全部宝贝</span>
            </div>
        </div>
    </div>
</template>
<script>
import goodsItem from "@/components/goods-item";
import condition from '@/components/condition'
import scroll from '@/components/scroll'
import {findProductByProviderId,findAllCategoryByProviderId,findProductByCategoryId,addProviderToCollect,providerGet,deleteBatch} from "@/js/api";
export default {
  components: {
    goodsItem,
    condition,
    scroll,
  },
  data() {
    return {
      storeId:114,
      tabIndex: 0,
      loading: false,
      finished: false,
      navLeft: 0,
      classifyList: [],
      storeInfo:{},
      goodsList:[],//首页商品列表
      allGoodsList:[],//全部宝贝商品列表
      indexLoading:false,
      indexFinished:false,
      indexPage:1,
    };
  },
  created() {
    this.storeId = this.$route.query.id
    this.getInfo();
    this.getIndexGoods()
    this.getAllCategory();
  },
  methods: {
    toggleTab(index) {
      this.tabIndex = index;
    },
    //获取店铺信息
    async getInfo() {
      let res = await providerGet({ id:this.storeId}, true);
      if(res.code==200){
        this.storeInfo = res.data
      }
      
    },
    //获取店铺商品列表
    async getIndexGoods(page=1) {
      let res = await findProductByProviderId({
        id: this.storeId,
        pageable:{
          page:page
        }
      }, true);
      if(res.code==200){
        this.indexLoading = false
        this.indexPage = page
        console.log(page+'load')
        if(page==1){
          console.log('第一页')
          this.goodsList = res.data
        }else{
          console.log('其他页')
          res.data.map(v=>{
            this.goodsList.push(v)
          })
          // this.goodsList.push(...res.data)
        }
        console.log(this.goodsList)
        if(!res.data.length){
          this.indexFinished = true
        }
      }
    },
    setCategory(index) {
      this.navLeft = index;
    },

    
    toGoodsList: async function(id) {
        this.$router.push({path:`/goods/goodsList?classifyId=${id}`})
    },
    toGoodsDetail(id){
        this.$router.push({path:`/goods/goodsDetail?id=${id}`})
    },
    //获取分类
    getAllCategory: async function() {
      let res = await findAllCategoryByProviderId({id:this.storeId}, true);
      console.log(res);
      if (res.code == 200 && res.data.length) {
        this.classifyList = res.data;
      }
    },

    //收藏
    async collect(){
        let res = await addProviderToCollect({connectionId:[this.storeId]})
        if(res.code==200){
          this.$toast('关注成功')
        }
    },
    //取消收藏
    async cancelCollect(){
        let res = await deleteBatch({id:[this.storeId]})
        if(res.code==200){
          this.$toast('取消关注成功')
        }
    },
    //加载首页商品数据
    updateIndexGoods(){
      let page = this.indexPage + 1
      console.log('update'+page)
      this.getIndexGoods(page)
    }
  }
};
</script>
<style lang="less" scoped>
.container{
  background: #F6F6F6;
  width: 100vw;
  overflow: hidden;
}
.top {
  width: 100vw;
  height: 280px;
  background: linear-gradient(
    -35deg,
    rgba(223, 1, 52, 1),
    rgba(240, 70, 70, 1)
  );
  padding: 40px 30px 30px;
  box-sizing: border-box;
  .store_info {
    color: #fff;
    margin-bottom: 30px;
    .store_pic {
      width: 108px;
      height: 108px;
      border-radius: 50%;
      margin-right: 24px;
    }
    .collect_btn {
      width: 120px;
      height: 60px;
      border-radius: 30px;
      border: 2px solid #fff;
      margin-top: 16px;
    }
  }
  .store_right_btn {
    width: 152px;
    height: 60px;
    border-radius: 30px;
    border: 2px solid #fff;
    .line {
      width: 1px;
      height: 35px;
      background: #fff;
      margin: 0 10px;
    }
  }
  .search_box {
    height: 58px;
    color: #fff;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 29px;
    padding: 12px 30px;
    box-sizing: border-box;
  }
  .search_btn {
    width: 118px;
    height: 58px;
    border-radius: 29px;
    background: #fff;
    margin-left: 20px;
  }
}
.home_box {
  .title {
    height: 90px;
  }
}
.classify_box {
  padding: 22px 0 0;
  position: relative;
  height: calc(100% - 98px);
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  background: #fff;
  .classify_left {
    width: 170px;
    max-height: 100%;
    overflow-y: scroll;
    border-radius: 0 20px 20px 0;
    .left_item {
      padding: 26px 0;
      position: relative;
      background: #f7f7f7;
      &.active {
        color: var(--theme-red);
      }
      &.active::before {
        content: "";
        background: var(--theme-red);
        width: 4px;
        height: 24px;
        color: var(--theme-default);
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        margin: auto 0;
      }
    }
  }
  .classify_right {
    max-height: calc(100vh - 240px);
    overflow-y: scroll;
    padding: 0 17px 0 22px;
    .classify_pic {
      width: 100%;
      height: 200px;
      border-radius: 14px;
      overflow: hidden;
      position: relative;
      margin-bottom: 20px;
      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
      span {
        position: relative;
        z-index: 10;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        color: #fff;
        font-size: 28px;
      }
    }
    .second_level {
      margin-bottom: 20px;
      border-radius: 10px;
      padding: 10px 28px 0;
      box-shadow: 0px 0 20px 0px rgba(0, 0, 0, 0.08);
      .second_top {
        font-size: 28px;
        line-height: 2;
        color: #333;
        font-weight: bold;
        &::before {
          content: "";
          background: var(--theme-red);
          width: 4px;
          height: 24px;
          color: var(--theme-default);
          margin-right: 10px;
        }
      }
      .second_con {
        margin-right: -16px;
        .second_item {
          height: 60px;
          border-radius: 30px;
          padding: 0 25px;
          color: #333;
          margin-right: 16px;
          margin-bottom: 28px;
          background: #f5f5f5;
          &.active {
            color: #fff;
            background: var(--theme-red);
          }
        }
      }
    }
  }
}
.tab {
  width: 100vw;
  height: 98px;
  background: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  box-shadow: 0px 7px 24px 0px rgba(0, 0, 0, 0.27);
  span {
    margin-top: 4px;
  }
}
.goods_list{
  margin-right: -10px;
  padding: 20px;
  box-sizing: border-box;
}
.goods_item{
  margin-bottom: 20px;
  margin-right: 10px;
}
.tab_box{
  height: calc(100vh - 378px);
  overflow-y: scroll;
}
</style>