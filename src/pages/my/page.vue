<template>
    <div class="container pdt20 bg_FFF">
        <header-box :title="info.title"></header-box>
        <div class="content" v-html="info.content"></div>
    </div>
</template>
<script>
import {getPage} from '@/js/api'
export default {
    data(){
        return{
            info:''
        }
    },
    created(){
        let id = this.$route.query.id
        this.getInfo(id)
    },
    methods:{
        async getInfo(id){
            let res = await getPage({id})
            if(res.code==200){
                this.info = res.data
            }
        }
    }
}
</script>
<style lang="less" scoped>
.container{
    width: 100vw;
    height: calc(100vh - 98px);
    font-size: 28px;
    line-height: 2;
    .content{
        padding: 30px;
    }
}
</style>