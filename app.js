import './static/utils/system';
import * as Api from './static/api/api';
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