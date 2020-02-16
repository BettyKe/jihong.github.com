<template>
    <div class="container">
        <header-box bgc="#ED1A4B" :showLeftIcon="false" fontColor="white" title="分类">
            <div class="header_right dfc" slot="header-right">
                <img class="img44" src="../../image/d_ic_shopping_2@2x.png" alt="">
            </div>
        </header-box>
        <div class="classify_box df jct-between">
            <van-list class="classify_left">
                <div v-for="(item,index) in list" :key="index" @click="setCategory(index)" :class="['left_item dfc fs24',index==navLeft?'active fs28 b':'']">{{item.categoryName}}</div>
            </van-list>
            <div class="classify_right flex" v-if="list.length">
                <div class="classify_pic dfc">
                    <img src="../../image/d_photo_1@2x.png" alt="">
                    <span class="dfc">{{list[navLeft].categoryName}}</span>
                </div>
                <div class="second_level" v-for="(item, index) in list[navLeft].secondCategoryDTO" :key="index">
                    <div class="second_top df ais" @click="toGoodsList(item.categorySecondId)">{{item.categorySecondName}}</div>
                    <div class="second_con df fw">
                        <!-- <div class="second_item dfc active" @click="toGoodsList">二级分类</div> -->
                        <div class="second_item dfc" v-for="(items,indexs) in item.thirdCategoryDTO" @click="toGoodsList(items.categoryThirdId)" :key="indexs">{{items.categoryThirdName}}</div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>
<script>
import {
  findAllCategory,
  findProductByCategoryId
} from "@/js/api"
export default {
    data() {
        return{
            navLeft: 0,
            list: []
        }
    },
    created() {
        this.getAllCategory()
    },
    methods: {
        setCategory(index) {
            this.navLeft = index
        },
        toGoodsList: async function (id) {
            console.log(id)
            let res = await findProductByCategoryId({
                id: id
            },true)
            console.log(res)
        },
        getAllCategory: async function () {
            let res = await findAllCategory({},true)
            console.log(res)
            if(res.code == 200&&res.data.length) {
                this.list = res.data
            }
        }
    }
}
</script>
<style scoped lang="less">
.container{
    width: 100vw;
    height: 100%;
    padding-bottom: 98px;
    box-sizing: border-box;
    background: #fff;
    position: fixed;
    left: 0;
    top: 0;
    overflow: scroll;
    .classify_box{
        padding: 22px 0 0;
        position: relative;
        height: calc(100% - 98px);
        width: 100%;
        box-sizing: border-box;
        overflow: hidden;
        .classify_left{
            width: 170px;
            // max-height: calc(100% - 240px);
            max-height: 100%;
            overflow-y: scroll;
            border-radius: 0 20px 20px 0;
            // .left_item:nth-of-type(1){
            //     border-radius: 0 20px 0 0;
            // }
            // .left_item:nth-last-of-type(1){
            //     border-radius: 0 0 20px 0;
            // }
            .left_item{
                padding: 26px 0;
                position: relative;
                background: #F7F7F7;
                &.active{
                    color: var(--theme-red);
                }
                &.active::before{
                    content:'';
                    background: var(--theme-red);
                    width: 4px;
                    height: 24px;
                    color: var(--theme-default);
                    position: absolute;
                    left: 0;
                    top: 0;
                    bottom: 0;
                    margin: auto 0;
                }
            }
        }
        .classify_right{
            max-height: calc(100vh - 240px);
            overflow-y: scroll;
            padding: 0 17px 0 22px;
            .classify_pic{
                width: 100%;
                height: 200px;
                border-radius: 14px;
                overflow: hidden;
                position: relative;
                margin-bottom: 20px;
                img{
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                }
                span{
                    position: relative;
                    z-index: 10;
                    width: 100%;
                    height: 100%;
                    background: rgba(0,0,0,.5);
                    color: #fff;
                    font-size: 28px;
                }
            }
            .second_level{
                margin-bottom: 20px;
                border-radius:10px;
                padding: 10px 28px 0;
                box-shadow:0px 0 20px 0px rgba(0, 0, 0, 0.08);
                .second_top{
                    font-size: 28px;
                    line-height: 2;
                    color: #333;
                    font-weight: bold;
                    &::before{
                        content:'';
                        background: var(--theme-red);
                        width: 4px;
                        height: 24px;
                        color: var(--theme-default);
                        margin-right: 10px;
                    }
                }
                .second_con{
                    margin-right: -16px;
                    .second_item{
                        height: 60px;
                        border-radius: 30px;
                        padding: 0 25px;
                        color: #333;
                        margin-right: 16px;
                        margin-bottom: 28px;
                        background: #F5F5F5;
                        &.active{
                            color: #fff;
                            background: var(--theme-red);
                        }
                    }
                }
            }
        }
    }
}
.header_right{
    position: absolute;
    right: 30px;
    top: 0;
    bottom: 0;
    margin: auto 0;
}
</style>