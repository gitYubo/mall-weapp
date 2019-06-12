"use strict";

import MD5Util from '../../static/utils/MD5Encode';

const app = getApp();

// 跳转到登陆
function jumpToLogin(callback) {
    let ext = {
        js_code: '',
        key: MD5Util.hexMD5('eshare'),
        preview: false,
        weapp_id: wx.$ext.weAppId,
    }
    wx.showAlert({
        content: '您尚未登陆请点击登陆',
        confirmText: "登陆",//默认是“确定”
        confirmColor: '#000000',//确定文字的颜色
        success: function (re) {
            wx.login({
                success(res) {
                    if (res.code) {
                        ext.js_code = res.code
                        wx.$api.login(ext, callback)
                    }
                }
            })
        }
    })
}

// 获取localStorage
function getStorage(name){
    if (!name) return
    return wx.getStorageSync(name)
}

// 设置localStorage
function setStorage(name, content) {
    if (!name) return
    if (typeof content !== 'string') {
        content = JSON.stringify(content)
    }
    wx.setStorageSync(name, content)
}


export default {
    getStorage: getStorage,
    setStorage: setStorage,
    jumpToLogin: jumpToLogin
}
