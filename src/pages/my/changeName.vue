<template>
    <div class="container">
        <header-box title="修改昵称"></header-box>
        <div class="content bg_F7F5F6">
            <div class="box bg_FFF">
                <div class="title df ais jct-start">昵称：</div>
                <div class="df ais jct-start">
                    <input type="text" placeholder="请输入昵称" v-model="name" maxlength="10" />
                </div>
                <div class="tip df ais jct-end">*限中文，10个字以内</div>
            </div>
            <div class="btn_red" @click="submit">确定</div>
        </div>
    </div>
</template>
<script>
import {ModifyName} from '@/js/api'
export default {
    data(){
        return{
            name:''
        }
    },
    created(){
        this.name = this.$route.query.name
    },
    methods:{
        async submit(){
            if(this.name==''){
                this.$toast('请填写昵称');
                return;
            }
            let res = await ModifyName({
                name:this.name
            })
            if(res.code==200){
                this.$toast('修改成功');
                setTimeout(()=>{
                    this.$router.back()
                },10000)
            }
        }
    }
}
</script>
<style lang="less" scoped>
.content{
    width: 100vw;
    height: calc(100vh - 98px);
    padding-top: 20px;
    .box{
        height: 256px;
        margin: 20px 30px 38px;
        padding: 0 30px;
        border-radius: 20px;
        div{
            height: 84px;
        }
        .title{
            font-size: 28px;
            color: #000;
            font-weight: bold;
        }
        input{
            width: 100%;
            border-bottom: 1px solid #F5F5F5;
            line-height: 84px;
            font-size: 28px;
        }
        .tip{
            text-align: right;
            color: #999999;
            font-size: 24px;
        }
    }
}
</style>