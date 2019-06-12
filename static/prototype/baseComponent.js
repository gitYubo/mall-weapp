"use strict";

export default class BaseComponent {
    constructor() {
        this.ckeckUrlList = ['weapp/gettoken'];
    }
    // 检测不需要验证token的url
    ckeckUrl(type) {
        if (this.ckeckUrlList.includes(type)){
            console.log('不需要验证token');
            return false
        }
        return true
    }
}