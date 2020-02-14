<template>
    <div class="container">
        <div class="search_box"></div>
        <div class="dfb">
            <span>历史搜索</span>
            <span>清空</span>
        </div>
        <div class="hot_list">
            <span class="hot_item" v-for="item in 5" :key="item">绿萝</span>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
.container{
    height: 100vh;
    background: #F7F7F7;
}
.search_box{
    width: 100vw;
    height: 88px;
    background: #fff;
}
</style>