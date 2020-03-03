export default {
    verify(type, val) {
      let rule;
      if (type == 'tel') {
        rule = /^1[3456789]\d{9}$/
      } else if (type == 'idcard') {
        rule = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/
      }
      if (!rule.test(val)) {
        wx.showToast({
          title: '输入错误，请重新输入',
          icon: 'none'
        })
        return false;
      } else {
        console.log('正则成功')
        return true;
      }
    },
    /**
     * 验证必填元素
     */
    required(value) {
      if (typeof value === 'number') {
        value = value.toString()
      } else if (typeof value === 'boolean') {
        return !0
      }

      return value && value.length > 0
    },
    /**
     * 判断输入值是否为空
     */
    optional(value) {
      return !this.required(value)
    },
    /**
     * 验证手机格式
     */
    verifyTel(value) {
      return (value ? true : false) && /^1[3456789]\d{9}$/.test(value)
    },
    /**
     * 验证电子邮箱格式
     */
    verifyEmail(value) {
      return (value ? true : false) && /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value)
    },
    /**
     * 验证密码格式
     */
    verifyPwd(value) {
      return (value ? true : false) && /^[A-Za-z0-9_]+$/.test(value)
    },
    /** 倒计时（数组任务）
     * intervalList 时间戳数组
     * callBack返回倒计时时分秒等信息
     * countDownTime 倒计时执行时间
     */
    countDownByTimeList(intervalList, callBack, countDownTime) {
      countDownTime = countDownTime || 1000;
      intervalList = intervalList || [];
      let interval = setInterval(function () {
        
        for (let i in intervalList) {
          let item = intervalList[i];
          item.timeRes = '';
          // 秒数
          let second = item.times;

          // 天数位
          let day = Math.floor(second / 3600 / 24);
          let dayStr = day.toString();
          if (dayStr.length == 1) dayStr = '0' + dayStr;
          // 小时位
          let hr = Math.floor((second - day * 3600 * 24) / 3600);
          let hrStr = hr.toString();
          if (hrStr.length == 1) hrStr = '0' + hrStr;
          // 分钟位
          let min = Math.floor((second - day * 3600 * 24 - hr * 3600) / 60);
          let minStr = min.toString();
          if (minStr.length == 1) minStr = '0' + minStr;
          // 秒位
          let sec = Math.round(second - day * 3600 * 24 - hr * 3600 - min * 60);
          let secStr = sec.toString();
          if (secStr.length == 1) secStr = '0' + secStr;

          if(item.times>0){
            item.times--
          }else{
            item.times=0
          }
          item.timeRes = `${dayStr}:${hrStr}:${minStr}:${secStr}`;
        };
        let count = 0;
        for(let i in intervalList){
          count += intervalList[i].times
        }
        if (callBack) { //倒计时中返回倒计时时分秒
          callBack({
            intervalList: intervalList
          });
        }
        if(count<=0){
          clearInterval(interval);
          console.log('所有倒计时结束了')
        }
      }.bind(this), countDownTime);
      return interval;
    },
    /*
     * 日期格式化
     */
    dateFormat(d, reg) {
      return dateFormat(d, reg)
    },
}
