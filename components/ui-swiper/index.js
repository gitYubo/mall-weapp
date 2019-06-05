import _StyleHelper from '../../static/libs/StyleHelper';

Component({
    options: {
        addGlobalClass: true,
        multipleSlots: true // 在组件定义时的选项中启用多slot支持
    },
    externalClasses: ['my-class'],
    // round-dot 
    properties: {
        customStyle: {
            type: Object | String
        },
        swiperType: {
            type: String,
            value: "" // card card-ease-in
        },
        isDot:{
            type: Boolean,
            value: true
        },
        dot: {
            type: String, // round  square
            value:' square'
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        swiperCurrent: 0,
        swiperList: [{
            id: 0,
            type: 'video',
            url: 'http://1253995176.vod2.myqcloud.com/7fe7f75avodtranscq1253995176/d3fa01bd5285890787324808497/v.f30.mp4'
        }, {
            id: 1,
            type: 'image',
            url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84001.jpg',
        }, {
            id: 2,
            type: 'image',
            url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
        }, {
            id: 3,
            type: 'image',
            url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
        }, {
            id: 4,
            type: 'image',
            url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
        }, {
            id: 5,
            type: 'image',
            url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
        }, {
            id: 6,
            type: 'image',
            url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
        }],
    },

    ready() {
        this.setData({
            selfCustomStyle: _StyleHelper.getPlainStyle(this.data.customStyle),
        });
    },

    methods: {
        swiperChange(e){
            this.setData({
                swiperCurrent: e.detail.current
            });
        }
    }
})
