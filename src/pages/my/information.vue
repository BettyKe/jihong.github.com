<template>
    <div class="container_box">
        <header-box bgc="#fff" title="个人资料"></header-box>
        <div class="info_box bg_FFF">
            <div class="user_avatar dfa">
                <span class="fs28 c_33292B">头像</span>
                <div></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            list: [1,2,3,4,5,8],
            loading: false,
        }
    }
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
    .user_avatar{

    }
}
</style>