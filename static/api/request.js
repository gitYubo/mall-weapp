import BaseComponent from '../prototype/baseComponent';
import MD5Util from '../../static/utils/MD5Encode';

class Request extends BaseComponent {
    constructor() {
        super()
        this.apiUrl = wx.$ext.apiUrl + '/app/';
        this.token =  wx.getStorageSync('token');
        this.loginQueue = []
        this.isLoginning = false;
        this.header = {
            "Content-Type": "application/json",
            "token": this.token,
            "version": ""
        }
    }

    requestP(url, param, method) {
        if (this.ckeckUrl(url)){
            if (!this.token) {
                return this.getToken()
            }
        }
        return this.request(url, param, method)
    }

    getToken(){
        const _this = this
        return new Promise((resolve, reject) => {
            _this.loginQueue.push({ resolve, reject});
            if (!_this.isLoginning) {
                _this.isLoginning = true;
                _this.login().then(res =>{
                    _this.isLoginning = false;
                    while (_this.loginQueue.length) {
                        _this.loginQueue.shift().resolve(res);
                    }
                }).catch((err) => {
                    _this.isLoginning = false;
                    while (_this.loginQueue.length) {
                        _this.loginQueue.shift().reject(err);
                    }
                });
            }
        })
    }

    login(){
        return new Promise((resolve, reject) => {
            let ext = {
                js_code: '',
                key: MD5Util.hexMD5('eshare'),
                preview: false,
                weapp_id: wx.$ext.weAppId,
            }
            wx.login({
                success(res) {
                    if (res.code) {
                        ext.js_code = res.code
                        wx.$api.login(ext).then(res =>{
                            wx.setStorageSync('token', res.data.token)
                            resolve()
                        }).catch(reject)
                    } else {
                        reject(res);
                    }
                },
                fail: reject,
            });
        });
    }

    /**
     * 获取sessionId
     * 参数：undefined
     * 返回值：[promise]sessionId
     */
    request(url, param, method = 'POST') {
        const _this = this;
        const options = {
            url: this.apiUrl + url,
            data: param,
            method: method,
            header: this.header
        }
        return new Promise((resolve, reject) => {
            wx.request(Object.assign({}, options, {
                success(res) {
                    const isSuccess = _this.isHttpSuccess(res.statusCode);
                    if (isSuccess) { // 验证网络错误
                        if (res.data.code == 0) {
                            resolve(res.data);
                        } else {
                            reject(res.data)
                        }
                    } else {
                        _this.handlerCode(res.statusCode)
                    }
                },
                fail(err) {
                    reject(err)
                }
            }));
        })
    }

    /**
     * 判断请求状态是否成功
     * 参数：http状态码
     * 返回值：[Boolen]
     */
    isHttpSuccess(status) {
        return status >= 200 && status < 300 || status === 304;
    }

    /**
     * 状态码处理
     */
    handlerCode(err, msg) {
        switch (err.code) {
            case -1:
                wx.showToast({ title: err.message, icon: 'none' });
                break;
            case 0:
                break;
            default:
                wx.showToast({ title: '未知错误', icon: 'none' });
        }
    }
}

export default new Request();