<template>
    <div class="goods_item bg_FFF dfc fdc">
        <img class="goods_img" src="http://img0.imgtn.bdimg.com/it/u=1169913908,403740886&fm=26&gp=0.jpg" />
        <div class="goods_info">
            <div class="dfb">
                <div class="theme b df jct-start ais-end">
                    <span class="fs26">￥</span>
                    <span class="fs30">199.</span>
                    <span class="fs20">00/盆</span>
                </div>
                <span class="fz20 c_999">一箱10盆</span>
            </div>
            <div class="goods_title fs24 c_33292B to-line2">{{goodsInfo.product.productTitle}}</div>
            <div class="df jct-between ais-end">
                <div class="df jct-start ais">
                    <img class="img28" src="../image/c_ic_article@2x.png" />
                    <span class="c_999 fs20">{{goodsInfo.providerName}}</span>
                </div>
                <img class="img60" src="../image/c_ic_shopping_2@2x.png" />
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        goodsInfo: {
            type: Object,
            default: function () {
                return {}
            }
        }
    }
}
</script>
<style lang="less" scoped>
.goods_item{
    width: 350px;
    display: inline-flex;
    box-sizing: border-box;
    .goods_img{
        width: 350px;
        height: 350px;
        border-radius: 10px 10px 0 0;
    }
    .goods_info{
        // height: 178px;
        width: 350px;
        border-radius: 0 10px 10px 0;
        box-sizing: border-box;
        padding: 20px 28px 10px 16px;
    }
    .goods_title{
        line-height: 34px;
        font-weight: 500;
        margin: 14px 0 4px;
    }
}
</style>