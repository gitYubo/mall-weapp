
import Request from './request';

// 登录
export const login = (data, callback) => Request.sendPost('weapp/gettoken', data, callback)

// 底部导航 - 商品 - 获取一级、二级分类
export const goodCates = (data, callback) => Request.sendPost('weapp/goodscates/get', data, callback)
