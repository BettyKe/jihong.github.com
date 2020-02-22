<template>
    <div class="container">
        <header-box title="补充发货单详情"></header-box>
        <div class="box">
            <div><span class="b">单据类型：</span>补充发货单</div>
            <div><span class="b">日期：</span>2019-10-1</div>
            <div><span class="b">本单金额（元）：</span>¥1,000.00</div>
            <div><span class="b">发货总数（盆）：</span>10</div>
        </div>
        <div class="box item_box">
            <div class="title b dfs">商品名称+规格+型号</div>
            <div class="dfb"><span>单价：¥10.00</span><span>数量（盆）：20</span></div>
            <div class="tr">金额：¥1,000.00</div>
            <div class="state theme df ais jct-end">已授信</div>
        </div>
        <div class="box item_box">
            <div class="title b dfs">商品名称+规格+型号</div>
            <div class="dfb"><span>单价：¥10.00</span><span>数量（盆）：20</span></div>
            <div class="tr">金额：¥1,000.00</div>
            <div class="state theme df ais jct-end">已授信</div>
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
    padding:30px;
    box-sizing: border-box;
}
.box{
    background: #fff;
    border-radius: 20px;
    margin-bottom: 20px;
    padding: 0 30px;
    font-size: 28px;
    line-height: 1.5;
    .title{
        height: 80px;
        border-bottom: 1px solid #F0F0F0;
        margin-bottom: 20px;
    }
    .state{
        height: 80px;
        border-top: 1px solid #F0F0F0;
        margin-top: 20px;
    }
    div,span{
        line-height: 2;
    }
}
</style>