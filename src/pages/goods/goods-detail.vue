<template>
    <div class="container">
        <header-box title="商品详情">
            <div slot="header-right" class="header_right df ais jct-end">
                <a href="tel:020-888888"><img class="img46" src="../../image/d_ic_service_d@2x.png" alt=""></a>
                <img @click="$router.push({path:'/cart'})" class="img46" src="../../image/c_ic_shopping_1@2x.png" alt="">
                <img class="img46" src="../../image/d_ic_share@2x.png" alt="">
            </div>
        </header-box>
        <div class="bg_FFF mgb20">
            <div class="swipe_box">
                <van-swipe :autoplay="3000" @change="changeSwipe">
                    <van-swipe-item v-for="(image, index) in images" :key="index">
                        <img class="swipe_img" v-lazy="image" />
                    </van-swipe-item>
                    <div class="custom-indicator" slot="indicator">
                        {{ currentImg + 1 }}/{{images.length}}
                    </div>
                </van-swipe>
            </div>
            <div class="fs32 b pd30 lh15">爱优尚（AIYOUSH）绿萝盆栽办公室绿箩除甲醛绿植花卉客厅室内大型植物盆景</div>
            <div class="price_row dfb">
                <div class="df ais">
                    <div class="price theme">¥<span class="fs36">420.00</span>/盆</div>
                    <div class="past_price">(￥20.00/盆)</div>
                </div>
                <div class="num">可售：50箱</div>
            </div>
            
        </div>
        <div class="activity_box bg_FFF mgb20 pd30">
            <div class="row">
                <div class="dfb">
                    <span class="b">参考截单时间</span>
                    <span class="theme">10:00</span>
                </div>
                <div class="c_999 pdt20">(10:00后下单，当天可能无法发货)</div>
            </div>
            <div class="row param df ais fw c_666">
                <span>规格等级：A级</span>
                <span>规格等级：A级</span>
                <span>规格等级：A级</span>
                <span>规格等级：A级</span>
                <span>规格等级：A级</span>
                <span>规格等级：A级</span>
            </div>
        </div>
        <div class="bg_FFF store_info dfs">
            <img src="../../image/default.png" alt="" />
            <div class="df jct-around fdc h100">
                <div class="fs28 to-line b">吉祥花草园艺经营店</div>
                <div class="store_btn theme fs20"><span>进店逛逛></span></div>
            </div>
        </div>
        <div class="goods_detail">
            <div class="title dfc"><span>商品详情</span></div>
            <div class="detail">满天星没有玫瑰的千娇百媚,没有玉兰的冷若冰霜,但她清新淡雅,如空灵清澈的涟漪;满天星没有牡丹的雍华富贵,冬季如期而至,花儿们的</div>
        </div>
        <div class="fix_bottom dfa">
            <div class="icon_box dfc fdc" @click="$router.push({path:'/index'})">
                <img class="img52" src="../../image/c_ic_home_d@2x.png" alt="">
                <span>首页</span>
            </div>
            <div class="icon_box dfc fdc">
                <img class="img52" src="../../image/d_ic_store@2x.png" alt="">
                <span>店铺</span>
            </div>
            <div class="icon_box dfc fdc">
                <img class="img52" src="../../image/d_ic_collect_d@2x.png" alt="">
                <span>收藏</span>
            </div>
            <div class="add_btn flex dfc" @click="showSpec=true">加入购物车</div>
            <!-- <div class="add_btn flex dfc">立即抢购</div> -->
        </div>
        <select-sku :showSpec="showSpec" @toggleShow="toggleSpec"></select-sku>
    </div>
</template>
<script>
import selectSku from '@/components/select-sku'
export default {
    components:{
        selectSku,
    },
    data(){
        return{
            showSpec:false,
            images:[
                'http://img0.imgtn.bdimg.com/it/u=1169913908,403740886&fm=26&gp=0.jpg',
                'http://img0.imgtn.bdimg.com/it/u=1169913908,403740886&fm=26&gp=0.jpg',
            ],
            currentImg:0,
        }
    },
    methods:{
        changeSwipe(index) {
            this.currentImg = index;
        },
        toggleSpec(flag){
            this.showSpec = flag
        }
    }
}
</script>
<style lang="less" scoped>
.container{
    background: #F6F6F6;
    min-height: 100vh;
    padding-bottom: 154px;
}
.header_right{
    position: absolute;
    right: 30px;
    top: 0;
    height: 100%;
    img{
        margin-left: 40px;
    }
}
.swipe_box{
    padding: 30px;
    box-sizing: border-box;
    overflow: hidden;
    .swipe_img{
        width: 100%;
        height: 300px;
        border-radius: 14px;
    }
}
.price_row{
    padding: 30px;
    .price{
        padding-right: 30px;
    }
    .past_price{
        color: #B3B3B3;
        text-decoration: line-through;
    }
    .num{
        color: #B3B3B3;
    }
}
.activity_box{
    .row{
        font-size: 28px;
        padding: 30px 0;
        border-bottom: 1px solid #F2F2F2;
        &:last-of-type{
            border-bottom: none;
        }
    }
    .param{
        span{
            width: 50%;
            padding: 10px 0;
            line-height: 1.5;
        }
    }
}
.store_info{
    padding: 30px;
    img{
        width: 90px;
        height: 90px;
        border-radius: 50%;
        margin-right: 12px;
    }
    .store_btn{
        margin-top: 17px;
        span{
            border-radius: 16px;
            border: 1px solid var(--theme);
            padding: 6px 15px;
        }
    }
}
.goods_detail{
    .title{
        height: 81px;
        color: #808080;
        &::before,&::after{
            content:'';
            width:60px;
            height:1px;
            background: #E6E6E6;
            margin: 0 20px;
        }
    }
    .detail{
        background: #fff;
        padding: 30px;
        line-height: 1.5;
        font-size: 28px;
    }
}
.fix_bottom{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100vw;
    height: 98px;
    background: #fff;
    .icon_box{
        padding: 0 27px;
    }
    .add_btn{
        background: #FF9000;
        color: #fff;
        font-size: 28px;
        height: 100%;
    }
}
.custom-indicator{
    position: absolute;
    bottom: 10px;
    right: 14px;
    background: rgba(0,0,0,.5);
    color: #fff;
    font-size: 16px;
    padding: 4px 10px;
    border-radius: 6px;
}
</style>