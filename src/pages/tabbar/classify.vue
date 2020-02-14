<template>
    <div class="container">
        <header-box bgc="#ED1A4B" fontColor="white">
            <div class="header_right dfc" slot="header-right">
                <img src="../../image/logo.png" alt="">
                <img src="../../image/logo.png" alt="">
            </div>
        </header-box>
        <div class="classify_box df jct-between">
            <div class="classify_left">
                <div v-for="(item,index) in 8" :key="item" :index="index" :class="['left_item dfc',index==navLeft?'active':'ee']">{{item}}</div>
            </div>
            <div class="classify_right flex">
                <div class="classify_pic dfc">
                    <img src="../../image/logo.png" alt="">
                    <span class="dfc">一级分类名称</span>
                </div>
                <div class="second_level" v-for="item in 2" :key="item">
                    <div class="second_top df ais">这里是二级分类</div>
                    <div class="second_con df fw">
                        <div class="second_item dfc active">二级分类</div>
                        <div class="second_item dfc" v-for="items in 5" :key="items">二级分类</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import headerBox from '@/components/header-box'
export default {
    components:{
        headerBox,
    },
    data() {
        return{
            navLeft: 0
        }
    }
}
</script>
<style scope lang="less">
.container{
    width: 100vw;
    height: 100vh;
    padding-bottom: 98px;
    box-sizing: border-box;
    background: #fff;
    .classify_box{
        padding: 22px 0;
        .classify_left{
            width: 170px;
            background: #F7F7F7;
            max-height: calc(100vh - 240px);
            overflow-y: scroll;
            border-radius:0px 20px 20px 0px;
            .left_item{
                height: 42px;
                position: relative;
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
    img{
        width: 32px;
        height: 32px;
        margin-left: 40px;
    }
}
</style>