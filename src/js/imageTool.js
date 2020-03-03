import Vue from 'vue'
// const baseURL = 'https://app.ji-hong.com.cn/attachment/'
const baseURL = 'https://apptest.ji-hong.com.cn/attachment/'
function ImageTool () {
    this.initImage = function (imageStr) {
        if (!imageStr) {
            return
        }
        let image = imageStr.split(';');
        return image.map(item => {
            return baseURL + item
        })
    }
    this.getIndexImg = function (imageStr, index) {
        if (!imageStr) {
            return
        }
        let images = this.initImage(imageStr)
        console.log(images)
        return images[index]
    }
    this.getImg = function (image) {
        return baseURL + image
    }
    return this
}
/** 开放api */
export default {
    install(Vue) {
      /** 全局构造函数 */
      Vue.prototype.ImageTool = new ImageTool()
    }
  }