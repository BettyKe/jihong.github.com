<template>
    <div class="container_box">
        <header-box bgc="#fff" title="个人资料"></header-box>
        <div class="info_box bg_FFF">
            <div class="box user_avatar dfb">
                <span class="fs28 c_33292B">头像</span>
                <div class="df ais jct-end">
                    <img class="avatar" src="../../image/f_ic_soi_2@2x.png" alt="">
                    <img class="img32" src="../../image/f_ic_more@2x.png" alt="">
                </div>
            </div>
            <div class="box dfb">
                <span class="fs28 c_33292B">昵称</span>
                <div class="df ais jct-end">
                    <span>吉祥花木园艺店</span>
                    <img class="img32 ml20" src="../../image/f_ic_more@2x.png" alt="">
                </div>
            </div>
            <div class="box dfb">
                <span class="fs28 c_33292B">绑定手机</span>
                <div class="df ais jct-end">
                    <span>136****5234</span>
                    <img class="img32 ml20" src="../../image/f_ic_more@2x.png" alt="">
                </div>
            </div>
            <div class="box dfb">
                <span class="fs28 c_33292B">修改密码</span>
                <div class="df ais jct-end">
                    <img class="img32 ml20" src="../../image/f_ic_more@2x.png" alt="">
                </div>
            </div>
        </div>
        <div class="btn_red">保存</div>
    </div>
</template>
<script>
import headerBox from '@/components/header-box'
export default {
    components: {
        headerBox,
    },
}
</script>
<style lang="less" scoped>
.container_box{
    width: 100vw;
    height: 100vh;
    z-index: 8;
    position: fixed;
    background-color: #F7F5F6;
    left: 0;
    top: 0;
}
.info_box{
    margin: 20px 30px 64px;
    border-radius: 20px;
    background: #fff;
    .box{
        border-top: 1px solid #F0F0F0;
        height: 90px;
        padding: 0 30px;
    }
    .user_avatar{
        border-top:none;
        height: 166px;
        .avatar{
            width: 108px;
            height: 108px;
        }
    }
}
</style>