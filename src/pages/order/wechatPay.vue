<template>
    <div class="container">
        <div class="header-box dfa" style="background:#fff;color:#33292B;">
            <div class="back_icon dfc fdc">
                <img @click="back" class="icon_left icon_black" src="../../image/b_ic_back_1@2x.png" alt="">
            </div>
            <span class="flex dfc fs32">微信支付</span>
        </div>
        <div class="header-replace"></div>
        <div class="amount theme fs40 df ais-end jct">￥<span class="fs70">{{info.orderAmount}}</span></div>
        <div class="box">
            <div class="item dfb mgb60">
                <div class="dfc">
                    <img class="img52 mgr30" src="../../image/ic_wechatpay@2x.png" alt="">
                    <span>微信支付</span>
                </div>
            </div>
        </div>
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
            code:'',
        }
    },
    created(){
        this.orderId = this.$route.query.state
        this.getInfo()
        this.code = his.$route.query.code
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
            if(this.code){
                let rem = await getXCXOpenId({
                    code:this.code
                })
                if(rem.code==200){
                    console.log('获取到openid')
                    let openid = rem.data
                    let res2 = await weChatPay({
                        "orderId":this.orderId,
                        "openId":openid,
                        "payMethod":"JSAPI/APP/MICROPAY",
                        "paymentLinkType":1,
                        "returnType":"JSAPI/QR"
                    })
                    if(res2.code==200){
                        console.log('获取到链接')
                        window.location.href = res2.data.url
                        // this.$router.push({path:'/order/payResult'})
                    }else{
                        this.$toast(res2.message)
                    }
                }else{
                    this.$toast(rem.message)
                }
            }else{
                console.log('获取code失败')
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