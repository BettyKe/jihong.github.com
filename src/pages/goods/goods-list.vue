<template>
    <div class="container_box container" ref="container">
        <div class="top">
            <search-box ref="searchbox" :keyword.sync="keyword" @changeKeyword="changeKeyword" @search="search"></search-box>
            <condition ref="conditions" :gradeList="gradeList" :providerList="providerList" :active="active" :minPrice="minPrice" :maxPrice="maxPrice" @filter="filter" @toggleType="toggleType"></condition>
        </div>
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="toLoad">
            <div class="bottom dfb fw">
                <goods-item v-for="(item,index) in list" :key="index" class="item" :goodsInfo.sync="item" @toDetail="toGoodsDetail" @showBox="showBox(item)"></goods-item>
            </div>
            
            <!-- <div class="fw jct-start df">
                <div v-for="(item,index) in list" :key="index" class="item">
                    <goods-item :goodsInfo.sync="item" @toDetail="toGoodsDetail" @showBox="showBox(item)"></goods-item>
                </div>
            </div> -->
        </van-list>
        <!-- 加入购物车弹框 -->
        <!-- <select-sku :goodsId="goodsId" :showSpec.sync="showSpec" :product.sync="product" @toggleShow="toggleSpec"></select-sku> -->
    </div>
</template>
<script>
import {
  findByByProductNameOrProviderName,findProductByCategoryId,selectGrade,selectProvider,productFilter
} from "@/js/api"
import searchBox from '@/components/search-box'
import condition from '@/components/condition'
import goodsItem from '@/components/goods-item'
import selectSku from '@/components/select-sku'
export default {
    components: {
        searchBox,
        condition,
        goodsItem,
        selectSku,
    },
    data() {
        return {
            loading: false,
            finished:false,
            list: [],
            keyword: '',
            classifyId:'',
            minPrice:'',
            maxPrice:'',
            pageNumber:1,

            showSpec:false,
            goodsId:'',
            product:{},
            gradeList:[],
            providerList:[],
            active:0,//0综合 1价格降 2价格升
            providerId:'',
            gradeId:'',
        }
    },
    created() {
        this.keyword = this.$route.query.keyword || ''
        this.classifyId = this.$route.query.classifyId || ''
        this.getFilter()
        this.getList()
    },
    mounted() {
        
    },
    methods: {
        getList: async function (page=1) {
            let sort = {desc:['id']}
            if(this.active==1){
                sort = {asc:['unit_price']}
            }else if(this.active==2){
                sort = {desc:['unit_price']}
            }
            let res = await productFilter({
                "categoryId": this.classifyId,
                "providerId": this.providerId,
                "minPrize": this.minPrice,
                "maxPrize": this.maxPrice,
                "gradeId":this.gradeId,
                "name": this.keyword,
                "pageable": {
                    "page": page,
                    "size": 10,
                    "sort": sort
                }
            })
            if(res.code == 200) {
                this.loading = false
                this.pageNumber = page
                if(page==1){
                    this.finished = false
                    this.list = res.data
                }else{
                    this.list.push(...res.data)
                }
                if(!res.data.length){
                    this.finished = true
                }
            }
        },
        changeKeyword(keyword){
            this.keyword = keyword
        },
        search(keyword){
            this.keyword = keyword
            this.getList()
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
            if(res.code==200){
                this.gradeList = res.data
            }
            let ret = await selectProvider()
            if(ret.code==200){
                this.providerList = ret.data
            }
        },
        toggleSpec(flag){
            this.showSpec = flag
        },
        showBox(item){
            this.product = item.product
            this.showSpec=true
        },
        toLoad() {
            let page = this.pageNumber +1;
            this.getList(page);
        },
        filter(minPrice,maxPrice,providerId,gradeId){
            this.minPrice = minPrice
            this.maxPrice = maxPrice
            this.providerId = providerId
            this.gradeId = gradeId
            this.getList()
        },
        toggleType(type){
            this.active = type
            this.getList()
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
.bottom{
    margin-right: -10px;
    padding: 154px 20px 0;
    .item{
        border-radius: 20px;
        overflow: hidden;
        margin-top:20px;
        margin-right: 10px;
    }
}
</style>