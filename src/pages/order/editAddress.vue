<template>
    <div class="container">
        <header-box title="新建收货地址"></header-box>
        <div class="box">
            <div class="bor_bottom"><input type="text" v-model="name" placeholder="收货人" /></div>
            <div class="bor_bottom"><input type="text" v-model="tel" placeholder="手机号" /></div>
            <div class="bor_bottom"><input type="text" v-model="logLable" placeholder="物流标签" /></div>
            <div class="bor_bottom pdtb30 dfb c_666">
                <span>所在地</span>
                <span :class="['dfc',area.length?'':'c_666']" @click="showAddr=true">{{area.length?(area[0].name+area[1].name+area[2].name):'请选择'}}<img class="img32" src="../../image/b_ic_back@2x.png" alt="" /></span>
            </div>
            <div><textarea type="text" v-model="addDetail" placeholder="详细地址：请输入详细地址信息，如街道、门牌号 单元室等。" /></div>
        </div>
        <div class="btn_red" @click="submit">保存</div>
        <van-popup v-model="showAddr" position="bottom"><van-area :area-list="areaList" @confirm="chooseAddr" /></van-popup>
    </div>
</template>
<script>
import areaLists from '@/js/area'
import {addressSave} from '@/js/api'
export default {
    data(){
        return{
            name:'',
            tel:'',
            logLable:'',
            addDetail:'',
            showAddr:false,
            areaList:areaLists,
            area:[],
            id:'',
        }
    },
    created(){
        this.id = this.$route.query.id
        if(this.id){
            this.getInfo()
        }
    },
    methods:{
        chooseAddr(data){
            this.showAddr = false
            console.log(data)
            this.area = data
        },
        async getInfo(){
            let res = await addressGet({id:this.id})
            if(res.code==200){

            }
        },
        async submit(){
            if(this.name==''){
                this.$toast('请填写收货人')
                return
            }
            if(this.tel==''){
                this.$toast('请填写手机号')
                return
            }
            if(this.logLable==''){
                this.$toast('请填写物流标签')
                return
            }
            if(!this.area.length){
                this.$toast('请选择所在地')
                return
            }
            if(this.addDetail==''){
                this.$toast('请填写详细地址')
                return
            }
            let res = await addressSave({
                "address": {
                    "consignee": this.name,
                    "phone": this.tel,
                    "province": this.area[0].name,
                    "city": this.area[1].name,
                    "district": this.area[2].name,
                    "detail": this.addDetail,
                    "transporterLabel": this.logLable
                }
            })
            if(res.code==200){
                this.$router.back()
            }
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