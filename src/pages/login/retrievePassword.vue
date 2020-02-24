<template>
    <div class="container_box bg_FFF">
        <header-box class="box_item_a" bgc="#fff" title="找回密码"></header-box>
        <div class="box_item" v-if="state==1&&type==1">
            <div class="input_box dfc fdc">
                <input v-model="phone" class="fs28 c_333" placeholder="请输入登录手机号" />
            </div>
            <div class="input_box dfc fdc">
                <input v-model="code" class="fs28 c_333" placeholder="请输入短信验证码" />
                <span class="get_code fs24 theme" @click="getCode">{{times==60?'获取验证码':times+'s'}}</span>
            </div>
            <div :class="['btn_red next_box', (phone=='' || code=='')?'opacity':'']" @click="next">下一步</div>
        </div>
        <div class="box_item" v-if="state==2&&type==1">
            <div class="input_box dfc fdc">
                <input class="fs28 c_333" type="password" v-model="password1" placeholder="设置新密码" />
            </div>
            <div class="input_box dfc fdc">
                <input class="fs28 c_333" type="password" v-model="password2" placeholder="请再次输入新密码" />
            </div>
            <div :class="['btn_red next_box', (password1=='' || password2=='')?'opacity':'']" @click="submit">完成</div>
        </div>
    </div>
</template>
<script>
import {sendConfirmCaptcha,sendUpdatePasswordCaptcha,checkCaptcha} from "@/js/api"
export default {
    data() {
        return {
            phone: '',
            code: '',
            type: this.$route.query.type,
            state: 1,
            password1:'',
            password2:'',
            timer:'',
            times:60,
        }
    },
    created(){
        
    },
    methods: {
        async getCode(){
            if(this.phone=='' || this.times!=60){
                return;
            }
            if(!(/^1[3456789]\d{9}$/.test(this.phone))) {
                this.$toast('请输入正确手机号');
                return
            }
            let res = await sendConfirmCaptcha({
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
        async next(){
            if(!(/^1[3456789]\d{9}$/.test(this.phone))) {
                this.$toast('请输入正确手机号');
                return
            }
            if(this.code==''){
                this.$toast('请输入验证码');
                return
            }
            let res = await checkCaptcha({
                phone:this.phone,
                captcha:this.code
            })
            if(res.code==200){
                this.state=2
            }
        },
        async submit(){
            if(this.password1==''){
                this.$toast('请输入密码');
                return;
            }
            if(this.password1 != this.password2){
                this.$toast('两次输入密码不一致');
                return;
            }
            let res = await sendUpdatePasswordCaptcha({
                phone:this.phone,
                password:this.password1
            })
            if(res.code==200){
                this.$router.back()
            }
        }
    }
}
</script>
<style lang="less" scoped>
// ::-webkit-input-placeholder { /* Chrome/Opera/Safari */ 
// 	color: #CCCCCC;
// }
// ::-moz-placeholder { /* Firefox 19+ */  
// 	color: #CCCCCC;
// }
// :-ms-input-placeholder { /* IE 10+ */ 
//  color: #CCCCCC;
// }
// :-moz-placeholder { /* Firefox 18- */ 
//  color: #CCCCCC;
// }
.box_item{
    margin: 10px 30px 0;
}
.box_item_a{
    // box-shadow:0px 18px 62px 0px rgba(0, 0, 0, 0.04);
}
.input_box{
    width: 100%;
    height: 90px;
    border-bottom: 1px solid #F0F0F0;
    position: relative;
    input{
        width: 100%;
        height: 40px;
        line-height: 40px;
    }
    .get_code{
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
    }
}
.next_box{
    margin-top: 80px;
}
.opacity{
    opacity: .5;
}
</style>
