import _StyleHelper from '../../static/libs/StyleHelper';
Component({
    behaviors: [],
    properties: {
        scrollTop: {
            type: Number,
            observer: function observer(val) {
                this.setFixed();
            }
        },
        customStyle: {
            type: Object | String
        },
        top: {
            type: Number | String,
            value: 0
        }
    },
    options: {
        multipleSlots: true
    },
    data: {
        fixed: false,
        fakerStyle: '',
        selfTop: 0
    },
    ready: function ready() {
        // let viewport = wx.createSelectorQuery().selectViewport()
        // console.log(viewport._selectorQuery._defaultComponent)
        this.setData({
            selfCustomStyle: _StyleHelper.getPlainStyle(this.data.customStyle),
            fakerStyle: _StyleHelper.getMergedPlainStyles([this.data.customStyle, {
                top: this.data.top
            }]),
            selfTop: Number(this.data.top)
        });
    },

    methods: {
        setFixed: function setFixed() {
            var _this = this;
            var query = wx.createSelectorQuery().in(this);
            query.select('.ui-sticky').boundingClientRect(function(res) {
                _this.setData({
                    fixed: res.top - _this.data.selfTop < 0
                });
            }).exec();
        }
    }
});