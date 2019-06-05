import _StyleHelper from '../../static/libs/StyleHelper';
Component({
    behaviors: [],
    properties: {
        top: {
            type: String | Number
        },
        right: {
            type: String | Number
        },
        bottom: {
            type: String | Number
        },
        left: {
            type: String | Number
        }
    },
    data: {},
    ready: function ready() {
        this.setData({
            selfStyle: _StyleHelper.getPlainStyle({
                top: this.data.top,
                right: this.data.right,
                bottom: this.data.bottom,
                left: this.data.left
            })
        });
    },

    methods: {}
});