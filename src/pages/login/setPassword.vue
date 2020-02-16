<template>
    <div class="container_box bg_F7F5F6 fdc ais df pdt10">
        <header-box bgc="#fff" title="设置密码"></header-box>
        <div class="input_item dfb">
            <p class="fs28 c_33292B">设置密码</p>
            <input v-model="password1" type="password" class="flex fs28" placeholder="6-16位数字、英文或下划线" />
        </div>
        <div class="input_item dfb">
            <p class="fs28 c_33292B">确认密码</p>
            <input v-model="password2" type="password" class="flex fs28" placeholder="再次输入密码" />
        </div>
        <div class="btn_red next_box opacity" @click="$router.push({path: '/setPassword'})">注册</div>
        <div class="protocol dfc fs20">
            <span class="c_999">注册即代表同意</span>
            <span class="b theme">《用户使用协议》</span>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            password1: '',
            password2: ''
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
