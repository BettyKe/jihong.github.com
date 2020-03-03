<template>
    <div class="container_box bg_F7F5F6">
        <header-box bgc="#fff" title="提现">
            <div class="header_right dfc" slot="header-right" @click="$router.push({path:'/my/accountDetail'})">提现明细</div>
        </header-box>
        <div class="wihtdraw_amount bg_FFF">
            <p class="fs34 c_33292B">提现金额</p>
            <div class="input_box dfb">
                <span class="money c_33292B">¥</span>
                <input class="flex fs28" placeholder="请输入提现金额" />
                <span class="fs32 b theme">全部提现</span>
            </div>
            <p class="fs22 c_33292B balance">账户余额 ￥1000.00</p>
        </div>
        <div class="bank_information bg_FFF">
            <div class="bank_input dfb fs28">
                <span class=" c_33292B">开户人</span>
                <input class="tr" placeholder="请输入开户人姓名" />
            </div>
            <div class="bank_input dfb fs28">
                <span class=" c_33292B">开户银行</span>
                <input class="tr" placeholder="请输入开户银行名称" />
            </div>
            <div class="bank_input dfb fs28">
                <span class=" c_33292B">银行卡号</span>
                <input class="tr" placeholder="请输入银行卡卡号" />
            </div>
        </div>
        <div class="btn_red wihtdraw_btn" @click="submit">申请提现</div>
    </div>
</template>
<script>
import { getBalance } from '@/js/api';
export default {
    created(){

    },
    methods:{
        async getInfo(){
            let res = await getBalance()
            if(res.code==200){

            }
        },
        submit(){

            this.$toast('提现成功')
        },
    }
}
</script>
<style lang="less" scoped>
::-webkit-input-placeholder { /* Chrome/Opera/Safari */ 
	color: #CCCCCC;
}
::-moz-placeholder { /* Firefox 19+ */  
	color: #CCCCCC;
}
:-ms-input-placeholder { /* IE 10+ */ 
 color: #CCCCCC;
}
:-moz-placeholder { /* Firefox 18- */ 
 color: #CCCCCC;
}
.header_right{
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    font-size: 28px;
    padding-right: 30px;
}
.wihtdraw_amount{
    height: 278px;
    box-sizing: border-box;
    padding: 20px 30px 0;
}
.input_box{
    border-bottom: 1px solid #F0F0F0;
    padding-top: 66px;
    padding-bottom: 20px;
    .money{
        font-size: 80px;
    }
    input{
        padding-left: 20px;
    }
}
.balance{
    padding: 16px 0;
}
.bank_information{
    margin-top: 20px;
    box-sizing: border-box;
    padding: 0 30px;
    .bank_input{
        border-bottom: 1px solid #F0F0F0;
        height: 88px;
        box-sizing: border-box;
    }
}
.wihtdraw_btn{
    margin-top: 80px;
}
</style>
