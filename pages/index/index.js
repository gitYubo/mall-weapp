Page({
    data: {
        PageCur: 'basics',
        menuList:[]
    },
    NavChange(e) {
        this.setData({
            PageCur: e.currentTarget.dataset.cur
        })
    },
    onShow: function() {

        wx.$api.homeConfig({
            baseId: wx.$ext.weAppId
        }).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        });
        wx.$api.homeConfig({
            baseId: wx.$ext.weAppId
        }).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        });
        wx.$api.homeConfig({
            baseId: wx.$ext.weAppId
        }).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        });
        wx.$api.homeConfig({
            baseId: wx.$ext.weAppId
        }).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        });
        wx.$api.homeConfig({
            baseId: wx.$ext.weAppId
        }).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        });
        wx.$api.homeConfig({
            baseId: wx.$ext.weAppId
        }).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        });
        wx.$api.homeConfig({
            baseId: wx.$ext.weAppId
        }).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        });
        wx.$api.homeConfig({
            baseId: wx.$ext.weAppId
        }).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        });
        // setTimeout(() => {
        //     wx.$api.goodCates({
        //         q: 3
        //     }, (res) => {
        //         console.log(res, 4)
        //     })
        // }, 5000)
    },
})