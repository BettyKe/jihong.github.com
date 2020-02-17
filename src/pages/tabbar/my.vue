<template>
    <div class="container my-box bg_F7F5F6">
        <!-- 头部背景 S -->
        <div class="header dfb">
            <div class="user_info flex dfb" @click="toUserInfo">
                <img class="user_img" src="../../image/c_ic_my_d@2x.png" />
                <div class="flex info df jct-between ais-start fdc">
                    <div class="dfb">
                        <div class="user_name">紫小鲸</div>
                        <div class="user_integral dfc">
                            <img class="img32" src="../../image/f_ic_award@2x.png" />
                            <span class="fs24 theme">157066945</span>
                        </div>
                    </div>
                    <div class="df ais ">
                        <img class="icon_phone" src="../../image/f_ic_phone@2x.png" />
                        <span class="phone">157066945</span>
                    </div>
                </div>
            </div>
            <img class="rigth" src="../../image/f_ic_more_right@2x.png" />
        </div>
        <!-- 头部背景 H -->
        <!-- 订单 S -->
        <div class="order_box bg_FFF">
            <div class="order_top dfb">
                <div class="c_33292B b">我的订单</div>
                <div class="c_999 df ais">查看全部订单<img class="img24" src="../../image/b_ic_back@2x.png" /></div>
            </div>
            <div class="order_type dfa">
                <div class="dfc fdc">
                    <img class="img50" src="../../image/f_ic_audit_1@2x.png" />
                    <span class="c_33292B fs22">未审核</span>
                </div>
                <div class="dfc fdc">
                    <img class="img50" src="../../image/f_ic_audit_2@2x.png" />
                    <span class="c_33292B fs22">已审核</span>
                </div>
                <div class="dfc fdc">
                    <img class="img50" src="../../image/f_ic_audit_3@2x.png" />
                    <span class="c_33292B fs22">订单汇总</span>
                </div>
                <div class="dfc fdc">
                    <img class="img50" src="../../image/f_ic_audit_4@2x.png" />
                    <span class="c_33292B fs22">发货单</span>
                </div>
            </div>
        </div>
        <!-- 订单 E -->
        <!-- 功能 S -->
        <div class="features_box bg_FFF">
            <!-- <div class="features_item dfb bg_FFF">
                <div class="flex df ais">
                    <img class="img44" src="../../image/f_ic_soi_1@2x.png"  />
                    <span class="c_33292B fs28">我的账单</span>
                </div>
                <img class="img24" src="../../image/b_ic_back@2x.png" />
            </div> -->
            <div class="features_item dfb bg_FFF">
                <div class="flex df ais">
                    <img class="img44" src="../../image/f_ic_soi_2@2x.png" />
                    <span class="c_33292B fs28">我的账户</span>
                </div>
                <img class="img24" src="../../image/b_ic_back@2x.png" />
            </div>
            <div class="features_item dfb bg_FFF">
                <div class="flex df ais">
                    <img class="img44" src="../../image/f_ic_soi_3@2x.png" />
                    <span class="c_33292B fs28">收货地址</span>
                </div>
                <img class="img24" src="../../image/b_ic_back@2x.png" />
            </div>
            <div class="features_item dfb bg_FFF">
                <div class="flex df ais">
                    <img class="img44" src="../../image/f_ic_soi_5@2x.png" />
                    <span class="c_33292B fs28">我的收藏</span>
                </div>
                <img class="img24" src="../../image/b_ic_back@2x.png" />
            </div>
            <div class="features_item dfb" @click="$router.push({path:'/my/setting'})">
                <div class="flex df ais">
                    <img class="img44" src="../../image/f_ic_soi_4@2x.png" />
                    <span class="c_33292B fs28">设置</span>
                </div>
                <img class="img24" src="../../image/b_ic_back@2x.png" />
            </div>
        </div>
        <!-- 功能 E -->
    </div>
</template>
<script>
    export default {
        data() {
            return {

            }
        },
        methods: {
            toUserInfo () {
                this.$router.push({
                    path: '/my/information'
                })
            }
        }
    }
</script>
<style scoped lang="less">
.my-box{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    padding-bottom: 98px;
    box-sizing: border-box;
    overflow: scroll;
}
.header{
    height: 335px;
    background-color: var(--theme);
    width: 100vw;
    padding: 0 30px;
    box-sizing: border-box;
    .user_img{
        width: 150px;
        height: 150px;
        border-radius: 50%;
    }
    .info{
        box-sizing: border-box;
        height: 150px;
        box-sizing: border-box;
        padding: 24px 0 24px 30px;
    }
    .icon_phone{
        width: 32px;
        height: 32px;
    }
    .phone{
        color: #fff;
        font-size: 24px;
    }
    .user_name{
        color: #fff;
        font-size: 38px;
        font-weight: bold;
    }
    .user_integral{
        height: 38px;
        padding: 0 4px;
        border-radius: 19px;
        background-color: #fff;
        color: var(--theme);
        font-size: 24px;
        margin-left: 26px;
    }
    .rigth{
        width: 24px;
        height: 24px;
    }
}
.order_box{
    height: 238px;
    margin: 0 30px;
    border-radius: 14px;
    transform: translateY(-86px);
    .order_top{
        width: 100%;
        box-sizing: border-box;
        padding: 0 30px;
        height: 86px;
        border-bottom: 1px solid #F5F5F5;
    }
    .order_type{
        height: 150px;
        span{
            margin-top: 14px;
        }
    }
}
.features_box{
    margin: 0 30px;
    box-sizing: border-box;
    border-radius: 14px;
    transform: translateY(-66px);
    .features_item{
        margin: 0 24px;
        height: 86px;
        box-sizing: border-box;
        border-bottom: 1px solid #F2F2F2;
        span{
            margin-left: 12px;
        }
    }
}
</style>