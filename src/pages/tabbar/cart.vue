<template>
    <div class="container_box bg_F7F5F6">
        <div class="cart_top df jct-between cf">
            <span class="fs34 b">购物车</span>
            <span class="fs28" @click="showEdit=!showEdit">{{showEdit?'完成':'管理'}}</span>
        </div>
        <van-list class="item_list">
            <div class="item bg_FFF">
                <div class="dfa item_title" @click="$router.push({path:'/goods/storeIndex'})">
                    <div class="select dfc">
                        <img class="img40" src="../../image/e_ic_circle_d@2x.png" />
                    </div>
                    <div class="flex dfs">
                        <img class="img32 mgr6" src="../../image/e_ic_provider@2x.png" />
                        <span>供应商名称供应商</span>
                        <img class="img32" src="../../image/b_ic_back@2x.png" />
                    </div>
                </div>
                <div class="goods_item dfb" @click="$router.push({path:'/goods/goodsDetail'})">
                    <div class="select dfc">
                        <img class="img40" src="../../image/e_ic_circle_d@2x.png" />
                    </div>
                    <div class="flex dfb">
                        <img class="goods_img img160 mgr20" src="../../image/default.png" alt="" />
                        <div class="goods_info flex df jct-around fdc">
                            <div class="title to-line2">特大号落地紫砂陶瓷花盆红砂紫砂花瓷花盆瓷花</div>
                            <div class="spec"><span class="bg_F5F5F5 fs18">型号：十三装 ; 规格：A级</span></div>
                            <div class="dfb">
                                <div class="theme flex fs20">¥<span class="fs28">720.00</span>/盆</div>
                                <div class="num_box dfc">
                                    <span class="dfc">-</span>
                                    <input class="dfc" type="number" value="1" />
                                    <span class="dfc">+</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="item past_list bg_FFF">
                <div class="dfb item_title">
                    <span>失效的商品</span>
                    <span class="theme">清空</span>
                </div>
                <div class="goods_item dfb">
                    <div class="select dfc">
                        <span>失效</span>
                    </div>
                    <div class="flex dfb">
                        <img class="goods_img img160 mgr20" src="../../image/default.png" alt="" />
                        <div class="goods_info flex df jct-around fdc">
                            <div class="title to-line2">特大号落地紫砂陶瓷花盆红砂紫砂花瓷花盆瓷花</div>
                            <div class="spec"><span class="bg_F5F5F5 fs18">型号：十三装 ; 规格：A级</span></div>
                            <div class="dfb">
                                <div class="theme flex fs20">¥<span class="fs28">720.00</span>/盆</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </van-list>
        <div class="sum_box dfb">
            <div class="select dfc">
                <img class="img40" src="../../image/e_ic_circle_d@2x.png" alt="">
                全选
            </div>
            <div class="flex df jct-around fdc" v-show="!showEdit">
                <div>共<span class="theme">12</span>件</div>
                <div>合计：<span class="theme fs34">¥720.00</span><span class="fs20 c_999">(不含运费)</span></div>
            </div>
            <div class="sum_btn dfc">
                <span v-show="!showEdit">结算</span>
                <span v-show="showEdit" class="add_collect">移入收藏夹</span>
                <span v-show="showEdit">删除</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return{
            showEdit:false,
            
        }
    },
    
}
</script>
<style scoped lang="less">
.cart_top {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 252px;
  box-sizing: border-box;
  padding: 68px 30px 0;
  background: linear-gradient(
    -35deg,
    rgba(223, 1, 52, 1),
    rgba(240, 70, 70, 1)
  );
}
.item_list {
  position: absolute;
  top: 160px;
  left: 0;
  width: 100%;
  height: calc(100% - 258px);
  z-index: 2;
  box-sizing: border-box;
  overflow-y: scroll;
  .item {
    margin: 0 30px 20px;
    border-radius: 20px;
    padding-right: 28px;
    .item_title {
        height: 85px;
        .select {
            width: 90px;
            }
        }
    }
    .goods_item{
        padding-bottom: 40px;
        .select{
            width: 90px;
        }
        .goods_img{
            border-radius: 20px;
        }
        .goods_info{
            height: 100%;
            .title{
                line-height: 1.5;
            }
            .spec{
                margin: 20px 0;
                span{
                    padding: 8px 10px;
                    border-radius: 6px;
                }
            }
            .num_box{
                text-align: center;
                span{
                    width: 58px;
                    height: 35px;
                }
                input{
                    width: 58px;
                    height: 35px;
                    background: #F0F0F0;
                    text-align: center;
                }
            }
        }
    }
    .past_list{
        .item_title{
            padding-left: 90px;
        }
        .select{
            span{
                background: #CCCCCC;
                color: #fff;
                font-size: 20px;
                padding: 12px;
                border-radius: 24px;
            }
        }
    }
}
.sum_box{
    position: fixed;
    bottom: 98px;
    left: 0;
    height: 98px;
    width: 100vw;
    background: #fff;
    .select{
        margin-right: 24px;
        img{
            margin: 0 20px 0 28px;
        }
    }
    .sum_btn{
        height: 100%;
        color: #fff;
        span{
            padding: 36px 50px;
            background: var(--theme);
        }
        .add_collect{
            background: #FF9000;
        }
    }
  }
</style>