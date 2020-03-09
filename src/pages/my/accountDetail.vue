<template>
    <div class="container">
        <header-box title="提现详情"></header-box>
        <div class="box bg_FFF">
            <div class="dfs">提现金额：¥{{info.amount}}</div>
            <div class="dfs">提现时间：{{info.createAt}}</div>
            <div class="dfs">提现状态：{{info.condition}}</div>
        </div>
        <div class="box bg_FFF mgt20">
            <div class="dfs bor_bottom b fs32">提现银行卡信息</div>
            <div class="dfs bor_bottom">开户人<span>{{info.bankName}}</span></div>
            <div class="dfs bor_bottom">开户银行<span>{{info.bankAccountName}}</span></div>
            <div class="dfs ">银行卡号<span>{{info.bankAccountNumber}}</span></div>
        </div>
    </div>
</template>
<script>
import {withdrawDetailOfOne} from '@/js/api';
export default {
    data(){
        return{
            info:''
        }
    },
    created(){
        let id = this.$route.query.id
        this.getInfo(id)
    },
    methods:{
        async getInfo(id){
            let res = await withdrawDetailOfOne({withdrawId:id})
            if(res.code==200){
                this.info = res.data
            }
        }
    }
}
</script>
<style lang="less" scoped>
.container{
    min-height: 100vh;
    background: #F7F4F8;
    box-sizing: border-box;
    font-size: 28px;
}
.box{
    padding: 10px 30px;
}
.box div{
    height: 80px;
    span{
        color: #666;
        margin-left: 30px;
    }
}
</style>