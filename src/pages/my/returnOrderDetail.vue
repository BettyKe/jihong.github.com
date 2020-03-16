<template>
    <div class="container">
        <header-box title="退货单详情"></header-box>
        <div class="box">
            <div><span class="b">单据类型：</span>退货单</div>
            <div><span class="b">日期：</span>{{info.createAt}}</div>
            <div><span class="b">本单金额（元）：</span>¥{{info.totalAmount}}</div>
            <div><span class="b">实退金额（元）：</span>¥1,000.00</div>
            <div><span class="b">总数量（盆）：</span>{{info.deliveryQuantity}}</div>
        </div>
        <div class="box item_box" v-for="(item,index) in orderProviderDTOList" :key="index" >
            <div class="title b dfs">商品名称+规格+型号</div>
            <div class="dfb"><span>单价：¥10.00</span><span>数量（盆）：20</span></div>
            <div class="tr">金额：¥1,000.00</div>
        </div>
        <div class="box item_box">
            <div class="title b dfs">商品名称+规格+型号</div>
            <div class="dfb"><span>单价：¥10.00</span><span>数量（盆）：20</span></div>
            <div class="tr">金额：¥1,000.00</div>
        </div>
    </div>
</template>
<script>
import { orderFindDetailWithDistributor, } from "@/js/api";
export default {
    data(){
        return{
            id:'',
            info:'',
        }
    },
    created(){
        this.id = this.$route.query.id
        if(this.id){
            this.getInfo()
        }
    },
    methods:{
        async getInfo(){
            let res = await orderFindDetailWithDistributor({
                id:''
            })
            if(res.code==200){
                this.info = res.data
            }
        },
        
    }
}
</script>
<style lang="less" scoped>
.container{
    min-height: 100vh;
    background: #F7F4F8;
    padding:30px;
    box-sizing: border-box;
}
.box{
    background: #fff;
    border-radius: 20px;
    margin-bottom: 20px;
    padding: 0 30px 30px;
    font-size: 28px;
    line-height: 1.5;
    .title{
        height: 80px;
        border-bottom: 1px solid #F0F0F0;
        margin-bottom: 20px;
    }
    div,span{
        line-height: 2;
    }
}
</style>