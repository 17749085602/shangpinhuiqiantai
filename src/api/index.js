// 当前这个模块：API进行统一管理
import requests from './request'
import mockRequests from './mockAjax'
// 三级联动接口
// /api/product/getBaseCategoryList GET 无参数
// 发请求:axios 发请求返回结果Promise对象
export const reqCategoryList = () => requests({ url: '/product/getBaseCategoryList' })

// 获取banner(home首页轮播图接口)
export const reqGetBannerList = () => mockRequests.get({ url: '/banner' })
