<template>
    <div class="container">
        <header-box title="新建物流"></header-box>
        <div class="box">
            <div class="pd30 bor_bottom"><input type="text" placeholder="请填写物流商名称" /></div>
            <div class="pd30"><input type="text" placeholder="请填写物流商联系方式" /></div>
        </div>
        <div class="btn_red">保存</div>
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
.box{
    background: #fff;
    border-radius: 20px;
    margin-bottom: 50px;
    input{
        width: 100%;
        height: 100%;
        font-size: 28px;
    }
}
</style>