<template>
    <div class="container_box container">
        <search-box></search-box>
    </div>
</template>
<script>
import searchBox from '@/components/search-box'
export default {
    components: {
        searchBox
    }
}
</script>
<style lang="less" scoped>
.container_box{
    height: 100vh;
    z-index: 20;
    position: fixed;
    background-color: #F7F5F6;
    left: 0;
    top: 0;
}
</style>