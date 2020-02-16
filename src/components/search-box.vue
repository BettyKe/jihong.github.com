<template>
    <div class="search_box bg_FFF dfb">
        <div class="search_left ais df" @click="$router.back()">
            <img class="img32" src="../image/b_ic_back_1@2x.png" />
        </div>
        <div class="flex search_rigth dfb">
            <div class="search_input bg_F5F5F5 pdl20 pdr20">
                <input v-model="keyword" @keyup.enter="search" placeholder="商品名称、供应商" />
                <img @click="close" v-if="keyword" class="img30" src="../image/c_ic_close_1@2x.png" />
            </div>
            <span class="flex fs28 c_33292B" @click="search">搜索</span>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            keyword: ''
        }
    },
    methods: {
        search() {
            this.$emit('search', this.keyword)
        },
        close() {
            this.keyword = ''
            this.$emit('close')
        },
        setKeyword(keyword) {
            this.keyword = keyword
        }
    }
}
</script>
<style lang="less" scoped>
::-webkit-input-placeholder { /* Chrome/Opera/Safari */ 
	color: #999999;
}
::-moz-placeholder { /* Firefox 19+ */  
	color: #999999;
}
:-ms-input-placeholder { /* IE 10+ */ 
 color: #999999;
}
:-moz-placeholder { /* Firefox 18- */ 
 color: #999999;
}
.search_box{
    height: 88px;
    width: 100vw;
    box-sizing: border-box;
    .search_left{
        width: 66px;
        height: 88px;
        padding-left: 30px;
        box-sizing: border-box;
    }
    .search_rigth{
     .search_input{
        width: 580px;
        height: 58px;
        border-radius: 29px;
        box-sizing: border-box;
        position: relative;
        input{
            width: 100%;
            height: 100%;
            line-height: 58px;
        }
        img{
            position: absolute;
            right: 20px;
            top: 50%;
            transform: translateY(-50%);
        }
     }
     span{
         display: block;
         text-align: right;
         padding-right: 30px;
         height: 100%;
     }  
    }
}
</style>