<template>
    <div class="container_box bg_F7F5F6 fdc ais df">
        <header-box bgc="#fff" title="完善注册信息"></header-box>
        <div class="input_container bg_FFF">
            <div class="input_item dfb" @click="showArea = true">
                <span class="fs28 c_333 b input_name tc">所在区域</span>
                <input v-model="areaStr" class="flex fs28" disabled placeholder="请选择" />
                <img class="img32" src="../../image/f_ic_more@2x.png" />
            </div>
            <div class="input_item dfb">
                <span class="fs28 c_333 b input_name tc">详细地址</span>
                <input v-model="address" class="flex fs28" placeholder="请填写详细地址" />
            </div>
            <div class="input_item dfb">
                <span class="fs28 c_333 b input_name tc">联系人</span>
                <input v-model="name" class="flex fs28" placeholder="请填写联系人姓名" />
            </div>
            <div class="input_item dfb">
                <span class="fs28 c_333 b input_name tc">联系方式</span>
                <input v-model="phone" type="number" class="flex fs28" placeholder="请填写联系人手机号" />
            </div>
            <div class="input_item dfb" @click="showLogistics = true">
                <span class="fs28 c_333 b input_name tc">收货物流</span>
                <input v-model="logistics" class="flex fs28" disabled placeholder="请选择" />
                <img class="img32" src="../../image/f_ic_more@2x.png" />
            </div>
            <div class="input_item dfb">
                <span class="fs28 c_333 b input_name tc">物流标签</span>
                <input v-model="logisticsLabel" class="flex fs28" placeholder="请填写物流收货地点" />
            </div>
        </div>
        <div class="btn_red next_box opacity" @click="$router.push({path: '/loginPhone'})">下一步</div>
        <!-- 省市区弹框 S -->
        <van-popup v-model="showArea" position="bottom">
            <van-area :area-list="areaList" @cancel="showArea = false" @confirm="confirm" />
        </van-popup>
        <!-- 省市区弹框 E -->    
    </div>
</template>
<script>
import areaList1 from '@/js/area'
export default {
    data() {
        return {
            areaList:areaList1,
            showArea: false,
            showLogistics: false,
            selectArea: [],
            address: '',
            areaStr: '',
            logistics: '',
            logisticsLabel: '',
            name: '',
            phone: ''
        }
    },
    methods: {
        confirm(info) {
            this.selectArea = info
            this.areaStr = ''
            info.map(item => {
                this.areaStr += item.name
            })
            this.showArea = false
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
