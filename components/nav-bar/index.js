import _StyleHelper from '../../static/libs/StyleHelper';
Component({
    behaviors: [],
    properties: {
        customStyle: {
            type: Object | String
        },
        title: {
            type: String
        }
    },
    options: {
        addGlobalClass: true, // 使用外部css
        multipleSlots: true
    },
    data: function() {
        statusBarHeight: ""
    },
    ready: function ready() {
        var height = wx.STATUS_BAR_HEIGHT + wx.DEFAULT_HEADER_HEIGHT;
        var style = this.data.customStyle || {};
        style.height = height;
        style.paddingTop = wx.STATUS_BAR_HEIGHT;
        this.setData({
            statusBarHeight: wx.STATUS_BAR_HEIGHT,
            selfCustomStyle: _StyleHelper.getPlainStyle(style),
            NAV_HEIGHT: wx.STATUS_BAR_HEIGHT + wx.DEFAULT_HEADER_HEIGHT + 'px'
        });
    }
});