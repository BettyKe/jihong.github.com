<template>
    <div class="container df jct">
        <div class="search_box dfc">
            <div class="search dfs" @click="$router.push({path: '/classify/search'})">
                <img src="../../image/c_ic_grabble@2x.png" alt="">
                <span class="c_999">商品或供应商</span>
            </div>
        </div>
    </div>
</template>
<script></script>
<style scoped lang="less">
.container{
    width: 100vw;
    height: 100%;
    padding-bottom: 98px;
    background: url('../../image/c_photo_1@2x.png');
    background-size: 100% 100%;
    box-sizing: border-box;
    overflow: hidden;
    position: fixed;
    left: 0;
    top: 0;
    .search_box{
        margin-top: 400px;
        width: 622px;
        height: 140px;
        background: rgba(255,255,255,.8);
        padding: 0 64px;
        border-radius: 20px;
        .search{
            width: 100%;
            padding-bottom: 10px;
            border-bottom: 1px solid #C2C2C2;
            img{
                width: 32px;
                height: 32px;
                margin-right: 20px;
            }
        }
    }
} 
</style>
