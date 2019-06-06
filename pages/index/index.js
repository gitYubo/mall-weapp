Page({
    data: {
        PageCur: 'basics'
    },
    NavChange(e) {
        this.setData({
            PageCur: e.currentTarget.dataset.cur
        })
    },
    onShow: function() {
        wx.$api.goodCates({
            q: 1
        }, (res) => {
            console.log(res, 1)
        })

        wx.$api.goodCates({
            q: 1
        }, (res) => {
            console.log(res, 1)
        })
        
        wx.$api.goodCates({
            q: 1
        }, (res) => {
            console.log(res, 1)
        })

 
        setTimeout(() => {
            wx.$api.goodCates({
                q: 3
            }, (res) => {
                console.log(res, 4)
            })
        }, 5000)
    },
})