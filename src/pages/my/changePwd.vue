<template>
    <div class="container">
        <header-box title="修改密码"></header-box>
        <div class="content bg_F7F5F6">
            <div class="box bg_FFF">
                <div class="input_box df ais jct-start">
                    <input class="flex" type="text" placeholder="请输入登录手机号码" />
                </div>
                <div class="input_box df ais jct-start">
                    <input class="flex" type="text" placeholder="请输入短信验证码" />
                    <span class="get_code">获取验证码</span>
                </div>
                <div class="input_box df ais jct-start">
                    <input class="flex" type="text" placeholder="输入新密码" />
                </div>
            </div>
            <div class="btn_red">确认</div>
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
    height: calc(100vh - 98px);
    padding-top: 20px;
    .box{
        height: 256px;
        margin: 20px 30px 38px;
        padding: 0 30px;
        border-radius: 20px;
        div{
            height: 80px;
        }
        .input_box{
            border-bottom: 1px solid #F5F5F5;
        }
        .title{
            font-size: 28px;
            color: #000;
            font-weight: bold;
        }
        input{
            line-height: 84px;
            font-size: 28px;
        }
        .get_code{
            font-size: 24px;
            color: var(--theme);
        }
        .tip{
            text-align: right;
            color: #999999;
            font-size: 24px;
        }
    }
}
</style>