<template>
    <div class="container">
        <header-box title="支付成功"></header-box>
        <div class="dfc fdc">
            <img class="icon_success" src="../../image/e_ic_pay@2x.png" alt="">
            <span class="theme fs32 b">支付成功</span>
            <div class="fs28 btn_box dfb">
                <div class="btn btn_index theme dfc" @click="$router.push({path:'/index'})">返回首页</div>
                <div class="btn btn_order dfc" @click="$router.push({path:'/order/orderDetail'})">查看订单</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
.icon_success{
    width: 145px;
    height: 177px;
    margin-top: 70px;
    margin-bottom: 40px;
}
.btn_box{
    margin-top: 70px;
    .btn{
        width: 230px;
        height: 82px;
        border-radius: 41px;
    }
    .btn_index{
        border: 1px solid var(--theme);
    }
    .btn_order{
        background: var(--theme);
        color: #fff;
        margin-left: 100px;
    }
}
</style>