<template>
    <div class="container_box">
        <header-box bgc="transparent" fontColor="white" title="我的账单"></header-box>
        <div class="top dfc fdc cf">
            <div class="dfc"><span class="dot bg_FFF"></span><span class="dot bg_FFF"></span><span class="dot bg_FFF"></span><p class="fs28">欠款（元)</p><span class="dot bg_FFF"></span><span class="dot bg_FFF"></span><span class="dot bg_FFF"></span></div>
            <div class="money">12,132.50</div>
        </div>
        <div class="billing_record bg_FFF fs32 b c_33292B dfc">
            <span class="flex tc">我的账单</span><span class="flex tc">还款记录</span>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped lang="less">
.top{
    width: 100%;
    height: 399px;
    background: url('../../image/f_setting_d@2x.png') no-repeat center;
    transform: translateY(-98px);
    background-size: 100% 100%;
    box-sizing: border-box;
    .dot{
        width: 6px;
        height: 6px;
        border-radius: 50%;
        margin: 0 4px;
    }
    p{
        margin: 0 20px;
    }
    .money{
        font-size: 90px;
        margin-top: 50px;
    }
}
.billing_record{
    border-radius: 10px;
    height: 144px;
    margin: 0 30px;
    transform: translateY(-144px);
    box-shadow:0px 5px 16px 0px rgba(0, 0, 0, 0.05);
    span{
        height: 66px;
        line-height: 66px;
    }
    span:nth-of-type(1){
        border-right: 1px solid #F5F5F5;
    }
}
</style>
