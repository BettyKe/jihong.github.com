<template>
    <div class="container">
        <div class="header-box dfb">
            <img class="img32" src="../../image/b_ic_back_1@2x.png" alt="" @click="$router.back()">
            <div class="nav_top dfc">
                <span :class="['bg_box',type==1?'active':'']"></span>
                <span :class="['nav_item dfc',type==0?'cf':'']" @click="toggleNav(0)">商品</span>
                <span :class="['nav_item dfc',type==1?'cf':'']" @click="toggleNav(1)">店铺</span>
            </div>
            <span @click="edit=!edit">{{edit?'完成':'管理'}}</span>
        </div>
        <div class="header-replace"></div>
        <div v-if="type==0" class="goods_list br20 bg_FFF">
            <div class="goods_item dfb pd30" v-for="item in 4" :key="item" @click="$router.push('/goods/goodsDetail')">
                <img v-if="edit" class="img40 mgr30" src="../../image/e_ic_circle_d@2x.png" alt="">
                <img class="img140 br20 mgr20" src="../../image/default.png" alt="">
                <div class="flex df ais-start jct-between fdc">
                    <div class="to-line2 lh15 fs28 mgb20">特大号落地紫砂陶瓷花盆红砂紫砂花瓷花盆瓷花</div>
                    <div class="theme">￥<span class="fs30">120.00</span>/盆</div>
                    <div class="c_999 fs20 dfs pdt10"><img class="img28" src="../../image/c_ic_article@2x.png" alt="">供应商名称供应商</div>
                </div>
            </div>
        </div>
        <div v-else class="store_list br20 bg_FFF">
            <div class="store_item dfs pd30" v-for="item in 4" :key="item" @click="$router.push('/goods/storeIndex')">
                <img v-if="edit" class="img40" src="../../image/e_ic_circle_d@2x.png" alt="">
                <img class="store_img" src="../../image/default.png" alt="">
                <span class="fs28 flex to-line">吉祥花草园艺经营店</span>
            </div>
        </div>
        <div v-if="edit" class="fix_bottom dfb">
            <div class="dfc"><img class="img40 mgr6" src="../../image/e_ic_circle_d@2x.png" alt="">全选</div>
            <div class="btn_del dfc fs28">删除</div>
        </div>
    </div>
</template>
<script>
import {showConnectionProduct,showConnectionProvider,deleteBatchProduct,deleteBatch,} from '@/js/api'
export default {
    data(){
        return{
            type:0,//0商品 1店铺
            edit:false,
            goodsList:[],
            storeList:[],
        }
    },
    methods:{
        toggleNav(type){
            this.type = type
            this.edit = false
        },
        async getGoodsList(){
            let res = await showConnectionProduct()
            if(res.code==200 && res.data.length){
                this.goodsList = res.data
            }
        },
        async getStoreList(){
            let res = await showConnectionProvider()
            if(res.code==200 && res.data.length){
                this.goodsList = res.data
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
.header-box{
    background: #fff;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 98px;
    padding: 0 30px;
    box-sizing: border-box;
    z-index: 50;
    font-size: 30px;
    .back_icon{
        width: 98px;
        height: 98px;
        position: absolute;
        left: 0;
        top: 0;
    }
}
.header-replace{
    width: 100vw;
    height: 98px;
}
.nav_top{
    position: relative;
    height: 56px;
    border: 2px solid var(--theme); 
    border-radius: 10px;
    overflow: hidden;
    span{
        width: 138px;
        height: 100%;
        color: var(--theme);
    }
    span.cf{
        color: #fff;
    }
    .bg_box{
        position: absolute;
        left: 0;
        top: 0;
        background: var(--theme);
    }
    .bg_box.active{
        left: 138px;
    }
    .nav_item{
        position: relative;
        z-index: 10;
    }
}
.fix_bottom{
    position: fixed;
    left: 0;
    bottom: 0;
    background: #fff;
    width: 100vw;
    height: 98px;
    padding:  0 30px;
    .btn_del{
        width: 120px;
        height: 60px;
        color: #fff;
        background: var(--theme);
        border-radius: 30px;
    }
}
.store_item{
    border-bottom: 1px solid #f0f0f0;
    &:last-of-type{
        border-bottom: none;
    }
    .store_img{
        width: 90px;
        height: 90px;
        border-radius: 45px;
        margin: 0 12px 0 22px;
    }
}
</style>