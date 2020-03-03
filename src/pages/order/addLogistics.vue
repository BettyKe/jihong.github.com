<template>
    <div class="container">
        <header-box title="新建物流"></header-box>
        <div class="box">
            <div class="pd30 bor_bottom"><input type="text" v-model="name" placeholder="请填写物流商名称" /></div>
            <div class="pd30"><input type="text" v-model="phone" placeholder="请填写物流商联系方式" /></div>
        </div>
        <div class="btn_red" @click="submit">保存</div>
    </div>
</template>
<script>
import {transporterSave} from '@/js/api'
export default {
    data(){
        return{
            name:'',
            phone:'',
        }
    },
    methods:{
        async submit(){
            if(this.name==''){
                this.$toast('请输入物流商名称')
                return;
            }
            if(this.phone==''){
                this.$toast('请输入联系方式')
                return;
            }
            let res = await transporterSave({
                "transporter": {
                    "name": this.name,
                    "contactPhone": this.phone
                }
            })
            if(res.code==200){
                this.$toast('保存成功');
                setTimeout(()=>{
                    this.$router.back()
                },1000)
            }
        }
    }
}
</script>
<style lang="less" scoped>
.container{
    min-height: 100vh;
    background: #F7F4F8;
    padding: 30px;
    box-sizing: border-box;
}
.box{
    background: #fff;
    border-radius: 20px;
    margin-bottom: 50px;
    input{
        width: 100%;
        height: 100%;
        font-size: 28px;
    }
}
</style>