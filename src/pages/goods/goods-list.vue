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
                        <goods-item :goodsInfo.sync="item" @toDetail="toGoodsDetail" @showBox="showBox(item)"></goods-item>
                    </div>
                </div>
            </scroll>
        </div>
        <!-- 加入购物车弹框 -->
        <select-sku :goodsId="goodsId" :showSpec.sync="showSpec" :product.sync="product" @toggleShow="toggleSpec"></select-sku>
    </div>
</template>
<script>
import {
  findByByProductNameOrProviderName,findProductByCategoryId,selectGrade,selectProvider
} from "@/js/api"
import searchBox from '@/components/search-box'
import condition from '@/components/condition'
import goodsItem from '@/components/goods-item'
import scroll from '@/components/scroll'
import selectSku from '@/components/select-sku'
export default {
    components: {
        searchBox,
        condition,
        scroll,
        goodsItem,
        selectSku,
    },
    data() {
        return {
            loading: true,
            list: [],
            keyword: '',
            classifyId:'',

            showSpec:false,
            goodsId:'',
            product:{},
        }
    },
    created() {
        this.keyword = this.$route.query.keyword
        this.classifyId = this.$route.query.classifyId
        console.log(this.keyword)
        if(this.keyword && this.keyword!=''){
            this.getList(1)
        }
        if(this.classifyId && this.classifyId!=''){
            this.getList(2)
        }
        this.getFilter()
    },
    mounted() {
        this.$refs.searchbox.setKeyword(this.keyword)
    },
    methods: {
        getList: async function (type) {
            let res = null;
            if(type==1){
                res = await findByByProductNameOrProviderName({
                    name: this.keyword
                }, true)
            }else if(type==2){
                res = await findProductByCategoryId({
                    id: this.classifyId
                }, true)
            }
            
            console.log(res)
            if(res.code == 200 && res.data.length) {
                this.list = res.data
            }
        },
        toGoodsDetail(info){
            console.log(info)
            this.$router.push({
                path:'/goods/goodsDetail',
                query: {
                    id: info.product.id
                }
            })
        },
        async getFilter(){
            let res = await selectGrade()
            console.log(res)
            let ret = await selectProvider()
            console.log(ret)
        },
        toggleSpec(flag){
            this.showSpec = flag
        },
        showBox(item){
            this.goodsId = item.providerId
            this.product = item.product
            this.product.num = 1
            this.showSpec=true
        },
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