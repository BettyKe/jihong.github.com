<template>
    <div class="container_box bg_FFF fdc ais df">
        <!-- logo S -->
            <img class="logo" src="../../image/b_ic_1@2x.png" />
        <!-- logo E -->
        <!-- 经销商-供应商 S -->
        <div class="switch_box bg_theme dfb">
            <span :class="['flex switch_item fs24 dfc tc cf']">经销商</span>
            <!-- <span @click="userType=2" :class="['flex switch_item fs24 dfc tc cf', userType == 2 ? 'active b act_2' : '']">供应商</span> -->
            <!-- <div :class="['switch_bg', userType == 2 ? 'to_r' : '']"></div> -->
        </div>
        <!-- 经销商-供应商 E -->
        <!-- 手机号码-密码 S -->
        <div class="input_box">
            <div class="input_item dfc fdc ">
                <img class="input_icon img46" src="../../image/b_ic_register@2x.png" />
                <input v-model="phone" type="number"  maxlength="11" onkeyup="this.value=this.value.replace(/\D/g,'')" class="fs30 c_1A1A1A" placeholder="请输入手机号码" />
            </div>
            <div class="input_item dfc fdc">
                <img class="input_icon img46" src="../../image/b_ic_code@2x.png" />
                <input v-model="password" type="password" class="fs30 c_1A1A1A" placeholder="请输入密码" />
            </div>
        </div>
        <!-- 手机号码-密码 E -->
        <div class="c_2C2521 fs30 tr forget_password" @click="$router.push({path: '/retrievePassword',query:{type: 1}})">忘记密码？</div>
        <div class="btn_red login_box" @click="toLogin">登录</div>
        <div class="dfc">
            <span class="fs30 c_2C2521">还没有账号？</span>
            <span class="fs30 theme ml20" @click="$router.push({path: '/register'})">立即注册！</span>
        </div>
        <!-- <div class="dot_box dfc">
            <img v-if="userType==2" class="img24" src="../../image/b_ic_carousel_d@2x.png" />
            <img class="img24" src="../../image/b_ic_carousel_s@2x.png" />
            <img v-if="userType == 1" class="img24" src="../../image/b_ic_carousel_d@2x.png" />
        </div> -->
        <div class="footer fs22 c_2C2521">吉宏客服：020-12345678</div>
    </div>
</template>
<script>
import {login} from '@/js/api'
export default {
    data() {
        return {
            userType: 1,
            phone: '',
            password: ''
        }
    },
    mounted() {
        console.log(this.$store.state.isLogin)
    },
    methods:{
        async toLogin(){
            let res = await login({
                phone:this.phone,
                password:this.password,
            })
            if(res.code==200){
                localStorage.setItem('token',res.data.token)
                this.$router.push({path:'/index'})
            }else{
                Toast(res.message);
            }
        }
    }
}
</script>
<style lang="less" scoped>
::-webkit-input-placeholder { /* Chrome/Opera/Safari */ 
	color: #9B9692;
}
::-moz-placeholder { /* Firefox 19+ */  
	color: #9B9692;
}
:-ms-input-placeholder { /* IE 10+ */ 
 color: #9B9692;
}
:-moz-placeholder { /* Firefox 18- */ 
 color: #9B9692;
}
.logo{
    width: 258px;
    height: 94px;
    margin: 140px 0 62px;
}
.switch_box{
    width: 220px;
    height: 80px;
    border-radius: 40px;
    box-sizing: border-box;
    padding: 4px;
    position: relative;
    margin-bottom: 80px;
    .switch_bg{
        position: absolute;
        right: 97px;
        top: 50%;
        transform: translateY(-50%);
        width: 120px;
        height: 74px;
        background-color: #FFF;
        border-radius: 37px;
        transition: all .2s;
    }
    .switch_bg.to_r{
        right: 4px;
    }
    .switch_item{
        position: relative;
        z-index: 1;
        // padding-left: 14px;
    }
    .active{
        color: #DF0134 !important;
    }
    .act_1{
        padding-left: 12px;
    }
    .act_2{
        padding-right: 12px;
    }
}
.input_box{
    width: 650px;
    margin-bottom: 32px;
    .input_item{
        width: 100%;
        border-bottom: 1px solid #E2E2E2;
        height: 120px;
        box-sizing: border-box;
        position: relative;
        input{
            width: 100%;
            height: 80px;
            box-sizing: border-box;
            padding-left: 60px;
            line-height: 80px;
        }
        .input_icon{
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
        }
    }
}
.forget_password{
    width: 650px;
}
.login_box{
    margin: 60px 0 34px;
}
.dot_box{
    margin-top: 150px;
    img:nth-of-type(1){
        margin-right: 12px;
    }
}
.footer{
    position: absolute;
    bottom: 30px;
}
</style>