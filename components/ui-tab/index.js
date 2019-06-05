'use strict';

import _WxHelper from '../../static/libs/WxHelper';
import _MultiHelper from '../../static/libs/MultiHelper';

var ParentPath = '../ui-tabs/index';

exports.default = Component({
    relations: _WxHelper.getParentRelation(ParentPath),
    data: {
        selfStyle: '',
        index: -1,
        active: false,
        width: 0,
        height: 0,
        isParentInkBar: false
    },
    ready: function ready() {
        this._init();
    },

    methods: {
        _init: function _init() {
            var _this = this;

            var parent = this.getRelationNodes(ParentPath)[0];

            _WxHelper.getComponentRect(this, '.ui-tab').then(function(rect) {
                parent._increaseWalkDistance(rect);

                _this.setData({
                    isParentInkBar: parent.data.inkBar,
                    width: rect.width,
                    height: rect.height,
                    index: _MultiHelper.getChildIndex(parent, _this)
                });
            });
        },
        handleTap: function handleTap() {
            var parent = this.getRelationNodes(ParentPath)[0];
            parent.handleIndexChange(this.data.index, false);
        }
    }
});