// components/ui-goodsList/index.js
Component({
    properties: {
        customStyle: {
            type: Object | String
        },
        type:{
            type: Number | String | Boolean,
            value: true
        },
        column:{
            type: Number | String,
            value: 2
        },
        goodsList:{
            type: Array,
            value: [{},{},{}]
        }
    },

    options: {
        addGlobalClass: true,
    },

    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {

    }
})
