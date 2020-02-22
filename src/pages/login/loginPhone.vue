<template>
    <div class="container_box bg_FFF fdc ais df pdt10">
        <header-box bgc="#fff" title="登录手机号"></header-box>
        <div class="input_item dfb">
            <p class="fs28 c_33292B">手机号</p>
            <input v-model="phone" class="flex fs28" placeholder="请输入登录手机号" />
        </div>
        <div class="input_item dfb">
            <p class="fs28 c_33292B">验证码</p>
            <input v-model="code" class="flex fs28" placeholder="请输入验证码" />
            <span class="fs24 theme" @click="getCode">{{times==60?'获取验证码':times+'s'}}</span>
        </div>
        <div class="btn_red next_box opacity" @click="next">下一步</div>
    </div>
</template>
<script>
import {sendRegisterationCaptcha,checkCaptcha} from '@/js/api'
export default {
    data() {
        return {
            phone: '',
            code: '',
            times:60,
            timer:'',
        }
    },
    methods:{
        async getCode(){
            if(this.phone=='' || this.times!=60){
                return;
            }
            let res = await sendRegisterationCaptcha({
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
            let res = await checkCaptcha({
                phone:this.phone,
                captcha:this.code,
            })
            if(res.code==200){
                let data = JSON.parse(sessionStorage.getItem('register'))
                data.distributor.phone = this.phone
                sessionStorage.setItem('register',JSON.stringify(data))
                this.$router.push({path: '/setPassword'})
            }
            
        }
    }
}
</script>
<style lang="less" scoped>
::-webkit-input-placeholder { /* Chrome/Opera/Safari */ 
	color: #999;
}
::-moz-placeholder { /* Firefox 19+ */  
	color: #999;
}
:-ms-input-placeholder { /* IE 10+ */ 
 color: #999;
}
:-moz-placeholder { /* Firefox 18- */ 
 color: #999;
}
.input_item{
    height: 100px;
    box-sizing: border-box;
    width: calc(100vw - 60px);
    border-bottom: 1px solid #F0F0F0;
    position: relative;
    p{
        width: 112px;
    }
    span{
        position: absolute;
        right: 30px;
        top: 50%;
        transform: translateY(-50%);
    }
}
.next_box{
    margin-top: 80px;
}
.opacity{
    opacity: 0.5;
}
</style>
