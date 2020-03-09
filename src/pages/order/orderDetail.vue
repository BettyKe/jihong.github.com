<template>
    <div class="container">
        <header-box title="订单详情"></header-box>
        <img class="bg_img" src="../../image/c_ic_order_bg@2x.png" alt="">
        <div class="state_box">
            <div class="dfs">
                <img class="img60" src="../../image/k_ic_pay@2x.png" alt="">
                <span class="fs36 cf pdl20">等待付款</span>
            </div>
        </div>
        <div class="box dfc pd30">
            <img class="img60 mgr30" src="../../image/e_ic_orientation@2x.png" alt="">
            <div class="flex">
                <div class="mgb20">
                    <span class="fs32 b mgr20">{{info.addressDTO.consignee}}</span>
                    <span class="fs28">{{info.addressDTO.phone}}</span>
                </div>
                <div class="lh2">{{info.addressDTO.detail}}</div>
            </div>
        </div>
        <div class="box logistics dfb pd30 fs28">
            <div>配送物流</div>
            <div>
                <span>{{info.transporterName}}</span>
            </div>
        </div>
        <div class="box store_list pd30" v-for="(item,index) in info.orderProviderDTOList" :key="index">
            <div class="store_name dfs">
                <img class="img28 mgr6" src="../../image/e_ic_provider@2x.png" alt="">
                <span>{{item.providerName}}  </span>
                <img class="img28 mgl10" src="../../image/f_ic_more@2x.png" alt="">
            </div>
            <div class="goods_item" v-for="(items,indexs) in item.itemDTOList" :key="indexs">
                <div class="dfb">
                    <img class="img140 br20 mgr20" :src="ImageTool.initImage(items.productDTO.jpgUrl)[0]" alt="">
                    <div class="flex">
                        <div class="to-line2 lh2 fs28 mgb20">{{items.productDTO.productTitle}}</div>
                        <div class="dfb">
                            <div class="theme">¥<span class="fs30">{{items.productDTO.unitPrice}}</span>/盆</div>
                            <div class="c_999">x{{items.productDTO.unitQuantity}}</div>
                        </div>
                    </div>
                </div>
                <div class="service" v-if="items.childrenDTOList.length">
                    <div class="title dfs">
                        <img class="img36" src="../../image/c_ic_appreciation@2x.png" alt="">
                        <span class="theme">增值服务(可多选）</span>
                    </div>
                    <div class="item dfb" v-for="(itm,idx) in items.childrenDTOList" :key="idx">
                        <div>
                            <span class="mgr20">{{itm.plantName}}</span>
                            <span>¥{{itm.totalAmount}}</span>
                        </div>
                        <div class="num_box">x{{itm.unitQuantity}}</div>
                    </div>
                </div>
            </div>
            <div class="tr lh2">共<span class="theme"> {{item.totalQuantity}} </span>箱 小计：¥{{item.totalAmount}}</div>
        </div>
        <div class="box pd30 amount_box">
            <div class="dfb"><span>实际付款</span><span class="theme">￥{{info.payAmount}}</span></div>
            <div class="dfb"><span>发货单编号</span><span>{{info.id}}</span></div>
            <div class="dfb" v-if="info.createAt"><span>创建时间</span><span>{{info.createAt}}</span></div>
            <div class="dfb" v-if="info.payAt"><span>支付时间</span><span>{{info.payAt}}</span></div>
            <!-- <div class="dfb"><span>授信时间</span><span>2019-06-04 15:00:23</span></div> -->
        </div>
        <div class="btn_box df ais jct-end">
            <span class="cf dfc bg_theme"  @click="$router.push({path:`/order/pay?orderId=${info.id}`})">支付</span>
            <span class="theme dfc bg_FFF"><a :href="`tel:${phone}`">联系客服</a></span>
        </div>
    </div>
</template>
<script>
import {findMyOrderDetailForDistributor} from '@/js/api'
export default {
    data(){
        return{
            info:'',
            phone:'',
        }
    },
    created(){
        let id = this.$route.query.id
        if(id){
            this.getInfo(id)
        }
        this.phone = sessionStorage.getItem('phone') || ''
    },
    methods:{
        async getInfo(id){
            let res = await findMyOrderDetailForDistributor({id})
            if(res.code==200){
                this.info = res.data
            }
        }
    },
}
</script>
<style lang="less" scoped>
.container{
    width: 100vw;
    background: #F8F6F7;
    padding: 30px 30px 100px;
    box-sizing: border-box;
    overflow: hidden;
    position: relative;
}
.bg_img{
    position: absolute;
    top: 98px;
    left: 0;
    width: 100%;
    height: 200px;
}
.state_box{
    position: relative;
    z-index: 10;
    padding: 30px 30px 50px;
}
.box{
    background: #fff;
    margin-bottom: 20px;
    border-radius:20px;
    position: relative;
    z-index: 10;
}
.goods_item{
    background: #FCF9FC;
    padding: 20px;
    border-radius: 20px;
    margin: 20px 0;
}
.service{
    border-bottom: 1px solid #F5F5F5;
    .title{
        padding: 20px 0 10px;
    }
    .item{
        padding: 20px 0;
    }
}
.btn_box{
    span{
        width: 150px;
        height: 60px;
        border-radius: 30px;
        margin-left: 30px;
        border: 2px solid var(--theme);
    }
}
.amount_box{
    div,span{
        line-height: 2;
    }
}
</style>