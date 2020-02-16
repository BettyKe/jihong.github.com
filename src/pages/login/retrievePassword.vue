<template>
    <div class="container_box bg_F7F5F6">
        <header-box class="box_item_a" bgc="#fff" title="找回密码"></header-box>
        <div class="box_item" v-if="state==1&&type==1">
            <div class="input_box dfc fdc">
                <input v-model="phone" class="fs28 c_333" placeholder="请输入登录手机号" />
            </div>
            <div class="input_box dfc fdc">
                <input v-model="code" class="fs28 c_333" placeholder="请输入短信验证码" />
                <span class="get_code fs24 theme" @click="getCode">获取验证码</span>
            </div>
            <div :class="['btn_red next_box', 'opacity']">下一步</div>
        </div>
        <div class="box_item" v-if="state==2&&type==1">
            <div class="input_box dfc fdc">
                <input class="fs28 c_333" type="password" placeholder="设置新密码" />
            </div>
            <div class="input_box dfc fdc">
                <input class="fs28 c_333" type="password" placeholder="请再次输入新密码" />
            </div>
            <div :class="['btn_red next_box', 'opacity']">{{type==1?'下一步':'完成'}}</div>
        </div>
    </div>
</template>
<script>
import {
  sendRegisterationCaptcha
} from "@/js/api"
export default {
    data() {
        return {
            phone: '',
            code: '',
            type: this.$route.query.type,
            state: 1
        }
    },
    methods: {
        getCode: async function () {
            if(!(/^1[3456789]\d{9}$/.test(this.phone))) {
                this.$toast('请输入正确手机号');
                return
            }
            console.log(this.phone)
            let res = await sendRegisterationCaptcha({phone: this.phone})
            console.log(res)
        }
    }
}
</script>
<style lang="less" scoped>
::-webkit-input-placeholder { /* Chrome/Opera/Safari */ 
	color: #CCCCCC;
}
::-moz-placeholder { /* Firefox 19+ */  
	color: #CCCCCC;
}
:-ms-input-placeholder { /* IE 10+ */ 
 color: #CCCCCC;
}
:-moz-placeholder { /* Firefox 18- */ 
 color: #CCCCCC;
}
.box_item{
    margin: 10px 30px 0;
}
.box_item_a{
    box-shadow:0px 18px 62px 0px rgba(0, 0, 0, 0.04);
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
