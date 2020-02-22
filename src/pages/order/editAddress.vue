<template>
    <div class="container">
        <header-box title="新建收货地址"></header-box>
        <div class="box">
            <div class="bor_bottom"><input type="text" placeholder="收货人" /></div>
            <div class="bor_bottom"><input type="text" placeholder="手机号" /></div>
            <div class="bor_bottom"><input type="text" placeholder="物流标签" /></div>
            <div class="bor_bottom pdtb30 dfb c_666">
                <span>所在地</span>
                <span :class="['dfc',area?'':'c_666']" @click="showAddr=true">{{area?area:'请选择'}}<img class="img32" src="../../image/b_ic_back@2x.png" alt="" /></span>
            </div>
            <div><textarea type="text" placeholder="详细地址：请输入详细地址信息，如街道、门牌号 单元室等。" /></div>
        </div>
        <div class="btn_red">保存</div>
        <van-popup v-model="showAddr" position="bottom"><van-area :area-list="areaList" @confirm="chooseAddr" /></van-popup>
    </div>
</template>
<script>
import areaLists from '@/js/area'
export default {
    data(){
        return{
            showAddr:false,
            areaList:areaLists,
            area:'',
        }
    },
    methods:{
        chooseAddr(data){
            this.showAddr = false
            console.log(data)
            this.area = data[0].name+data[1].name+data[2].name
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
    margin-bottom: 80px;
    font-size: 28px;
    padding: 0 30px;
    input{
        width: 100%;
        height: 100%;
        font-size: 28px;
        padding: 30px 0;
    }
    textarea{
        width: 100%;
        font-size: 28px;
        padding: 30px 0;
        line-height: 1.5;
    }
}
</style>