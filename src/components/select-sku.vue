<template>
    <van-popup v-model="showSpec" position="bottom" round class="van-popup" :close-on-click-overlay="true" :close-on-popstate="true" @click-overlay="toggleShow(false)">
        <div class="box">
            <img
                @click="toggleShow(false)"
                class="close_btn"
                src="../image/c_ic_close@2x.png"
                alt=""
            >
            <div class="spec_box">
                <div class="goods_info df">
                    <img class="goods_pic" :src="ImageTool.initImage(product.covers)[0]" alt="">
                    <div class="flex info_right">
                        <div class="theme">￥
                            <span class="fs36 b">{{product.totalAmount}}</span>/箱
                        </div>
                        <div class="df ais-start jct-between c_999">
                            <div class="df fdc">
                                <span>￥{{product.unitPrice}}/盆</span>
                                <span>一箱{{product.unitQuantity}}盆</span>
                            </div>
                            <span>已选：{{productNum}}箱</span>
                        </div>
                    </div>
                </div>
                <div class="num_row dfb">
                    <span>购买数量（箱）</span>
                    <div class="num_box dfc">
                        <img class="img32" src="../image/ic_add_1@2x.png" alt="" @click="minusNum">
                        <input type="number" v-model="productNum">
                        <img class="img32" src="../image/ic_add@2x.png" alt="" @click="addNum">
                    </div>
                </div>
                <div class="service_box" v-if="serviceList.length">
                    <div class="title dfs">
                        <img class="img36" src="../image/c_ic_appreciation@2x.png" alt="">
                        <span class="theme fs28">增值服务</span>
                        <span class="line"></span>
                        <span class="fs28">可多选</span>
                    </div>
                    <div class="service_list">
                        <div class="item dfb" v-for="(item,index) in serviceList" :key="index" :index="index">
                            <div class="dfa" @click="item.select=!item.select">
                                <img class="img32" v-if="!item.select" src="../image/c_ic_circle_d@2x.png" alt="">
                                <img class="img32" v-else src="../image/c_ic_circle_s@2x.png" alt="">
                                <span class="fs28 name">{{item.plantName}}</span>
                                <span class="fs28">¥{{item.totalAmount}}/{{item.unitName}}</span>
                            </div>
                            <div class="dfc">
                                <img class="img32" src="../image/ic_add_1@2x.png" alt="" @click="minusService(index)">
                                <input type="number" v-model="item.num" max-length="6" />
                                <img class="img32" src="../image/ic_add@2x.png" alt="" @click="addService(index)">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="add dfc" @click="addCart">加入购物车</div>
            </div>
        </div>
    </van-popup>
</template>
<script>
import {addProduct,findAllValueAddProductForAPP} from '@/js/api'
export default {
  props: {
    showSpec: {
      type: Boolean,
      default: false
    },
    product:{
      type:Object,
      default: function () {
        return {}
      }
    },
  },
  data(){
    return{
      serviceList:[],
      productNum:1,
    }
  },
  watch: {
    product() {
      this.allNum = 1
    }
  },
  created(){
    this.getService()
    console.log(this.product)
  },
  methods: {
    async getService(){
      let ret = await findAllValueAddProductForAPP()
      if(ret.code==200 && ret.data.length){
          ret.data.map(v=>{
              v.select = false
              v.num = 1
          })
          this.serviceList = ret.data
      }
    },
    toggleShow(flag) {
      this.$emit("toggleShow", flag);
    },
    minusNum(){
      if(this.productNum<=1){
        return
      }
      this.productNum--
    },
    addNum(){
      this.productNum++
    },
    minusService(index){
      if(this.serviceList[index].num<=1){
        return
      }
      this.serviceList[index].num--
    },
    addService(index){
      this.serviceList[index].num++
    },
    async addCart(){
      let obj = {productDTOList:[{
        productId:this.product.id,
        productNum:this.productNum,
      }]}
      this.serviceList.map(v=>{
        if(v.select){
          obj.productDTOList.push({
            productId:v.productId,
            productNum:v.num,
            parentId:this.product.id
          })
        }
      })
      console.log(obj)
      let res = await addProduct(obj)
      if(res.code==200){
        this.$toast('加入购物车成功')
        this.toggleShow(false)
      }
    }
  }
};
</script>
<style lang="less" scoped>
.van-popup {
  overflow: initial;
}
.box {
  position: relative;
  .close_btn {
    position: absolute;
    top: -104px;
    right: 0;
    width: 104px;
    height: 104px;
    z-index: 10;
  }
}
.spec_box {
  background: #fff;
  border-radius: 30px 30px 0px 0px;
  padding: 30px 30px 130px;
  width: 100vw;
  box-sizing: border-box;
  input {
    width: 64px;
    text-align: center;
    background: #f5f5f5;
  }
  .goods_info {
    .goods_pic {
      width: 220px;
      height: 220px;
      border-radius: 16px;
      margin-right: 34px;
    }
    .info_right {
      span {
        line-height: 2;
      }
    }
  }
  .num_row {
    border-bottom: 1px solid #f5f5f5;
    padding: 30px 0;
  }
  .service_box {
    .title {
      margin: 30px 0;
      .line {
        width: 2px;
        height: 27px;
        background: #999;
        margin: 0 20px;
      }
    }
    .service_list {
      max-height: 350px;
      overflow-y: scroll;
      .item {
        margin-bottom: 40px;
        .name {
          margin: 0 56px 0 18px;
        }
      }
    }
  }
  .add {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100vw;
    height: 98px;
    background: var(--theme);
    color: #fff;
  }
}
</style>

