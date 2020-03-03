<template>
    <div class="container">
        <header-box title="确认订单"></header-box>
        <div class="box dfc pd30" @click="$router.push({path:'/order/addressList?type=1'})">
            <img class="img60 mgr30" src="../../image/e_ic_orientation@2x.png" alt="">
            <div class="flex" v-if="addr">
                <div class="mgb20">
                    <span class="fs32 b mgr20">{{addr.consignee}}</span>
                    <span class="fs28">{{addr.phone}}</span>
                </div>
                <div class="lh15">{{addr.province+addr.city+addr.district+addr.detail}}</div>
            </div>
            <div class="flex tr fs28" v-else>选择收货地址</div>
            <img class="img32 ml20" src="../../image/f_ic_more@2x.png" alt="">
        </div>
        <div class="box logistics dfb pd30 fs28">
            <div>配送物流</div>
            <div @click="$router.push({path:'/order/logistics'})">
                <span>{{logistics?logistics.name:'选择配送物流'}}</span>
                <img class="img32 ml20" src="../../image/f_ic_more@2x.png" alt="">
            </div>
        </div>
        <div class="box store_list pd30" v-for="(item,index) in info.cartList" :key="index">
            <div class="store_name dfs">
                <img class="img28 mgr6" src="../../image/e_ic_provider@2x.png" alt="">
                <span>{{item.providerName}}</span>
                <img class="img28 mgl10" src="../../image/f_ic_more@2x.png" alt="">
            </div>
            <div class="goods_item" v-for="(items,indexs) in item.vitDTOList" :key="indexs" v-if="items.select">
                <div class="dfb">
                    <img class="img140 br20 mgr20" :src="ImageTool.initImage(items.productDTO.jpgUrl)[0]" alt="">
                    <div class="flex">
                        <div class="to-line2 lh15 fs28 mgb20">{{items.productDTO.plantName}}</div>
                        <div class="dfb">
                            <div class="theme">¥<span class="fs30">{{items.productDTO.unitPrice}}</span>/{{items.productDTO.unitName}}</div>
                            <div class="c_999">x{{items.productDTO.unitQuantity}}</div>
                        </div>
                    </div>
                </div>
                <div class="service" v-if="items.childrenProductDTOList.length">
                    <div class="title dfs">
                        <img class="img36" src="../../image/c_ic_appreciation@2x.png" alt="">
                        <span class="theme">增值服务(可多选）</span>
                    </div>
                    <div class="item dfb" v-for="(itm,idx) in items.childrenProductDTOList" :key="idx">
                        <div>
                            <span class="mgr20">{{itm.plantName}}</span>
                            <span>¥{{itm.unitPrice}}</span>
                        </div>
                        <div class="num_box">x{{itm.unitQuantity}}</div>
                    </div>
                </div>
            </div>
            <div class="tr lh2">共<span class="theme"> {{item.storeNum}} </span>件 小计：¥{{item.storeSum}}</div>
            <div class="tr lh2">实付款：<span class="theme">¥{{item.storeSum}}</span></div>
        </div>
        <div class="fix_bottom dfb">
            <div>共<span class="theme"> {{info.sumNum}} </span>件</div>
            <div class="df ais jct-end">
                <div>合计：<span class="theme fs34">￥{{info.sum}}</span></div>
                <div class="submit_btn dfc" @click="submit">提交订单</div>
            </div>
        </div>
    </div>
</template>
<script>
import {getDefault,saveOrderForDistributor} from '@/js/api'
export default {
    data(){
        return{
            info:{},
            logistics:'',
            addr:'',
        }
    },
    created(){
        this.info = JSON.parse(sessionStorage.getItem('checkout')) || {}
        this.logistics = JSON.parse(sessionStorage.getItem('logistics')) || {}
        this.getAddr()
    },
    methods:{
        async getAddr(){
            let res = await getDefault()
            if(res.code==200){
                this.addr = JSON.parse(sessionStorage.getItem('addr')) || res.data
            }
        },
        async submit(){
            if(!this.addr.id){
                this.$toast('请选择地址')
                return
            }
            if(!this.logistics.id){
                this.$toast('请选择物流')
                return
            }
            let list = []
            this.info.cartList.map(v=>{
                if(v.select){
                    v.vitDTOList.map(t=>{
                        if(t.select){
                            list.push({
                                productId:t.productDTO.productId,
                                productNum:t.productDTO.unitQuantity,
                            })
                            t.childrenProductDTOList.map(m=>{
                                list.push({
                                    productId:m.productId,
                                    productNum:m.unitQuantity,
                                    parentId:t.productDTO.productId,
                                })
                            })
                        }
                    })
                }
            })
            console.log(list)
            let res = await saveOrderForDistributor({
                "order": {
                    "itemQuantity": this.info.sumNum,
                    "totalAmount": this.info.sum,
                    "payAmount": this.info.sum
                },
                "addressId":this.addr.id,
                "transporterId":this.logistics.id,
                "productDTOList": list
            })
            if(res.code==200){
                this.$router.replace({path:`/order/pay?orderId=${res.data}`})
            }
        }
    }
}
</script>
<style lang="less" scoped>
.container{
    width: 100vw;
    background: #F8F6F7;
    padding: 30px 30px 150px;
    box-sizing: border-box;
    overflow: hidden;
    min-height: 100vh;
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