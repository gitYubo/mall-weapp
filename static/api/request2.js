import MD5Util from '../../static/utils/MD5Encode';
import common from '../common/common';
// 不需要tokeng的接口
const ckeckUrl = ['weapp/gettoken']

class Http {
    constructor() {
        this.baseUrl = "https://fcdev.guodong.com/app/";
        this.queue = []; // 请求队列
        this.requestInProgress = false; // 判断当前是否己有别的请求
        this.retryDelay = 5; // 设置每次重新请求的时间，单位为秒
    }
    request(method, url, data, success, fail) {
        let options = {
            method: method,
            url: this.baseUrl + url,
            data: data
        };
        options['header'] = {
            "Content-Type": "application/json",
            "token": wx.getStorageSync('token'),
            "version": ""
        }
        options['success'] = success instanceof Function ? success : (res) => {
            console.log(res)
        };
        options['fail'] = fail instanceof Function ? fail : (err) => {
            console.log(err);
        }
        if (ckeckUrl.includes(url) == false) {
            if (!options.header.token) {
                this.queue.push({ method, url, data, success, fail })
                return this.getToken()
            }
        }
        wx.request(Object.assign({}, options, {
            success: function(res) {
                let data = res.data
                if (data.code == 0) {
                    success(data)
                } else {
                    fail(data)
                }
            },
            fail: function(err) {
                fail(err)
            }
        }))
    }

    getToken() {
        let ext = {
            js_code: '',
            key: MD5Util.hexMD5('eshare'),
            preview: false,
            weapp_id: wx.$ext.weAppId,
        }
        let _this = this;
        wx.login({
            success(res) {
                if (res.code) {
                    ext.js_code = res.code
                    _this.request('POST', 'weapp/gettoken', ext, function(res) {
                        wx.setStorageSync('token', res.data.token)
                        // while (_this.queue.length){
                        //     _this.request()
                        // }
                    }, function() {})
                }
            }
        })
    }
}


export default new Http();