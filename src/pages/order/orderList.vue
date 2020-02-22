<template>
    <div class="container">
        <header-box title="我的订单"></header-box>
        <van-tabs v-model="active" animated swipeable @click="toggleTab">
            <van-tab class="pd30" title="全部">
                <!-- 订单 -->
                <div class="box" v-for="item in 2" :key="item">
                    <div class="order_title dfb">
                        <span>订单号：201909061234</span>
                        <span class="theme">未审核/已审核</span>
                    </div>
                    <!-- 店铺 -->
                    <div class="store_item pdt30" v-for="items in 2" :key="items">
                        <div class="store_name dfs">
                            <img class="img28 mgr6" src="../../image/e_ic_provider@2x.png" alt="">
                            <span>供应商名称供应商</span>
                            <img class="img28 mgl10" src="../../image/f_ic_more@2x.png" alt="">
                        </div>
                        <!-- 商品 -->
                        <div class="goods_item" v-for="item in 2" :key="item">
                            <div class="dfb">
                                <img class="img140 br20 mgr20" src="../../image/default.png" alt="">
                                <div class="flex">
                                    <div class="to-line2 lh15 fs28 mgb20">特大号落地紫砂陶瓷花盆红砂紫砂花瓷花盆瓷花</div>
                                    <div class="dfb">
                                        <div class="theme">
                                            ¥
                                            <span class="fs30">120.00</span>/盆
                                        </div>
                                        <div class="c_999">x50</div>
                                    </div>
                                </div>
                            </div>
                            <div class="service">
                                <div class="title dfs">
                                    <img
                                        class="img36"
                                        src="../../image/c_ic_appreciation@2x.png"
                                        alt=""
                                    >
                                    <span class="theme">增值服务(可多选）</span>
                                </div>
                                <div class="item dfb" v-for="items in 2" :key="items">
                                    <div>
                                        <span class="mgr20">立杆</span>
                                        <span>¥10.00</span>
                                    </div>
                                    <div class="num_box">x3</div>
                                </div>
                            </div>
                        </div>
                        <div class="tr lh2">
                            共
                            <span class="theme">4</span>件 小计：¥610.00
                        </div>
                        <div class="tr lh2">
                            实付款：
                            <span class="theme">¥610.00</span>
                        </div>
                        <div class="btn_box df ais jct-end">
                            <span class="cf dfc bg_theme">支付</span>
                            <span class="theme dfc bg_FFF">联系客服</span>
                        </div>
                    </div>
                </div>
            </van-tab>
            <van-tab class="pd30" title="未审核">
                <!-- 订单 -->
                <div class="box" v-for="item in 2" :key="item">
                    <div class="order_title dfb">
                        <span>订单号：201909061234</span>
                        <span class="theme">未审核</span>
                    </div>
                    <!-- 店铺 -->
                    <div class="store_item pdt30" v-for="items in 2" :key="items">
                        <div class="store_name dfs">
                            <img class="img28 mgr6" src="../../image/e_ic_provider@2x.png" alt="">
                            <span>供应商名称供应商</span>
                            <img class="img28 mgl10" src="../../image/f_ic_more@2x.png" alt="">
                        </div>
                        <!-- 商品 -->
                        <div class="goods_item" v-for="item in 2" :key="item">
                            <div class="dfb">
                                <img class="img140 br20 mgr20" src="../../image/default.png" alt="">
                                <div class="flex">
                                    <div class="to-line2 lh15 fs28 mgb20">特大号落地紫砂陶瓷花盆红砂紫砂花瓷花盆瓷花</div>
                                    <div class="dfb">
                                        <div class="theme">
                                            ¥
                                            <span class="fs30">120.00</span>/盆
                                        </div>
                                        <div class="c_999">x50</div>
                                    </div>
                                </div>
                            </div>
                            <div class="service">
                                <div class="title dfs">
                                    <img
                                        class="img36"
                                        src="../../image/c_ic_appreciation@2x.png"
                                        alt=""
                                    >
                                    <span class="theme">增值服务(可多选）</span>
                                </div>
                                <div class="item dfb" v-for="items in 2" :key="items">
                                    <div>
                                        <span class="mgr20">立杆</span>
                                        <span>¥10.00</span>
                                    </div>
                                    <div class="num_box">x3</div>
                                </div>
                            </div>
                        </div>
                        <div class="tr lh2">
                            共
                            <span class="theme">4</span>件 小计：¥610.00
                        </div>
                        <div class="tr lh2">
                            实付款：
                            <span class="theme">¥610.00</span>
                        </div>
                        <div class="btn_box df ais jct-end">
                            <span class="cf dfc bg_theme">支付</span>
                            <span class="theme dfc bg_FFF">联系客服</span>
                        </div>
                    </div>
                </div>
            </van-tab>
            <van-tab class="pd30" title="已审核">
                <!-- 订单 -->
                <div class="box" v-for="item in 2" :key="item">
                    <div class="order_title dfb">
                        <span>订单号：201909061234</span>
                        <span class="theme">已审核</span>
                    </div>
                    <!-- 店铺 -->
                    <div class="store_item pdt30" v-for="items in 2" :key="items">
                        <div class="store_name dfs">
                            <img class="img28 mgr6" src="../../image/e_ic_provider@2x.png" alt="">
                            <span>供应商名称供应商</span>
                            <img class="img28 mgl10" src="../../image/f_ic_more@2x.png" alt="">
                        </div>
                        <!-- 商品 -->
                        <div class="goods_item" v-for="item in 2" :key="item">
                            <div class="dfb">
                                <img class="img140 br20 mgr20" src="../../image/default.png" alt="">
                                <div class="flex">
                                    <div class="to-line2 lh15 fs28 mgb20">特大号落地紫砂陶瓷花盆红砂紫砂花瓷花盆瓷花</div>
                                    <div class="dfb">
                                        <div class="theme">
                                            ¥
                                            <span class="fs30">120.00</span>/盆
                                        </div>
                                        <div class="c_999">x50</div>
                                    </div>
                                </div>
                            </div>
                            <div class="service">
                                <div class="title dfs">
                                    <img
                                        class="img36"
                                        src="../../image/c_ic_appreciation@2x.png"
                                        alt=""
                                    >
                                    <span class="theme">增值服务(可多选）</span>
                                </div>
                                <div class="item dfb" v-for="items in 2" :key="items">
                                    <div>
                                        <span class="mgr20">立杆</span>
                                        <span>¥10.00</span>
                                    </div>
                                    <div class="num_box">x3</div>
                                </div>
                            </div>
                        </div>
                        <div class="tr lh2">
                            共
                            <span class="theme">4</span>件 小计：¥610.00
                        </div>
                        <div class="tr lh2">
                            实付款：
                            <span class="theme">¥610.00</span>
                        </div>
                        <div class="btn_box df ais jct-end">
                            <span class="cf dfc bg_theme">支付</span>
                            <span class="theme dfc bg_FFF">联系客服</span>
                        </div>
                    </div>
                </div>
            </van-tab>
        </van-tabs>
    </div>
</template>
<script>
export default {
  data() {
    return {
      tabList: ["全部", "未审核", "已审核"]
    };
  },
  methods: {
    toggleTab(name, title) {
      console.log(name, title);
    }
  }
};
</script>
<style lang="less" scoped>
.container {
  min-height: 100vh;
  background: #f7f4f8;
  box-sizing: border-box;
}
.order_title {
  height: 88px;
  border-bottom: 1px solid #f0f0f0;
}
.box {
  background: #fff;
  border-radius: 20px;
  padding: 0 30px 30px;
  margin-bottom: 30px;
}
.goods_item {
  background: #fcf9fc;
  padding: 20px;
  border-radius: 20px;
  margin: 20px 0;
}
.service {
  .title {
    padding: 20px 0 10px;
  }
  .item {
    padding: 20px 0;
  }
}
.btn_box {
  margin-top: 30px;
  span {
    width: 150px;
    height: 60px;
    border-radius: 30px;
    margin-left: 30px;
    border: 2px solid var(--theme);
  }
}
</style>