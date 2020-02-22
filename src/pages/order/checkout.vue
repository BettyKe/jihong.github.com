<template>
    <div class="container">
        <header-box title="确认订单"></header-box>
        <div class="box dfc pd30" @click="$router.push({path:'/order/addressList'})">
            <img class="img60 mgr30" src="../../image/e_ic_orientation@2x.png" alt="">
            <div class="flex">
                <div class="mgb20">
                    <span class="fs32 b mgr20">王大锤</span>
                    <span class="fs28">13610215222</span>
                </div>
                <div class="lh15">广东省广州市天河区长兴街道华观路12号万科云城A栋C11</div>
            </div>
            <img class="img32 ml20" src="../../image/f_ic_more@2x.png" alt="">
        </div>
        <div class="box logistics dfb pd30 fs28">
            <div>配送物流</div>
            <div @click="$router.push({path:'/order/logistics'})">
                <span>德邦物流</span>
                <img class="img32 ml20" src="../../image/f_ic_more@2x.png" alt="">
            </div>
        </div>
        <div class="box store_list pd30">
            <div class="store_name dfs">
                <img class="img28 mgr6" src="../../image/e_ic_provider@2x.png" alt="">
                <span>供应商名称供应商  </span>
                <img class="img28 mgl10" src="../../image/f_ic_more@2x.png" alt="">
            </div>
            <div class="goods_item" v-for="item in 2" :key="item">
                <div class="dfb">
                    <img class="img140 br20 mgr20" src="../../image/default.png" alt="">
                    <div class="flex">
                        <div class="to-line2 lh15 fs28 mgb20">特大号落地紫砂陶瓷花盆红砂紫砂花瓷花盆瓷花</div>
                        <div class="dfb">
                            <div class="theme">¥<span class="fs30">120.00</span>/盆</div>
                            <div class="c_999">x50</div>
                        </div>
                    </div>
                </div>
                <div class="service">
                    <div class="title dfs">
                        <img class="img36" src="../../image/c_ic_appreciation@2x.png" alt="">
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
            <div class="tr lh2">共<span class="theme"> 4 </span>件 小计：¥610.00</div>
            <div class="tr lh2">实付款：<span class="theme">¥610.00</span></div>
        </div>
        <div class="fix_bottom dfb">
            <div>共<span class="theme"> 12 </span>件</div>
            <div class="df ais jct-end">
                <div>合计：<span class="theme fs34">￥720.00</span></div>
                <div class="submit_btn dfc" @click="$router.push({path:'/order/pay'})">提交订单</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
.container{
    width: 100vw;
    background: #F8F6F7;
    padding: 30px 30px 150px;
    box-sizing: border-box;
    overflow: hidden;
}
.box{
    background: #fff;
    margin-bottom: 20px;
    border-radius:20px;
}
.goods_item{
    background: #FCF9FC;
    padding: 20px;
    border-radius: 20px;
    margin: 20px 0;
}
.service{
    .title{
        padding: 20px 0 10px;
    }
    .item{
        padding: 20px 0;
    }
}
.fix_bottom{
    position: fixed;
    bottom: 0;
    left: 0;
    background: #fff;
    height: 98px;
    width: 100vw;
    padding-left: 30px;
    box-sizing: border-box;
    .submit_btn{
        width: 200px;
        height: 98px;
        color: #fff;
        background: var(--theme);
        margin-left: 14px;
    }
}
</style>