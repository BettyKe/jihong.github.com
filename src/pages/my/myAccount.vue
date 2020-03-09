<template>
    <div class="container_box bg_F7F5F6">
        <header-box bgc="transparent" fontColor="white" title="我的账户"></header-box>
        <div class="top dfc fdc cf">
            <div class="dfc">
                <span class="dot bg_FFF"></span>
                <span class="dot bg_FFF"></span>
                <span class="dot bg_FFF"></span>
                <p class="fs28">余额(元)</p>
                <span class="dot bg_FFF"></span>
                <span class="dot bg_FFF"></span>
                <span class="dot bg_FFF"></span>
            </div>
            <div class="money">{{amount}}</div>
            <div class="header_right dfc bg_FFF theme" @click="$router.push({path: '/my/withdraw'})">提现</div>
        </div>
        <div class="timer_box dfc bg_FFF" @click="showDate=true">
            <div class="flex dfb fdc timer_item">
                <span class="fs30">开始时间</span>
                <span class="fs28">{{startDay}}</span>
            </div>
            <div class="flex dfb fdc timer_item">
                <span class="fs30">结束时间</span>
                <span class="fs28">{{endDay}}</span>
            </div>
        </div>
        <div class="document_type dfb bg_FFF">
            <span class="fs32">单据类型</span>
            <div class="dfb" @click="showType=true">
                <span class="fs28">{{orderTypeList[orderType]}}</span>
                <img class="img32" src="../../image/f_ic_more@2x.png" />
            </div>
        </div>
        <van-list class="item_list" v-model="loading" :finished="finished" finished-text="没有更多了" @load="toLoad">
            <div class="item_info bg_FFF dfb" v-for="(item,index) in list" :key="index" @click="$router.push({path:'/my/returnOrderDetail'})">
                <div class="df ais-start jct-around fdc item_l">
                    <span class="fs32 b c_33292B    ">{{item.type}}</span>
                    <span class="fs22 c_666">{{item.createAt}}</span>
                </div>
                <div class="fs32 b c_33292B" v-if="item.addAmount">+{{item.addAmount}}</div>
                <div class="fs32 b c_33292B" v-if="item.reduceAmount">{{item.reduceAmount}}</div>
            </div>
        </van-list>
        <van-calendar v-model="showDate" type="range" :show-confirm="false" @confirm="confirmDate" color="#DF0134" 
        :min-date="minDate" :max-date="maxDate" :default-date="[startDate,endDate]" />
        <van-popup v-model="showType" position="bottom">
            <van-picker :columns="orderTypeList" :default-index="0" show-toolbar @confirm="confirmType" @cancel="showType=false" />
        </van-popup>
    </div>
</template>
<script>
import dateFormat from 'dateformat';
import {MyAccount} from '@/js/api'
export default {
    data(){
        return{
            showDate:false,
            showType:false,
            startDay:'',
            endDay:'',
            startDate:'',
            endDate:'',
            minDate: new Date(2020, 0, 1),
            maxDate: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()),
            orderTypeList: ['全部', '退货单', '订单', '补充发货单', '取消订单', '申请提现', '提现失败'],
            orderType:0,
            amount:0,
            list:[],
            loading:false,
            finished:false,
            pageNumber:1,
        }
    },
    created(){
        this.getInfo()
    },
    methods:{
        formatDate(date,type) {
            if(type==1){
                return new Date(date.getFullYear(), date.getMonth() ,date.getDate());
            }else{
                return `${date.getFullYear()}-${this.getzf(date.getMonth() + 1)}-${this.getzf(date.getDate())}`;
            }
        },
        //补0操作
        getzf(num){
            if(parseInt(num) < 10){
            num = '0'+num;
            }
            return num;
        },
        confirmDate(date){
            const [start, end] = date;
            this.showDate = false;
            this.startDay = this.formatDate(start);
            this.endDay = this.formatDate(end)
            this.startDate = this.formatDate(start,1);
            this.endDate = this.formatDate(end,1);
            console.log(this.date)
            this.getInfo()
        },
        confirmType(value, index){
            this.showType = false
            this.orderType = index
            this.getInfo()
        },
        async getInfo(page=1){
            let time = dateFormat(new Date(), " HH:MM:ss")
            let res = await MyAccount({
                dateFrom:this.startDay?(this.startDay+time) : '',
                dateTo:this.endDay?(this.endDay+time) : '',
                type:this.orderType==0?'':this.orderTypeList[this.orderType],
                pageable: {
                    page: page
                }
            })
            if(res.code==200){
                this.amount = res.data.amount

                this.loading = false
                this.pageNumber = page
                if(page==1){
                    this.finished = false
                    this.list = res.data.list
                }else{
                    this.list.push(...res.data.list)
                }
                console.log(res.data.list.length)
                if(!res.data.list.length){
                    console.log('ff',this.finished)
                    this.finished = true
                }
            }
        },
        toLoad(){
            let page = this.pageNumber +1
            this.getInfo(page)
        }
    }
};
</script>
<style scoped lang="less">
.top {
  width: 100%;
  height: 399px;
  background: url("../../image/f_setting_d@2x.png") no-repeat center;
  //   transform: translateY(-98px);
  position: absolute;
  left: 0;
  top: 0;
  background-size: 100% 100%;
  padding-top: 98px;
  box-sizing: border-box;
  .dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    margin: 0 4px;
  }
  p {
    margin: 0 20px;
  }
  .money {
    font-size: 90px;
    margin: 20px 0;
  }
}
.billing_record {
  border-radius: 10px;
  height: 144px;
  margin: 0 30px;
  transform: translateY(-144px);
  box-shadow: 0px 5px 16px 0px rgba(0, 0, 0, 0.05);
  .record {
    border-left: 1px solid #f5f5f5;
  }
  .billing span {
    margin: 10px 0;
  }
}
.header_right {
  width: 140px;
  height: 60px;
  border-radius: 30px;
}
.timer_box {
    margin-top: 301px;
    height: 120px;
    .timer_item:nth-of-type(1){
        border-right: 1px solid #F0F0F0;
    }
    span{
        margin: 10px 0;
    }
}
.document_type{
    border-top: 1px solid #F0F0F0;
    border-bottom: 1px solid #F0F0F0;
    height: 80px;
    box-sizing: border-box;
    padding: 0 30px;
}
.item_list{
    height: calc(100% - 599px);
    box-sizing: border-box;
    overflow-y: scroll;
    width: 100%;
    position: relative;
    z-index: 2;
}
.item_info{
    margin: 0 30px;
    border-radius: 10px;
    margin-top: 20px;
    padding: 20px 30px;
    box-sizing: border-box;
    height: 138px;
    .item_l{
        height: 100%;
    }
}
</style>
