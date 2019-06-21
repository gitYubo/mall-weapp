Page({
    data: {
        PageCur: 'basics',
        menuList: []
    },
    NavChange(e) {
        this.setData({
            PageCur: e.currentTarget.dataset.cur
        })
    },
    onShow:  function() {
        wx.$api.homeConfig({
            baseId: wx.$ext.weAppId
        }).then((res) =>{
            console.log(res, 999)
        })
        
    },
})