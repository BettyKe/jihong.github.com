<template>
    <div class="container_box">
        <header-box bgc="#fff" title="个人资料"></header-box>
        <div class="info_box bg_FFF">
            <div class="box user_avatar dfb">
                <span class="fs28 c_33292B">头像</span>
                <div class="df ais jct-end">
                    <!-- <form name="imgForm" id="imgForm" enctype="multipart/form-data" action="https://apptest.ji-hong.com.cn/api/attachment/upload" method='post'>
                        <label for="imgLocal">
                            <input hidden class="input-loc-img"  name="imgLocal" id="imgLocal" type='file' accept="image/*" @change="selectImg" />
                            <img class="avatar" src="../../image/f_ic_soi_2@2x.png" alt="">
                        </label>
                    </form> -->
                    <!-- <img class="avatar" src="../../image/f_ic_soi_2@2x.png" alt=""> -->
                    <van-uploader :after-read="afterRead" max-count="1" >
                        <img class="avatar" src="../../image/f_ic_soi_2@2x.png" alt="">
                    </van-uploader>
                    <img class="img32" src="../../image/f_ic_more@2x.png" alt="">
                </div>
            </div>
            <div class="box dfb">
                <span class="fs28 c_33292B">昵称</span>
                <div class="df ais jct-end" @click="$router.push({path:`/my/changeName?name=${info.name}`})">
                    <span>{{info.name}}</span>
                    <img class="img32 ml20" src="../../image/f_ic_more@2x.png" alt="">
                </div>
            </div>
            <div class="box dfb">
                <span class="fs28 c_33292B">绑定手机</span>
                <div class="df ais jct-end" @click="$router.push({path:'/my/changeTel'})">
                    <span>{{info.phone}}</span>
                    <img class="img32 ml20" src="../../image/f_ic_more@2x.png" alt="">
                </div>
            </div>
            <div class="box dfb">
                <span class="fs28 c_33292B">修改密码</span>
                <div class="df ais jct-end" @click="$router.push({path:'/my/changePwd'})">
                    <img class="img32 ml20" src="../../image/f_ic_more@2x.png" alt="">
                </div>
            </div>
        </div>
        <div class="btn_red" @click="$router.back()">保存</div>
    </div>
</template>
<script>
import {personaInformation,upload} from '@/js/api'
export default {
    data(){
        return{
            info:'',
        }
    },
    created(){
        this.getInfo()
    },
    methods:{
        async getInfo(){
            let res = await personaInformation()
            if(res.code==200){
                res.data.phone = res.data.phone.substring(0,3)+'****'+res.data.phone.substring(7,11)
                this.info = res.data
            }
        },
        async afterRead(data){
            console.log(data)
            console.log(data.file)
            let res = await upload({file:data})
            if(res.code==200){
                console.log('success')
            }
        },
        selectImg(){
            let form=document.getElementById('imgForm');
            form.submit();
        }
    }
}
</script>
<style lang="less" scoped>
.container_box{
    width: 100vw;
    height: 100vh;
    z-index: 8;
    position: fixed;
    background-color: #F7F5F6;
    left: 0;
    top: 0;
}
.info_box{
    margin: 20px 30px 64px;
    border-radius: 20px;
    background: #fff;
    .box{
        border-top: 1px solid #F0F0F0;
        height: 90px;
        padding: 0 30px;
    }
    .user_avatar{
        border-top:none;
        height: 166px;
        .avatar{
            width: 108px;
            height: 108px;
            border-radius: 50%;
        }
    }
}
</style>