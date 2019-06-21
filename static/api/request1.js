import MD5Util from '../../static/utils/MD5Encode';

class Http {
    constructor() {
        this.baseUrl = "https://fcdev.guodong.com/app/";
        this.queue = []; // 请求队列
        this.isLoginning = false // 登陆锁
    }

    // 请求入口
    request(method, url, data) {
        let token = wx.getStorageSync('token')
        return new Promise((resolve, reject) => {
            if (!token) {
                this.queue.push({ method, url, data, resolve, reject })
                if (!this.isLoginning) {
                    this.isLoginning = true
                    this.getToken().then((res) => {
                        this.isLoginning = false;
                        wx.setStorageSync('token', res.data.token)
                        while (this.queue.length) {
                            let aj = this.queue.shift()
                            this.requestP(aj.method, aj.url, aj.data).then((res1) => {
                                aj.resolve(res1);
                            })
                        }
                    }).catch((err) => {
                        this.isLoginning = false;
                        wx.showToast({
                            title: err.message,
                            icon: 'none'
                        })
                    })
                }
            } else {
                resolve(this.requestP(method, url, data));
            }
        })
    }

    // 发起请求
    requestP(method, url, data) {
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
        return new Promise((resolve, reject) => {
            wx.request(Object.assign({}, options, {
                success: function(res) {
                    let data = res.data
                    if (data.code == 0) {
                        resolve(data)
                    } else {
                        reject(data)
                    }
                },
                fail: function(err) {
                    reject(err)
                }
            }))
        })
    }

    // 登陆获取token
    getToken() {
        let ext = {
            js_code: '',
            key: MD5Util.hexMD5('eshare'),
            preview: false,
            weapp_id: wx.$ext.weAppId,
        }
        let _this = this
        return new Promise((resolve, reject) => {
            wx.login({
                success(res) {
                    if (res.code) {
                        ext.js_code = res.code
                        resolve(_this.requestP('POST', 'weapp/gettoken', ext))
                    }
                }
            })
        })
    }
}

export default new Http();