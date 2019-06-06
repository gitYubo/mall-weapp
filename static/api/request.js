import BaseComponent from '../prototype/baseComponent';
import common from '../common/common';

// 不需要tokeng的接口
const ckeckUrl = ['weapp/gettoken']

class Request extends BaseComponent {
    constructor() {
        super()
        this.baseUrl = "https://fcdev.guodong.com/app/";
        this.alignment = []
        this.header = {
            "Content-Type": "application/json",
            "token": common.getStorage('token'),
            "version": ""
        }
    }
    // post请求
    sendPost(url, data = {}, callback) {
        // 验证token
        let _this = this
        let userToken = _this.header.token
        if (!ckeckUrl.includes(url)) {
            if (!userToken) {
                this.alignment.push({
                    url,
                    data,
                    callback
                })
                common.jumpToLogin(function(res) {
                    _this.header.token = res.data.token
                    common.setStorage('token', res.data.token)
                    for (var i = 0; i < _this.alignment.length; i++) {
                        (function(i) {
                            _this.sendRequest('POST', _this.alignment[i].url, _this.alignment[i].data, _this.header, function(res) {
                                _this.alignment[i].callback(res)
                                _this.alignment.splice(i, 1, {})
                            })
                        })(i)
                    }
                })
                return
            } else {
                _this.alignment = []
            }
        }
        this.sendRequest('POST', url, data, _this.header, callback)
    }
    // get请求
    sendGet(url, data, callback) {

    }
    // 发送请求
    sendRequest(method, apiUrl, data, config = {}, callback) {
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
            success: function(res) {
                let data = res.data
                _this.statusCode(data, callback)
            },
            fail: function(err) {
                console.log(err);
            }
        })
    }

    // 状态码处理
    statusCode(data, callback) {
        switch (data.code) {
            case -1:
                console.log(data.message)
                break;
            case 0:
                callback(data.data)
                break;
        }
    }
}

export default new Request();