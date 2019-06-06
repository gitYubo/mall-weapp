import './static/utils/system';
import common from './static/common/common';
import * as Api from './static/api/api';
wx['$ext'] = wx.getExtConfigSync();
wx['$api'] = Api;

App({
    globalData: {
        key:'eshare'
    },
    onLaunch: function onLaunch() { 

    },
    onShow: function onShow() {},
    onHide: function onHide() {},
    onError: function (e){
        console.log('onError',e)
    },
});