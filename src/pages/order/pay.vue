<template>
    <div class="container">
        <div class="header-box dfa" style="background:#fff;color:#33292B;">
            <div class="back_icon dfc fdc">
                <img @click="back" class="icon_left icon_black" src="../../image/b_ic_back_1@2x.png" alt="">
            </div>
            <span class="flex dfc fs32">支付订单</span>
        </div>
        <div class="header-replace"></div>
        <div class="amount theme fs40 df ais-end jct">￥<span class="fs70">{{info.orderAmount}}</span></div>
        <div class="box" @click="select(1)">
            <div class="dfb">
                <img class="img60 mgr20" src="../../image/e_ic_balance@2x.png" alt="">
                <div class="fs28 flex">余额支付<span class="c_999">（剩余：{{info.balance}}）</span></div>
                <img class="img40" v-if="type==1" src="../../image/e_ic_circle_s@2x.png" alt="">
                <img class="img40" v-else src="../../image/e_ic_circle_d@2x.png" alt="">
            </div>
            <div class="c_999 tip">将抵扣<span class="theme">{{info.orderAmount}}</span>元，并扣除<span class="theme">{{info.orderAmount}}</span>余额</div>
        </div>
        <div class="title fs28 b">其他支付方式 </div>
        <div class="box">
            <div class="item dfb mgb60" @click="select(2)">
                <div class="dfc">
                    <img class="img52 mgr30" src="../../image/ic_wechatpay@2x.png" alt="">
                    <span>微信支付</span>
                </div>
                <img class="img40" v-if="type==2" src="../../image/e_ic_circle_s@2x.png" alt="">
                <img class="img40" v-else src="../../image/e_ic_circle_d@2x.png" alt="">
            </div>
            <div class="item dfb mgb60" @click="select(3)">
                <div class="dfc">
                    <img class="ylImg mgr30" src="../../image/ic_unionpay@2x.png" alt="">
                    <span>银联支付</span>
                </div>
                <img class="img40" v-if="type==3" src="../../image/e_ic_circle_s@2x.png" alt="">
                <img class="img40" v-else src="../../image/e_ic_circle_d@2x.png" alt="">
            </div>
            <div class="item dfb" @click="select(4)">
                <div class="dfc">
                    <img class="img52 mgr30" src="../../image/ic_nh@2x.png" alt="">
                    <span>农行支付</span>
                </div>
                <img class="img40" v-if="type==4" src="../../image/e_ic_circle_s@2x.png" alt="">
                <img class="img40" v-else src="../../image/e_ic_circle_d@2x.png" alt="">
            </div>
        </div>
        <div class="tips theme">提醒：大额支付请选择农业银行进行支付。</div>
        <div class="btn_red" @click="submit">确认支付</div>
    </div>
</template>
<script>
import {getDistributorBalance,balancePayOrderForDistributor,weChatPay,abcPay} from '@/js/api'
export default {
    data(){
        return{
            orderId:'',
            info:'',
            type:1,//1余额 2微信 3银联 4农行
        }
    },
    created(){
        this.orderId = this.$route.query.orderId
        this.getInfo()
    },
    methods:{
        async getInfo(){
            let res = await getDistributorBalance({
                orderId:this.orderId
            })
            if(res.code==200){
                this.info = res.data
            }
        },
        back(){
            this.$dialog.confirm({
                message:'订单还未支付，确定退出吗？',
            }).then(()=>{
                this.$router.back();
            })
        },
        select(type){
            this.type = type
        },
        async submit(){
            switch(this.type){
                case 1:
                    let res1 = await balancePayOrderForDistributor({
                        orderId:this.orderId
                    })
                    if(res1.code==200){
                        this.$router.push({path:'/order/payResult'})
                    }else{
                        this.$toast(res1.message)
                    }
                    break;
                case 2:
                    let url = encodeURIComponent('https://consoletest.ji-hong.com.cn/h5/#/order/pay')
                    window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx50430560fcced261&redirect_uri=${url}&response_type=code&scope=snsapi_base&state=${this.orderId}#wechat_redirect`
                    let rem = await getXCXOpenId({
                        code:''
                    })
                    if(rem.code==200){
                        let openid = rem.data
                        let res2 = await weChatPay({
                            "orderId":this.orderId,
                            "openId":openid,
                            "payMethod":"JSAPI/APP/MICROPAY",
                            "paymentLinkType":1,
                            "returnType":"JSAPI/QR"
                        })
                        if(res2.code==200){
                            this.$router.push({path:'/order/payResult'})
                        }else{
                            this.$toast(res2.message)
                        }
                    }else{
                        this.$toast(rem.message)
                    }
                    break;
                case 3:
                    let res3 = await abcPay({
                        "orderId":this.orderId,
                        "payType":"PreAuthPay",
                        "paymentType":6,
                        "paymentLinkType":2,
                        "unionPayLinkType":0,
                        "returnType":"URL"
                    })
                    if(res3.code==200){
                        window.location.href = res3.data
                    }else{
                        this.$toast(res3.message)
                    }
                    break;
                case 4:
                    let res4 = await abcPay({
                        "orderId":this.orderId,
                        "payType":"PreAuthPay",
                        "paymentType":"A",
                        "paymentLinkType":2,
                        "unionPayLinkType":0,
                        "returnType":"URL"
                    })
                    if(res4.code==200){
                        window.location.href = res4.data
                    }else{
                        this.$toast(res4.message)
                    }
                    break;
            }
        }
    }
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

.header-box{
    background: #fff;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 98px;
    padding-right: 30px;
    // padding: 0 30px 0;
    box-sizing: border-box;
    z-index: 50;
    .back_icon{
        width: 98px;
        height: 98px;
        position: absolute;
        left: 0;
        top: 0;
        img{
            width: 32px;
            height: 32px;
        }
    }
}
.header-replace{
    width: 100vw;
    height: 98px;
}
</style>