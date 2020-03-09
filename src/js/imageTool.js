import Vue from 'vue'
// const baseURL = 'https://app.ji-hong.com.cn/attachment/'
const baseURL = 'https://app.ji-hong.com.cn/attachment/'
function ImageTool () {
    this.initImage = function (imageStr) {
        if (!imageStr) {
            return '../../images/error.png'
        }
        let image = imageStr.split(';');
        return image.map(item => {
            return baseURL + item
        })
    }
    this.getIndexImg = function (imageStr, index) {
        if (!imageStr) {
            return '../../images/error.png'
        }
        let images = this.initImage(imageStr)
        // console.log(images)
        return images[index]
    }
    this.getImg = function (image) {
        if (!image) {
            return '../../images/error.png'
        }
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