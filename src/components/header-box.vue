<template>
<div>
    <div class="header-box dfa" :style="'background:'+bgc+';color:'+(fontColor==='black'?'#33292B':'#fff')">
        <img v-if="fontColor==='black'" class="icon_left icon_black" src="../image/logo.png" alt="">
        <img v-else class="icon_left icon_white" src="../image/logo.png" alt="">
        <span class="flex dfc">分类</span>
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
        fontColor:{
            type:String,
            default:'black'
        },
    },
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
    padding: 0 30px;
    box-sizing: border-box;
    img{
        width: 32px;
        height: 32px;
    }
    .icon_left{
        position: absolute;
        left: 30px;
        top: 0;
        bottom: 0;
        margin: auto 0;
    }
}
.header-replace{
    width: 100vw;
    height: 98px;
}
</style>


