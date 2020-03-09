<template>
    <div class="container_box bg_F7F5F6">
        <header-box bgc="#fff" title="提现">
            <div class="header_right dfc" slot="header-right" @click="$router.push({path:'/my/accountList'})">提现明细</div>
        </header-box>
        <div class="wihtdraw_amount bg_FFF">
            <p class="fs34 c_33292B">提现金额</p>
            <div class="input_box dfb">
                <span class="money c_33292B">¥</span>
                <input class="flex fs28" placeholder="请输入提现金额" type="number" v-model="money" />
                <span class="fs32 b theme" @click="pickAll">全部提现</span>
            </div>
            <p class="fs22 c_33292B balance">账户余额 ￥{{amount}}</p>
        </div>
        <div class="bank_information bg_FFF">
            <div class="bank_input dfb fs28">
                <span class=" c_33292B">开户人</span>
                <input class="tr" v-model="bankName" placeholder="请输入开户人姓名" />
            </div>
            <div class="bank_input dfb fs28">
                <span class=" c_33292B">开户银行</span>
                <input class="tr" v-model="bankAccountNumber" placeholder="请输入开户银行名称" />
            </div>
            <div class="bank_input dfb fs28">
                <span class=" c_33292B">银行卡号</span>
                <input class="tr" v-model="bankAccountName" placeholder="请输入银行卡卡号" />
            </div>
        </div>
        <div class="btn_red wihtdraw_btn" @click="submit">申请提现</div>
    </div>
</template>
<script>
import { getBalance,withdraw } from '@/js/api';
export default {
    data(){
        return{
            amount:0,
            money:'',
            bankName:'',
            bankAccountNumber:'',
            bankAccountName:'',
        }
    },
    created(){
        this.getInfo()
    },
    watch:{
        money(){
            if(this.money>this.amount){
                this.money = this.amount
            }
        }
    },
    methods:{
        async getInfo(){
            let res = await getBalance()
            if(res.code==200){
                this.amount = res.data
            }
        },
        pickAll(){
            this.money = this.amount
        },
        submit(){
            if(this.money=='' || this.money==0){
                this.$toast('请输入提现金额')
                return;
            }
            if(this.bankName==''){
                this.$toast('请输入开户人')
                return;
            }
            if(this.bankAccountNumber==''){
                this.$toast('请输入开户银行')
                return;
            }
            if(this.bankAccountName==''){
                this.$toast('请输入银行卡号')
                return;
            }
            this.$dialog.confirm({
                message:'确认申请提现吗？',
            }).then(async ()=>{
                let res = await withdraw({
                    "flow": {
                        "amount": this.money,
                        "bankName": this.bankName,
                        "bankAccountNumber": this.bankAccountNumber,
                        "bankAccountName": this.bankAccountName
                    }
                })
                if(res.code==200){
                    this.$toast('申请提现成功')
                    setTimeout(()=>{
                        this.$router.back()
                    },1000)
                }
            })
            
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
