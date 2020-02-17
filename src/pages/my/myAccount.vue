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
            <div class="money">12,132.50</div>
            <div class="header_right dfc bg_FFF theme" @click="$router.push({path: '/my/withdraw'})">提现</div>
        </div>
        <div class="timer_box dfc bg_FFF">
            <div class="flex dfb fdc timer_item">
                <span class="fs30">开始时间</span>
                <span class="fs28">2018-20-50</span>
            </div>
            <div class="flex dfb fdc timer_item">
                <span class="fs30">结束时间</span>
                <span class="fs28">2018-20-50</span>
            </div>
        </div>
        <div class="document_type dfb bg_FFF">
            <span class="fs32">单据类型</span>
            <div class="dfb">
                <span class="fs28">全部</span>
                <img class="img32" src="../../image/f_ic_more@2x.png" />
            </div>
        </div>
        <van-list class="item_list ">
            <div class="item_info bg_FFF dfb" v-for="item in 9" :key="item">
                <div class="dfb fdc item_l">
                    <span class="fs32 b c_33292B    ">退货单</span>
                    <span class="fs22 c_666">2015-50-45</span>
                </div>
                <div class="fs32 b c_33292B">+100</div>
            </div>
        </van-list>
        <!-- <div class="billing_record bg_FFF c_33292B dfc">
            <div class="dfb fdc flex billing">
                <span class="tc fs32 b">我的账单</span>
                <span class="fs28">每月10号还款</span>
            </div>
            <span class="flex tc fs32 b record">账户流水</span>
        </div>-->
    </div>
</template>
<script>
export default {};
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
