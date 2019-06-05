"use strict";

const app = getApp();


// 跳转到登陆
function jumpToLogin(callback) {
    wx.navigateTo({
        url: '/pages/login/login',
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
