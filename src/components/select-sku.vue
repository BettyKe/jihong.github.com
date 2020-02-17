<template>
    <van-popup v-model="showSpec" position="bottom" round class="van-popup">
        <div class="box">
            <img
                @click="toggleShow(false)"
                class="close_btn"
                src="../image/c_ic_close@2x.png"
                alt=""
            >
            <div class="spec_box">
                <div class="goods_info df">
                    <img class="goods_pic" src="../image/default.png" alt="">
                    <div class="flex info_right">
                        <div class="theme">￥
                            <span class="fs36 b">240.00</span>/箱
                        </div>
                        <div class="df ais-start jct-between c_999">
                            <div class="df fdc">
                                <span>￥12.0/盆</span>
                                <span>一箱20盆</span>
                            </div>
                            <span>已选：1箱</span>
                        </div>
                    </div>
                </div>
                <div class="num_row dfb">
                    <span>购买数量（箱）</span>
                    <div class="num_box dfc">
                        <img class="img32" src="../image/ic_add_1@2x.png" alt="">
                        <input type="number" value="1">
                        <img class="img32" src="../image/ic_add@2x.png" alt="">
                    </div>
                </div>
                <div class="service_box">
                    <div class="title dfs">
                        <img class="img36" src="../image/c_ic_appreciation@2x.png" alt="">
                        <span class="theme fs28">增值服务</span>
                        <span class="line"></span>
                        <span class="fs28">可多选</span>
                    </div>
                    <div class="service_list">
                        <div class="item dfb" v-for="item in 5" :key="item">
                            <div class="dfa">
                                <img class="img32" src="../image/c_ic_circle_d@2x.png" alt="">
                                <span class="fs28 name">立杆</span>
                                <span class="fs28">¥10.00/根</span>
                            </div>
                            <div class="dfc">
                                <img class="img32" src="../image/ic_add_1@2x.png" alt="">
                                <input type="number" value="0">
                                <img class="img32" src="../image/ic_add@2x.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="add dfc" @click="toggleShow(false)">加入购物车</div>
            </div>
        </div>
    </van-popup>
</template>
<script>
export default {
  props: {
    showSpec: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    toggleShow(flag) {
      this.$emit("toggleShow", flag);
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

