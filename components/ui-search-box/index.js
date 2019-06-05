import _StyleHelper from '../../static/libs/StyleHelper';
Component({
    behaviors: [],
    properties: {
        customStyle: {
            type: Object | String
        },
        inputStyle:{
            type: Object | String
        },
        disabled:{
            type:Boolean,
            value: false
        },
        placeholder: {
            type: String,
            value: '搜索'
        }
    },
    options: {

    },
    data: function () {
       
    },
    ready: function ready() {
        this.setData({
            selfCustomStyle: _StyleHelper.getPlainStyle(this.data.customStyle),
            selfInputCustomStyle: _StyleHelper.getPlainStyle(this.data.inputStyle),
        });
    },
    methods: {
        handlefocus(e){
            console.log(e)
        }
    },
});