<template>
    <div class="container">
        <header-box title="支付订单"></header-box>
        <div class="amount theme fs40 df ais-end jct">￥<span class="fs70">300.00</span></div>
        <div class="box">
            <div class="dfb">
                <img class="img60 mgr20" src="../../image/e_ic_balance@2x.png" alt="">
                <div class="fs28 flex">余额支付<span class="c_999">（剩余：2000.00）</span></div>
                <img class="img40" src="../../image/e_ic_circle_d@2x.png" alt="">
            </div>
            <div class="c_999 tip">将抵扣<span class="theme">300.00</span>元，并扣除<span class="theme">300.00</span>余额</div>
        </div>
        <div class="title fs28 b">其他支付方式 </div>
        <div class="box">
            <div class="item dfb mgb60">
                <div class="dfc">
                    <img class="img52 mgr30" src="../../image/ic_wechatpay@2x.png" alt="">
                    <span>微信支付</span>
                </div>
                <img class="img40" src="../../image/e_ic_circle_d@2x.png" alt="">
            </div>
            <div class="item dfb mgb60">
                <div class="dfc">
                    <img class="ylImg mgr30" src="../../image/ic_unionpay@2x.png" alt="">
                    <span>银联支付</span>
                </div>
                <img class="img40" src="../../image/e_ic_circle_d@2x.png" alt="">
            </div>
            <div class="item dfb">
                <div class="dfc">
                    <img class="img52 mgr30" src="../../image/ic_nh@2x.png" alt="">
                    <span>农行支付</span>
                </div>
                <img class="img40" src="../../image/e_ic_circle_d@2x.png" alt="">
            </div>
        </div>
        <div class="tips theme">提醒：大额支付请选择农业银行进行支付。</div>
        <div class="btn_red" @click="$router.push({path:'/order/payResult'})">确认支付</div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
.amount{
    margin: 80px 0 56px;
}
.box{
    margin: 30px;
    padding: 30px;
    border-radius: 10px;
    box-shadow:0px 0px 20px 0px #f0f0f0;
}
.title{
    padding-left: 30px;
}
.tip{
    margin: 50px 0 0 80px;
}
.tips{
    margin: 20px 30px 80px;
}
.ylImg{
    width: 52px;
    height: 34px;
}
</style>