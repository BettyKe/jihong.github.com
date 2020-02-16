<template>
    <div>
        <!-- 有筛选 S -->
        <div class="condition_box bg_FFF dfa">
            <div :class="['flex condition_item df ais fs28 c_33292B', active==0 ? 'active b':'']">综合</div>
            <div :class="['flex condition_item dfc fs28 c_33292B', active==1 ? 'active b':'']">
                <span>价格</span>
                <div class="dfc fdc">
                    <img class="img14 trigon_on" src="../image/c_ic_trigon_s@2x.png" />
                    <img class="img14 trigon_under" src="../image/c_ic_trigon_d@2x.png" />
                </div>
            </div>
            <div :class="['flex condition_item df jct-end ais fs28 c_33292B', active==2 ? 'active b':'']">
                <span @click="showRilter = true">筛选</span>
                <img @click="showRilter = true" class="img32" src="../image/c_ic_screen@2x.png" />
            </div>
            <div :class="['filter_dialog', showRilter ? 'js_dialog' : '']">
                <div class="dialog_mask" @click="showRilter = false" v-if="showRilter"></div>
                <div class="dialog_content bg_FFF">
                    <!-- 规格 S -->
                    <div class="sku_box">
                        <div class="dialog_title dfb">
                            <span class="fs28 c_33292B b">规格</span>
                            <img class="img26" src="../image/c_ic_more_next@2x.png" />
                        </div>
                        <div class="sku_arr df ct-start fw">
                            <span :class="['sku_item bg_F5F5F5 fs24 dfc fdc', item == 1 ? 'active cf' : 'c_33292B']" v-for="item in 6" :key="item">规格</span>
                        </div>
                    </div>
                    <!-- 规格 E -->
                    <!-- 价格区间 S -->
                    <div class="price_box">
                        <div class="price_title fs28 c_33292B b">价格区间（元）</div>
                        <div class="dfc price_input">
                            <input class="bg_F5F5F5" placeholder="最低价" />
                            <div></div>
                            <input class="bg_F5F5F5" placeholder="最高价" />
                        </div>
                    </div>
                    <!-- 价格区间 E -->
                    <!-- 底部按钮 S -->
                    <div class="footer_box dfb">
                        <div class="fs28 c_33292B flex dfc fdc">重置</div>
                        <div class="fs28 cf flex dfc fdc">完成</div>
                    </div>
                    <!-- 底部按钮 E -->
                </div>
            </div>
        </div>
        <!-- 有筛选 E -->
    </div>
</template>
<script>
export default {
    data() {
        return {
            active: 1,
            showRilter: false
        }
    }
}
</script>
<style scoped lang="less">
::-webkit-input-placeholder { /* Chrome/Opera/Safari */ 
	color: #CCCCCC;
}
::-moz-placeholder { /* Firefox 19+ */  
	color: #CCCCCC;
}
:-ms-input-placeholder { /* IE 10+ */ 
 color: #CCCCCC;
}
:-moz-placeholder { /* Firefox 18- */ 
 color: #CCCCCC;
}
.condition_box{
    height: 66px;
    width: 100vw;
}
.condition_item{
    height: 100%;
    span{
        margin-right: 4px;
    }
}
.condition_item.active{
    color: #FE1C3C;
}
.condition_item:nth-of-type(1){
    padding-left: 66px;
}
.condition_item:nth-last-of-type(2){
    padding-right: 30px;
}
.trigon_on{
    transform: rotate(-180deg);
}
.filter_dialog{
    .dialog_mask{
        position: fixed;
        right: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        background: rgba(0,0,0,.2s);
        z-index: 90;
    }
    .dialog_content{
        position: fixed;
        right: 0;
        top: 0;
        width: 614px;
        height: 100%;
        overflow: scroll;
        transition: all .3s;
        transform: translateX(100%);
        box-sizing: border-box;
        z-index: 90;
    }
    .dialog_title{
        padding: 0 30px;
        margin: 34px 0;
    }
    .sku_arr{
        padding: 0 25px 0 31px;
    }
    .sku_item{
        display: inline-flex;
        width: 170px;
        height: 60px;
        border-radius: 30px;
        margin-bottom: 30px;
    }
    .sku_item.active{
        background-color: #DF0134;
    }
    .sku_item:nth-of-type(3n - 1){
        margin: 0 24px 30px;
    }
    .price_box{
        margin-top: 10px;
        width: 100%;
        box-sizing: border-box;
        padding: 0 26px 0 29px;
    }
    .price_title{
        margin-bottom: 32px;
    }
    .price_input{
        input{
            width: 240px;
            height: 60px;
            border-radius: 30px;
            text-align: center;
            line-height: 60px;
        }
        div{
            width: 28px;
            height: 3px;
            background-color: #b3b3b3;
            margin: 0 26px;
        }
    }
    .footer_box{
        width: 100%;
        height: 88px;
        position: absolute;
        bottom: 0;
        left: 0;
        div{
            height: 100%;
        }
        div:nth-of-type(1){
            box-shadow:1px -3px 14px 0px rgba(0, 0, 0, 0.14);
        }
        div:nth-of-type(2){
            background-color: #DF0134;
        }
    }
}
.js_dialog .dialog_content{
    transform: translateX(0) !important;
}
</style>


