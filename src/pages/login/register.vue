<template>
    <div class="container fdc ais df">
        <header-box bgc="#fff" title="完善注册信息"></header-box>
        <div class="input_container bg_FFF">
            <div class="input_item dfb">
                <span class="fs28 c_333 b input_name tl pdl20">昵称</span>
                <input v-model="nickName" class="flex fs28" placeholder="请填写经销商名称" />
            </div>
            <div class="input_item dfb" @click="showArea = true">
                <span class="fs28 c_333 b input_name tl pdl20">所在区域</span>
                <input :value="selectArea.length?(selectArea[0].name+selectArea[1].name+selectArea[2].name):''" class="flex fs28" disabled placeholder="请选择" />
                <img class="img32" src="../../image/f_ic_more@2x.png" />
            </div>
            <div class="input_item dfb">
                <span class="fs28 c_333 b input_name tl pdl20">详细地址</span>
                <input v-model="address" class="flex fs28" placeholder="请填写详细地址" />
            </div>
            <div class="input_item dfb">
                <span class="fs28 c_333 b input_name tl pdl20">联系人</span>
                <input v-model="name" class="flex fs28" placeholder="请填写联系人姓名" />
            </div>
            <div class="input_item dfb">
                <span class="fs28 c_333 b input_name tl pdl20">联系方式</span>
                <input v-model="phone" type="number" class="flex fs28" placeholder="请填写联系人手机号" />
            </div>
            <div class="input_item dfb" @click="chooseLog">
                <span class="fs28 c_333 b input_name tl pdl20">收货物流</span>
                <input v-model="logistics" class="flex fs28" disabled placeholder="请选择" />
                <img class="img32" src="../../image/f_ic_more@2x.png" />
            </div>
            <div class="input_item dfb">
                <span class="fs28 c_333 b input_name tl pdl20">物流标签</span>
                <input v-model="logisticsLabel" class="flex fs28" placeholder="请填写物流收货地点" />
            </div>
        </div>
        <div class="btn_red next_box" @click="next">下一步</div>
        <!-- 省市区弹框 S -->
        <van-popup v-model="showArea" position="bottom">
            <van-area :area-list="areaList" @cancel="showArea = false" @confirm="confirm" />
        </van-popup>
        <!-- 省市区弹框 E -->
        <van-popup v-model="showLog" position="bottom">
            <van-picker :columns="logList" @confirm="confirmLog" show-toolbar />
        </van-popup> 
    </div>
</template>
<script>
import areaList1 from '@/js/area'
import {registered,findEnableDTransporter} from '@/js/api'
export default {
    data() {
        return {
            areaList:areaList1,
            showArea: false,
            showLog: false,
            selectArea: [],
            address: '',
            logistics: '',
            logisticsId:'',
            logisticsLabel: '',
            name: '',
            phone: '',
            logList:[],
            logisticsList:[],
            nickName:'',
        }
    },
    created(){
        // sessionStorage.removeItem('register')
    },
    methods: {
        async chooseLog(){
            this.showLog = true
            let res = await findEnableDTransporter()
            if(res.code==200 && res.data.length){
                this.logisticsList = res.data
                res.data.map(v=>{
                    this.logList.push(v.name)
                })
            }
        },
        confirmLog(val,index){
            this.showLog = false
            this.logistics = val
            this.logisticsId = this.logisticsList[index].id
        },
        confirm(info) {
            console.log(info)
            this.selectArea = info
            this.showArea = false
        },
        next(){
            if(this.nickName=='' || !this.selectArea.length || this.address=='' || this.name=='' || this.phone=='' || this.logisticsLabel=='' || this.logisticsId==""){
                return;
            }
            let data = {
                "distributor": {
                    "phone": "",
                    "password": "",
                    "fullName": this.nickName,
                    "province": this.selectArea[0].name,
                    "city": this.selectArea[1].name,
                    "district": this.selectArea[2].name,
                    "address": this.address,
                    "contact": this.name,
                    "contactPhone": this.phone,
                    "transporterLabel": this.logisticsLabel,
                    "transporter": {
                        "id": this.logisticsId
                    }
                }
            }
            sessionStorage.setItem('register',JSON.stringify(data))
            this.$router.push({path: '/loginPhone'})
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
.input_container{
    width: calc(100vw - 60px);
    border-radius: 10px;
    margin-top: 20px;
    box-shadow: 0px 0px 10px 0px #c7c7c7;
}
.input_item{
    height: 86px;
    width: 100%;
    border-bottom: 1px solid #F0F0F0;
    position: relative;
    input{
        height: 100%;
    }
    img{
        position: absolute;
        top: 50%;
        right: 30px;
        transform: translateY(-50%);
    }
}
.input_name{
    width: 176px;
}
.next_box{
    margin-top: 120px;
}
.opacity{
    opacity: 0.5;
}
</style>
