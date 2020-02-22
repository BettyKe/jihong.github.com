<template>
    <div class="container">
        <header-box title="选择收货地址">
            <div class="header_right dfc" slot="header-right" @click="$router.push({path:'/order/editAddress'})">新建地址</div>
        </header-box>
        <div class="box pdlr30">
            <div class="name">
                <span class="fs32 b mgr30">王大锤</span><span>13610215244</span>
            </div>
            <div class="bor_bottom lh15 fs28 pdb30">广东省广州市天河区  科韵路118号 乐天大厦首层  乐天大厦首层</div>
            <div class="set_box dfb">
                <div class="dfc">
                    <img class="img40 mgr20" src="../../image/c_ic_circle_d@2x.png" alt="">
                    <span>设为默认</span>
                </div>
                <div class="df ais jct-end">
                    <div class="dfc">
                        <img class="img32 mgr6" src="../../image/f_ic_edit@2x.png" alt="">
                        <span>编辑</span>
                    </div>
                    <div class="ml20 dfc">
                        <img class="img32 mgr6" src="../../image/f_ic_omit@2x.png" alt="">
                        <span>删除</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
.header_right{
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    font-size: 28px;
    padding-right: 30px;
}
.container{
    min-height: 100vh;
    background: #F7F4F8;
    padding: 30px;
    box-sizing: border-box;
}
.box{
    background: #fff;
    border-radius: 20px;
    margin-bottom: 20px;
    font-size: 28px;
    .name{
        padding: 26px 0 30px;
    }
    .set_box{
        height: 92px;
    }
}
</style>