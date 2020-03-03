<template>
    <div class="container">
        <header-box title="选择物流">
            <div class="header_right dfc" slot="header-right" @click="submit">完成</div>
        </header-box>
        <div class="pdb30"><span class="add_btn dfc" @click="$router.push({path:'/order/addlogistics'})">新建物流</span></div>
        <div class="box pd30">
            <div class="item dfa mgb20" v-for="(item,index) in list" :key="index" @click="toggleSelect(index)">
                <img class="img40 mgr20" v-if="item.select" src="../../image/c_ic_circle_s@2x.png" alt="">
                <img class="img40 mgr20" v-else src="../../image/c_ic_circle_d@2x.png" alt="">
                <div class="flex df jct-around fdc">
                    <span class="fs28 b lh2">{{item.name}}</span>
                    <span class="lh2">联系方式：{{item.contactPhone}}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {findEnableDTransporter} from '@/js/api'
export default {
    data(){
        return{
            list:[],
        }
    },
    created(){
        this.getList()
    },
    methods:{
        async getList(){
            let res = await findEnableDTransporter()
            if(res.code==200){
                res.data.map(v=>{
                    v.select = false
                })
                this.list = res.data
                if(sessionStorage.getItem('logistics')){
                    let index = JSON.parse(sessionStorage.getItem('logistics')).index
                    this.list[index].select = true
                }
                
            }
        },
        toggleSelect(index){
            this.list.map((v,i)=>{
                if(i==index){
                    v.select = true
                }else{
                    v.select = false
                }
            })
        },
        submit(){
            let item = ''
            this.list.map((v,i)=>{
                if(v.select){
                    item = v
                    item.index = i
                }
            })
            sessionStorage.setItem('logistics',JSON.stringify(item))
            this.$router.back()
        },
    }
}
</script>
<style lang="less" scoped>
.container{
    min-height: 100vh;
    background: #F7F4F8;
    padding: 30px;
    box-sizing: border-box;
    overflow: hidden;
}
.header_right{
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    font-size: 28px;
    padding-right: 30px;
}
.add_btn{
    width: 160px;
    height: 60px;
    color: #fff;
    background: var(--theme);
    border-radius: 30px;
}
.box{
    background: #fff;
    border-radius: 20px;
}
</style>