<template>
    <div class="container">
        <header-box title="订单汇总">
            <div class="header_right dfc" slot="header-right">
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
                            <div class="tr mgt20" v-if="tab!=1">实际发货数量：<span class="theme">{{item.productDTO.quantity}}</span></div>
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
    </div>
</template>
<script>
import { findItemForDistributor,confirmReceive } from "@/js/api";
export default {
  data() {
    return {
      tab: 1,
      list: [],
      pageNumber: 1,
      loading: false,
      finished: false,
      allSelect: false,
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
      let status = "";
      if (this.tab == 1) {
        status = "备货中";
      } else if (this.tab == 2) {
        status = "待收货";
      } else if (this.tab == 3) {
        status = "已完成";
      }
      let res = await findItemForDistributor({
        status,
        pageable: {
          page: page
        }
      });
      if (res.code == 200) {
        this.loading = false;
        this.pageNumber = page;
        if(res.data.length){
            res.data.map(v=>{
                v.select = false
            })
        }
        if (page == 1) {
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
    }
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
</style>