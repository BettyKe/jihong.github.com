import http from './http'
export const sendRegisterationCaptcha = (data, loadingOptions) => http.post('/distributor/sendRegisterationCaptcha', data, loadingOptions)
//分类-其它分类-展示所有分类名称
export const findAllCategory = (data, loadingOptions) => http.post('/product/findAllCategory', data, loadingOptions)
//分类-其它分类-根据分类id展示商品基本信息
export const findProductByCategoryId = (data, loadingOptions) => http.post('/product/findProductByCategoryId', data, loadingOptions)
//分类-其它分类-搜索框-搜索分类
export const findByByProductNameOrProviderName = (data, loadingOptions) => http.post('/product/findByByProductNameOrProviderName', data, loadingOptions)