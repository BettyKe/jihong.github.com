<template>
  <div class="container">
    <header-box title="我的订单"></header-box>
    <div class="tab_box dfa">
      <span :class="['tc flex',tab==1?'active':'']" @click="toggleTab(1)">全部</span>
      <span :class="['tc flex',tab==2?'active':'']" @click="toggleTab(2)">未审核</span>
      <span :class="['tc flex',tab==3?'active':'']" @click="toggleTab(3)">已审核</span>
    </div>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="toLoad">
      <!-- 订单 -->
      <div class="box mg30" v-for="(item,index) in list" :key="index">
        <div
          class="order_title dfb"
          @click="$router.push({path:`/order/orderDetail?id=${item.id}&type=${item.status}`})"
        >
          <span>订单号：{{item.id}}</span>
          <span class="theme">{{item.orderStatus}}</span>
        </div>
        <!-- 店铺 -->
        <div
          class="store_item pdt30"
          v-for="(items,indexs) in item.orderProviderDTOList"
          :key="indexs"
        >
          <div
            class="store_name dfs"
            @click="$router.push({path:`/order/orderDetail?id=${item.id}&type=${item.status}`})"
          >
            <img class="img28 mgr6" src="../../image/e_ic_provider@2x.png" alt="">
            <span>{{items.providerName}}</span>
            <img class="img28 mgl10" src="../../image/f_ic_more@2x.png" alt="">
          </div>
          <!-- 商品 -->
          <div
            class="goods_item"
            v-for="(itm,idx) in items.itemDTOList"
            :key="idx"
            @click="$router.push({path:`/order/orderDetail?id=${item.id}&type=${item.status}`})"
          >
            <div class="dfb">
              <img
                class="img140 br20 mgr20"
                :src="ImageTool.initImage(itm.productDTO.jpgUrl)[0]"
                alt=""
              >
              <div class="flex">
                <div class="to-line2 lh15 fs28 mgb20">{{itm.productDTO.productTitle}}</div>
                <div class="dfb">
                  <div class="theme">
                    ¥
                    <span class="fs30">{{itm.productDTO.totalAmount}}</span>/盆
                  </div>
                  <div class="c_999">x{{itm.productDTO.unitQuantity}}</div>
                </div>
              </div>
            </div>
            <div class="service" v-if="itm.childrenDTOList.length">
              <div class="title dfs">
                <img class="img36" src="../../image/c_ic_appreciation@2x.png" alt="">
                <span class="theme">增值服务(可多选）</span>
              </div>
              <div class="item dfb" v-for="(its,ids) in itm.childrenDTOList" :key="ids">
                <div>
                  <span class="mgr20">{{its.plantName}}</span>
                  <span>¥10.00</span>
                </div>
                <div class="num_box">x{{its.unitQuantity}}</div>
              </div>
            </div>
          </div>
          <div class="tr lh2">
            共
            <span class="theme">{{item.itemQuantity}}</span>
            件 小计：¥{{item.payAmount}}
          </div>
          <div class="tr lh2">
            实付款：
            <span class="theme">¥{{item.payAmount}}</span>
          </div>
        </div>
        <div class="btn_box df ais jct-end">
          <span
            class="cf dfc bg_theme"
            @click="$router.push({path:`/order/pay?orderId=${item.id}`})"
          >支付</span>
          <span class="theme dfc bg_FFF">联系客服</span>
        </div>
      </div>
    </van-list>
  </div>
</template>
<script>
import { findMyOrderForDistributor } from "@/js/api";
export default {
  data() {
    return {
      tab: 1,
      list: [],
      pageNumber: 1,
      loading: false,
      finished: false
    };
  },
  created() {
    let type = this.$route.query.type;
    if (type) {
      this.tab = type;
    }
    this.getList();
  },
  methods: {
    toggleTab(index) {
      this.tab = index;
      this.finished = false;
      this.pageNumber = 1;
      this.getList();
    },
    async getList(page = 1) {
      let status = "";
      if (this.tab == 1) {
        status = "全部";
      } else if (this.tab == 2) {
        status = "未审核";
      } else if (this.tab == 3) {
        status = "已审核";
      }
      let res = await findMyOrderForDistributor({
        status,
        pageable: {
          page: page
        }
      });
      if (res.code == 200) {
        this.loading = false;
        this.pageNumber = page;
        if (res.data.length) {
          res.data.map(v => {
            if (v.orderStatus == "未审核") {
              v.status = 1;
            } else if (v.orderStatus == "已审核") {
              v.status = 2;
            } else {
              v.status = 0;
            }
          });
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
.container {
  min-height: 100vh;
  background: #f7f4f8;
  box-sizing: border-box;
  padding-bottom: 30px;
  padding-top: 98px;
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
.order_title {
  height: 88px;
  border-bottom: 1px solid #f0f0f0;
}
.box {
  background: #fff;
  border-radius: 20px;
  padding: 0 30px 30px;
  margin-bottom: 30px;
}
.goods_item {
  background: #fcf9fc;
  padding: 20px;
  border-radius: 20px;
  margin: 20px 0;
}
.service {
  .title {
    padding: 20px 0 10px;
  }
  .item {
    padding: 20px 0;
  }
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
</style>