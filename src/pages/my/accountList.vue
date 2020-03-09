<template>
    <div class="container">
        <header-box title="提现明细"></header-box>
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="toLoad">
        <div class="list">
            <div class="item dfb" v-for="(item,index) in list" :key="index" @click="$router.push({path:`/my/accountDetail?id=${item.id}`})">
                <div>
                    <div class="fs32 b mgb20">+{{item.amount}}</div>
                    <div class="c_666 fs22">{{item.createAt}}</div>
                </div>
                <div class="fs32 b">{{item.condition}}</div>
            </div>
        </div>
        </van-list>
    </div>
</template>
<script>
import {withdrawDetail4APP} from '@/js/api';
export default {
    data(){
        return{
            list:[],
            loading:false,
            finished:false,
            pageNumber:1,
        }
    },
    created(){
        this.getList()
    },
    methods:{
        async getList(page=1){
            let res = await withdrawDetail4APP({
                pageable: {
                    page: page
                }
            })
            if(res.code==200){
                this.loading = false
                this.pageNumber = page
                if(page==1){
                    this.list = res.data.productDTOList
                }else{
                    this.list.push(...res.data.productDTOList)
                }
                if(!res.data.productDTOList.length){
                    this.finished = true
                }
            }
        },
        toLoad(){
            let page = this.pageNumber + 1
            this.getList(page)
        },
    }
}
</script>
<style lang="less" scoped>
.container{
    min-height: 100vh;
    background: #F7F4F8;
    box-sizing: border-box;
}
.item{
    background: #fff;
    border-bottom: 1px solid #F0F0F0;
    padding: 30px;
}
.item:last-of-type{
    border-bottom: none;
}
</style>