
import MD5Util from '../../static/utils/MD5Encode'
import common from '../../static/common/common';

Page({
    data: {

    },
    onLoad: function (options) {
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
                    wx.$api.login(ext, (res) => {
                        common.setStorage('token', res.data.token)
                        wx.navigateBack()
                    })
                }
            }
        })
    }
})