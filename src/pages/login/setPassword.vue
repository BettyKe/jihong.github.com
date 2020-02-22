<template>
    <div class="container_box bg_FFF fdc ais df pdt10">
        <header-box bgc="#fff" title="设置密码"></header-box>
        <div class="input_item dfb">
            <p class="fs28 c_33292B">设置密码</p>
            <input v-model="password1" type="password" class="flex fs28" placeholder="6-16位数字、英文或下划线" />
        </div>
        <div class="input_item dfb">
            <p class="fs28 c_33292B">确认密码</p>
            <input v-model="password2" type="password" class="flex fs28" placeholder="再次输入密码" />
        </div>
        <div class="btn_red next_box opacity" @click="submit">注册</div>
        <div class="protocol dfc fs20">
            <span class="c_999">注册即代表同意</span>
            <span class="b theme">《用户使用协议》</span>
        </div>
    </div>
</template>
<script>
import {registered} from '@/js/api'
import { Toast } from 'vant';
export default {
    data() {
        return {
            password1: '',
            password2: ''
        }
    },
    methods:{
        async submit(){
            if(this.password1 == ''){
               Toast('请输入密码')
               return;
            }
            if(this.password1 != this.password2){
               Toast('两次密码不一致')
               return;
            }
            let data = JSON.parse(sessionStorage.getItem('register'))
            data.distributor.password = this.password1
            let res = await registered(data)
            if(res.code==200){
                Toast('注册成功')
                this.$router.go(-3)
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
        width: 142px;
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
.protocol{
    margin-top: 30px;
}
</style>
