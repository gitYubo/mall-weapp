
import Http from './request';

/**
 * 登录
 */
export const login = (param) => Http.requestP('weapp/gettoken', param, 'POST')

/**
 *  首页配置
 */
export const homeConfig = (param) => Http.requestP('appMain/mainPage', param)
   









// export const goodCates = (data, callback) => Request.sendPost('weapp/goodscates/get', data, callback)


