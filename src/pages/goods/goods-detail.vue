<template>
    <div class="container" v-if="detailInfo.product">
        <header-box title="商品详情">
            <div slot="header-right" class="header_right df ais jct-end">
                <a :href="`tel:${detailInfo.shopPhone}`"><img class="img46" src="../../image/d_ic_service_d@2x.png" alt=""></a>
                <img @click="$router.push({path:'/cart'})" class="img46" src="../../image/c_ic_shopping_1@2x.png" alt="">
                <img @click="showShare=true" class="img46" src="../../image/d_ic_share@2x.png" alt="">
            </div>
        </header-box>
        <div class="bg_FFF mgb20">
            <div class="swipe_box">
                <van-swipe :autoplay="3000" @change="changeSwipe">
                    <van-swipe-item v-for="(image, index) in ImageTool.initImage(detailInfo.jpgUrl)" :key="index">
                        <img class="swipe_img" v-lazy="image" />
                    </van-swipe-item>
                    <div class="custom-indicator" slot="indicator">
                        {{ currentImg + 1 }}/{{ImageTool.initImage(detailInfo.jpgUrl).length}}
                    </div>
                </van-swipe>
            </div>
            <div class="fs32 b pdlr30 lh15">{{detailInfo.product.productTitle}}</div>
            <div class="price_row dfb">
                <div class="df ais">
                    <div class="price theme">¥<span class="fs36">{{detailInfo.product.unitPrice}}</span>/盆</div>
                    <!-- <div class="past_price">(￥20.00/盆)</div> -->
                </div>
                <!-- <div class="num">可售：50箱</div> -->
            </div>
            
        </div>
        <div class="activity_box bg_FFF mgb20 pdlr30">
            <div class="row" v-if="detailInfo.providerTime">
                <div class="dfb">
                    <span class="b">参考截单时间</span>
                    <span class="theme">10:00</span>
                </div>
                <div class="c_999 pdt20">(10:00后下单，当天可能无法发货)</div>
            </div>
            <div class="row param df ais fw c_666">
                <span>规格等级：{{detailInfo.gradeName}}</span>
                <span>型号：{{detailInfo.model}}</span>
                <span>装箱标准：一箱{{detailInfo.product.unitQuantity}}盆</span>
                <span>包装体积：{{detailInfo.product.packingLength}}*{{detailInfo.product.lengthWidth}}*{{detailInfo.product.lengthHeight}} cm</span>
                <span>高度：{{detailInfo.product.heightMin}}~{{detailInfo.product.heightMax}}cm</span>
                <span>冠幅：{{detailInfo.product.crownMin}}~{{detailInfo.product.crownMax}}cm</span>
            </div>
        </div>
        <div class="bg_FFF store_info dfs">
            <img :src="ImageTool.getImg(detailInfo.providerAvatar)" alt="" />
            <div class="df jct-around fdc h100">
                <div class="fs28 to-line b">{{detailInfo.providerName}}</div>
                <div class="store_btn theme fs20"><span @click="$router.push({path:`/goods/storeIndex?id=${detailInfo.providerId}`})">进店逛逛></span></div>
            </div>
        </div>
        <div class="goods_detail">
            <div class="title dfc"><span>商品详情</span></div>
            <div class="detail" v-html="detailInfo.product.description">满天星没有玫瑰的千娇百媚,没有玉兰的冷若冰霜,但她清新淡雅,如空灵清澈的涟漪;满天星没有牡丹的雍华富贵,冬季如期而至,花儿们的</div>
        </div>
        <div class="fix_bottom dfa">
            <div class="icon_box dfc fdc" @click="$router.push({path:'/index'})">
                <img class="img52" src="../../image/c_ic_home_d@2x.png" alt="">
                <span>首页</span>
            </div>
            <div class="icon_box dfc fdc" @click="$router.push({path:`/goods/storeIndex?id=${detailInfo.providerId}`})">
                <img class="img52" src="../../image/d_ic_store@2x.png" alt="">
                <span>店铺</span>
            </div>
            <div class="icon_box dfc fdc">
                <img class="img52 yes" v-if="detailInfo.productIsCollected=='yes'" @click="cancelCollect" src="../../image/d_ic_collect_s@2x.png" alt="">
                <img class="img52 no" v-else @click="collect" src="../../image/d_ic_collect_d@2x.png" alt="">
                <span>收藏</span>
            </div>
            <div class="add_btn flex dfc" @click="showSpec=true">加入购物车</div>
            <!-- <div class="add_btn flex dfc">立即抢购</div> -->
        </div>
        <!-- 加入购物车弹框 -->
        <select-sku :showSpec.sync="showSpec" :product="detailInfo.product" @toggleShow="toggleSpec"></select-sku>
        <!-- 分享 -->
        <van-popup v-model="showShare" position="bottom" round>
            <div class="share_box">
                <div class="dfa">
                    <div class="item dfa fdc" @click="callShare(1)">
                        <img src="../../image/ic_1@2x.png" alt="">
                        <span>微信好友</span>
                    </div>
                    <div class="item dfa fdc" @click="callShare(2)">
                        <img src="../../image/ic_2@2x.png" alt="">
                        <span>朋友圈</span>
                    </div>
                    <div class="item dfa fdc" @click="callShare(3)">
                        <img src="../../image/ic_3@2x.png" alt="">
                        <span>QQ好友</span>
                    </div>
                    <div class="item dfa fdc" @click="callShare(4)">
                        <img src="../../image/ic_4@2x.png" alt="">
                        <span>QQ空间</span>
                    </div>
                </div>
                <div @click="showShare=false" class="cancel dfc">取消</div>
            </div>
        </van-popup>
    </div>
</template>

<script>
import NativeShare from 'nativeshare'
import selectSku from '@/components/select-sku'
import {findDetailByIdApp,addProduct,addToCollect,findAllValueAddProductForAPP,deleteBatchProduct} from '@/js/api'
export default {
    components:{
        selectSku,
    },
    data(){
        return{
            showSpec:false,
            showShare:false,
            images:[
                'http://img0.imgtn.bdimg.com/it/u=1169913908,403740886&fm=26&gp=0.jpg',
                'http://img0.imgtn.bdimg.com/it/u=1169913908,403740886&fm=26&gp=0.jpg',
            ],
            currentImg:0,
            goodsId: this.$route.query.id,
            detailInfo: {},
            phone:'',
            nativeShare:'',
        }
    },
    created(){
        this.getInfo()
        this.nativeShare = new NativeShare()
       
    },
    methods:{
        changeSwipe(index) {
            this.currentImg = index;
        },
        toggleSpec(flag){
            this.showSpec = flag
        },
        async getInfo(){
            let res = await findDetailByIdApp({id:this.goodsId},true)
            console.log(res)
            if (res.code == 200) {
                this.detailInfo = res.data
                // this.detailInfo.product.num = 1
                this.initShare()
            }
        },
        //收藏
        async collect(){
            let id = this.detailInfo.product.id
            let res = await addToCollect({connectionId:[id]})
            if(res.code==200){
                this.detailInfo.productIsCollected = 'yes'
                this.$toast('收藏成功')
            }
        },
        //取消收藏
        async cancelCollect(){
            let id = this.detailInfo.product.id
            let res = await deleteBatchProduct({id:[id]})
            if(res.code==200){
                this.detailInfo.productIsCollected = 'no'
                this.$toast('取消收藏成功')
            }
        },
        initShare(){
            // 先创建一个实例
            // var nativeShare = new NativeShare()
            // 如果你需要在微信浏览器中分享，那么你需要设置额外的微信配置
            // 特别提示一下微信分享有一个坑，不要分享安全域名以外的链接(具体见jssdk文档)，否则会导致你配置的文案无效
            // 创建实例应该带参数

            // 你可以在setConfig方法中设置配置参数
            this.nativeShare.setConfig({
                wechatConfig: {
                    appId: '',
                    timestamp: '',
                    nonceStr: '',
                    signature: '',
                },
                // 让你修改的分享的文案同步到标签里，比如title文案会同步到<title>标签中
                // 这样可以让一些不支持分享的浏览器也能修改部分文案，默认都不会同步
                syncDescToTag: true,
                syncIconToTag: true,
                syncTitleToTag: true,
            })


            // 设置分享文案
            this.nativeShare.setShareData({
                icon: this.ImageTool.initImage(this.detailInfo.jpgUrl)[0],
                link: this.utils.getUrl(),
                title: '吉宏园艺',
                desc: this.detailInfo.product.productTitle,
                from: '@吉宏园艺',
            })
        },
        callShare(type){
            try{
                switch(type){
                    case 1:
                        this.nativeShare.call('wechatFriend')
                        break;
                    case 2:
                        this.nativeShare.call('wechatTimeline')
                        break;
                    case 3:
                        this.nativeShare.call('qqFriend')
                        break;
                    case 4:
                        this.nativeShare.call('qZone')
                        break;
                }
                
            }
            catch(err){
                console.log(err)
                this.$toast('请打开浏览器的菜单进行分享')
            }
            
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
            border: 2px solid var(--theme);
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
.share_box{
    background: #fff;
    .item{
        padding: 42px 24px;
        img{
            width: 100px;
            height: 100px;
        }
        span{
            margin-top: 20px;
        }
    }
    .cancel{
        font-size: 28px;
        height: 84px;
        border-top: 1px solid #E6E6E6;
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