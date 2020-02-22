<template>
    <div class="container">
        <search-box @search="search" @close="keyword=''"></search-box>
        <div class="dfb fs28 title" v-if="oldList.length">
            <span class="c_33292B">历史搜索</span>
            <span class="c_999">清空</span>
        </div>
        <div class="hot_list fw jct-start df" v-if="oldList.length">
            <span class="hot_item fs24 c_33292B bg_E6E6E6" v-for="item in oldList" :key="item">{{item}}</span>
        </div>
    </div>
</template>
<script>
import searchBox from '@/components/search-box'
import {
  findByByProductNameOrProviderName
} from "@/js/api"
import {mapMutations} from 'vuex'
export default {
    components: {
        searchBox
    },
    data() {
        return {
            keyword: '',
            oldList: []
        }
    },
    created() {
        this.oldList = this.$store.state.keywords
    },
    methods: {
        search(keyword) {
            this.keyword = keyword
            this.oldList.push(keyword)
            this.setKeyWords(this.oldList)
            this.$router.push({
                path: '/goods/goodsList',
                query: {
                    keyword: keyword
                }
            })
        },
        ...mapMutations({setKeyWords:'setKeyWords'})
    }
}
</script>
<style lang="less" scoped>
.container{
    height: 100%;
    background: #F7F7F7;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    box-sizing: border-box;
}
.search_box{
    width: 100vw;
    height: 88px;
    background: #fff;
}
.title{
    margin: 30px 30px;
}
.hot_list{
    padding: 0 30px;
    box-sizing: border-box;
}
.hot_item{
    height: 60px;
    border-radius: 30px;
    padding: 0 30px;
    line-height: 60px;
    margin-right: 42px;
    margin-bottom: 20px;
}
</style>