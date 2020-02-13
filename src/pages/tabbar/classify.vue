<template>
    <div class="container">
        <header-box bgc="#ED1A4B" fontColor="white">
            <div class="header-right dfc" slot="header-right">
                <img src="../../image/logo.png" alt="">
                <img src="../../image/logo.png" alt="">
            </div>
        </header-box>
        <div class="classify_left">sdghsed</div>
        <div class="classify_right"></div>
    </div>
</template>
<script>
import headerBox from '@/components/header-box'
export default {
    components:{
        headerBox,
    },
}
</script>
<style scope lang="less">
.container{
    width: 100vw;
    height: 100vh;
    padding-bottom: 98px;
    box-sizing: border-box;
    background: #fff;
}
.header-right{
    position: absolute;
    right: 30px;
    top: 0;
    bottom: 0;
    margin: auto 0;
    img{
        width: 32px;
        height: 32px;
        margin-left: 40px;
    }
}
</style>