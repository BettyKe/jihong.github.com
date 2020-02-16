<template>
    <div>
        <div class="header-box dfa" :style="'background:'+bgc+';color:'+(fontColor==='black'?'#33292B':'#fff')">
            <div class="back_icon dfc fdc" v-if="showLeftIcon">
                <img @click="back" v-if="fontColor==='black'" class="icon_left icon_black" src="../image/b_ic_back_1@2x.png" alt="">
                <img v-else class="icon_left icon_white" src="../image/b_ic_back_1@2x.png" alt="">
            </div>
            <span class="flex dfc fs32">{{title}}</span>
            <slot name="header-right"></slot>
        </div>
        <div class="header-replace"></div>
    </div>    
</template>
<script>
export default {
    props:{
        bgc:{
            type: String,
            default: '#fff'
        },
        showLeftIcon: {
            type: Boolean,
            default: true
        },
        fontColor:{
            type: String,
            default:'black'
        },
        title:{
            type: String,
            default:'吉宏园艺'
        }
    },
    methods: {
        back() {
            this.$router.back()
        }
    }
}
</script>

<style lang="less" scoped>
.header-box{
    background: #fff;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 98px;
    padding-right: 30px;
    // padding: 0 30px 0;
    box-sizing: border-box;
    z-index: 50;
    img{
        width: 32px;
        height: 32px;
    }
    .back_icon{
        width: 98px;
        height: 98px;
        position: absolute;
        left: 0;
        top: 0;
    }
}
.header-replace{
    width: 100vw;
    height: 98px;
}
</style>


