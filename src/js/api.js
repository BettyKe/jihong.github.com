import http from './http'

// export const  = (data, loadingOptions) => http.post('/', data, loadingOptions)
//上传图片
export const upload = (data, loadingOptions) => http.post('/attachment/upload', data, loadingOptions)

//登录注册

//登录
export const login = (data, loadingOptions) => http.post('/distributor/login', data, loadingOptions)
//注册
export const registered = (data, loadingOptions) => http.post('/distributor/registered', data, loadingOptions)
//物流公司
export const findEnableDTransporter = (data, loadingOptions) => http.post('/transporter/findEnableDTransporter', data, loadingOptions)
//重置密码

//更换名称
export const ModifyAvatar = (data, loadingOptions) => http.post('/distributor/ModifyAvatar', data, loadingOptions)
//退出登录
export const logout = (data, loadingOptions) => http.post('/distributor/logout', data, loadingOptions)
//发送用户注册验证码
export const sendRegisterationCaptcha  = (data, loadingOptions) => http.post('/distributor/sendRegisterationCaptcha', data, loadingOptions)
//发送确认身份验证码（忘记密码）
export const sendConfirmCaptcha = (data, loadingOptions) => http.post('/distributor/sendConfirmCaptcha', data, loadingOptions)
//发送修改密码验证码（修改密码）
export const sendUpdatePasswordCaptcha = (data, loadingOptions) => http.post('/distributor/sendUpdatePasswordCaptcha', data, loadingOptions)
//发送重要信息变更验证码
export const sendUpdateCaptcha = (data, loadingOptions) => http.post('/distributor/sendUpdateCaptcha', data, loadingOptions)
//验证验证码
export const checkCaptcha = (data, loadingOptions) => http.post('/distributor/checkCaptcha', data, loadingOptions)
//经销商联系客服
export const contactCustomerService = (data, loadingOptions) => http.post('/distributor/contactCustomerService', data, loadingOptions)
//农行支付/银联支付
export const abcPay = (data, loadingOptions) => http.post('/order/abcPay', data, loadingOptions)
//微信支付
export const weChatPay = (data, loadingOptions) => http.post('/order/weChatPay', data, loadingOptions)

//用户协议 隐私协议
export const findByLabel = (data, loadingOptions) => http.post('/page/findByLabel', data, loadingOptions)
export const getPage = (data, loadingOptions) => http.post('/page/get', data, loadingOptions)


//商品店铺

//分类-其它分类-展示所有分类名称
export const findAllCategory = (data, loadingOptions) => http.post('/product/findAllCategory', data, loadingOptions)
//分类-其它分类-根据分类id展示商品基本信息
export const findProductByCategoryId = (data, loadingOptions) => http.post('/product/findProductByCategoryId', data, loadingOptions)
//分类-其它分类-搜索框-搜索分类
export const findByByProductNameOrProviderName = (data, loadingOptions) => http.post('/product/findByByProductNameOrProviderName', data, loadingOptions)
//分类-其它分类-根据商品id查看商品的详细信息
export const findDetailByIdApp = (data, loadingOptions) => http.post('/product/findDetailByIdApp', data, loadingOptions)
//分类-其它分类-店铺首页-店铺信息
export const providerGet = (data, loadingOptions) => http.post('/provider/get', data, loadingOptions)
//分类-其它分类-店铺首页-商品列表
export const findProductByProviderId = (data, loadingOptions) => http.post('/product/findProductByProviderId', data, loadingOptions)
//分类-其它分类-店铺首页-分类
export const findAllCategoryByProviderId = (data, loadingOptions) => http.post('/product/findAllCategoryByProviderId', data, loadingOptions)
//查询商品的增值服务
export const findAllValueAddProductForAPP = (data, loadingOptions) => http.post('/product/findAllValueAddProductForAPP', data, loadingOptions)

//选择规格等级
export const selectGrade  = (data, loadingOptions) => http.post('/product/selectGrade', data, loadingOptions)
//选择供应商
export const selectProvider = (data, loadingOptions) => http.post('/product/selectProvider', data, loadingOptions)

//个人中心

//我的订单
export const findMyOrderForDistributor = (data, loadingOptions) => http.post('/order/findMyOrderForDistributor', data, loadingOptions)
//更换名称
export const ModifyName = (data, loadingOptions) => http.post('/distributor/ModifyName', data, loadingOptions)
//修改绑定手机
export const ModifyPhone = (data, loadingOptions) => http.post('/distributor/ModifyPhone', data, loadingOptions)
//收货地址-列表
export const findByDistributorId = (data, loadingOptions) => http.post('/address/findByDistributorId', data, loadingOptions)
//收货地址-获取信息
export const addressGet = (data, loadingOptions) => http.post('/address/get', data, loadingOptions)
//收货地址-新建
export const addressSave = (data, loadingOptions) => http.post('/address/save', data, loadingOptions)
//收货地址-编辑
export const addressUpdate = (data, loadingOptions) => http.post('/address/update', data, loadingOptions)
//收货地址-删除
export const addressDelete = (data, loadingOptions) => http.post('/address/delete', data, loadingOptions)
//收货地址-设为默认
export const updateDefault = (data, loadingOptions) => http.post('/address/updateDefault', data, loadingOptions)

//收藏夹-收藏商品
export const addToCollect = (data, loadingOptions) => http.post('/distributorCollection/addToCollect', data, loadingOptions)
//收藏夹-收藏店铺
export const addProviderToCollect = (data, loadingOptions) => http.post('/distributorCollection/addProviderToCollect', data, loadingOptions)
//收藏夹-收藏商品列表
export const showConnectionProduct = (data, loadingOptions) => http.post('/distributorCollection/showConnectionProduct', data, loadingOptions)
//收藏夹-批量取消收藏店铺
export const deleteBatch = (data, loadingOptions) => http.post('/distributorCollection/deleteBatch', data, loadingOptions)
//收藏夹-收藏店铺列表
export const showConnectionProvider = (data, loadingOptions) => http.post('/distributorCollection/showConnectionProvider', data, loadingOptions)
//收藏夹-批量取消收藏商品
export const deleteBatchProduct = (data, loadingOptions) => http.post('/distributorCollection/deleteBatchProduct', data, loadingOptions)

//修改密码
export const updatePassword = (data, loadingOptions) => http.post('/distributor/updatePassword', data, loadingOptions)
//个人资料
export const personaInformation = (data, loadingOptions) => http.form('/distributor/personaInformation', data, loadingOptions)
//订单汇总
export const findItemForDistributor = (data, loadingOptions) => http.post('/item/findItemForDistributor', data, loadingOptions)
//订单汇总-筛选
export const findItemForDistributorChoose = (data, loadingOptions) => http.post('/item/findItemForDistributorChoose', data, loadingOptions)
//订单汇总-确认收货
export const confirmReceive = (data, loadingOptions) => http.post('/item/confirmReceive', data, loadingOptions)
//我的账户
export const MyAccount = (data, loadingOptions) => http.post('/distributor/MyAccount', data, loadingOptions)
//我的账户-流水
export const AccountFlow = (data, loadingOptions) => http.post('/distributor/AccountFlow', data, loadingOptions)
//我的账户-提现
export const withdraw = (data, loadingOptions) => http.post('/distributor/withdraw', data, loadingOptions)
//订单详情-未审核、已审核、已拒
export const findMyOrderDetailForDistributor = (data, loadingOptions) => http.post('/order/findMyOrderDetailForDistributor', data, loadingOptions)
//我的-我的订单-未审核-右上角未审核订单数
export const uncheckOrderNum = (data, loadingOptions) => http.post('/order/uncheckOrderNum', data, loadingOptions)
//我的-我的订单-未审核-右上角已审核订单数
export const checkedOrderNum = (data, loadingOptions) => http.post('/order/checkedOrderNum', data, loadingOptions)
//
export const autoFinish = (data, loadingOptions) => http.post('/item/autoFinish', data, loadingOptions)
//我的账单-显示最上方的金额（元）
export const findDebts = (data, loadingOptions) => http.post('/distributor/findDebts', data, loadingOptions)
//我的账单 -展示数据或搜索
export const findDistributorStatement = (data, loadingOptions) => http.post('/statement/findDistributorStatement', data, loadingOptions)
//查看详情-展示数据或搜索
export const findDebtItemForApp = (data, loadingOptions) => http.post('/item/findDebtItemForApp', data, loadingOptions)

//补充发货单详情  退货单详情
export const orderFindDetailWithDistributor = (data, loadingOptions) => http.post('/order/findDetailWithDistributor', data, loadingOptions)
//还款  查看详情 - 还款按钮
export const chargeForApp = (data, loadingOptions) => http.post('/distributor/chargeForApp', data, loadingOptions)
//还款 -支付
export const charge4App = (data, loadingOptions) => http.post('/distributor/charge4App', data, loadingOptions)
//获取经销商余额
export const getBalance = (data, loadingOptions) => http.post('/distributor/getBalance', data, loadingOptions)


//提现明细
export const withdrawDetail4APP = (data, loadingOptions) => http.post('/withdrawalSlip/withdrawDetail4APP', data, loadingOptions)
//提现详情
export const withdrawDetailOfOne = (data, loadingOptions) => http.post('/withdrawalSlip/withdrawDetailOfOne', data, loadingOptions)


//选择物流
// export const findEnableDTransporter = (data, loadingOptions) => http.post('/transporter/findEnableDTransporter', data, loadingOptions)
//新增物流
export const transporterSave = (data, loadingOptions) => http.post('/transporter/save', data, loadingOptions)
//选择地址
// export const findByDistributorId = (data, loadingOptions) => http.post('/address/findByDistributorId', data, loadingOptions)
//新增地址
// export const withdrawDetailOfOne = (data, loadingOptions) => http.post('/address/save', data, loadingOptions)
//编辑地址
// export const withdrawDetailOfOne = (data, loadingOptions) => http.post('/address/update', data, loadingOptions)
//提交订单
export const saveOrderForDistributor = (data, loadingOptions) => http.post('/order/saveOrderForDistributor', data, loadingOptions)
//加入购物车
export const addProduct = (data, loadingOptions) => http.post('/virtualItem/addProduct', data, loadingOptions)
//展示购物车
export const showCart = (data, loadingOptions) => http.post('/virtualItem/showCart', data, loadingOptions)
//将购物车中的商品删除
export const virtualItemDeleteBatch = (data, loadingOptions) => http.post('/virtualItem/deleteBatch', data, loadingOptions)
//获取地址
export const getDefault = (data, loadingOptions) => http.post('/address/getDefault', data, loadingOptions)
//支付 查询余额
export const getDistributorBalance = (data, loadingOptions) => http.post('/order/getDistributorBalance', data, loadingOptions)
//余额支付
export const balancePayOrderForDistributor = (data, loadingOptions) => http.post('/order/balancePayOrderForDistributor', data, loadingOptions)