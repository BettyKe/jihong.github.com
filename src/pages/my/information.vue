<template>
    <div>
        <ul
        class="container_box"
        infinite-scroll-distance="10">
            <li v-for="item in list">{{ item }}</li>
        </ul>
    </div>
    <!-- <div class="container_box">
        <header-box bgc="#fff" fontColor="block" title="个人资料"></header-box>
        <div class="info_box">
            565555454
        </div>
    </div> -->
</template>
<script>
import headerBox from '@/components/header-box'
export default {
    components: {
        headerBox,
    },
    data() {
        return {
            list: [1,2,3,4,5,8],
            loading: false
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
</style>