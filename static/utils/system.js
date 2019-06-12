"use strict";

import BaseComponent from '../prototype/baseComponent';

class System extends BaseComponent {
    constructor (){
        super()
        this.attachInfo()
        this.commonInfo()
    }

    // 系统基本信息
    attachInfo (){
        var res = wx.getSystemInfoSync();
        wx.WIN_WIDTH = res.screenWidth;
        wx.WIN_HEIGHT = res.screenHeight;
        wx.IS_IOS = /ios/i.test(res.system);
        // wx.IS_IOSX_STYLE = res.model.match('iPhone X') ? '34px' : '0px';
        wx.IS_ANDROID = /android/i.test(res.system);
        wx.STATUS_BAR_HEIGHT = res.statusBarHeight;
        wx.DEFAULT_HEADER_HEIGHT = 46; // res.screenHeight - res.windowHeight - res.statusBarHeight
        wx.DEFAULT_CONTENT_HEIGHT = res.screenHeight - res.statusBarHeight - wx.DEFAULT_HEADER_HEIGHT;
        wx.IS_APP = true;

        wx.showAlert = function (options) {
            options.showCancel = false;
            wx.showModal(options);
        };

        wx.showConfirm = function (options) {
            wx.showModal(options);
        };

        wx.queryView = this.queryView
    }

    //获取节点信息
    queryView(context, name, success){
        const query = wx.createSelectorQuery().in(context)
        query.select(name).boundingClientRect(function (res) {
            success(res);
        }).exec()
    }

    // 配置信息
    commonInfo(){
        wx['$ext'] = wx.getExtConfigSync();
    }
}

export default new System()

