import _StyleHelper from '../../static/libs/StyleHelper';
let query = wx.createSelectorQuery();
Component({
    properties: {
        customStyle: {
            type: Object | String
        },
        topStyle: {
            type: Object | String
        },
        bottomStyle: {
            type: Object | String
        },
        itemColumn: {
            type: String,
            value: 'row' // row column
        },
        scrollY: {
            type: Boolean,
            value: false
        },
        scrollX: {
            type: Boolean,
            value: false
        },
        columnNum: {
            type: Number,
            value: 2
        },
        goodsList: {
            type: Array,
            value: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1212]
        }
    },
    data() {
        emptyViewStyle: ''
    },
    ready: function ready() {
        var style = this.data.customStyle || {};
        var contentStyle = {}
        var topStyle = this.data.topStyle || {};
        var bottomStyle = this.data.bottomStyle || {};
        let _this = this;
        wx.queryView(this, '.ui-goods-list', function(res) {
            let width = res.width;
            let emptywidth = _this.data.columnNum - (_this.data.goodsList.length % _this.data.columnNum);
            contentStyle['flex'] = `0 0 ${(width / _this.data.columnNum) - (_this.data.columnNum >= 2 ? 5 : 0)}px`
            _this.data.emptyViewStyle = `flex: 0 0 ${((width / _this.data.columnNum) * emptywidth) - (_this.data.columnNum >= 2 ? 5 : 0)}px`
            _this.setData({
                emptyViewStyle: _this.data.emptyViewStyle,
                selfContentStyle: _StyleHelper.getPlainStyle(contentStyle)
            });
        });

        this.setData({
            selfContentStyle: _StyleHelper.getPlainStyle({}),
            selfTopStyle: _StyleHelper.getPlainStyle(topStyle),
            selfBottomStyle: _StyleHelper.getPlainStyle(bottomStyle),
        });
    },


    data: {
  
    },

    /**
     * 组件的方法列表
     */
    methods: {

    }
})