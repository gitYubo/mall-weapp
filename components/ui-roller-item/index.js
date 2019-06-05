import _StyleHelper from '../../static/libs/StyleHelper';
import _WxHelper from '../../static/libs/WxHelper';

var ParentPath = '../ui-roller/index';
Component({
    relations: _WxHelper.getParentRelation(ParentPath),
    behaviors: [],
    properties: {
        position: {
            type: [String, Number],
            observer: function observer(val) {
                // console.log('观察到变化')
                this.setData({
                    itemStyle: _StyleHelper.getPlainStyle(this.itemStyleObj()),
                    positionStyle: _StyleHelper.getPlainStyle(this.positionStyleObj())
                });
            }
        },
        height: {
            type: [Number, String],
            value: 0
        },
        animate: {
            type: Boolean

        }
    },
    data: {
        index: 0
    },
    created: function created() {},

    methods: {
        itemStyleObj: function itemStyleObj() {
            var style = {};
            style.height = this.data.height + 'px';
            return style;
        },
        positionStyleObj: function positionStyleObj() {
            var style = {};
            style['z-index'] = this.data.position === 0 ? 5 : 0;
            if (this.data.direction === 'up') {
                style.transform = 'translate3d(0, ' + this.data.position * this.data.height + 'px, 0)';
            } else {
                style.transform = 'translate3d(0, ' + -this.data.position * this.data.height + 'px, 0)';
            }
            if (this.data.animate) {
                style.transition = 'transform ' + this.data.speed / 1000 + 's';
            } else {
                style.transition = null;
            }
            return style;
        }
    }
});