<template>
    <div class="container_box bg_F7F5F6">
        <div class="cart_top df jct-between cf">
            <span class="fs34 b">购物车</span>
            <span class="fs28" @click="showEdit=!showEdit">{{showEdit?'完成':'管理'}}</span>
        </div>
        <van-list class="item_list" v-if="cartList.length">
            <div class="item bg_FFF" v-for="(item,index) in cartList" :key="index" :index="index">
                <div class="dfa item_title">
                    <div class="select dfc" @click="selectStore(index)">
                        <img class="img40" v-if="item.select" src="../../image/e_ic_circle_2@2x.png" />
                        <img class="img40" v-else src="../../image/e_ic_circle_d@2x.png" />
                    </div>
                    <div class="flex dfs" @click="$router.push({path:`/goods/storeIndex?id=${item.providerId}`})">
                        <img class="img32 mgr6" src="../../image/e_ic_provider@2x.png" />
                        <span>{{item.providerName}}</span>
                        <img class="img32" src="../../image/b_ic_back@2x.png" />
                    </div>
                </div>
                <div class="goods_item" v-for="(items,indexs) in item.vitDTOList" :key="indexs" :index="indexs">
                    <div class="dfb">
                        <div class="select dfc" @click="selectGoods(index,indexs)">
                            <img class="img40" v-if="items.select" src="../../image/e_ic_circle_2@2x.png" />
                            <img class="img40" v-else src="../../image/e_ic_circle_d@2x.png" />
                        </div>
                        <div class="flex dfb">
                            <img class="goods_img img160 mgr20" :src="ImageTool.initImage(items.productDTO.jpgUrl)[0]" alt="" @click="$router.push({path:`/goods/goodsDetail?id=${items.productDTO.productId}`})" />
                            <div class="goods_info flex df jct-around fdc">
                                <div class="title to-line2" @click="$router.push({path:`/goods/goodsDetail?id=${items.productDTO.productId}`})">{{items.productDTO.plantName}}</div>
                                <div class="spec" @click="$router.push({path:`/goods/goodsDetail?id=${items.productDTO.productId}`})"><span class="bg_F5F5F5 fs18">型号：{{items.productDTO.model}} ; 规格：{{items.productDTO.gradeName}}</span></div>
                                <div class="dfb">
                                    <div class="theme flex fs20">¥<span class="fs28">{{items.productDTO.totalAmount}}</span>/{{items.productDTO.unitName}}</div>
                                    <div class="num_box dfc">
                                        <img class="img32" src="../../image/ic_add_1@2x.png" alt="" @click="changeGoodNum(index,indexs,1)">
                                        <input class="dfc" type="number" v-model="items.productDTO.unitQuantity" disabled />
                                        <img class="img32" src="../../image/ic_add@2x.png" alt="" @click="changeGoodNum(index,indexs,2)">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="service_box" v-if="items.childrenProductDTOList.length">
                        <div class="title dfs pdl30">
                            <img class="img36" src="../../image/c_ic_appreciation@2x.png" alt="">
                            <span class="theme fs28">增值服务(可多选)</span>
                        </div>
                        <div class="service_list">
                            <div class="item dfb" v-for="(itm,idx) in items.childrenProductDTOList" :key="idx" :index="idx">
                                <div class="dfa">
                                    <span class="fs28 name">{{itm.plantName}}</span>
                                    <span class="fs28">¥{{itm.totalAmount}}</span>
                                </div>
                                <div class="dfc">
                                    <img class="img32" src="../../image/ic_add_1@2x.png" alt="" @click="changeServiceNum(index,indexs,idx,1)">
                                    <input type="number" v-model="itm.unitQuantity" max-length="6" disabled />
                                    <img class="img32" src="../../image/ic_add@2x.png" alt="" @click="changeServiceNum(index,indexs,idx,2)">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 失效商品 -->
            <!-- <div class="item past_list bg_FFF">
                <div class="dfb item_title">
                    <span>失效的商品</span>
                    <span class="theme">清空</span>
                </div>
                <div class="goods_item dfb">
                    <div class="select dfc">
                        <span>失效</span>
                    </div>
                    <div class="flex dfb">
                        <img class="goods_img img160 mgr20" src="../../image/default.png" alt="" />
                        <div class="goods_info flex df jct-around fdc">
                            <div class="title to-line2">特大号落地紫砂陶瓷花盆红砂紫砂花瓷花盆瓷花</div>
                            <div class="spec"><span class="bg_F5F5F5 fs18">型号：十三装 ; 规格：A级</span></div>
                            <div class="dfb">
                                <div class="theme flex fs20">¥<span class="fs28">720.00</span>/盆</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> -->
        </van-list>
        <div class="noData dfc" v-if="!cartList.length">
            购物车是空的
        </div>
        <div class="sum_box dfb" v-if="cartList.length">
            <div class="select dfc" @click="selectAll">
                <img class="img40" v-if="allSelect" src="../../image/e_ic_circle_2@2x.png" alt="">
                <img class="img40" v-else src="../../image/e_ic_circle_d@2x.png" alt="">
                全选
            </div>
            <div class="flex df jct-around fdc" v-show="!showEdit">
                <div>共<span class="theme"> {{sumNum}} </span>件</div>
                <div>合计：<span class="theme fs34">¥{{sum}} </span><span class="fs20 c_999">(不含运费)</span></div>
            </div>
            <div class="sum_btn dfc">
                <span v-show="!showEdit" @click="checkout">结算</span>
                <span v-show="showEdit" class="add_collect" @click="addCollect">移入收藏夹</span>
                <span v-show="showEdit" @click="del">删除</span>
            </div>
        </div>
    </div>
</template>
<script>
import {showCart,virtualItemDeleteBatch,addToCollect,changeCartProductNum} from '@/js/api'
export default {
    data() {
        return{
            showEdit:false,
            cartList:[],
            allSelect:false,
            sum:0.00,
            sumNum:0,
            selectId:[],
        }
    },
    created(){
        this.getList()
    },
    watch:{
        cartList(){
            let sum = 0.00
            let sumNum = 0
            let selectId = []
            let allflag = true
            console.log(this.cartList)
            this.cartList.map(v=>{
                let flag = true
                let storeNum = 0
                let storeSum = 0.00
                v.vitDTOList.map(t=>{
                    if(t.select){
                        selectId.push(t.productDTO.productId)
                        
                        let price = parseFloat(t.productDTO.totalAmount)*t.productDTO.unitQuantity
                        if(t.childrenProductDTOList.length){
                            t.childrenProductDTOList.map(m=>{
                                price += parseFloat(m.totalAmount)*m.unitQuantity
                            })
                        }
                        sumNum++;
                        sum += price
                        storeNum++;
                        storeSum += price
                    }else{
                        allflag = false
                        flag = false
                    }
                    v.select = flag
                })
                v.storeNum = storeNum
                v.storeSum = storeSum.toFixed(2)
            })
            this.allSelect = allflag
            this.sum = sum.toFixed(2)
            this.sumNum = sumNum
            this.selectId = selectId
        }
    },
    methods:{
        // 全选
        selectAll(){
            this.allSelect = !this.allSelect
            let cartList = this.cartList
            this.cartList.map(v=>{
                v.select = this.allSelect
                v.vitDTOList.map(t=>{
                    t.select = this.allSelect
                })
            })
            this.cartList = Object.assign([],cartList)
        },
        // 选择店铺
        selectStore(index){
            let cartList = this.cartList
            cartList[index].select = !cartList[index].select
            cartList[index].vitDTOList.map(v=>{
                v.select = cartList[index].select
            })
            this.cartList = Object.assign([],cartList)
            
        },
        // 选择商品
        selectGoods(index,indexs){
            let cartList = this.cartList
            cartList[index].vitDTOList[indexs].select = !cartList[index].vitDTOList[indexs].select
            this.cartList = Object.assign([],cartList)
        },
        // 获取购物车列表
        async getList(){
            let res = await showCart()
            if(res.code==200){
                res.data.map(v=>{
                    v.select = false
                    v.vitDTOList.map(t=>{
                        t.select = false
                    })
                })
                this.cartList = res.data
            }
        },
        async changeGoodNum(index,indexs,type){
            let list = this.cartList
            let num = list[index].vitDTOList[indexs].productDTO.unitQuantity
            if(type==1){
                if(num<=1){
                    this.$toast('不能再少了');
                    return
                }
                num--;
            }else if(type==2){
                num++
            }
            let res = await changeCartProductNum({
                virtualItemId:list[index].vitDTOList[indexs].productDTO.virtualItemId,
                num,
            })
            if(res.code==200){
                list[index].vitDTOList[indexs].productDTO.unitQuantity = num
            }
            this.cartList = list
        },
        async changeServiceNum(index,indexs,idx,type){
            let list = this.cartList
            let num = list[index].vitDTOList[indexs].childrenProductDTOList[idx].unitQuantity
            if(type==1){
                if(num<=1){
                    this.$toast('不能再少了');
                    return
                }
                num--;
            }else if(type==2){
                num++
            }
            let res = await changeCartProductNum({
                virtualItemId:list[index].vitDTOList[indexs].childrenProductDTOList[idx].virtualItemId,
                num,
            })
            if(res.code==200){
                list[index].vitDTOList[indexs].childrenProductDTOList[idx].unitQuantity = num
            }
            this.cartList = list
        },
        // 结算
        checkout(){
            if(!this.selectId.length){
                this.$toast('请选择商品')
                return
            }
            let list = Object.assign([],this.cartList)
            let nowList = []
            list.map((v,index)=>{
                let store = false
                if(v.select){
                    nowList.push(v)
                }else{
                    let flag = false
                    v.vitDTOList.map((t,i)=>{
                        if(t.select){
                            flag = true
                        }
                    })
                    if(flag){
                        let item = Object.assign({},v)
                        item.vitDTOList = []
                        v.vitDTOList.map((t,i)=>{
                            if(t.select){
                                item.vitDTOList.push(t)
                            }
                        })
                        nowList.push(item)        
                    }  
                }
            })
            console.log(nowList)
            let obj = {
                cartList:nowList,
                sum:this.sum,
                sumNum:this.sumNum,
            }
            sessionStorage.setItem('checkout',JSON.stringify(obj))
            sessionStorage.getItem('checkout')
            sessionStorage.getItem('addr')
            sessionStorage.getItem('logistics')
            this.$router.push('/order/checkout')
        },
        // 移入收藏
        async addCollect(){
            if(!this.selectId.length){
                this.$toast('请选择要收藏的商品')
                return
            }
            let res = await addToCollect({
                connectionId:this.selectId
            })
            if(res.code==200){
                this.$toast('移入收藏夹成功')
                this.getList()
            }
        },
        // 删除
        async del(){
            if(!this.selectId.length){
                this.$toast('请选择要删除的商品')
                return
            }
            this.$dialog.confirm({
                // title: '确认删除？',
                message: '确认删除？'
            }).then(async () => {
                let res = await virtualItemDeleteBatch({
                    productId:this.selectId
                })
                if(res.code==200){
                    this.getList()
                }
            })
            
        },
    }
}
</script>
<style scoped lang="less">
.noData{
    width: 100vw;
    height: 100vh;
}
.cart_top {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 252px;
  box-sizing: border-box;
  padding: 68px 30px 0;
  background: linear-gradient(
    -35deg,
    rgba(223, 1, 52, 1),
    rgba(240, 70, 70, 1)
  );
}
.item_list {
  position: absolute;
  top: 160px;
  left: 0;
  width: 100%;
  height: calc(100% - 350px);
  z-index: 2;
  box-sizing: border-box;
  overflow-y: scroll;
  .item {
    margin: 0 30px 20px;
    border-radius: 20px;
    padding-right: 28px;
    .item_title {
        height: 85px;
        .select {
            width: 90px;
            }
        }
    }
    .goods_item{
        padding-bottom: 40px;
        .select{
            width: 90px;
        }
        .goods_img{
            border-radius: 20px;
        }
        .goods_info{
            height: 100%;
            .title{
                line-height: 1.5;
            }
            .spec{
                margin: 20px 0;
                span{
                    padding: 8px 10px;
                    border-radius: 6px;
                }
            }
            .num_box{
                text-align: center;
                span{
                    width: 58px;
                    height: 35px;
                }
                input{
                    width: 58px;
                    height: 35px;
                    background: #F0F0F0;
                    text-align: center;
                }
            }
        }
    }
    .past_list{
        .item_title{
            padding-left: 90px;
        }
        .select{
            span{
                background: #CCCCCC;
                color: #fff;
                font-size: 20px;
                padding: 12px;
                border-radius: 24px;
            }
        }
    }
}
.sum_box{
    position: fixed;
    bottom: 98px;
    left: 0;
    height: 98px;
    width: 100vw;
    background: #fff;
    z-index: 10;
    .select{
        margin-right: 24px;
        img{
            margin: 0 20px 0 28px;
        }
    }
    .sum_btn{
        height: 100%;
        color: #fff;
        span{
            padding: 36px 50px;
            background: var(--theme);
        }
        .add_collect{
            background: #FF9000;
        }
    }
  }
  .service_box {
    input {
        width: 64px;
        text-align: center;
        background: #f5f5f5;
    }
    .title {
      margin: 30px 0;
    }
    .service_list {
    //   max-height: 350px;
    //   overflow-y: scroll;
      .item {
        margin: 0 0 30px 30px;
        padding: 0;
        .name {
          margin-right: 56px;
        }
      }
    }
  }
</style>