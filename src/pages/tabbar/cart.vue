<template>
    <div class="container_box bg_F7F5F6">
        <div class="cart_top df jct-between cf">
            <span class="fs34 b">购物车</span>
            <span class="fs28">管理</span>
        </div>
        <van-list class="item_list">
             <div class="item bg_FFF">
                 <div class="dfb item_title">
                     <div class="select dfc"><img class="img40" src="../../image/e_ic_circle_d@2x.png" /></div>
                     <div class="flex">
                         <img class="img32" src="../../image/e_ic_provider@2x.png" />
                        <span>供应商名称供应商</span>

                     </div>
                 </div>
             </div>
        </van-list>
    </div>
</template>
<script></script>
<style scoped lang="less">
.cart_top{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 252px;
    box-sizing: border-box;
    padding: 68px 30px 0;
    background:linear-gradient(-35deg,rgba(223,1,52,1),rgba(240,70,70,1));
}
.item_list{
    position: absolute;
    top: 160px;
    left: 0;
    width: 100%;
    height: calc(100% - 258px);
    z-index: 2;
    box-sizing: border-box;
    overflow-y: scroll;
}
.item{
    margin: 0 30px;
    border-radius: 20px;
    .item_title{
        .select{
            width: 90px;
        }
    }
}
</style>