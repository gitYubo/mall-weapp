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
        wx.$api.goodCates({q:1},(res)=>{
            console.log(res)
        })
        wx.$api.goodCates({q:2}, (res) => {
            console.log(res)
        })
        wx.$api.goodCates({ q: 3 }, (res) => {
            console.log(res)
        })
        wx.$api.login({ q: 4}, (res) => {
            console.log(res)
        })
    },
    onShow: function onShow() {},
    onHide: function onHide() {},
    onError: function (e){
        console.log('onError',e)
    },
});