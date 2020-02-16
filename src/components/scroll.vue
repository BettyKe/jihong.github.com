<template>
    <div ref="wrapper">
        <slot></slot>
    </div>
</template>

<script>
    import BScroll from "better-scroll"
    export default {
        props:{
            data:{
                type:Array,
                default:function(){
                    return []
                }
            },
            click:{
                type:Boolean,
                default:true
            },
            listenScroll:{
                type:Boolean,
                default:false
            },
            probeType:{
                type:Number,
                default:2
            }
        },
        mounted(){
            this._initScroll();
        },
        methods:{
            _initScroll(){
                if(!this.$refs.wrapper){
                    return;
                }
                this.scroll = new BScroll(this.$refs.wrapper,{
                    click:this.click,
                    probeType:this.probeType
                });
                if(this.listenScroll){
                    this.scroll.on('scroll',(pos)=>{
                        this.$emit('scroll',pos)
                    })
                }
            },
            scrollTo(){
                this.scroll&&this.scroll.scrollTo.apply(this.scroll,arguments)
            },
            scrollToElement(){
                this.scroll&&this.scroll.scrollToElement.apply(this.scroll,arguments)
            }
        },
        watch:{
            data(){
                //如果父组件传入的data属性对应的值发生变回，会调用这个函数
                this.scroll&&this.scroll.refresh();
            }
        }
    }
</script>

<style scoped>

</style>