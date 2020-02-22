<template>
    <div class="container">
        <header-box title="选择物流">
            <div class="header_right dfc" slot="header-right">完成</div>
        </header-box>
        <div class="pdb30"><span class="add_btn dfc" @click="$router.push({path:'/order/addlogistics'})">新建物流</span></div>
        <div class="box pd30">
            <div class="item dfa mgb20" v-for="item in 2" :key="item">
                <img class="img40 mgr20" src="../../image/c_ic_circle_d@2x.png" alt="">
                <div class="flex df jct-around fdc">
                    <span class="fs28 b lh2">京东快递</span>
                    <span class="lh2">联系方式：020-12345678</span>
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
.container{
    min-height: 100vh;
    background: #F7F4F8;
    padding: 30px;
    box-sizing: border-box;
}
.header_right{
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    font-size: 28px;
    padding-right: 30px;
}
.add_btn{
    width: 160px;
    height: 60px;
    color: #fff;
    background: var(--theme);
    border-radius: 30px;
}
.box{
    background: #fff;
    border-radius: 20px;
}
</style>