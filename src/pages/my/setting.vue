<template>
    <div class="container pdt20 bg_F7F5F6">
        <header-box title="设置"></header-box>
        <div class="box bg_FFF">
            <div class="item dfb" @click="$router.push('/my/page?id=1')">
                <span>用户协议</span>
                <img class="img32" src="../../image/b_ic_back@2x.png" alt="">
            </div>
            <div class="item dfb" @click="$router.push('/my/page?id=2')">
                <span>隐私政策</span>
                <img class="img32" src="../../image/b_ic_back@2x.png" alt="">
            </div>
            <div class="item dfb" @click="$router.push('/my/page?id=3')">
                <span>关于我们</span>
                <img class="img32" src="../../image/b_ic_back@2x.png" alt="">
            </div>
            <!-- <div class="item dfb">
                <span>版本信息</span>
                <img class="img32" src="../../image/b_ic_back@2x.png" alt="">
            </div> -->
        </div>
        <div class="box bg_FFF" @click="$router.push({path:'/my/feedback'})">
            <div class="item dfb">
                <span>意见反馈</span>
                <img class="img32" src="../../image/b_ic_back@2x.png" alt="">
            </div>
        </div>
        <div class="btn_red" @click="logout">退出登录</div>
    </div>
</template>
<script>
export default {
    methods:{
        logout(){
            this.$dialog.confirm({
                message:'确认退出登录吗？',
            }).then(()=>{
                localStorage.removeItem('token')
                this.$router.replace('/login')
            })
        },
    },
}
</script>
<style lang="less" scoped>
.container{
    width: 100vw;
    height: calc(100vh - 98px);
    .box{
        border-radius: 20px;
        margin: 20px 30px 0;
        .item{
            height: 90px;
            border-bottom: 1px solid #F0F0F0;
            font-size: 28px;
            padding: 30px;
            &:last-of-type{
                border-bottom: none;
            }
        }
    }
    .box:nth-last-child(2){
        margin-bottom: 82px;
    }
}
</style>