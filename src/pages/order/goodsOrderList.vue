<template>
    <div class="container">
        <header-box title="订单汇总">
            <div class="header_right dfc" slot="header-right">
                筛选
                <img class="img32" src="../../image/c_ic_screen@2x.png" alt="">
            </div>
        </header-box>
        <van-tabs v-model="active" animated swipeable @click="toggleTab">
            <van-tab class="pd30" title="备货中">
                <div class="box bg_FFF pd30 br20 mgb20" v-for="item in 2" :key="item">
                    <div class="order_title dfb">
                        <span>订单号：201909061234</span>
                        <span class="theme">已支付-待发货</span>
                    </div>
                    <div class="goods_item">
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
                        </div>
                </div>
            </van-tab>
            <van-tab class="pd30" title="待收货">
                <div class="box bg_FFF pd30 br20 mgb20" v-for="item in 2" :key="item">
                    <div class="order_title dfb">
                        <span>订单号：201909061234</span>
                        <span class="theme">已支付-待发货</span>
                    </div>
                    <div class="goods_item">
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
                        </div>
                </div>
            </van-tab>
            <van-tab class="pd30" title="已完成">
                <div class="box bg_FFF pd30 br20 mgb20" v-for="item in 2" :key="item">
                    <div class="order_title dfb">
                        <span>订单号：201909061234</span>
                        <span class="theme">已支付-待发货</span>
                    </div>
                    <div class="goods_item">
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
                        </div>
                </div>
            </van-tab>
        </van-tabs>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
.header_right{
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    font-size: 28px;
    padding-right: 30px;
}
.container{
    min-height: 100vh;
    background: #F7F4F8;
    box-sizing: border-box;
}
.goods_item {
  background: #fcf9fc;
  padding: 20px;
  border-radius: 20px;
  margin: 20px 0;
}
</style>