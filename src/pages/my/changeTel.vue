<template>
    <div class="container">
        <header-box title="修改绑定手机号"></header-box>
        <div class="content bg_F7F5F6">
            <div class="box bg_FFF">
                <div class="title df ais jct-start">输入新的手机号码</div>
                <div class="input_box df ais jct-start">
                    <input class="flex" v-model="phone" type="text" placeholder="请输入手机号码" />
                    <span class="get_code" @click="getCode">{{times==60?'获取验证码':times+'s'}}</span>
                </div>
                <div class="input_box df ais jct-start">
                    <input class="flex" v-model="code" type="text" placeholder="请输入短信验证码" />
                </div>
            </div>
            <div class="btn_red" @click="submit">确认更改</div>
        </div>
    </div>
</template>
<script>
import {sendUpdateCaptcha,checkCaptcha,ModifyPhone} from '@/js/api'
export default {
    data(){
        return{
            phone: '',
            code: '',
            times:60,
            timer:'',
        }
    },
    methods:{
        verifyTel(value) {
            return (value ? true : false) && /^1[3456789]\d{9}$/.test(value)
        },
        async getCode(){
            if(this.phone=='' || !this.verifyTel(this.phone)){
                this.$toast('请输入正确的手机号码')
                return;
            }
            if(this.times!=60){
                return;
            }
            let res = await sendUpdateCaptcha({
                phone:this.phone
            })
            if(res.code==200){
                this.timer = setInterval(()=>{
                    this.times--;
                    if(this.times<=0){
                        clearInterval(this.timer);
                        this.times=60
                    }
                },1000)
            }
            
        },
        async submit(){
            if(this.phone=='' || !this.verifyTel(this.phone)){
                this.$toast('请输入正确的手机号码')
                return;
            }
            if(this.code==''){
                this.$toast('请输入验证码')
                return;
            }
            let res = await checkCaptcha({
                phone:this.phone,
                captcha:this.code,
            })
            if(res.code==200){
                let ret = await ModifyPhone({
                    newPhone:this.phone
                })
                if(ret.code==200){
                    this.$router.back()
                }
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
            height: 80px;
        }
        .input_box{
            border-bottom: 1px solid #F5F5F5;
        }
        .title{
            font-size: 28px;
            color: #000;
            font-weight: bold;
        }
        input{
            line-height: 84px;
            font-size: 28px;
        }
        .get_code{
            font-size: 24px;
            color: var(--theme);
        }
        .tip{
            text-align: right;
            color: #999999;
            font-size: 24px;
        }
    }
}
</style>