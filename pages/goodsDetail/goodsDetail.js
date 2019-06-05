function get_wxml(className, callback) {
    wx.createSelectorQuery().selectAll(className).boundingClientRect(callback).exec()
} 
Page({

    /**
     * 页面的初始数据
     */
    data: {
        NAV_HEIGHT: wx.STATUS_BAR_HEIGHT + wx.DEFAULT_HEADER_HEIGHT,
        // 轮播图
        swiperCurrent: 0,
        items: [{
            src: 'http://images.uileader.com/20171103/5906a28c-0f12-4b71-8df2-98791d8716f6.jpg',
            title: '放肆玩乐，轻巧办公'
        }, {
            src: 'http://images.uileader.com/20171103/34795a1c-1365-4256-b9c1-6fb4af1de3da.jpg',
            title: '高温保护，一路驰骋'
        }, {
            src: 'http://images.uileader.com/20171103/926a6fdc-80f6-4244-8354-860627c88115.jpg',
            title: '七夕好货，独家礼赠'
        }],

        // 吸顶 + 商品详情-
        width: wx.WIN_WIDTH,
        swiper_height: 0,
        current: 0,
        detail: 0
    },
    // 轮播图
    swiperChange: function swiperChange(e) {
        this.setData({
            swiperCurrent: e.detail.current
        });
    },

    handleChange: function handleChange(e) {
        console.log(e);
        var index = e.detail.index;
        this.setData({
            index: index
        });
    },
    onPageScroll: function onPageScroll(e) {
        console.log(e);
        this.setData({
            scrollTop: e.scrollTop
        });
    },
    handleContentChange1: function handleContentChange1(e) {
        var current = e.detail.current;
        this.setData({
            current: current
        });
    },
    handleChange (e) {
        console.log(e, 'handleChange1');
        var index = e.detail.index;
        this.setData({
            current: index
        });
        // this.computeWxml(`.column-list${index}`)
    },
    onLoad: function (options) {
        let index = this.data.current
        setTimeout(()=>{
            this.setData({
                detail: 200
            })

            this.computeWxml(`.column-list${index}`)
        },1000)
    },
    onReady: function () {

    },
    onShow: function () {

    },
    computeWxml(className){
        let that = this;
        wx.createSelectorQuery().selectAll(className).boundingClientRect((res)=>{
            console.log(res)
            that.setData({
                swiper_height: res[0].height
            })
        }).exec()
    }
})