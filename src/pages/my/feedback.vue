<template>
    <div class="container">
        <header-box title="意见反馈">
            <div class="header_right dfc" slot="header-right" @click="submit">提交</div>
        </header-box>
        <div class="box">
            <textarea v-model="content" placeholder="请输入你的宝贵意见"></textarea>
        </div>
    </div>
</template>
<script>
import {} from '@/js/api'
export default {
    data(){
        return{
            content:''
        }
    },
    methods:{
        async submit(){

        }
    }
}
</script>
<style lang="less" scoped>
.container{
    width: 100vw;
    height: calc(100vh - 98px);
    background-color: #F7F5F6;
    padding-top: 20px;
}
.box{
    height: 270px;
    background: #fff;
    margin: 0 30px;
    border-radius: 20px;
    textarea{
        width: 100%;
        height: 100%;
        line-height: 1.5;
        color: var(--theme-default);
        font-size: 28px;
        padding: 30px;
    }
}
.header_right{
    position: absolute;
    right: 30px;
    top: 0;
    bottom: 0;
    margin: auto 0;
    font-size: 28px;
}
</style>