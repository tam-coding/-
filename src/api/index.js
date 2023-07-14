import requests from "./ajax";
import mockRequest from "./mockAjax";

//三级联动接口
export const reqCategoryList=()=>requests({url:'/product/getBaseCategoryList',method:'GET'})

//banner
export const reqGetBannerList=()=>mockRequest.get('/banner')

//floor
export const reqGetFloorList=()=>mockRequest.get('/floor')

//search模块
export const reqGetSearchInfo=(params)=>requests({url:"/list",data:params,method:"post"})

//商品详细信息
export const reqGoodsInfo=(skuId)=>requests({url:`/item/${skuId}`,method:"get"})

//添加到购物车(对已有物品进行数量改动)
export const reqAddOrUpdateShopCart=(skuId,skuNum)=>requests({url:`/cart/addToCart/${ skuId }/${ skuNum }`,method:"post"})

//购物车列表
export const reqCarList=()=>requests({url:'/cart/cartList',method:'get'})

//删除购物车
export const reqDeleteCartById=(skuId)=>requests({url:`/cart/deleteCart/${skuId}`,method:'delete'})

//修改购物车选中状态
export const reqUpdateCheckedById=(skuId,isChecked)=>requests({url:`/cart/checkCart/${skuId}/${isChecked}`,method:'get'})

//获取验证码
export const reqGetCode=(phone)=>requests({url:`/user/passport/sendCode/${phone}`,method:'get'})

//注册
export const reqUserRegister=(data)=>requests({url:"/user/passport/register",data,method:"post"})

//登录
export const reqUserLogin=(data)=>requests({url:"/user/passport/login",data,method:"POST"})

//获取用户信息 通过token
export const reqUserInfo=()=>requests({url:"/user/passport/auth/getUserInfo",method:"get"})

//退出登录
export const reqLogout=()=>requests({url:"/user/passport/logout",method:"get"})

//获取用户地址信息
// export const reqAddressInfo=()=>requests({url:"/user/userAddress/auth/findUserAddressList",method:"get"})
export const reqAddressInfo=()=>mockRequest.get('/address')

//获取商品清单
export const reqOrderInfo=()=>requests({url:"/order/auth/trade",method:"get"})

//提交订单
export const reqSubmitOrder=(tradeNo,data)=>requests({url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,data,method:"post"})

//获取支付信息
export const reqPayInfo=(orderId)=>requests({url:`/payment/weixin/createNative/${orderId}`,method:"get"})

//获取订单状态
export const reqPayStatus=(orderId)=>requests({url:`/payment/weixin/queryPayStatus/${orderId}`,method:"get"})

//获取我的订单列表
export const reqMyOrderList=(page,limit)=>requests({url:`/order/auth/${page}/${limit}`,method:"get"})