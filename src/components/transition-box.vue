<template>
    <transition :name="transitionName">   
        <router-view></router-view>
    </transition>
</template>
<script>
export default {
    data() {
        return {
            transitionName: ''
        }
    },
    watch: {//使用watch 监听$router的变化
    $route(to, from) {
        console.log(to.matched.length, from.matched.length)
      //如果to索引大于from索引,判断为前进状态,反之则为后退状态
      if(to.matched.length > from.matched.length){
        //设置动画名称
        this.transitionName = 'slide-left';
        setTimeout(()=>{
            this.transitionName = 'slide-right';
        }, 500)
      }else{
        this.transitionName = 'slide-right';
        setTimeout(()=>{
            this.transitionName = 'slide-left';
        }, 500)
      }
    }
  }
}
</script>
<style scoped lang="less">
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 300ms;
  position: absolute;
}
.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>

