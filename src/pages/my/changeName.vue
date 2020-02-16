<template>
    <div class="container">
        <header-box></header-box>
        <div class="content bg_F7F5F6">
            <div class="box bg_FFF dfc fdc">
                <div class="title">昵称：</div>
                <input type="text" placeholder="">
                <div class="tip">*限中文，10个字以内</div>
            </div>
            <div class="btn-red op5"></div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
.content{
    width: 100vw;
    height: 100vh;
    .box{
        height: 256px;
        margin: 20px 30px 38px;
        padding: 0 30px;
        .title{
            font-size: 28px;
            color: #000;
        }
        input{
            border-bottom: 1px solid #F5F5F5;
        }
        .tip{
            text-align: right;
            color: #999999;
        }
    }
}
</style>