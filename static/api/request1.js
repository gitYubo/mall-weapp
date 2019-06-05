

import BaseComponent from '../prototype/baseComponent';
import common from '../common/common';

// 不需要tokeng的接口
const ckeckUrl =  ['weapp/gettoken']

class Request extends BaseComponent {
    constructor (){
        super()
        this.baseUrl = "https://fcdev.guodong.com/app/";
        this.alignment = []
        this.header  = {
            "Content-Type": "application/json",  
            "token":"" ,
            "version":""
        }
    }
    // post请求
    sendPost(url, data = {}, callback){
        // 验证token
        let userToken = common.getStorage('token')
        if (ckeckUrl.includes(url) == false){
            if (!userToken) {
                common.jumpToLogin()
                return false
            }
        }

        let config = {
            token: userToken,
            version: ''
        }
        if (typeof callback != 'function'){
            callback =  ()=>{}
        }
        this.sendRequest('POST', url , data, config , callback)
    }
    // get请求
    sendGet(url, data, callback){

    }
    // 发送请求
    sendRequest(method, apiUrl, data, config = {}, callback ){
        let _this = this;
        wx.request({
            url: this.baseUrl + apiUrl,
            data: data,
            method: method,
            header: {
                "Content-Type": "application/json",
                "token": config.token,
                "version": config.version
            },
            success: function (res) {
                let data = res.data
                _this.statusCode(data, callback)
            },
            fail: function (err) {
                console.log(err);
            }
        })
    }
    
    // 状态码处理
    statusCode(data, callback){
        switch (data.code) {
            case -1:
                common.jumpToLogin()
                console.log(data.message)
                return false
            break;
            case 0:
                callback(data)
            break;
        }
    }
}


export default new Request();