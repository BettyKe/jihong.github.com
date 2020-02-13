<template>
    <div class="container df jct">
        <div class="search_box dfc">
            <div class="search dfc">
                <img src="../../image/logo.png" alt="">
                <input class="flex" type="text" placeholder="商品或供应商" />
            </div>
        </div>
    </div>
</template>
<script></script>
<style scope lang="less">
.container{
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,.4);
    padding-bottom: 98px;
    box-sizing: border-box;
    .search_box{
        margin-top: 400px;
        width: 622px;
        height: 140px;
        background: rgba(255,255,255,.8);
        padding: 0 64px;
        border-radius: 20px;
        .search{
            width: 100%;
            border-bottom: 1px solid #C2C2C2;
            img{
                width: 32px;
                height: 32px;
                margin-right: 20px;
            }
            input{
                height: 100%;
            }
        }
    }
}
</style>
