<template>
    <div class="container">
        <header-box title="订单汇总">
            <div class="header_right dfc" slot="header-right" @click="showFilter=true">
                筛选
                <img class="img32" src="../../image/c_ic_screen@2x.png" alt="">
            </div>
        </header-box>
        <div class="tab_box dfa">
            <span :class="['tc flex',tab==1?'active':'']" @click="toggleTab(1)">备货中</span>
            <span :class="['tc flex',tab==2?'active':'']" @click="toggleTab(2)">待收货</span>
            <span :class="['tc flex',tab==3?'active':'']" @click="toggleTab(3)">已完成</span>
        </div>
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="toLoad">
            <!-- 订单 -->
            <div class="box bg_FFF pd30 br20 dfb" v-for="(item,index) in list" :key="index">
                <img
                    class="img40 mgr20"
                    v-if="tab==2 && item.select"
                    src="../../image/e_ic_circle_2@2x.png"
                    alt=""
                    @click="selectItem(index)"
                >
                <img class="img40 mgr20" v-if="tab==2 && !item.select" @click="selectItem(index)" src="../../image/e_ic_circle_d@2x.png" alt="">
                <div class="flex">
                    <div
                        class="order_title dfb"
                        @click="$router.push({path:`/order/orderDetail?id=${item.id}&type=${item.status}`})"
                    >
                        <span>订单号：{{item.id}}</span>
                        <span class="theme">{{item.orderStatus}}</span>
                    </div>
                    <!-- 商品 -->
                    <div class="goods_item dfb">
                        <img
                            class="img140 br20 mgr20"
                            :src="ImageTool.initImage(item.productDTO.jpgUrl)[0]"
                            alt=""
                        >
                        <div class="flex">
                            <div class="to-line2 lh15 fs28 mgb20">{{item.productDTO.productTitle}}</div>
                            <div class="dfb">
                                <div class="theme flex">
                                    ¥
                                    <span class="fs30">{{item.productDTO.totalAmount}}</span>/盆
                                </div>
                                <div class="c_999">x{{item.productDTO.quantity}}</div>
                            </div>
                            <div class="tr mgt20" v-if="tab!=1">实际发货数量：<span class="theme">{{item.productDTO.actualDeliveryQuantity}}</span></div>
                        </div>
                    </div>
                    <div class="btn_box df ais jct-end" v-show="tab==2">
                        <span class="cf dfc bg_theme"  @click="confirmItem(item.productDTO.itemId)">确认收货</span>
                    </div>
                </div>
            </div>
        </van-list>
        <div class="fix_bottom dfb" v-show="tab==2 && list.length">
            <div class="select dfc" @click="selectAll">
                <img class="img40" v-if="allSelect" src="../../image/e_ic_circle_2@2x.png" alt="">
                <img class="img40" v-else src="../../image/e_ic_circle_d@2x.png" alt="">
                全选
            </div>
            <div class="sum_btn dfc">
                <span @click="confirm">确认收货</span>
            </div>
        </div>
        <!-- 筛选 -->
        <van-popup v-model="showFilter" position="right">
                <div class="dialog_content bg_FFF">
                    <div class="sku_box">
                        <div class="dialog_title dfb">
                            <span class="fs28 c_33292B b">支付类型</span>
                        </div>
                        <div class="sku_arr df ct-start fw">
                            <span :class="['sku_item bg_F5F5F5 fs24 dfc fdc', type==0 ? 'active cf' : 'c_33292B']" @click="type=0">全部</span>
                            <span :class="['sku_item bg_F5F5F5 fs24 dfc fdc', type==1 ? 'active cf' : 'c_33292B']" @click="type=1">已支付</span>
                            <span :class="['sku_item bg_F5F5F5 fs24 dfc fdc', type==2 ? 'active cf' : 'c_33292B']" @click="type=2">已授信</span>
                        </div>
                    </div>
                    <div class="price_box">
                        <div class="price_title fs28 c_33292B b">下单时间</div>
                        <div @click="showDate=true">
                        <div class="time_box dfs">
                            <span>开始时间</span>
                            <div class="input_box dfc flex bg_F5F5F5">
                              <input v-model="startDay" type="text" class=" flex" />
                              <img class="img26 mgr10" src="../../image/c_ic_more_next@2x.png" alt="">
                            </div>
                        </div>
                        <div class="time_box dfs mgt20">
                            <span>结束时间</span>
                            <div class="input_box dfc flex bg_F5F5F5">
                              <input v-model="endDay" type="text" class=" flex" />
                              <img class="img26 mgr10" src="../../image/c_ic_more_next@2x.png" alt="">
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="footer_box dfb">
                        <div class="fs28 c_33292B flex dfc fdc" @click="reset">重置</div>
                        <div class="fs28 cf flex dfc fdc" @click="submit">完成</div>
                    </div>
                </div>
        </van-popup>
        <van-calendar v-model="showDate" type="range" :show-confirm="false" @confirm="confirmDate" color="#DF0134" 
        :min-date="minDate" :max-date="maxDate" :default-date="[startDate,endDate]" />
    </div>
</template>
<script>
import dateFormat from 'dateformat';
import { findItemForDistributorChoose,confirmReceive } from "@/js/api";
export default {
  data() {
    return {
      tab: 1,
      list: [],
      pageNumber: 1,
      loading: false,
      finished: false,
      allSelect: false,

      showFilter:false,
      startDay:'',
      endDay:'',
      type:0,
      showDate:false,
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()),
      startDate:'',
      endDate:'',
      filterObj:{
        payStatus:'全部',
        startAt:'',
        endAt:'',
      },
    };
  },
  created() {
    let type = this.$route.query.type;
    if (type) {
      this.tab = type;
    }
    this.getList();
  },
  watch:{
    list(){
        let flag = true
        this.list.map(v=>{
            if(v.select){
                
            }else{
                flag = false
            }
        })
        this.allSelect = flag
    }
  },
  methods: {
    toggleTab(index) {
      this.tab = index;
      this.finished = false;
      this.pageNumber = 1;
      this.getList();
    },
    selectItem(index){
        let list = Object.assign([],this.list)
        list[index].select = !list[index].select
        this.list = list
    },
    selectAll() {
        this.allSelect = !this.allSelect
        let list = Object.assign([],this.list)
        list.map(v=>{
            v.select = this.allSelect
        })
        this.list = list
    },
    async confirmItem(id) {
        let res = await confirmReceive({
            itemIdList:[id]
        })
        if(res.code==200){
            this.getList();
            this.$toast('确认收货成功')
        }
    },
    async confirm() {
        let arr = []
        this.list.map(v=>{
            arr.push(v.productDTO.itemId)
        })
        let res = await confirmReceive({
            itemIdList:arr
        })
        if(res.code==200){
            this.$toast('确认收货成功')
            this.getList();
        }
    },
    async getList(page = 1) {
      let status = "",payStatus = "";
      if (this.tab == 1) {
        status = "备货中";
      } else if (this.tab == 2) {
        status = "待收货";
      } else if (this.tab == 3) {
        status = "已完成";
      }
      let obj = {
        status,
        pageable: {
          page: page
        }
      }
      obj = Object.assign(obj,this.filterObj)
      let res = await findItemForDistributorChoose(obj);
      if (res.code == 200) {
        this.loading = false;
        this.pageNumber = page;
        if(res.data.length){
            res.data.map(v=>{
                v.select = false
            })
        }
        if (page == 1) {
          this.finished = false;
          this.list = res.data;
        } else {
          this.list.push(...res.data);
        }
        if (!res.data.length) {
          this.finished = true;
        }
      }
    },
    toLoad() {
      let page = this.pageNumber + 1;
      this.getList(page);
    },

    confirmDate(date){
        const [start, end] = date;
        this.showDate = false;
        this.startDay = this.formatDate(start);
        this.endDay = this.formatDate(end)
        this.startDate = this.formatDate(start,1);
        this.endDate = this.formatDate(end,1);
        console.log(this.date)
        this.getList()
    },
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

    reset(){
      this.type = ''
      this.startDay = ''
      this.endDay = ''
      this.startDate = ''
      this.endDate = ''
    },
    submit(){
      let payStatus = ''
      if (this.type == 0) {
        payStatus = "全部";
      } else if (this.type == 1) {
        payStatus = "已支付";
      } else if (this.type == 2) {
        payStatus = "已授信";
      }
      let time = dateFormat(new Date(), " HH:MM:ss")
      this.filterObj = {
        payStatus,
        startAt:this.startDay?(this.startDay+' 00:00:00'):'',
        endAt:this.endDay?(this.endDay+time):'',
      }
      this.getList();
      this.showFilter = false
    },
  }
};
</script>

<style lang="less" scoped>
.header_right {
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  font-size: 28px;
  padding-right: 30px;
}
.container {
  min-height: 100vh;
  background: #f7f4f8;
  box-sizing: border-box;
  padding-top: 98px;
  padding-bottom: 0px;
}
.goods_item {
  background: #fcf9fc;
  padding: 20px;
  border-radius: 20px;
  margin: 20px 0;
}
.tab_box {
  height: 98px;
  font-size: 28px;
  position: fixed;
  top: 98px;
  left: 0;
  width: 100vw;
  z-index: 10;
  background: #f7f4f8;
  span {
    position: relative;
  }
  span::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 100px;
    height: 4px;
    background: transparent;
  }
  span.active::after {
    background: var(--theme);
  }
  span.active {
    color: var(--theme);
  }
}
.box {
  margin: 0 30px 20px;
}
.btn_box {
  margin-top: 30px;
  span {
    width: 150px;
    height: 60px;
    border-radius: 30px;
    margin-left: 30px;
    border: 2px solid var(--theme);
  }
}
.fix_bottom {
  position: fixed;
  bottom: 0;
  left: 0;
  height: 98px;
  width: 100vw;
  background: #fff;
  z-index: 10;
  .select {
    margin-right: 24px;
    img {
      margin: 0 20px 0 28px;
    }
  }
  .sum_btn {
    height: 100%;
    color: #fff;
    span {
      padding: 36px 50px;
      background: var(--theme);
    }
    .add_collect {
      background: #ff9000;
    }
  }
}
    .dialog_content{
        width: 614px;
        height: 100vh;
        overflow: scroll;
        box-sizing: border-box;
        z-index: 90;
    }
    .dialog_title{
        padding: 0 30px;
        margin: 34px 0;
    }
    .sku_arr{
        padding: 0 25px 0 31px;
    }
    .h180{
        height: 180px;
    }
    .sku_item{
        display: inline-flex;
        width: 170px;
        height: 60px;
        border-radius: 30px;
        margin-bottom: 30px;
    }
    .sku_item.active{
        background-color: #DF0134;
    }
    .sku_item:nth-of-type(3n - 1){
        margin: 0 24px 30px;
    }
    .price_box{
        margin-top: 10px;
        width: 100%;
        box-sizing: border-box;
        padding: 0 26px 0 29px;
    }
    .price_title{
        margin-bottom: 32px;
    }
    .time_box{
      font-size: 28px;
      span{
        margin-right: 20px;
      }
      .input_box{
        height: 60px;
        border-radius: 30px;
      }
        input{
            // width: 240px;
            
            text-align: center;
            line-height: 60px;
        }
    }
    .footer_box{
        width: 100%;
        height: 88px;
        position: absolute;
        bottom: 0;
        left: 0;
        div{
            height: 100%;
        }
        div:nth-of-type(1){
            box-shadow:1px -3px 14px 0px rgba(0, 0, 0, 0.14);
        }
        div:nth-of-type(2){
            background-color: #DF0134;
        }
    }
</style>