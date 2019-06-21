
import Http from './request1';

/**
 *  首页配置
 */
export const homeConfig = (param) => Http.request('POST', 'appMain/mainPage', param)

