<template>
    <div class="container_box container" ref="container">
        <div class="top">
            <search-box ref="searchbox"></search-box>
            <condition></condition>
        </div>
        <div class="bottom">
            <scroll :data="list" :probeType ="3" :listenScroll="true" class="middle">
                <div class="fw jct-start df">
                    <div v-for="(item,index) in list" :key="index" class="item">
                        <goods-item :goodsInfo.sync="item"></goods-item>
                    </div>
                </div>
            </scroll>
        </div>
    </div>
</template>
<script>
import {
  findByByProductNameOrProviderName
} from "@/js/api"
import searchBox from '@/components/search-box'
import condition from '@/components/condition'
import goodsItem from '@/components/goods-item'
import scroll from '@/components/scroll'
export default {
    components: {
        searchBox,
        condition,
        scroll,
        goodsItem,
        keyword: ''
    },
    data() {
        return {
            loading: true,
            list: [1,2,3,5,4,56,8,45,15,285,546,687]
        }
    },
    created() {
        this.keyword = this.$route.query.keyword
    },
    mounted() {
        this.$refs.searchbox.setKeyword(this.keyword)
        this.getList()
    },
    methods: {
        getList: async function () {
            let res = await findByByProductNameOrProviderName({
                name: this.keyword
            }, true)
            console.log(res)
            if(res.code == 200 && res.data.length) {
                this.list = res.data
            }
        }
    }
}
</script>
<style lang="less" scoped>
.container_box{
    background-color: #F7F5F6; 
}
.top{
    width: 100%;
    height: 154px;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 20;
}
.middle{
    width: 100vw;
    // height: 100vh;
    height: calc(100% - 154px);
    -webkit-calc: (100% - 154px);
    overflow: hidden;
    padding: 0 20px;
    box-sizing: border-box;
    position: fixed;
    left: 0;
    top: 154px;
    .item{
        margin-top: 20px;
    }
    .item:nth-of-type(2n){
        margin-left: 10px;
    }
}
</style>