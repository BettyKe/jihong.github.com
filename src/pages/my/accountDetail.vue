<template>
    <div class="container">
        <header-box title="提现明细"></header-box>
        <div class="list">
            <div class="item dfb" v-for="item in 4" :key="item">
                <div>
                    <div class="fs32 b mgb20">充值</div>
                    <div class="c_666 fs22">2019-01-01  15:00</div>
                </div>
                <div class="fs32 b">+1000.00</div>
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
    box-sizing: border-box;
}
.item{
    background: #fff;
    border-bottom: 1px solid #F0F0F0;
    padding: 30px;
}
.item:last-of-type{
    border-bottom: none;
}
</style>