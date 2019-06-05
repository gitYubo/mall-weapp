
import _StyleHelper from '../../static/libs/StyleHelper';

Component({
    properties: {
        customStyle: {
            type: Object | String
        },

        itemStyle:{
            type: Object | String
        },

        list:{
            type: Object
        }
    },

    options: {
        addGlobalClass: true, 
        multipleSlots: true
    },

    data: {

    },

    ready() {

        this.setData({
            selfCustomStyle: _StyleHelper.getPlainStyle(this.data.customStyle),
            selfItemStyle: _StyleHelper.getPlainStyle(this.data.itemStyle)
        });
    },

    methods: {

    }
})
